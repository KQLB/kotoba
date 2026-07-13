"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { VocabularyDeck } from "@/components/vocabulary/VocabularyDeck";
import type { JlptLevel } from "@/types/vocabulary";

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export default function VocabularyPage() {
  const { t } = useTranslation();
  const [level, setLevel] = useState<JlptLevel | "ALL">("ALL");

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">{t("vocabularyPage.title")}</h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400">{t("vocabularyPage.description")}</p>
        </div>

        {/* Level filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["ALL", ...LEVELS] as const).map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setLevel(lvl)}
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

        <VocabularyDeck key={level} level={level} />
      </div>
    </section>
  );
}
