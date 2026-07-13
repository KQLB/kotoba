'use client';

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "@/constants/siteData";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-rose-100 dark:border-slate-800 px-4 py-4 space-y-1 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
          <div className="px-3 pt-3 flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
