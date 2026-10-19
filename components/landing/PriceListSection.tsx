import { ArrowUpRight } from "lucide-react";
import { pricePlans } from "@/lib/price-list";
import { org } from "@/lib/config";

const formatPrice = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

export default function PriceListSection() {
  return (
    <section id="pricing" aria-labelledby="price-list-heading" className="scroll-mt-20 bg-brand-50 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">Our price list</p>
          <h2 id="price-list-heading" className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl md:text-5xl">A spotless space,<br />a clear price.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">Explore our cleaning options, then get in touch to confirm the details for your space.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricePlans.map(plan => (
            <article key={plan.title} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-lg shadow-brand/5">
              <div className="border-b border-brand/10 bg-brand p-6 text-white xl:min-h-56">
                <h3 className="text-xl font-bold leading-snug">{plan.title}</h3>
                {plan.frequency && <p className="mt-3 inline-block rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand">{plan.frequency}</p>}
                <p className="mt-4 text-sm leading-relaxed text-white/90">{plan.description}</p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <table className="w-full text-sm">
                  <caption className="sr-only">{plan.title} prices in Nigerian naira{plan.frequency ? `, ${plan.frequency}` : ""}</caption>
                  <thead><tr className="border-b border-brand/15 text-brand"><th scope="col" className="pb-3 text-left font-semibold">Space</th><th scope="col" className="pb-3 text-right font-semibold">Price</th></tr></thead>
                  <tbody>{plan.items.map(item => <tr key={item.space} className="border-b border-gray-100 last:border-b-0"><th scope="row" className="py-3 pr-2 text-left font-medium text-gray-700">{item.space}</th><td className="whitespace-nowrap py-3 text-right font-bold tabular-nums text-brand">{formatPrice(item.amount)}</td></tr>)}</tbody>
                </table>
                <a href={`${org.whatsappUrl}?text=${encodeURIComponent(`Hi, I'd like to enquire about ${plan.title}${plan.frequency ? ` (${plan.frequency})` : ""} from your price list.`)}`} target="_blank" rel="noopener noreferrer" className="mt-auto flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-yellow px-4 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand-yellow/80">Enquire on WhatsApp <ArrowUpRight className="size-4" aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">Prices shown are from our published price list. Contact us to confirm the scope of work and your final quotation.</p>
      </div>
    </section>
  );
}
