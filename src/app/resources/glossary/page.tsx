import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { glossaryTerms } from "@/data/glossary-terms";

export const metadata: Metadata = {
  title: "Insurance Glossary",
  description:
    "Plain-English definitions of common insurance terms. Understand premiums, deductibles, coverage limits, and more with our insurance glossary.",
};

export default function GlossaryPage() {
  const sortedTerms = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  // Group by first letter
  const grouped = sortedTerms.reduce<Record<string, typeof glossaryTerms>>(
    (acc, term) => {
      const letter = term.term.charAt(0).toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(term);
      return acc;
    },
    {}
  );

  const letters = Object.keys(grouped).sort();

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Resources", href: "/resources/glossary" },
              { label: "Glossary" },
            ]}
            className="mb-8"
          />
          <FadeIn>
            <span className="eyebrow mb-3 block">Insurance Glossary</span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Insurance terms explained
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-3xl">
              Insurance can be confusing. Here&apos;s a plain-English glossary of the most common terms you&apos;ll encounter.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container variant="narrow">
          {/* Letter navigation */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-body-sm font-sans font-semibold text-brand-navy bg-brand-beige hover:bg-brand-orange hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          <FadeIn>
            <div className="space-y-10">
              {letters.map((letter) => (
                <div key={letter} id={`letter-${letter}`}>
                  <h2 className="font-serif text-heading text-brand-navy border-b border-neutral-200 pb-2 mb-4">
                    {letter}
                  </h2>
                  <div className="space-y-6">
                    {grouped[letter].map((term) => (
                      <div key={term.slug} id={term.slug}>
                        <Link
                          href={`/resources/glossary/${term.slug}`}
                          className="font-sans font-semibold text-body-lg text-brand-navy hover:text-brand-orange transition-colors"
                        >
                          {term.term}
                        </Link>
                        <p className="text-body text-neutral-600 font-sans mt-1">
                          {term.definition.slice(0, 200)}
                          {term.definition.length > 200 ? "..." : ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
