'use client';

import { useTranslation } from "react-i18next";
import { FOOTER_SECTIONS } from "@/constants/siteData";

export function Footer() {
  const { t } = useTranslation();
  const policies = t("footer.policies", { returnObjects: true }) as string[];

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
            <p className="text-sm leading-relaxed max-w-xs">{t("footer.description")}</p>
            <div className="flex gap-3 mt-6">{/* Social icons can be added here */}</div>
          </div>

          {/* Links */}
          {FOOTER_SECTIONS.map((col) => {
            const links = t(`footer.sections.${col.id}.links`, { returnObjects: true }) as string[];

            return (
              <div key={col.id}>
                <h4 className="text-white font-bold text-sm mb-4">
                  {t(`footer.sections.${col.id}.heading`)}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm hover:text-rose-400 transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <span>{t("footer.copyright")}</span>
          <div className="flex gap-6">
            {policies.map((l) => (
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
