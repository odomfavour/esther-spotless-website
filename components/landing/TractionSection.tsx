import { CalendarCheck, Repeat2, Users } from "lucide-react";

// Current client figures supplied by the business. Returning and weekly clients
// are part of the client base, rather than additional clients to add to the total.
const traction = [
  { value: 16, label: "Clients served", icon: Users },
  { value: 5, label: "Returning clients", icon: Repeat2 },
  { value: 1, label: "Weekly client", icon: CalendarCheck },
];

export default function TractionSection() {
  return (
    <section aria-labelledby="traction-heading" className="bg-brand px-6 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-100">Our progress so far</p>
          <h2 id="traction-heading" className="text-3xl font-extrabold leading-tight sm:text-4xl">Growing through your trust</h2>
        </div>
        <dl className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20">
          {traction.map(stat => (
            <div key={stat.label} className="flex flex-col items-center px-2 text-center sm:px-6">
              <stat.icon aria-hidden="true" className="mb-4 size-7 text-brand-100" strokeWidth={1.75} />
              <dt className="order-last mt-3 text-base font-medium text-white/90 sm:text-lg">{stat.label}</dt>
              <dd className="text-5xl font-extrabold tabular-nums sm:text-6xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
