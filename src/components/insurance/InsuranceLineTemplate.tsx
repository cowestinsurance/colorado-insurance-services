import Link from "next/link";
import {
  CheckCircle2, XCircle, DollarSign, ArrowRight, Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import type { InsuranceLine } from "@/types/insurance";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

interface InsuranceLineTemplateProps {
  line: InsuranceLine;
}

export default function InsuranceLineTemplate({ line }: InsuranceLineTemplateProps) {
  const breadcrumbItems = line.type === "personal"
    ? [
        { label: "Insurance", href: "/insurance" },
        { label: "Personal", href: "/insurance/personal" },
        { label: line.name },
      ]
    : [
        { label: "Insurance", href: "/insurance" },
        { label: "Commercial", href: "/insurance/commercial" },
        { label: line.name },
      ];

  const relatedLines = line.relatedLines
    .map((slug) => getInsuranceLineBySlug(slug))
    .filter(Boolean) as InsuranceLine[];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
          <FadeIn>
            <span className="eyebrow mb-3 block">{line.type === "personal" ? "Personal Insurance" : "Commercial Insurance"}</span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              {line.name}
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-3xl">{line.tagline}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Overview / Definition */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-serif text-heading-lg text-brand-navy mb-6">
                  What is {line.name}?
                </h2>
                <p className="text-body-lg text-neutral-600 font-sans leading-relaxed">
                  {line.description}
                </p>
              </FadeIn>
            </div>

            {/* Quick Quote CTA Sidebar */}
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-brand-beige rounded-2xl p-6 sticky top-28">
                <h3 className="font-serif text-heading-sm text-brand-navy mb-3">
                  Get a {line.shortName} Quote
                </h3>
                <p className="text-body-sm text-neutral-600 font-sans mb-4">
                  Free, no-obligation quote from a local Colorado agent.
                </p>
                <p className="text-body-sm font-sans font-semibold text-brand-green mb-4">
                  {line.averageCost}
                </p>
                <Link
                  href={`/get-a-quote/${line.type === "personal" ? "personal" : "commercial"}?type=${line.slug}`}
                  className="block w-full text-center px-6 py-3 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-all duration-200 hover:-translate-y-[1px] mb-3"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:3035550100"
                  className="block w-full text-center px-6 py-3 border-2 border-brand-navy text-brand-navy font-sans font-semibold rounded-xl hover:bg-brand-navy hover:text-white transition-all duration-200"
                >
                  Call (303) 555-0100
                </a>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Coverage Details */}
      <section className="section-padding bg-brand-beige">
        <Container>
          <SectionHeading
            eyebrow="Coverage Details"
            title={`What does ${line.shortName.toLowerCase()} insurance cover?`}
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Covered */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-sans font-semibold text-body-lg text-brand-green mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  What&apos;s Covered
                </h3>
                <ul className="space-y-3">
                  {line.coverageIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-body font-sans text-neutral-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Not Covered */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-sans font-semibold text-body-lg text-neutral-500 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  What&apos;s Not Covered
                </h3>
                <ul className="space-y-3">
                  {line.coverageExcludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-body font-sans text-neutral-500">
                      <XCircle className="w-4 h-4 text-neutral-400 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Cost Factors */}
      <section className="section-padding bg-white">
        <Container variant="narrow">
          <FadeIn>
            <SectionHeading
              eyebrow="Pricing Factors"
              title={`What affects your ${line.shortName.toLowerCase()} insurance cost?`}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {line.costFactors.map((factor, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-brand-beige rounded-xl">
                  <DollarSign className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="text-body font-sans text-brand-navy">{factor}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Who Needs This */}
      <section className="py-16 bg-brand-green text-white">
        <Container variant="narrow">
          <FadeIn>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-green-200 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-heading text-white mb-4">
                  Who needs {line.shortName.toLowerCase()} insurance?
                </h2>
                <p className="text-body-lg font-sans text-green-100 leading-relaxed">
                  {line.whoNeedsThis}
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-beige">
        <Container variant="narrow">
          <SectionHeading
            eyebrow="FAQ"
            title={`${line.shortName} insurance questions`}
            subtitle="Have more questions? We're always happy to help."
          />
          <FadeIn>
            <Accordion items={line.faqs} />
          </FadeIn>
        </Container>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: line.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      </section>

      {/* Related Coverage */}
      {relatedLines.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              eyebrow="Related Coverage"
              title="You may also need"
              subtitle="Many of our clients bundle these coverages for better rates and complete protection."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {relatedLines.map((related) => (
                <Link
                  key={related.slug}
                  href={`/insurance/${related.type === "personal" ? "personal" : "commercial"}/${related.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-body-sm text-neutral-500 font-sans mb-3">{related.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABanner variant="navy" title={`Ready to get ${line.shortName.toLowerCase()} insurance?`} />
    </>
  );
}
