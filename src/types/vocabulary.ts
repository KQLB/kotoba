export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export interface Vocabulary {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  /** null for dictionary entries without a JLPT tag (e.g. free-text search results) */
  level: JlptLevel | null;
  partsOfSpeech: string[];
  isCommon: boolean;
  exampleSentence: string | null;
}

export interface VocabularyListResponse {
  data: Vocabulary[];
  meta: {
    page: number;
    hasMore: boolean;
  };
}
