"use client";
import Link from "next/link";
import Image from "next/image";
import { serviceCatalog } from "@/lib/service-catalog";

const services = serviceCatalog.map((service) => ({
  code: service.code, title: service.name, desc: service.description,
}));

const serviceImages: Record<string, { src: string; alt: string }> = {
  REGULAR: { src: "/images/indoor-cleaning.jpg", alt: "Cleaner wiping a surface in a home" },
  MOVE_IN: { src: "/images/services/move-in-cleaning.jpg", alt: "Empty apartment ready for new occupants" },
  POST_CONSTRUCTION: { src: "/images/services/post-construction.jpg", alt: "Renovated room with construction materials awaiting cleanup" },
  LAUNDRY: { src: "/images/services/laundry.jpg", alt: "Woman loading laundry into a washing machine" },
  PEST_CONTROL: { src: "/images/services/pest-control.jpg", alt: "Worker fumigating a warehouse with a fogging machine" },
  LODGES_HOSTEL: { src: "/images/services/lodges-hostel.jpg", alt: "Tidy guest bedroom with freshly made white bedding" },
  AFTER_PARTY: { src: "/images/services/after-party.jpg", alt: "Cleaning staff clearing litter after an outdoor event" },
  MOLD: { src: "/images/services/mold.jpg", alt: "Mildew stains on a wall requiring treatment" },
  DISINFECTION: { src: "/images/services/disinfection.jpg", alt: "Cleaner in protective clothing disinfecting a table" },
  OFFICE: { src: "/images/services/office-cleaning.jpg", alt: "Clean office meeting room with a table and chairs" },
};

interface BubbleProps {
  size: string;
  left: string;
  top: string;
  delay: string;
  duration: string;
}

const Bubble = ({ size, left, delay, duration, top }: BubbleProps) => (
  <div
    className="absolute rounded-full bubble-float"
    style={{
      width: size,
      height: size,
      left,
      top,
      animationDelay: delay,
      animationDuration: duration,
      background: `radial-gradient(circle at 35% 35%, 
        rgba(255, 255, 255, 0.25) 0%, 
        rgba(200, 220, 240, 0.15) 30%, 
        rgba(150, 180, 210, 0.08) 60%,
        transparent 100%)`,
      boxShadow: `
        inset -2px -2px 6px rgba(255, 255, 255, 0.3),
        inset 2px 2px 6px rgba(0, 0, 0, 0.05),
        0 0 15px rgba(255, 255, 255, 0.1)
      `,
      border: "1px solid rgba(255, 255, 255, 0.2)",
    }}
  >
    {/* Inner shine effect */}
    <div
      className="absolute rounded-full"
      style={{
        top: "20%",
        left: "25%",
        width: "30%",
        height: "30%",
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
      }}
    />
  </div>
);

export default function ServiceSection({ preview = false }: { preview?: boolean }) {
  const shownServices = preview ? services.filter(service => ["REGULAR", "OFFICE", "MOVE_IN"].includes(service.code)) : services;
  return (
    <>
      {/* Bubble Animation */}
      <style jsx>{`
        @keyframes bubbleFloat {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-120vh) translateX(15px) scale(1);
            opacity: 0;
          }
        }

        .bubble-float {
          animation-name: bubbleFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>

      <section id="services" className={`relative bg-primary ${preview ? "py-20" : "py-28"} overflow-hidden scroll-mt-16`}>
        {/* Floating Bubbles - Subtle and smaller */}
        <Bubble size="60px" left="3%" top="8%" delay="0s" duration="20s" />
        <Bubble size="45px" left="24%" top="15%" delay="3s" duration="22s" />
        <Bubble size="50px" left="75%" top="12%" delay="2s" duration="21s" />
        <Bubble size="65px" left="92%" top="6%" delay="1s" duration="23s" />
        <Bubble size="40px" left="5%" top="75%" delay="5s" duration="19s" />
        <Bubble size="70px" left="88%" top="80%" delay="4s" duration="24s" />
        <Bubble size="48px" left="95%" top="88%" delay="6s" duration="20s" />

        {/* Section Heading */}
        <div className="text-center text-white mb-20">
          <p className="text-brand-yellow tracking-widest mb-3 flex items-center justify-center gap-2 text-sm uppercase font-semibold">
            What we do
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Cleaning Services For <br /> Every Kind Of Space
          </h2>
        </div>

        {/* Services */}
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl">
          {shownServices.map((svc) => (
            <div key={svc.title} className="group bg-white rounded-2xl shadow-xl text-center relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-[3/2] bg-gray-100">
                  <Image src={serviceImages[svc.code].src} alt={serviceImages[svc.code].alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              <div className="px-8 pb-8">
              <h3 className="text-2xl font-bold mt-6 mb-3 text-primary">{svc.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {preview && <div className="mt-10 flex flex-wrap justify-center gap-3 px-6">
          <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-yellow px-6 py-3 font-bold text-brand hover:bg-brand-yellow/90">View all services</Link>
          <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10">See our price list</Link>
        </div>}
        </section>
    </>
  );
}
