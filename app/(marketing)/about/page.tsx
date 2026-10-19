import type { Metadata } from "next";
import PageIntro from "@/components/marketing/PageIntro";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = { title: "About Us", description: "Meet Esther’s Spotless Touch: the people and care behind your spotless space in Uyo." };

export default function Page() {
  return (
    <>
      <PageIntro title="About Us" description="Meet Esther’s Spotless Touch: the people and care behind your spotless space in Uyo." />
      <AboutSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
}
