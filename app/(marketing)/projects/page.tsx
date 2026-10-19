import type { Metadata } from "next";
import PageIntro from "@/components/marketing/PageIntro";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = { title: "Our Projects", description: "Explore the project gallery and browse the cleaning work by category." };

export default function Page() {
  return (
    <>
      <PageIntro title="Our Projects" description="Explore the project gallery and browse the cleaning work by category." />
      <ProjectsSection />
    </>
  );
}
