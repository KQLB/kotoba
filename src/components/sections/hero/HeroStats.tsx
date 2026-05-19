import { STATS } from "@/constants/siteData";

export function HeroStats() {
  return (
    <div className="flex flex-wrap gap-6 pt-2">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-2xl font-black text-slate-800">
            {s.icon} {s.value}
          </div>
          <div className="text-xs text-slate-500 font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
