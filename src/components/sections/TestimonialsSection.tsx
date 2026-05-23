import { TESTIMONIALS, SOCIAL_PROOF } from "@/constants/siteData";
import { StarRating } from "@/components/common/StarRating";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 text-sm font-bold rounded-full border border-rose-100 mb-4">
            💬 Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
            Loved by <span className="text-rose-500">learners worldwide</span>
          </h2>
          <p className="mt-4 text-slate-500">Real results from real students.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map(({ name, country, avatar, level, text, stars, color }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:-translate-y-1 transition-all duration-300"
            >
              <StarRating count={stars} />
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                &ldquo;{text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                >
                  {avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{name}</div>
                  <div className="text-xs text-slate-400">
                    {country} · {level}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-wrap items-center justify-around gap-8 text-center">
          {SOCIAL_PROOF.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-slate-900">
                {s.icon} {s.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
