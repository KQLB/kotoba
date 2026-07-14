"use client";

import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Vocabulary } from "@/types/vocabulary";

const LEVEL_STYLES: Record<NonNullable<Vocabulary["level"]>, string> = {
  N5: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-900",
  N4: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-900",
  N3: "bg-violet-50 text-violet-600 border-violet-100 dark:bg-violet-950/50 dark:text-violet-400 dark:border-violet-900",
  N2: "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-950/50 dark:text-amber-400 dark:border-amber-900",
  N1: "bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-950/50 dark:text-rose-400 dark:border-rose-900",
};

interface FlashcardProps {
  vocab: Vocabulary;
  flipped: boolean;
  known: boolean;
  onFlip: () => void;
}

export function Flashcard({ vocab, flipped, known, onFlip }: FlashcardProps) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onFlip}
      aria-pressed={flipped}
      className="relative w-full min-h-85 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-shadow duration-200 flex flex-col items-center justify-center px-8 py-12 text-center cursor-pointer"
    >
      {known && (
        <span className="absolute top-5 right-5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <Check size={13} strokeWidth={2.5} /> {t("vocabularyPage.known")}
        </span>
      )}

      <div className="flex items-center gap-2 mb-8">
        {vocab.level && (
          <span
            className={`inline-block px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${LEVEL_STYLES[vocab.level]}`}
          >
            {vocab.level}
          </span>
        )}
        {vocab.isCommon && (
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700">
            {t("vocabularyPage.common")}
          </span>
        )}
      </div>

      {!flipped ? (
        <>
          <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">{vocab.word}</p>
          <p className="text-lg text-slate-500 dark:text-slate-400">{vocab.reading}</p>
          <p className="mt-10 text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500">{t("vocabularyPage.flipHint")}</p>
        </>
      ) : (
        <>
          <p className="font-serif text-3xl tracking-tight text-slate-900 dark:text-white mb-5">{vocab.meaning}</p>
          {vocab.partsOfSpeech.length > 0 && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-3">
              {vocab.partsOfSpeech.join(" · ")}
            </p>
          )}
          {vocab.exampleSentence && (
            <p className="font-serif text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-md">{vocab.exampleSentence}</p>
          )}
          <p className="mt-10 text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500">{t("vocabularyPage.flipBackHint")}</p>
        </>
      )}
    </button>
  );
}
