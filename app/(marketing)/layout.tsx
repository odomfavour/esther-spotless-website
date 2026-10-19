import type { ReactNode } from "react";
import Header from "@/components/Header";
import CTAFooterSection from "@/components/CtaFooterSection";
import WhatsAppChat from "@/components/landing/WhatsAppChat";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <a href="#main-content" className="sr-only z-[60] rounded-lg bg-white p-4 text-brand focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <CTAFooterSection />
      <WhatsAppChat />
    </div>
  );
}
