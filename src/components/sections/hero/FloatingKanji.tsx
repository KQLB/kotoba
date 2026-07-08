const CHARS = ["日", "本", "語", "学", "習", "漢", "字", "仮", "名", "文", "化", "力", "美"];

export function FloatingKanji() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {CHARS.map((ch, i) => (
        <span
          key={ch}
          className="absolute text-rose-200/40 font-bold animate-float"
          style={{
            fontSize: `${18 + ((i * 7) % 28)}px`,
            left: `${(i / CHARS.length) * 100 + (i % 3) * 2}%`,
            top: `${(i * 37) % 90}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + (i % 5)}s`,
          }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}
