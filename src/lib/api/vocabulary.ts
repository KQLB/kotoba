import type { JlptLevel, Vocabulary, VocabularyListResponse } from "@/types/vocabulary";

// ponytail: small offline dataset used only when /api/vocabulary (the Jisho
// proxy) fails — e.g. no internet during dev. Delete if that never happens.
const MOCK_VOCABULARY: Vocabulary[] = [
  { id: "1", word: "水", reading: "みず", meaning: "water", level: "N5", partsOfSpeech: ["Noun"], isCommon: true, exampleSentence: "水を飲みます。" },
  { id: "2", word: "食べる", reading: "たべる", meaning: "to eat", level: "N5", partsOfSpeech: ["Ichidan verb"], isCommon: true, exampleSentence: "朝ご飯を食べる。" },
  { id: "3", word: "学校", reading: "がっこう", meaning: "school", level: "N5", partsOfSpeech: ["Noun"], isCommon: true, exampleSentence: "学校に行きます。" },
  { id: "4", word: "友達", reading: "ともだち", meaning: "friend", level: "N5", partsOfSpeech: ["Noun"], isCommon: true, exampleSentence: "友達と遊びます。" },
  { id: "5", word: "経験", reading: "けいけん", meaning: "experience", level: "N4", partsOfSpeech: ["Noun", "Suru verb"], isCommon: true, exampleSentence: "貴重な経験でした。" },
  { id: "6", word: "準備", reading: "じゅんび", meaning: "preparation", level: "N4", partsOfSpeech: ["Noun", "Suru verb"], isCommon: true, exampleSentence: "準備ができました。" },
  { id: "7", word: "説明", reading: "せつめい", meaning: "explanation", level: "N4", partsOfSpeech: ["Noun", "Suru verb"], isCommon: true, exampleSentence: "先生が説明します。" },
  { id: "8", word: "解決", reading: "かいけつ", meaning: "resolution / solution", level: "N3", partsOfSpeech: ["Noun", "Suru verb"], isCommon: true, exampleSentence: "問題を解決する。" },
  { id: "9", word: "影響", reading: "えいきょう", meaning: "influence / effect", level: "N3", partsOfSpeech: ["Noun", "Suru verb"], isCommon: true, exampleSentence: "天気の影響を受ける。" },
  { id: "10", word: "存在", reading: "そんざい", meaning: "existence", level: "N3", partsOfSpeech: ["Noun", "Suru verb"], isCommon: true, exampleSentence: "存在を確認する。" },
  { id: "11", word: "矛盾", reading: "むじゅん", meaning: "contradiction", level: "N2", partsOfSpeech: ["Noun", "Suru verb"], isCommon: true, exampleSentence: "話に矛盾がある。" },
  { id: "12", word: "抽象", reading: "ちゅうしょう", meaning: "abstraction", level: "N2", partsOfSpeech: ["Noun"], isCommon: false, exampleSentence: "抽象的な概念だ。" },
  { id: "13", word: "曖昧", reading: "あいまい", meaning: "ambiguous / vague", level: "N1", partsOfSpeech: ["Na-adjective"], isCommon: true, exampleSentence: "曖昧な返事をする。" },
  { id: "14", word: "妥協", reading: "だきょう", meaning: "compromise", level: "N1", partsOfSpeech: ["Noun", "Suru verb"], isCommon: false, exampleSentence: "妥協点を探す。" },
  { id: "15", word: "洞察", reading: "どうさつ", meaning: "insight", level: "N1", partsOfSpeech: ["Noun", "Suru verb"], isCommon: false, exampleSentence: "鋭い洞察力を持つ。" },
];

function mockList(level?: JlptLevel, keyword?: string): VocabularyListResponse {
  let filtered = level ? MOCK_VOCABULARY.filter((v) => v.level === level) : MOCK_VOCABULARY;
  if (keyword) {
    const q = keyword.toLowerCase();
    filtered = filtered.filter(
      (v) => v.word.includes(keyword) || v.reading.includes(keyword) || v.meaning.toLowerCase().includes(q)
    );
  }
  return { data: filtered, meta: { page: 1, hasMore: false } };
}

export interface FetchVocabularyListParams {
  level?: JlptLevel;
  keyword?: string;
  page?: number;
}

export async function fetchVocabularyList({
  level,
  keyword,
  page = 1,
}: FetchVocabularyListParams = {}): Promise<VocabularyListResponse> {
  const params = new URLSearchParams({ page: String(page) });
  if (level) params.set("level", level);
  if (keyword) params.set("keyword", keyword);

  try {
    const res = await fetch(`/api/vocabulary?${params.toString()}`);
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return (await res.json()) as VocabularyListResponse;
  } catch {
    // Proxy unreachable (offline dev) — fall back to local mock data.
    return mockList(level, keyword);
  }
}
