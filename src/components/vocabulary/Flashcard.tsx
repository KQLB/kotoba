"use client";

import { useTranslation } from "react-i18next";
import type { Vocabulary } from "@/types/vocabulary";

const LEVEL_STYLES: Record<Vocabulary["level"], string> = {
  N5: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-900",
  N4: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-900",
  N3: "bg-violet-50 text-violet-600 border-violet-100 dark:bg-violet-950/50 dark:text-violet-400 dark:border-violet-900",
  N2: "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-950/50 dark:text-amber-400 dark:border-amber-900",
  N1: "bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-950/50 dark:text-rose-400 dark:border-rose-900",
};

interface FlashcardProps {
  vocab: Vocabulary;
  flipped: boolean;
  onFlip: () => void;
}

export function Flashcard({ vocab, flipped, onFlip }: FlashcardProps) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onFlip}
      aria-pressed={flipped}
      className="w-full min-h-[320px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center px-8 py-10 text-center cursor-pointer"
    >
      <span
        className={`inline-block px-3 py-1 text-xs font-bold rounded-full border mb-6 ${LEVEL_STYLES[vocab.level]}`}
      >
        {vocab.level}
      </span>

      {!flipped ? (
        <>
          <p className="text-5xl font-black text-slate-900 dark:text-white mb-3">{vocab.word}</p>
          <p className="text-xl text-slate-500 dark:text-slate-400">{vocab.reading}</p>
          <p className="mt-8 text-sm text-slate-400">{t("vocabularyPage.flipHint")}</p>
        </>
      ) : (
        <>
          <p className="text-2xl font-black text-rose-500 mb-4">{vocab.meaning}</p>
          {vocab.exampleSentence && (
            <p className="text-slate-600 dark:text-slate-300 max-w-md">{vocab.exampleSentence}</p>
          )}
          <p className="mt-8 text-sm text-slate-400">{t("vocabularyPage.flipBackHint")}</p>
        </>
      )}
    </button>
  );
}
