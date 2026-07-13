interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeader({ badge, title, subtitle, dark = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span
        className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full border mb-4 ${
          dark
            ? "bg-rose-900/50 text-rose-300 border-rose-700"
            : "bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900"
        }`}
      >
        {badge}
      </span>
      <h2 className={`text-4xl sm:text-5xl font-black ${dark ? "text-white" : "text-slate-900 dark:text-white"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-xl mx-auto ${dark ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
