import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { industries, getIndustryBySlug } from "@/data/industries";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

interface IndustryPageProps {
  params: { industry: string };
}

export async function generateStaticParams() {
  return industries.map((ind) => ({ industry: ind.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = getIndustryBySlug(params.industry);
  if (!industry) return {};
  return { title: industry.metaTitle, description: industry.metaDescription };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.industry);
  if (!industry) return notFound();

  const recommendedLines = industry.recommendedCoverage
    .map((slug) => getInsuranceLineBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: industry.name }]} className="mb-8" />
          <FadeIn>
            <span className="eyebrow mb-3 block">Industry Insurance</span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              {industry.name} Insurance
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-3xl">{industry.description}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Common Risks */}
      <section className="section-padding bg-white">
        <Container variant="narrow">
          <SectionHeading eyebrow="Common Risks" title={`Risks facing ${industry.name.toLowerCase()} businesses`} />
          <FadeIn>
            <div className="space-y-3">
              {industry.commonRisks.map((risk, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-brand-beige rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="text-body font-sans text-brand-navy">{risk}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Recommended Coverage */}
      <section className="section-padding bg-brand-beige">
        <Container>
          <SectionHeading eyebrow="Recommended Coverage" title={`Insurance for ${industry.name.toLowerCase()}`} subtitle="We recommend the following coverage for your industry. Every business is different — we'll help you customize the right package." />
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {recommendedLines.map((line) => line && (
              <FadeIn key={line.slug}>
                <Link
                  href={`/insurance/${line.type === "personal" ? "personal" : "commercial"}/${line.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {line.name}
                  </h3>
                  <p className="text-body-sm text-neutral-500 font-sans mb-3">{line.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {industry.faqs.length > 0 && (
        <section className="section-padding bg-white">
          <Container variant="narrow">
            <SectionHeading eyebrow="FAQ" title={`${industry.name} insurance questions`} />
            <FadeIn>
              <Accordion items={industry.faqs} />
            </FadeIn>
          </Container>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: industry.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              }),
            }}
          />
        </section>
      )}

      <CTABanner title={`Get a free ${industry.name.toLowerCase()} insurance quote`} subtitle="Tell us about your business and we'll find the right coverage at the best price." />
    </>
  );
}
