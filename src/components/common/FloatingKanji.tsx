export function FloatingKanji() {
  const chars = ["日", "本", "語", "学", "習", "漢", "字", "仮", "名", "文", "化", "力", "美"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {chars.map((ch, i) => (
        <span
          key={i}
          className="absolute text-rose-200/40 font-bold animate-float"
          style={{
            fontSize: `${Math.random() * 28 + 18}px`,
            left: `${(i / chars.length) * 100 + Math.random() * 5}%`,
            top: `${Math.random() * 90}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}
