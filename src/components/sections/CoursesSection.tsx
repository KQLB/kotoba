'use client';

import { Clock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { COURSES } from "@/constants/siteData";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function CoursesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("courses.badge")}
          title={
            <>
              {t("courses.titlePre")} <span className="text-rose-500">{t("courses.titleHighlight")}</span>
            </>
          }
          subtitle={t("courses.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map(({ id, level, students, hours, color, textColor, bg, progress }) => {
            const tags = t(`courses.items.${id}.tags`, { returnObjects: true }) as string[];

            return (
              <div
                key={level}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Header */}
                <div className={`${bg} px-6 py-8 relative overflow-hidden`}>
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/20" />
                  <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                    <span className="text-2xl font-black text-white">{level}</span>
                  </div>
                  <h3 className={`font-black text-lg ${textColor}`}>
                    {level === "BJ" ? t("courses.businessHeading") : `JLPT ${level}`}
                  </h3>
                  <p className="text-slate-500 text-sm">{t(`courses.items.${id}.title`)}</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {t("courses.students", { value: students })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {t("courses.hoursContent", { hours })}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-500 font-medium">{t("courses.completionRate")}</span>
                      <span className={`${textColor} font-bold`}>{progress}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full`} style={{ width: `${progress}%` }} />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-5">
                    {tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className={`w-full py-2.5 text-sm font-bold ${color} text-white rounded-xl group-hover:shadow-lg transition-all duration-300`}
                  >
                    {t("courses.startCourse")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
