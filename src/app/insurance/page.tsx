import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTABanner from "@/components/sections/CTABanner";
import { getPersonalLines, getCommercialLines } from "@/data/insurance-lines";

export const metadata: Metadata = {
  title: "Insurance Coverage Options",
  description:
    "Explore personal and commercial insurance options from Colorado Insurance Services. Home, auto, renters, umbrella, general liability, BOP, workers comp, and more.",
};

export default function InsurancePage() {
  const personal = getPersonalLines();
  const commercial = getCommercialLines();

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: "Insurance" }]} className="mb-8" />
          <FadeIn>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Insurance coverage for every need
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-2xl">
              Whether you&apos;re protecting your family or your business, we have the coverage options to keep you secure. As an independent agency, we shop multiple carriers for the best rates.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <SectionHeading eyebrow="Personal Insurance" title="Protect what matters most" align="left" />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {personal.map((line) => (
              <StaggerItem key={line.slug}>
                <Link
                  href={`/insurance/personal/${line.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {line.name}
                  </h3>
                  <p className="text-body-sm text-neutral-500 font-sans mb-3">{line.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <SectionHeading eyebrow="Commercial Insurance" title="Protect your business" align="left" />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commercial.map((line) => (
              <StaggerItem key={line.slug}>
                <Link
                  href={`/insurance/commercial/${line.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {line.name}
                  </h3>
                  <p className="text-body-sm text-neutral-500 font-sans mb-3">{line.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
