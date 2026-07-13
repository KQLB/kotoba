'use client';

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export function ThemeToggle() {
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      <Sun className="dark:hidden" size={18} />
      <Moon className="hidden dark:block" size={18} />
    </Button>
  );
}
