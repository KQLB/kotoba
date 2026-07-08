'use client';

import { useTranslation } from "react-i18next";
import { TESTIMONIALS, SOCIAL_PROOF } from "@/constants/siteData";
import { StarRating } from "@/components/shared/StarRating";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("testimonials.badge")}
          title={
            <>
              {t("testimonials.titlePre")}{" "}
              <span className="text-rose-500">{t("testimonials.titleHighlight")}</span>
            </>
          }
          subtitle={t("testimonials.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map(({ id, name, country, avatar, stars, color }) => (
            <div
              key={id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:-translate-y-1 transition-all duration-300"
            >
              <StarRating count={stars} />
             <p className="mt-4 text-slate-600 text-sm leading-relaxed">
  &quot;{t(`testimonials.items.${id}.text`)}&quot;
</p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                >
                  {avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{name}</div>
                  <div className="text-xs text-slate-400">
                    {country} · {t(`testimonials.items.${id}.level`)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-wrap items-center justify-around gap-8 text-center">
          {SOCIAL_PROOF.map((s) => (
            <div key={s.id}>
              <div className="text-3xl font-black text-slate-900">
                {s.icon} {s.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{t(`stats.${s.id}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
