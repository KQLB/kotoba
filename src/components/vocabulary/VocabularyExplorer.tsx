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
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
          {t("vocabularyPage.title")}
        </h1>
        <p className="mt-4 text-slate-500 dark:text-slate-400">{t("vocabularyPage.description")}</p>
      </div>

      {/* Search */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setKeyword(input.trim());
        }}
        className="flex gap-2 mb-6"
      >
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("vocabularyPage.searchPlaceholder")}
          aria-label={t("vocabularyPage.searchPlaceholder")}
          className="flex-1 px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:border-rose-300 dark:focus:border-rose-800 transition-colors"
        />
        <button
          type="submit"
          className="flex items-center gap-1 px-4 py-2 text-sm font-bold bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-colors"
        >
          <Search size={16} />
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
            className={`px-4 py-1.5 text-sm font-bold rounded-full border transition-colors ${
              level === lvl
                ? "bg-rose-500 text-white border-rose-500"
                : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-800 hover:text-rose-500"
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
