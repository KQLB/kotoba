import { Navbar } from "@/components/shared/Navbar";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProgressSection } from "@/components/sections/ProgressSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CultureSection } from "@/components/sections/CultureSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <>
      <div className="font-sans antialiased bg-white">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ProgressSection />
        <CoursesSection />
        <CultureSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
}