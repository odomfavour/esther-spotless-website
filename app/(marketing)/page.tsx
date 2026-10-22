import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/landing/TrustSection";
import ServiceSection from "@/components/ServiceSection";
import TractionSection from "@/components/landing/TractionSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustSection />
      <AboutSection preview />
      <ServiceSection preview />
      <TractionSection />
      <TeamSection preview />
      <TestimonialsSection preview />
    </>
  );
}
