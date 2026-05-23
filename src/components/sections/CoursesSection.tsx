import { Clock, Users } from "lucide-react";
import { COURSES } from "@/constants/siteData";

export function CoursesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 text-sm font-bold rounded-full border border-rose-100 mb-4">
            🎓 Courses
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
            Popular <span className="text-rose-500">courses</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Structured curriculum aligned with official JLPT standards. Go from N5 to N1 at your own
            pace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map(({ level, title, students, hours, color, textColor, bg, progress, tags }) => (
            <div
              key={level}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Header */}
              <div className={`${bg} px-6 py-8 relative overflow-hidden`}>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/20" />
                <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                  <span className="text-2xl font-black text-white">{level}</span>
                </div>
                <h3 className={`font-black text-lg ${textColor}`}>
                  {level === "BJ" ? "Business" : `JLPT ${level}`}
                </h3>
                <p className="text-slate-500 text-sm">{title}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {students} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {hours}h content
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-500 font-medium">Completion rate</span>
                    <span className={`${textColor} font-bold`}>{progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full`} style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-5">
                  {tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  className={`w-full py-2.5 text-sm font-bold ${color} text-white rounded-xl group-hover:shadow-lg transition-all duration-300`}
                >
                  Start Course →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
