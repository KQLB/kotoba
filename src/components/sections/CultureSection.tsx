'use client';

import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CULTURE } from "@/constants/siteData";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function CultureSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("culture.badge")}
          title={
            <>
              {t("culture.titlePre")} <span className="text-rose-500">{t("culture.titleHighlight")}</span>
            </>
          }
          subtitle={t("culture.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CULTURE.map(({ id, color, emoji }) => (
            <div
              key={id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${color} p-8 h-full`}>
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-white font-black text-xl mb-2">{t(`culture.items.${id}.label`)}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{t(`culture.items.${id}.desc`)}</p>
                <div className="mt-6 flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("culture.explore")} <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
