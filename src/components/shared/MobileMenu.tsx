'use client';

import Link from "next/link";
import { NAV_LINKS } from "@/constants/siteData";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  return (
    <>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-rose-100 px-4 py-4 space-y-1 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
