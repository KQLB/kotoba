import { ChevronRight } from "lucide-react";
import { FEATURES } from "@/constants/siteData";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 text-sm font-bold rounded-full border border-rose-100 mb-4">
            ✨ Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
            Everything you need to<br />
            <span className="text-rose-500">master Japanese</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Six powerful learning modes designed by linguists and beloved by 500K+ students.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, color, badge }) => (
            <div
              key={title}
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
                  {badge}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-rose-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
