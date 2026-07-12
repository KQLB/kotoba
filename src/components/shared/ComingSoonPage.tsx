"use client";

import { useTranslation } from "react-i18next";

export function ComingSoonPage({ navKey }: { navKey: string }) {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
          {t(`nav.${navKey}`)}
        </h1>
        <p className="mt-4 text-slate-500">{t("comingSoon.description")}</p>
      </div>
    </section>
  );
}
