import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/shared/ComingSoonPage";

export const metadata: Metadata = {
  title: "Vocabulary - Kotoba",
  description: "Browse Japanese vocabulary by JLPT level. Coming soon to Kotoba.",
};

export default function VocabularyPage() {
  return <ComingSoonPage navKey="vocabulary" />;
}
