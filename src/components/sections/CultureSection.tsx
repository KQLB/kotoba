import { ArrowRight } from "lucide-react";
import { CULTURE } from "@/constants/siteData";

export function CultureSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 text-sm font-bold rounded-full border border-rose-100 mb-4">
            🌸 Culture
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
            Dive into <span className="text-rose-500">Japanese culture</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Language is culture. Learn through anime, travel, food, and everyday Japanese life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CULTURE.map(({ label, desc, color, emoji }) => (
            <div
              key={label}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${color} p-8 h-full`}>
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-white font-black text-xl mb-2">{label}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
                <div className="mt-6 flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
