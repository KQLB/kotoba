'use client';

import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FEATURES } from "@/constants/siteData";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("features.badge")}
          title={
            <>
              {t("features.titlePre")}
              <br />
              <span className="text-rose-500">{t("features.titleHighlight")}</span>
            </>
          }
          subtitle={t("features.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ id, icon: Icon, color }) => (
            <div
              key={id}
              className="group relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                  <Icon size={22} className="text-white" />
                </div>
                <span className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-full border border-slate-100">
                  {t(`features.items.${id}.badge`)}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t(`features.items.${id}.title`)}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{t(`features.items.${id}.desc`)}</p>
              <div className="mt-4 flex items-center gap-1 text-rose-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {t("features.explore")} <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
