import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import CommercialQuoteForm from "@/components/forms/CommercialQuoteForm";

export const metadata: Metadata = {
  title: "Commercial Insurance Quote",
  description:
    "Get a free commercial insurance quote for your Colorado business. General liability, BOP, workers comp, commercial auto, and more.",
};

export default function CommercialQuotePage() {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 bg-brand-beige">
        <Container variant="narrow">
          <Breadcrumbs
            items={[
              { label: "Get a Quote", href: "/get-a-quote" },
              { label: "Commercial Insurance" },
            ]}
            className="mb-8"
          />
          <FadeIn>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Business insurance quote
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans">
              Tell us about your business and what coverage you need. We&apos;ll find the right protection at the best price.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container variant="narrow">
          <CommercialQuoteForm />
        </Container>
      </section>
    </>
  );
}
