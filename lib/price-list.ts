export interface PriceItem { space: string; amount: number; }
export interface PricePlan { title: string; frequency?: string; description: string; items: PriceItem[]; }

// Prices transcribed from the client’s supplied price-list flyer.
export const pricePlans: PricePlan[] = [
  {
    title: "Move-in / Move-out Cleaning",
    description: "Move into a spotless space — a fresh start.",
    items: [
      { space: "Self-Contain", amount: 30000 },
      { space: "1 Bedroom", amount: 40000 },
      { space: "2 Bedrooms", amount: 50000 },
      { space: "3 Bedrooms", amount: 60000 },
      { space: "4 Bedrooms", amount: 70000 },
      { space: "5 Bedrooms", amount: 80000 },
      { space: "6 Bedrooms", amount: 90000 },
    ],
  },
  {
    title: "Live-in Deep Cleaning",
    description: "Restoring your space to its original radiance.",
    items: [
      { space: "Single Room", amount: 20000 },
      { space: "Self-Contain", amount: 35000 },
      { space: "1 Bedroom", amount: 45000 },
      { space: "2 Bedrooms", amount: 55000 },
      { space: "3 Bedrooms", amount: 65000 },
      { space: "4 Bedrooms", amount: 75000 },
      { space: "5 Bedrooms", amount: 85000 },
      { space: "6 Bedrooms", amount: 95000 },
    ],
  },
  {
    title: "Regular Cleaning — Bi-Weekly",
    frequency: "2 visits/month",
    description: "The regular refresh your space deserves.",
    items: [
      { space: "Self-Contain", amount: 15000 },
      { space: "1 Bedroom", amount: 20000 },
      { space: "2 Bedrooms", amount: 25000 },
      { space: "3 Bedrooms", amount: 30000 },
      { space: "4 Bedrooms", amount: 35000 },
      { space: "5 Bedrooms", amount: 45000 },
      { space: "6 Bedrooms", amount: 55000 },
    ],
  },
  {
    title: "Regular Cleaning — Weekly",
    frequency: "4 visits/month",
    description: "Consistent care for a fresh space every week.",
    items: [
      { space: "Self-Contain", amount: 25000 },
      { space: "1 Bedroom", amount: 30000 },
      { space: "2 Bedrooms", amount: 35000 },
      { space: "3 Bedrooms", amount: 40000 },
      { space: "4 Bedrooms", amount: 45000 },
      { space: "5 Bedrooms", amount: 50000 },
      { space: "6 Bedrooms", amount: 65000 },
    ],
  },
];
