import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { glossaryTerms, getGlossaryTermBySlug } from "@/data/glossary-terms";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

interface GlossaryTermPageProps {
  params: { term: string };
}

export async function generateStaticParams() {
  return glossaryTerms.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({ params }: GlossaryTermPageProps): Promise<Metadata> {
  const term = getGlossaryTermBySlug(params.term);
  if (!term) return {};
  return {
    title: `${term.term} — Insurance Glossary`,
    description: term.definition.slice(0, 160),
  };
}

export default function GlossaryTermPage({ params }: GlossaryTermPageProps) {
  const term = getGlossaryTermBySlug(params.term);
  if (!term) return notFound();

  const relatedTermObjects = (term.relatedTerms || [])
    .map((slug) => getGlossaryTermBySlug(slug))
    .filter(Boolean);

  const relatedLine = term.relatedLine
    ? getInsuranceLineBySlug(term.relatedLine)
    : null;

  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 bg-brand-beige">
        <Container variant="narrow">
          <Breadcrumbs
            items={[
              { label: "Resources" },
              { label: "Glossary", href: "/resources/glossary" },
              { label: term.term },
            ]}
            className="mb-8"
          />
          <FadeIn>
            <Link
              href="/resources/glossary"
              className="inline-flex items-center gap-1 text-body-sm font-sans text-neutral-500 hover:text-brand-orange transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back to glossary
            </Link>
            <span className="eyebrow mb-3 block">Insurance Term</span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy">
              {term.term}
            </h1>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container variant="narrow">
          <FadeIn>
            <div className="bg-brand-beige rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="font-sans font-semibold text-body-lg text-brand-navy mb-3">
                Definition
              </h2>
              <p className="text-body-lg text-neutral-700 font-sans leading-relaxed">
                {term.definition}
              </p>
            </div>

            {relatedLine && (
              <div className="mb-8">
                <h2 className="font-serif text-heading-sm text-brand-navy mb-4">
                  Related coverage
                </h2>
                <Link
                  href={`/insurance/${relatedLine.type === "personal" ? "personal" : "commercial"}/${relatedLine.slug}`}
                  className="group flex items-center justify-between bg-white border border-neutral-200 rounded-2xl p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div>
                    <h3 className="font-sans font-semibold text-body-lg text-brand-navy group-hover:text-brand-orange transition-colors">
                      {relatedLine.name}
                    </h3>
                    <p className="text-body-sm text-neutral-500 font-sans">
                      {relatedLine.tagline}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-orange flex-shrink-0" />
                </Link>
              </div>
            )}

            {relatedTermObjects.length > 0 && (
              <div>
                <h2 className="font-serif text-heading-sm text-brand-navy mb-4">
                  Related terms
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {relatedTermObjects.map(
                    (related) =>
                      related && (
                        <Link
                          key={related.slug}
                          href={`/resources/glossary/${related.slug}`}
                          className="group flex items-center gap-3 bg-brand-beige rounded-xl p-4 hover:bg-brand-orange-bg transition-colors"
                        >
                          <span className="font-sans font-semibold text-body text-brand-navy group-hover:text-brand-orange transition-colors">
                            {related.term}
                          </span>
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}
          </FadeIn>
        </Container>
      </section>

      {/* DefinedTerm Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: term.term,
            description: term.definition,
          }),
        }}
      />

      <CTABanner />
    </>
  );
}
