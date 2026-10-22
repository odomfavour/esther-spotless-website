import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sparkles, Briefcase, Home } from "lucide-react";

const AboutSection = ({ preview = false }: { preview?: boolean }) => {
  if (preview) {
    return (
      <section id="about" aria-labelledby="about-heading" className="scroll-mt-16 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/indoor-cleaning.jpg" alt="Careful cleaning of a home interior" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">About us</p>
            <h2 id="about-heading" className="mb-5 text-3xl font-bold leading-tight text-primary sm:text-4xl">A personal touch for a spotless space</h2>
            <p className="mb-4 leading-relaxed text-gray-600">At Esther’s Spotless Touch, we care for homes, offices and commercial spaces in Uyo with hands-on cleaning and attention to detail.</p>
            <p className="mb-6 leading-relaxed text-gray-600">From everyday upkeep to a fresh start in a new space, we tailor each job to your needs, with a clear quotation before work begins.</p>
            <Button asChild className="h-auto px-6 py-3"><Link href="/about">More about us</Link></Button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <div id="about" className="scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="pt-8 lg:py-8 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 mb-4 h-[320px] sm:h-[440px] lg:h-[600px]">
              <section className="flex flex-col gap-4">
                <div className="flex-1 relative min-h-0">
                  <Image
                    src="/images/slider-v1-img2.jpg"
                    alt="About Us 1"
                    fill
                    className="rounded-lg shadow-lg object-cover object-center"
                  />
                </div>
                <div className="flex-1 relative min-h-0">
                  <Image
                    src="/images/indoor-cleaning.jpg"
                    alt="About Us 2"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </section>
              <section className="relative">
                <Image
                  src="/images/outdoor-cleaning.jpg"
                  alt="About Us 3"
                  fill
                  className="rounded-lg shadow-lg object-cover object-center"
                />
              </section>
            </div>
          </div>
          <div className="min-w-0 py-8 lg:px-8 flex flex-col justify-center">
            <h4 className="font-bold mb-4 uppercase text-[#007486] ">
              <span className="mr-2">
                <Sparkles className="inline w-5 h-5 text-primary " />
              </span>
              About Esther’s Spotless Touch
            </h4>
            <h2 className="text-3xl sm:text-4xl capitalize font-bold mb-4">
              Professional Cleaning, Handled From Start To Finish
            </h2>
            <p className="mb-4">
              Esther’s Spotless Touch is a professional cleaning company serving homes, offices and commercial spaces. Our team provides hands-on cleaning with care and attention to detail.
            </p>
            <p>
              Every job begins with a clear quotation tailored to your space, so you know exactly what to expect before you commit.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Office Cleaning
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We offer office cleaning services to keep
                    your workspace pristine and professional.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    General Space Cleaning
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Professional home cleaning services that make your living
                    space comfortable and spotless every time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Post-Construction Cleaning
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We clear dust, debris and residue after building or renovation work so your space is ready to use.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button asChild className="mt-8 h-auto w-max px-8 py-3 shadow-lg hover:scale-105 hover:shadow-xl"><a href="/services#how-it-works">
                See How It Works
              </a></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
