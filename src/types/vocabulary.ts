export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export interface Vocabulary {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  level: JlptLevel;
  exampleSentence: string | null;
  createdAt: string;
}

export interface VocabularyListResponse {
  data: Vocabulary[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}
