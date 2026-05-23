import { FOOTER_SECTIONS, FOOTER_POLICIES } from "@/constants/siteData";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">日</span>
              </div>
              <span className="font-black text-xl text-white">
                Nihon<span className="text-rose-400">Go</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              The smartest way to learn Japanese — from N5 to N1 and beyond. Built with love for
              language learners.
            </p>
            <div className="flex gap-3 mt-6">{/* Social icons can be added here */}</div>
          </div>

          {/* Links */}
          {FOOTER_SECTIONS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-bold text-sm mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-rose-400 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <span>© 2025 NihonGo. All rights reserved. Made with ❤️ for Japanese learners.</span>
          <div className="flex gap-6">
            {FOOTER_POLICIES.map((l) => (
              <a key={l} href="#" className="hover:text-rose-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
