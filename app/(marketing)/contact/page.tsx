import type { Metadata } from "next";
import PageIntro from "@/components/marketing/PageIntro";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/landing/FaqSection";

export const metadata: Metadata = { title: "Contact Us", description: "Have a question or a space that needs care? Reach us by phone or WhatsApp, or use the enquiry form below." };

export default function Page() {
  return (
    <>
      <PageIntro title="Contact Us" description="Have a question or a space that needs care? Reach us by phone or WhatsApp, or use the enquiry form below." />
      <ContactSection />
      <FaqSection />
    </>
  );
}
