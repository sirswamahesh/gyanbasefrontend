import FeaturesSection from "../components/Home/FeaturesSection";
import HeroSection from "../components/Home/HeroSection";
import StatsSection from "../components/Home/StatsSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CoursesSection from "../components/Home/CoursesSection";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
}
