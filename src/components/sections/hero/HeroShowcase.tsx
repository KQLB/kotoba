'use client';

import { useTranslation } from "react-i18next";

interface FloatingBadgeProps {
  icon: string;
  title: string;
  subtitle: string;
  delay?: number;
  className?: string;
}

function FloatingBadge({
  icon,
  title,
  subtitle,
  delay = 0,
  className = "",
}: FloatingBadgeProps) {
  return (
    <div
      className={`absolute bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-3 flex items-center gap-2 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="text-lg">{icon}</span>
      <div>
        <div className="text-xs font-black text-slate-800 dark:text-slate-100">{title}</div>
        <div className="text-xs text-slate-400">{subtitle}</div>
      </div>
    </div>
  );
}

function FloatingBadgeGradient({
  icon,
  title,
  delay = 0,
}: {
  icon: string;
  title: string;
  delay?: number;
}) {
  return (
    <div
      className="absolute top-1/2 -right-8 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl shadow-lg p-3 flex items-center gap-2 animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <span>{icon}</span>
      <span className="text-xs font-bold">{title}</span>
    </div>
  );
}

function KanjiCard() {
  const { t } = useTranslation();

  return (
    <div className="absolute inset-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6 gap-3">
      <div
        className="text-7xl font-black text-slate-900 dark:text-white"
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        桜
      </div>
      <div className="text-lg font-bold text-rose-500">さくら</div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{t("hero.showcase.kanjiMeaning")}</div>
      <div className="flex gap-1 mt-1">
        {["N5", "JLPT", "Kanji"].map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-semibold rounded-full border border-rose-100 dark:border-rose-900"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroShowcase() {
  const { t } = useTranslation();

  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-80 h-80 sm:w-96 sm:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-10 animate-pulse-slow" />
        <div className="absolute inset-4 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full opacity-10" />

        <KanjiCard />

        <FloatingBadge
          icon="🔥"
          title={t("hero.showcase.streakTitle")}
          subtitle={t("hero.showcase.streakSubtitle")}
          className="-top-2 -right-2"
        />
        <FloatingBadge
          icon="⚡"
          title={t("hero.showcase.xpTitle")}
          subtitle={t("hero.showcase.xpSubtitle")}
          delay={1}
          className="-bottom-2 -left-2"
        />
        <FloatingBadgeGradient icon="✓" title={t("hero.showcase.passedBadge")} delay={2} />
      </div>
    </div>
  );
}
