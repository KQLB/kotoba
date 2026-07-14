"use client";

import { useCallback, useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Loader2, Plus, Shuffle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { fetchVocabularyList } from "@/lib/api/vocabulary";
import { Flashcard } from "@/components/vocabulary/Flashcard";
import { useKnownWords } from "@/hooks/useKnownWords";
import type { JlptLevel, Vocabulary } from "@/types/vocabulary";

interface VocabularyDeckProps {
  level: JlptLevel | "ALL";
  keyword: string;
}

function shuffle(cards: Vocabulary[]): Vocabulary[] {
  const next = [...cards];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

const controlButtonClass =
  "flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:border-rose-200 dark:hover:border-rose-800 hover:text-rose-500 transition-colors";

// Mounted with `key={level + keyword}` by the parent so changing the filter
// remounts this component with fresh state instead of resetting in an effect.
export function VocabularyDeck({ level, keyword }: VocabularyDeckProps) {
  const { t } = useTranslation();
  const { known, toggleKnown } = useKnownWords();
  const [cards, setCards] = useState<Vocabulary[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const jlptLevel = level === "ALL" ? undefined : level;

  useEffect(() => {
    let cancelled = false;

    fetchVocabularyList({ level: jlptLevel, keyword: keyword || undefined, page: 1 })
      .then((res) => {
        if (cancelled) return;
        setCards(res.data);
        setHasMore(res.meta.hasMore);
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
  }, [jlptLevel, keyword]);

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      const res = await fetchVocabularyList({
        level: jlptLevel,
        keyword: keyword || undefined,
        page: page + 1,
      });
      setCards((prev) => [...prev, ...res.data]);
      setPage((p) => p + 1);
      setHasMore(res.meta.hasMore);
    } catch {
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

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
      if (e.target instanceof HTMLInputElement) return; // don't hijack the search box
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
  const knownCount = cards.filter((c) => known.has(c.id)).length;

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

  const isKnown = known.has(current.id);

  return (
    <>
      <Flashcard
        vocab={current}
        flipped={flipped}
        known={isKnown}
        onFlip={() => setFlipped((f) => !f)}
      />

      {/* Card actions */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        <button
          type="button"
          onClick={() => toggleKnown(current.id)}
          aria-pressed={isKnown}
          className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-xl border transition-colors ${
            isKnown
              ? "bg-emerald-500 text-white border-emerald-500"
              : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-300 hover:text-emerald-600"
          }`}
        >
          <Check size={16} />
          {isKnown ? t("vocabularyPage.known") : t("vocabularyPage.markKnown")}
        </button>

        <button
          type="button"
          onClick={() => {
            setCards(shuffle(cards));
            setIndex(0);
            setFlipped(false);
          }}
          className={controlButtonClass}
        >
          <Shuffle size={16} />
          {t("vocabularyPage.shuffle")}
        </button>

        {hasMore && (
          <button type="button" onClick={loadMore} disabled={loadingMore} className={controlButtonClass}>
            {loadingMore ? <Loader2 className="animate-spin" size={16} /> : <Plus size={16} />}
            {t("vocabularyPage.loadMore")}
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button type="button" onClick={goPrev} disabled={index === 0} className={controlButtonClass}>
          <ChevronLeft size={16} />
          {t("vocabularyPage.prev")}
        </button>

        <div className="text-center">
          <span className="block text-sm font-bold text-slate-500 dark:text-slate-400">
            {t("vocabularyPage.progress", { current: index + 1, total: cards.length })}
          </span>
          {knownCount > 0 && (
            <span className="block text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
              {t("vocabularyPage.knownCount", { count: knownCount })}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={index === cards.length - 1}
          className={controlButtonClass}
        >
          {t("vocabularyPage.next")}
          <ChevronRight size={16} />
        </button>
      </div>
    </>
  );
}
