'use client';

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { isLanguage, LANGUAGE_STORAGE_KEY } from "@/utils/i18next";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved && isLanguage(saved) && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }

    const syncHtmlLang = (lng: string) => {
      document.documentElement.lang = lng;
    };
    syncHtmlLang(i18n.language);
    i18n.on("languageChanged", syncHtmlLang);
    return () => i18n.off("languageChanged", syncHtmlLang);
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
