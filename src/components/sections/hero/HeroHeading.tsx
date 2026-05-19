export function HeroHeading() {
  return (
    <div>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-none tracking-tight">
        Learn Japanese
        <br />
        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Smarter
        </span>
      </h1>
      <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-md">
        Master JLPT, vocabulary, kanji, listening, and speaking with AI-powered
        lessons trusted by <strong className="text-slate-700">500,000+</strong>{" "}
        learners worldwide.
      </p>
    </div>
  );
}
