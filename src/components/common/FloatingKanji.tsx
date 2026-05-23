const KANJI_CHARS = [
  "日",
  "本",
  "語",
  "学",
  "習",
  "漢",
  "字",
  "仮",
  "名",
  "文",
  "化",
  "力",
  "美",
] as const;

/** Deterministic 0–1 value from index (stable across renders). */
function seededUnit(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const KANJI_LAYOUT = KANJI_CHARS.map((ch, i) => {
  const r1 = seededUnit(i + 1);
  const r2 = seededUnit(i + 2);
  const r3 = seededUnit(i + 3);
  const r4 = seededUnit(i + 4);
  return {
    ch,
    fontSize: r1 * 28 + 18,
    left: (i / KANJI_CHARS.length) * 100 + r2 * 5,
    top: r3 * 90,
    animationDelay: i * 0.4,
    animationDuration: 4 + r4 * 4,
  };
});

export function FloatingKanji() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {KANJI_LAYOUT.map(
        ({ ch, fontSize, left, top, animationDelay, animationDuration }, i) => (
          <span
            key={i}
            className="absolute text-rose-200/40 font-bold animate-float"
            style={{
              fontSize: `${fontSize}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`,
            }}
          >
            {ch}
          </span>
        ),
      )}
    </div>
  );
}
