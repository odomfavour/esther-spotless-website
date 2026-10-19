import HeroSlider from "@/components/HeroSlider";
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
      <ServiceSection preview />
      <TractionSection />
      <TeamSection preview />
      <TestimonialsSection preview />
    </>
  );
}
