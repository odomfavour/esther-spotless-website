"use client";
import SocialLinks from "@/components/shared/SocialLinks";
import { serviceCatalog } from "@/lib/service-catalog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { org } from "@/lib/config";

interface BubbleProps {
  size: string;
  left: string;
  top: string;
  delay: string;
  duration: string;
}

const Bubble = ({ size, left, top, delay, duration }: BubbleProps) => (
  <div
    className="absolute rounded-full opacity-20"
    style={{
      width: size,
      height: size,
      left,
      top,
      animationDelay: delay,
      animationDuration: duration,
      background: `radial-gradient(circle at 35% 35%, 
        rgba(255, 255, 255, 0.3) 0%, 
        rgba(200, 220, 240, 0.15) 30%, 
        rgba(150, 180, 210, 0.08) 60%,
        transparent 100%)`,
      boxShadow: `
        inset -2px -2px 6px rgba(255, 255, 255, 0.3),
        inset 2px 2px 6px rgba(0, 0, 0, 0.05)
      `,
      border: "1px solid rgba(255, 255, 255, 0.2)",
    }}
  >
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

export default function CTAFooterSection() {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (): void => {
    if (email) {
      toast.success("Thanks for subscribing.");
      setEmail("");
    }
  };

  return (
    <>
      {/* A light, standalone invitation separates the CTA from the royal-blue footer. */}
      <section id="request" aria-labelledby="spotless-cta-heading" className="bg-brand-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-xl shadow-brand/5 lg:grid-cols-[1.25fr_1fr]">
          <div className="relative p-7 sm:p-10 lg:p-12">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-brand-teal" />
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-teal/10"><Sparkles className="size-5 text-brand" aria-hidden="true" /></span>
              A fresh start for your space
            </div>
            <h2 id="spotless-cta-heading" className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-brand sm:text-4xl lg:text-5xl">
              Your space deserves<br className="hidden sm:block" /> a spotless touch.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              From the everyday clean to a fresh start, let Esther’s Spotless Touch take care of the details.
            </p>
            <p className="mt-6 text-sm font-semibold text-brand">Your spotless space, our promise.</p>
          </div>
          <div className="relative flex flex-col justify-center overflow-hidden bg-brand p-7 text-white sm:p-10 lg:p-12">
            <Sparkles aria-hidden="true" className="pointer-events-none absolute -right-5 -top-5 size-36 text-white/5" strokeWidth={1} />
            <div className="relative">
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-white/90"><span aria-hidden="true" className="size-2 rounded-full bg-brand-teal" />Open Monday–Saturday in Uyo</p>
              <h3 className="text-2xl font-bold sm:text-3xl">Let’s plan your clean.</h3>
              <p className="mt-3 text-base leading-relaxed text-white/85">Tell us about your space and we’ll prepare a quotation tailored to you.</p>
              <div className="mt-7 flex flex-col gap-3">
                <Button asChild className="h-auto w-full gap-3 bg-brand-yellow px-6 py-4 text-base font-bold text-brand hover:bg-brand-yellow/90"><Link href="/request-cleaning">Request a Cleaning <ArrowUpRight className="size-5" aria-hidden="true" /></Link></Button>
                <a href={org.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"><MessageCircle className="size-5" aria-hidden="true" />Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-brand text-white pt-20 pb-8 overflow-hidden">
        {/* Floating Bubbles */}
        <Bubble size="70px" left="5%" top="10%" delay="0s" duration="20s" />
        <Bubble size="55px" left="15%" top="60%" delay="3s" duration="22s" />
        <Bubble size="65px" left="85%" top="15%" delay="2s" duration="21s" />
        <Bubble size="80px" left="92%" top="70%" delay="1s" duration="23s" />
        <Bubble size="50px" left="50%" top="80%" delay="5s" duration="19s" />
        <Bubble size="60px" left="75%" top="40%" delay="4s" duration="24s" />

        {/* Decorative Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 text-6xl text-white/5">
            ✦
          </div>
          <div className="absolute top-32 right-40 text-4xl text-white/5">
            ✦
          </div>
          <div className="absolute bottom-32 right-10 text-5xl text-white/5">
            ✦
          </div>
          <div className="absolute top-20 right-60 text-3xl text-white/5">
            ✦
          </div>
          <div className="absolute bottom-20 left-10 text-4xl text-white/5">
            ✦
          </div>
          <div className="absolute top-40 left-20 text-5xl text-white/5">✦</div>
          <div className="absolute top-60 left-60 text-3xl text-white/5">✦</div>
          <div className="absolute bottom-40 right-80 text-4xl text-white/5">
            ✦
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Column 1 - Company Info */}
            <div>
              <Link href="/" className="mb-6 inline-block overflow-hidden rounded-xl bg-white p-2">
                <Image src="/brand/esthers-spotless-touch.png" alt="Esther’s Spotless Touch" width={176} height={167} className="h-auto w-44" />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Professional cleaning for homes, offices and commercial spaces in Uyo. Clear quotations, reliable teams and careful work.
              </p>
              <SocialLinks linkClassName="w-11 h-11 bg-white/10 hover:bg-white hover:text-brand rounded-full flex items-center justify-center transition-all" />
            </div>

            {/* Column 2 - Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-brand-yellow">Services</h4>
              <ul className="space-y-3">
                {serviceCatalog.map(({ name: service }) => (
                  <li key={service}>
                    <a
                      href="/services#services"
                      className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm group"
                    >
                      <svg
                        className="w-4 h-4 opacity-50 group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Official Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-brand-yellow">Official Info:</h4>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-semibold mb-1">
                      Uyo
                    </p>
                    <p className="text-white/60">Uyo, Akwa Ibom State</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-semibold mb-1">
                      <a href="tel:+2348147343027">08147343027</a>
                    </p>
                    <p className="text-white/60">Open Monday–Saturday</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-semibold mb-1">
                      <a href="tel:+2348147343027">08147343027</a>
                    </p>
                    <p className="text-white/60"><a href="https://wa.me/2348147343027">Chat on WhatsApp</a></p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-brand-yellow">Newsletter</h4>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest news and updates.
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your E-mail"
                  className="h-auto border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/70 focus-visible:border-white/40 focus-visible:bg-white/15 focus-visible:ring-white/20"
                />
                <Button
                  onClick={handleSubscribe}
                  className="h-auto min-h-12 w-full bg-brand-yellow px-6 py-3 font-bold text-brand shadow-md hover:bg-brand-yellow/90 focus-visible:ring-brand-yellow/60"
                >
                  SUBSCRIBE
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="border-t border-white/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 Esther’s Spotless Touch. All rights reserved.</p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
              <Link href="/request" className="hover:text-white transition-colors">Track Request</Link>
              <span>•</span>
              <Link href="/contact#faq" className="hover:text-white transition-colors">FAQ</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
