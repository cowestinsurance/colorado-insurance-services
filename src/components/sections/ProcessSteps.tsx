"use client";

import { MessageSquare, Search, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Tell Us About Yourself",
    description:
      "Fill out a quick form or give us a call. We'll learn about your needs, whether it's home, auto, or business insurance.",
  },
  {
    number: "2",
    icon: Search,
    title: "We Shop the Market",
    description:
      "We compare quotes from multiple top-rated carriers to find you the best coverage at the most competitive price.",
  },
  {
    number: "3",
    icon: ShieldCheck,
    title: "Get Covered",
    description:
      "Review your options with a real person, choose the best fit, and get covered — often the same day.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Getting covered is easy"
          subtitle="Three simple steps to the right insurance for you."
        />

        <StaggerChildren className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="text-center">
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center font-sans font-bold text-body-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-heading-sm text-brand-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-body text-neutral-600 font-sans max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
