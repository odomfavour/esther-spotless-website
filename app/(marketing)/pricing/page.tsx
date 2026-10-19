import type { Metadata } from "next";
import PageIntro from "@/components/marketing/PageIntro";
import PriceListSection from "@/components/landing/PriceListSection";

export const metadata: Metadata = { title: "Price List", description: "Find the published prices for move-in and move-out cleaning, live-in deep cleaning, and regular weekly or bi-weekly visits." };

export default function Page() {
  return (
    <>
      <PageIntro title="Price List" description="Find the published prices for move-in and move-out cleaning, live-in deep cleaning, and regular weekly or bi-weekly visits." />
      <PriceListSection />
    </>
  );
}
