import type { Metadata } from "next";
import Link from "next/link";
import { Home, Briefcase, ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Get a free, no-obligation insurance quote from Colorado Insurance Services. Personal and commercial insurance quotes for the Denver Metro Area.",
};

export default function GetAQuotePage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: "Get a Quote" }]} className="mb-8" />
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
                Get a free insurance quote
              </h1>
              <p className="text-body-lg text-neutral-600 font-sans">
                Choose your insurance type below and we&apos;ll get you a quote from multiple carriers — usually within 24 hours.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <FadeIn delay={0.1}>
              <Link
                href="/get-a-quote/personal"
                className="group block bg-white rounded-2xl border-2 border-neutral-200 p-8 hover:border-brand-orange hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-brand-orange-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange/10 transition-colors">
                  <Home className="w-8 h-8 text-brand-orange" />
                </div>
                <h2 className="font-serif text-heading text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  Personal Insurance
                </h2>
                <p className="text-body text-neutral-600 font-sans mb-4">
                  Home, auto, renters, and umbrella insurance for you and your family.
                </p>
                <span className="inline-flex items-center gap-2 font-sans font-semibold text-brand-orange group-hover:gap-3 transition-all">
                  Start Quote <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link
                href="/get-a-quote/commercial"
                className="group block bg-white rounded-2xl border-2 border-neutral-200 p-8 hover:border-brand-orange hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-brand-orange-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange/10 transition-colors">
                  <Briefcase className="w-8 h-8 text-brand-orange" />
                </div>
                <h2 className="font-serif text-heading text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  Business Insurance
                </h2>
                <p className="text-body text-neutral-600 font-sans mb-4">
                  General liability, BOP, workers comp, commercial auto, and more.
                </p>
                <span className="inline-flex items-center gap-2 font-sans font-semibold text-brand-orange group-hover:gap-3 transition-all">
                  Start Quote <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-body text-neutral-500 font-sans mb-2">Prefer to talk to someone?</p>
              <a
                href="tel:3035550100"
                className="inline-flex items-center gap-2 font-sans font-semibold text-brand-navy hover:text-brand-orange transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (303) 555-0100
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
