import type { JlptLevel, Vocabulary, VocabularyListResponse } from "@/types/vocabulary";

const JISHO_URL = "https://jisho.org/api/v1/search/words";
const PAGE_SIZE = 20; // Jisho's fixed page size

const JLPT_LEVELS: readonly string[] = ["N5", "N4", "N3", "N2", "N1"];

// Jisho response fields we actually read; everything else is ignored.
interface JishoWord {
  slug: string;
  is_common?: boolean;
  jlpt: string[]; // e.g. ["jlpt-n5"]
  japanese: { word?: string; reading?: string }[];
  senses: { english_definitions: string[]; parts_of_speech: string[] }[];
}

function toVocabulary(item: JishoWord): Vocabulary | null {
  const japanese = item.japanese[0];
  const sense = item.senses[0];
  const word = japanese?.word ?? japanese?.reading;
  if (!word || !sense) return null;

  // A word can carry several JLPT tags (e.g. n3 and n5); report the easiest
  // level (highest N number), which is where the word is first introduced.
  const jlptTag = item.jlpt
    .map((tag) => tag.replace("jlpt-", "").toUpperCase())
    .sort()
    .at(-1);

  return {
    id: item.slug,
    word,
    reading: japanese.reading ?? "",
    meaning: sense.english_definitions.join(", "),
    level: JLPT_LEVELS.includes(jlptTag ?? "") ? (jlptTag as JlptLevel) : null,
    partsOfSpeech: sense.parts_of_speech,
    isCommon: item.is_common ?? false,
    exampleSentence: null, // Jisho's word API has no example sentences
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const level = searchParams.get("level") ?? "";
  const keyword = searchParams.get("keyword")?.trim() ?? "";
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  if (level && !JLPT_LEVELS.includes(level)) {
    return Response.json({ error: "Invalid level" }, { status: 400 });
  }

  // Jisho understands "#jlpt-n5" tags mixed with free text. With no filter at
  // all, fall back to common words so the default deck isn't empty.
  const query =
    [level && `#jlpt-${level.toLowerCase()}`, keyword].filter(Boolean).join(" ") || "#common";

  const url = `${JISHO_URL}?keyword=${encodeURIComponent(query)}&page=${page}`;

  try {
    // Dictionary data barely changes — cache upstream responses for a day.
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error(`Jisho responded ${res.status}`);
    const json = (await res.json()) as { data: JishoWord[] };

    const data = json.data.map(toVocabulary).filter((v): v is Vocabulary => v !== null);

    const body: VocabularyListResponse = {
      data,
      meta: { page, hasMore: json.data.length === PAGE_SIZE },
    };
    return Response.json(body);
  } catch {
    return Response.json({ error: "Dictionary service unavailable" }, { status: 502 });
  }
}
