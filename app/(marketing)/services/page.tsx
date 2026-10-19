import type { Metadata } from "next";
import PageIntro from "@/components/marketing/PageIntro";
import ServiceSection from "@/components/ServiceSection";
import EnvironmentsSection from "@/components/landing/EnvironmentsSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export const metadata: Metadata = { title: "Cleaning Services", description: "Explore our cleaning services in Uyo and see how to request a clean for your home, business or shared space." };

export default function Page() {
  return (
    <>
      <PageIntro title="Cleaning Services" description="Explore our cleaning services in Uyo and see how to request a clean for your home, business or shared space." />
      <ServiceSection />
      <EnvironmentsSection />
      <HowItWorksSection />
    </>
  );
}
