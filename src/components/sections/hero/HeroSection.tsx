'use client';

import { ArrowRight, Play, Trophy } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { STATS } from "@/constants/siteData";
import { FloatingKanji } from "./FloatingKanji";
import { HeroShowcase } from "./HeroShowcase";

function HeroBadge() {
  const { t } = useTranslation();

  return (
    <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-rose-200 dark:border-rose-900 rounded-full px-4 py-1.5 shadow-sm">
      <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
      <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 tracking-wide">
        {t("hero.badge")}
      </span>
    </div>
  );
}

function HeroHeading() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none tracking-tight">
        {t("hero.titleLine1")}
        <br />
        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          {t("hero.titleHighlight")}
        </span>
      </h1>
      <p className="mt-5 text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
        <Trans
          i18nKey="hero.description"
          components={{ strong: <strong className="text-slate-700 dark:text-slate-200" /> }}
        />
      </p>
    </div>
  );
}

function HeroButtons() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-3">
      <button className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-rose-200 dark:shadow-rose-950 hover:shadow-rose-300 dark:hover:shadow-rose-900 hover:-translate-y-1 transition-all duration-300 text-sm">
        <Play size={16} className="fill-white" />
        {t("hero.startLearningFree")}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-rose-300 dark:hover:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-950/50 hover:-translate-y-1 transition-all duration-300 text-sm shadow-sm">
        <Trophy size={16} className="text-amber-500" />
        {t("hero.jlptTest")}
      </button>
    </div>
  );
}

function HeroStats() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-6 pt-2">
      {STATS.map((s) => (
        <div key={s.id} className="text-center">
          <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
            {s.icon} {s.value}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t(`stats.${s.id}`)}</div>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-white dark:from-slate-950 dark:via-rose-950/30 dark:to-slate-950">
      <FloatingKanji />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200/30 to-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-orange-200/30 to-amber-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <HeroBadge />
            <HeroHeading />
            <HeroButtons />
            <HeroStats />
          </div>

          <HeroShowcase />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L1440 60L1440 30C1200 60 960 10 720 30C480 50 240 0 0 30L0 60Z"
            className="fill-white dark:fill-slate-950"
          />
        </svg>
      </div>
    </section>
  );
}
