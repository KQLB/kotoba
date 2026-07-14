import type { Metadata } from "next";
import { VocabularyExplorer } from "@/components/vocabulary/VocabularyExplorer";

export const metadata: Metadata = {
  title: "Flashcards - Kotoba",
  description:
    "Study Japanese vocabulary with JLPT flashcards powered by the Jisho dictionary. Filter by level, search any word, and track what you've memorized.",
};

export default function FlashcardPage() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <VocabularyExplorer />
      </div>
    </section>
  );
}
