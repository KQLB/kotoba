"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { fetchVocabularyList } from "@/lib/api/vocabulary";
import { Flashcard } from "@/components/vocabulary/Flashcard";
import type { JlptLevel, Vocabulary } from "@/types/vocabulary";

interface VocabularyDeckProps {
  level: JlptLevel | "ALL";
}

// Mounted with `key={level}` by the parent page so switching levels remounts
// this component with fresh state instead of resetting state inside an effect.
export function VocabularyDeck({ level }: VocabularyDeckProps) {
  const { t } = useTranslation();
  const [cards, setCards] = useState<Vocabulary[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchVocabularyList({ level: level === "ALL" ? undefined : level, page: 1, limit: 20 })
      .then((res) => {
        if (cancelled) return;
        setCards(res.data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [level]);

  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex((i) => Math.min(i + 1, cards.length - 1));
  }, [cards.length]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.code === "ArrowRight") {
        goNext();
      } else if (e.code === "ArrowLeft") {
        goPrev();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const current = cards[index];

  if (loading) {
    return (
      <div className="min-h-[320px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center gap-3 text-slate-400">
        <Loader2 className="animate-spin" size={28} />
        <p className="text-sm">{t("vocabularyPage.loading")}</p>
      </div>
    );
  }

  if (error || cards.length === 0) {
    return (
      <div className="min-h-[320px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center gap-3 text-slate-400 px-6 text-center">
        <p className="text-sm">{error ? t("vocabularyPage.error") : t("vocabularyPage.empty")}</p>
      </div>
    );
  }

  if (!current) return null;

  return (
    <>
      <Flashcard vocab={current} flipped={flipped} onFlip={() => setFlipped((f) => !f)} />

      <div className="flex items-center justify-between mt-6">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:border-rose-200 dark:hover:border-rose-800 hover:text-rose-500 transition-colors"
        >
          <ChevronLeft size={16} />
          {t("vocabularyPage.prev")}
        </button>

        <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
          {t("vocabularyPage.progress", { current: index + 1, total: cards.length })}
        </span>

        <button
          type="button"
          onClick={goNext}
          disabled={index === cards.length - 1}
          className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:border-rose-200 dark:hover:border-rose-800 hover:text-rose-500 transition-colors"
        >
          {t("vocabularyPage.next")}
          <ChevronRight size={16} />
        </button>
      </div>
    </>
  );
}
