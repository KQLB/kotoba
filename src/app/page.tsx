import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProgressSection } from "@/components/sections/ProgressSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CultureSection } from "@/components/sections/CultureSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProgressSection />
        <CoursesSection />
        <CultureSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
