"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { VocabularyDeck } from "@/components/vocabulary/VocabularyDeck";
import type { JlptLevel } from "@/types/vocabulary";

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export function VocabularyExplorer() {
  const { t } = useTranslation();
  const [level, setLevel] = useState<JlptLevel | "ALL">("ALL");
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <header className="text-center mb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-400 mb-3">
          {t("nav.flashcards")}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white">
          {t("vocabularyPage.title")}
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed">
          {t("vocabularyPage.description")}
        </p>
      </header>

      {/* Search */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setKeyword(input.trim());
        }}
        className="relative mb-5"
      >
        <Search
          size={16}
          aria-hidden
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
        />
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("vocabularyPage.searchPlaceholder")}
          aria-label={t("vocabularyPage.searchPlaceholder")}
          className="w-full pl-11 pr-28 py-3 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:border-slate-400 dark:focus:border-slate-500 transition-colors"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1.5 bottom-1.5 px-4 text-xs font-semibold uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors"
        >
          {t("vocabularyPage.search")}
        </button>
      </form>

      {/* Level filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {(["ALL", ...LEVELS] as const).map((lvl) => (
          <button
            key={lvl}
            type="button"
            onClick={() => setLevel(lvl)}
            aria-pressed={level === lvl}
            className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border transition-colors ${
              level === lvl
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white"
                : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {lvl === "ALL" ? t("vocabularyPage.allLevels") : lvl}
          </button>
        ))}
      </div>

      <VocabularyDeck key={`${level}:${keyword}`} level={level} keyword={keyword} />
    </>
  );
}
