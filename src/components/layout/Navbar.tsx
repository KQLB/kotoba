'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "@/constants/siteData";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useScrolled } from "@/hooks/useScrolled";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const { t } = useTranslation();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">日</span>
              </div> */}
              <span className="font-black text-xl text-slate-800 dark:text-slate-100 tracking-tight">
                Koto<span className="text-rose-500">ba</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                    ? "text-rose-500 bg-rose-50 dark:bg-rose-950/50 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50"
                    }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          {/*
          <div className="hidden md:flex items-center gap-2">
            <button className="px-4 py-1.5 text-sm font-semibold text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
              Login
            </button>
            <button className="px-4 py-1.5 text-sm font-bold bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-rose-200 hover:-translate-y-0.5 transition-all duration-200">
              Register Free
            </button>
          </div> */}

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/50"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
}
