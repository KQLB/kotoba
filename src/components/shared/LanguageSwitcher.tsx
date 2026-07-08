'use client';

import { useTranslation } from "react-i18next";
import { LANGUAGES, LANGUAGE_STORAGE_KEY, type Language } from "@/utils/i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  };

  return (
    <div className="flex items-center rounded-lg border border-slate-200 overflow-hidden">
      {LANGUAGES.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-2.5 py-1 text-xs font-bold uppercase transition-colors ${
            i18n.language === lng
              ? "bg-rose-500 text-white"
              : "bg-white text-slate-500 hover:text-rose-500 hover:bg-rose-50"
          }`}
          aria-pressed={i18n.language === lng}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
