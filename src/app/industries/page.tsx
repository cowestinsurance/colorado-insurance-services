import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTABanner from "@/components/sections/CTABanner";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Business Insurance by Industry",
  description:
    "Find the right business insurance for your industry. Colorado Insurance Services offers tailored coverage for restaurants, contractors, retail, IT, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: "Industries" }]} className="mb-8" />
          <FadeIn>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Business insurance by industry
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-2xl">
              Every industry has unique risks. We help Colorado businesses find the right coverage
              tailored to their specific needs and budget.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <h2 className="font-sans font-semibold text-body-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {industry.name}
                  </h2>
                  <p className="text-body-sm text-neutral-500 font-sans mb-4 line-clamp-2">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner variant="navy" title="Not sure what coverage your business needs?" subtitle="Tell us about your business and we'll recommend the right protection." />
    </>
  );
}
