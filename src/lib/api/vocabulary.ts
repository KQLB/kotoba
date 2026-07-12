import type { JlptLevel, Vocabulary, VocabularyListResponse } from "@/types/vocabulary";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api/v1";

// ponytail: mock dataset stands in for the real backend until kotoba-be's
// /vocabulary endpoint is deployed. Used as a fallback whenever the fetch
// below fails (backend not running yet, network error, etc). Delete once
// the real API is reliably available in every environment.
const MOCK_VOCABULARY: Vocabulary[] = [
  { id: "1", word: "水", reading: "みず", meaning: "water", level: "N5", exampleSentence: "水を飲みます。", createdAt: "2024-01-01" },
  { id: "2", word: "食べる", reading: "たべる", meaning: "to eat", level: "N5", exampleSentence: "朝ご飯を食べる。", createdAt: "2024-01-01" },
  { id: "3", word: "学校", reading: "がっこう", meaning: "school", level: "N5", exampleSentence: "学校に行きます。", createdAt: "2024-01-01" },
  { id: "4", word: "友達", reading: "ともだち", meaning: "friend", level: "N5", exampleSentence: "友達と遊びます。", createdAt: "2024-01-01" },
  { id: "5", word: "経験", reading: "けいけん", meaning: "experience", level: "N4", exampleSentence: "貴重な経験でした。", createdAt: "2024-01-02" },
  { id: "6", word: "準備", reading: "じゅんび", meaning: "preparation", level: "N4", exampleSentence: "準備ができました。", createdAt: "2024-01-02" },
  { id: "7", word: "説明", reading: "せつめい", meaning: "explanation", level: "N4", exampleSentence: "先生が説明します。", createdAt: "2024-01-02" },
  { id: "8", word: "解決", reading: "かいけつ", meaning: "resolution / solution", level: "N3", exampleSentence: "問題を解決する。", createdAt: "2024-01-03" },
  { id: "9", word: "影響", reading: "えいきょう", meaning: "influence / effect", level: "N3", exampleSentence: "天気の影響を受ける。", createdAt: "2024-01-03" },
  { id: "10", word: "存在", reading: "そんざい", meaning: "existence", level: "N3", exampleSentence: "存在を確認する。", createdAt: "2024-01-03" },
  { id: "11", word: "矛盾", reading: "むじゅん", meaning: "contradiction", level: "N2", exampleSentence: "話に矛盾がある。", createdAt: "2024-01-04" },
  { id: "12", word: "抽象", reading: "ちゅうしょう", meaning: "abstraction", level: "N2", exampleSentence: "抽象的な概念だ。", createdAt: "2024-01-04" },
  { id: "13", word: "曖昧", reading: "あいまい", meaning: "ambiguous / vague", level: "N1", exampleSentence: "曖昧な返事をする。", createdAt: "2024-01-05" },
  { id: "14", word: "妥協", reading: "だきょう", meaning: "compromise", level: "N1", exampleSentence: "妥協点を探す。", createdAt: "2024-01-05" },
  { id: "15", word: "洞察", reading: "どうさつ", meaning: "insight", level: "N1", exampleSentence: "鋭い洞察力を持つ。", createdAt: "2024-01-05" },
];

function mockList(level?: JlptLevel, page = 1, limit = 20): VocabularyListResponse {
  const filtered = level ? MOCK_VOCABULARY.filter((v) => v.level === level) : MOCK_VOCABULARY;
  const start = (page - 1) * limit;
  return {
    data: filtered.slice(start, start + limit),
    meta: { page, limit, total: filtered.length },
  };
}

export interface FetchVocabularyListParams {
  level?: JlptLevel;
  page?: number;
  limit?: number;
}

export async function fetchVocabularyList({
  level,
  page = 1,
  limit = 20,
}: FetchVocabularyListParams = {}): Promise<VocabularyListResponse> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (level) params.set("level", level);

  try {
    const res = await fetch(`${API_BASE_URL}/vocabulary?${params.toString()}`);
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return (await res.json()) as VocabularyListResponse;
  } catch {
    // Backend not reachable yet — fall back to local mock data.
    return mockList(level, page, limit);
  }
}
