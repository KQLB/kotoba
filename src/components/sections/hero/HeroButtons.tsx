import { ArrowRight, Play, Trophy } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-1 transition-all duration-300 text-sm">
        <Play size={16} className="fill-white" />
        Start Learning Free
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="flex items-center gap-2 px-6 py-3.5 bg-white text-slate-800 font-bold rounded-2xl border-2 border-slate-200 hover:border-rose-300 hover:bg-rose-50 hover:-translate-y-1 transition-all duration-300 text-sm shadow-sm">
        <Trophy size={16} className="text-amber-500" />
        JLPT Test
      </button>
    </div>
  );
}
