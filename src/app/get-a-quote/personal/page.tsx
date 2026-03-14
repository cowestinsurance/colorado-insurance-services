import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import PersonalQuoteForm from "@/components/forms/PersonalQuoteForm";

export const metadata: Metadata = {
  title: "Personal Insurance Quote",
  description:
    "Get a free personal insurance quote — home, auto, renters, or umbrella. Colorado Insurance Services shops multiple carriers for the best rates.",
};

export default function PersonalQuotePage() {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 bg-brand-beige">
        <Container variant="narrow">
          <Breadcrumbs
            items={[
              { label: "Get a Quote", href: "/get-a-quote" },
              { label: "Personal Insurance" },
            ]}
            className="mb-8"
          />
          <FadeIn>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Personal insurance quote
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans">
              Tell us a bit about yourself and what you need. We&apos;ll shop multiple carriers and get back to you with options — usually within 24 hours.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container variant="narrow">
          <Suspense fallback={null}>
            <PersonalQuoteForm />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
