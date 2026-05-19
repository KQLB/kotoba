export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-rose-200 rounded-full px-4 py-1.5 shadow-sm">
      <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
      <span className="text-xs font-semibold text-rose-600 tracking-wide">
        Japanese Learning App
      </span>
    </div>
  );
}
