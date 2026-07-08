'use client';

import { Award, Flame, Target, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/shared/SectionHeader";

const xp = 2840;
const streak = 47;
const goal = 80;
const done = 65;

export function ProgressSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {["日", "語", "学", "習", "漢", "字"].map((ch, i) => (
          <span
            key={i}
            className="absolute text-white text-6xl font-bold"
            style={{
              left: `${i * 17}%`,
              top: `${20 + (i % 3) * 25}%`,
              opacity: 0.15,
            }}
          >
            {ch}
          </span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          badge={t("progress.badge")}
          title={
            <>
              {t("progress.titlePre")} <span className="text-rose-400">{t("progress.titleHighlight")}</span>
            </>
          }
          subtitle={t("progress.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Streak */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                <Flame size={24} className="text-orange-400" />
              </div>
              <span className="text-orange-400 text-xs font-bold bg-orange-500/10 px-2 py-1 rounded-full">
                {t("progress.onFire")}
              </span>
            </div>
            <div className="text-5xl font-black text-white">{streak}</div>
            <div className="text-sm text-slate-400 mt-1">{t("progress.dayStreak")}</div>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${i < 5 ? "bg-orange-400" : "bg-white/10"}`}
                />
              ))}
            </div>
          </div>

          {/* XP */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                <Zap size={24} className="text-amber-400" />
              </div>
              <span className="text-amber-400 text-xs font-bold bg-amber-500/10 px-2 py-1 rounded-full">
                {t("progress.thisWeek")}
              </span>
            </div>
            <div className="text-5xl font-black text-white">{xp.toLocaleString()}</div>
            <div className="text-sm text-slate-400 mt-1">{t("progress.xpPoints")}</div>
            <div className="mt-3 text-xs text-slate-500">{t("progress.xpFromYesterday")}</div>
          </div>

          {/* Daily goal */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Target size={24} className="text-emerald-400" />
              </div>
              <span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-full">
                {t("progress.today")}
              </span>
            </div>
            <div className="text-5xl font-black text-white">
              {done}
              <span className="text-2xl text-slate-500">/{goal}</span>
            </div>
            <div className="text-sm text-slate-400 mt-1">{t("progress.dailyGoal")}</div>
            <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all"
                style={{ width: `${(done / goal) * 100}%` }}
              />
            </div>
          </div>

          {/* Level */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-violet-500/20 rounded-2xl flex items-center justify-center">
                <Award size={24} className="text-violet-400" />
              </div>
              <span className="text-violet-400 text-xs font-bold bg-violet-500/10 px-2 py-1 rounded-full">
                {t("progress.rank")}
              </span>
            </div>
            <div className="text-5xl font-black text-white">N3</div>
            <div className="text-sm text-slate-400 mt-1">{t("progress.currentLevel")}</div>
            <div className="mt-3 flex items-center gap-1">
              {["N5", "N4", "N3", "N2", "N1"].map((n, i) => (
                <div
                  key={n}
                  className={`flex-1 text-center text-xs font-bold py-0.5 rounded ${
                    i <= 2 ? "bg-violet-500 text-white" : "bg-white/10 text-slate-500"
                  }`}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
