'use client';

import { useState } from "react";

const STORAGE_KEY = "kotoba-known-words";

function load(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as string[]);
  } catch {
    return new Set();
  }
}

/** Words the user marked as memorized, persisted in localStorage. */
export function useKnownWords() {
  const [known, setKnown] = useState(load);

  const toggleKnown = (id: string) => {
    setKnown((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  };

  return { known, toggleKnown };
}
