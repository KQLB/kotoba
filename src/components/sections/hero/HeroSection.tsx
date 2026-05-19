import { FloatingKanji } from "@/components/common/FloatingKanji";
import {
  HeroBadge,
  HeroHeading,
  HeroButtons,
  HeroStats,
  HeroShowcase,
} from "@/components/sections/hero";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-white">
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
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
