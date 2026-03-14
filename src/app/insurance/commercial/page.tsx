import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTABanner from "@/components/sections/CTABanner";
import { getCommercialLines } from "@/data/insurance-lines";

export const metadata: Metadata = {
  title: "Commercial Insurance",
  description:
    "Protect your Colorado business with commercial insurance from Colorado Insurance Services. General liability, BOP, commercial auto, workers comp, and more.",
};

export default function CommercialInsurancePage() {
  const lines = getCommercialLines();

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Commercial Insurance" }]} className="mb-8" />
          <FadeIn>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Commercial Insurance
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-2xl">
              Protect your business, employees, and livelihood. We work with multiple carriers to find comprehensive commercial coverage tailored to your industry and budget.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lines.map((line) => (
              <StaggerItem key={line.slug}>
                <Link
                  href={`/insurance/commercial/${line.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <h2 className="font-serif text-heading-sm text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {line.name}
                  </h2>
                  <p className="text-body text-neutral-600 font-sans mb-4">{line.tagline}</p>
                  <p className="text-body-sm text-brand-green font-sans font-semibold mb-4">{line.averageCost}</p>
                  <span className="inline-flex items-center gap-1 text-body font-sans font-semibold text-brand-orange group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner variant="navy" />
    </>
  );
}
