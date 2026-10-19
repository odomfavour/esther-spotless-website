"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { customerTestimonials } from "@/lib/testimonials";
import { initials } from "@/lib/utils";

export default function TestimonialsSection({ preview = false }: { preview?: boolean }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Balanced pages keep all seven reviews accessible without a one-card final page.
  const testimonials = [
    customerTestimonials.slice(0, 3),
    customerTestimonials.slice(3, 5),
    customerTestimonials.slice(5, 7),
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="scroll-mt-20 py-20 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 text-9xl font-bold text-gray-400">
          ★
        </div>
        <div className="absolute bottom-20 left-10 text-9xl font-bold text-gray-400">
          ★
        </div>
        <div className="absolute top-1/2 left-1/4 text-7xl font-bold text-gray-400">
          ★
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-20">
          <div>
            <p className="text-primary font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
              <span>💬</span> TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Our Customers&apos; Feedback
            </h2>
          </div>

          {/* Navigation Arrows */}
          {!preview && <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="size-14 rounded-full border-2 border-primary text-primary hover:border-brand-700 hover:bg-brand-700 hover:text-white"
              aria-label="Previous testimonials"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="size-14 rounded-full border-2 border-primary text-primary hover:border-brand-700 hover:bg-brand-700 hover:text-white"
              aria-label="Next testimonials"
            >
              <svg
                className="size-6"
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
            </Button>
          </div>}
        </div>

        {/* Testimonial Cards */}
        <div className={`grid grid-cols-1 ${testimonials[preview ? 0 : currentSlide].length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-x-8 gap-y-20 mb-12`}>
          {testimonials[preview ? 0 : currentSlide].map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute bottom-8 right-8 text-gray-200">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Profile Image - Positioned at top center overlapping the card */}
              <div className="flex flex-col items-center -mt-20 mb-6">
                <Avatar className="size-28 border-4 border-primary bg-white">
                  {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
                  <AvatarFallback className="bg-brand-50 text-3xl font-bold text-brand" aria-label={`Avatar for ${testimonial.name}`}>
                    {initials(testimonial.name.replace(/^(Mr\.|Mrs\.)\s*/i, ""))}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-primary text-center mb-4">
                {testimonial.name}
              </h3>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>


            </div>
          ))}
        </div>

        {/* Indicators */}
        {!preview && <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-primary w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial slide ${index + 1}`}
            />
          ))}
        </div>}
        {preview && <div className="text-center"><Link href="/about#testimonials" className="inline-flex min-h-12 items-center rounded-lg border border-brand/25 px-6 py-3 font-semibold text-brand hover:bg-brand-50">More customer reviews</Link></div>}
      </div>
    </section>
  );
}
