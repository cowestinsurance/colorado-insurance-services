"use client";

import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const testimonials = [
  {
    name: "Sarah M.",
    city: "Denver",
    rating: 5,
    text: "Switching to Colorado Insurance Services saved us over $800 a year on our home and auto bundle. The personal service is incredible — they actually answer the phone!",
    bg: "bg-brand-orange",
    textColor: "text-white",
  },
  {
    name: "Mike R.",
    city: "Broomfield",
    rating: 5,
    text: "As a small business owner, I needed someone who understood my industry. They found me better coverage at a lower price than my old carrier. Highly recommend.",
    bg: "bg-white",
    textColor: "text-brand-navy",
  },
  {
    name: "Jennifer L.",
    city: "Aurora",
    rating: 5,
    text: "After the hailstorm hit our neighborhood, they helped us through the entire claims process. Having a local agent who knows Colorado weather risks makes all the difference.",
    bg: "bg-brand-beige",
    textColor: "text-brand-navy",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Real people, real results"
          subtitle="Don't just take our word for it — hear from Colorado families and businesses we've helped."
        />

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div
                className={`${testimonial.bg} rounded-2xl p-8 h-full flex flex-col ${
                  testimonial.bg === "bg-white" ? "border border-neutral-200" : ""
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        testimonial.bg === "bg-brand-orange"
                          ? "fill-white text-white"
                          : "fill-brand-orange text-brand-orange"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className={`flex-1 font-sans text-body-lg ${testimonial.textColor} mb-6 leading-relaxed`}>
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className={`font-sans font-semibold ${testimonial.textColor}`}>
                    {testimonial.name}
                  </p>
                  <p
                    className={`font-sans text-body-sm ${
                      testimonial.bg === "bg-brand-orange" ? "text-orange-100" : "text-neutral-500"
                    }`}
                  >
                    {testimonial.city}, CO
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
