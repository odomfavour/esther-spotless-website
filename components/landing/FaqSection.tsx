import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Where do you operate, and when are you open?", a: "We offer professional cleaning services in Uyo, Akwa Ibom State, and are open Monday–Saturday. Call or WhatsApp 08147343027 to discuss your needs and preferred date." },
  { q: "How do I request a cleaning?", a: "Create a free account, choose your type of space and the services you need, add details and photos, then pick a preferred date. It takes about five minutes." },
  { q: "Do I need to know the exact price before requesting?", a: "No. Requesting is free and you don't pay anything up front. We review your request and send an itemised quotation for you to approve." },
  { q: "How is the quotation determined?", a: "We look at the size and condition of the space, the services you selected, the time and team needed, and travel. For larger spaces we may inspect in person first." },
  { q: "Can I upload photos of the space?", a: "Yes, and we encourage it. Photos help us understand the work involved and quote accurately." },
  { q: "Can I request a specific date?", a: "Yes. Choose a preferred date and time, plus an alternative if you like. We confirm the final schedule once your quote is accepted." },
  { q: "How do I pay?", a: "After you accept a quotation you can pay securely online by card or bank transfer. You'll receive confirmation straight away." },
  { q: "What happens after I accept a quotation?", a: "Once payment is received your booking is confirmed. We assign a team, tell you who is coming, and you can follow the job from your dashboard." },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-brand-50/50 py-20 px-6 scroll-mt-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#007486] font-semibold mb-3 text-sm uppercase tracking-wide">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">Common Questions</h2>
        </div>
        <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors last:border-b data-[state=open]:border-brand/30 data-[state=open]:bg-brand-50">
              <AccordionTrigger className="items-center rounded-xl px-5 py-5 text-base font-semibold text-primary hover:bg-brand-50 hover:no-underline focus-visible:ring-inset sm:px-6 sm:text-lg [&>svg]:size-8 [&>svg]:translate-y-0 [&>svg]:rounded-full [&>svg]:bg-background [&>svg]:p-1.5 [&>svg]:text-primary">
                <span className="flex items-center gap-4"><span aria-hidden="true" className="hidden size-8 shrink-0 items-center justify-center rounded-lg border border-brand/10 bg-background text-xs font-bold text-primary sm:flex">{String(i + 1).padStart(2, "0")}</span><span>{f.q}</span></span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-6 pt-0 text-base leading-relaxed text-muted-foreground sm:pl-[4.5rem] sm:pr-16">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
