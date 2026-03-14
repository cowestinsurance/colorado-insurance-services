import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { cities, getCityBySlug } from "@/data/cities";
import { insuranceLines, getInsuranceLineBySlug } from "@/data/insurance-lines";

interface CityLinePage {
  params: { city: string; line: string };
}

export async function generateStaticParams() {
  const params: { city: string; line: string }[] = [];
  for (const city of cities) {
    for (const line of insuranceLines) {
      params.push({ city: city.slug, line: line.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: CityLinePage): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  const line = getInsuranceLineBySlug(params.line);
  if (!city || !line) return {};
  return {
    title: `${line.name} in ${city.name}, CO | Colorado Insurance Services`,
    description: `Get ${line.name.toLowerCase()} in ${city.name}, Colorado. Compare quotes from multiple carriers with a local, independent agent. Free, no-obligation quotes.`,
  };
}

export default function CityLinePage({ params }: CityLinePage) {
  const city = getCityBySlug(params.city);
  const line = getInsuranceLineBySlug(params.line);
  if (!city || !line) return notFound();

  // City-localized FAQs
  const localizedFaqs = line.faqs.map((faq) => ({
    question: faq.question.replace(/in Colorado/gi, `in ${city.name}, CO`).replace(/Colorado /gi, `${city.name} `),
    answer: faq.answer,
  }));

  // Related: same line in other cities
  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 4);
  // Related: other lines in same city
  const otherLines = insuranceLines.filter((l) => l.slug !== line.slug).slice(0, 4);

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs
            items={[
              { label: city.name, href: `/${city.slug}` },
              { label: line.name },
            ]}
            className="mb-8"
          />
          <FadeIn>
            <span className="eyebrow mb-3 block">{city.name}, Colorado</span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              {line.name} in {city.name}, CO
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-3xl">
              {line.tagline} Colorado Insurance Services shops multiple carriers to find {city.name} residents the best {line.shortName.toLowerCase()} coverage at competitive rates.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* City-specific intro */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-serif text-heading-lg text-brand-navy mb-6">
                  Why {city.name} residents need {line.shortName.toLowerCase()} insurance
                </h2>
                <p className="text-body-lg text-neutral-600 font-sans leading-relaxed mb-4">
                  {city.insuranceContext}
                </p>
                <p className="text-body-lg text-neutral-600 font-sans leading-relaxed">
                  {line.description}
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-brand-beige rounded-2xl p-6 sticky top-28">
                <h3 className="font-serif text-heading-sm text-brand-navy mb-3">
                  Get a {line.shortName} Quote in {city.name}
                </h3>
                <p className="text-body-sm text-brand-green font-sans font-semibold mb-4">
                  {line.averageCost}
                </p>
                <Link
                  href={`/get-a-quote/${line.type === "personal" ? "personal" : "commercial"}?type=${line.slug}`}
                  className="block w-full text-center px-6 py-3 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-all duration-200 mb-3"
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

      {/* Coverage highlights */}
      <section className="section-padding bg-brand-beige">
        <Container variant="narrow">
          <SectionHeading
            eyebrow="Coverage"
            title={`What ${line.shortName.toLowerCase()} insurance covers in ${city.name}`}
          />
          <FadeIn>
            <div className="bg-white rounded-2xl p-6">
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
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <Container variant="narrow">
          <SectionHeading
            eyebrow="FAQ"
            title={`${line.shortName} insurance questions in ${city.name}`}
          />
          <FadeIn>
            <Accordion items={localizedFaqs} />
          </FadeIn>
        </Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: localizedFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      </section>

      {/* Cross-links */}
      <section className="section-padding bg-brand-beige">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Same line, other cities */}
            <div>
              <h3 className="font-sans font-semibold text-heading-sm text-brand-navy mb-4">
                {line.shortName} in other cities
              </h3>
              <ul className="space-y-2">
                {otherCities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/${c.slug}/${line.slug}`} className="flex items-center gap-2 text-body font-sans text-neutral-600 hover:text-brand-orange transition-colors">
                      <ArrowRight className="w-4 h-4" />
                      {line.name} in {c.name}, CO
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Same city, other lines */}
            <div>
              <h3 className="font-sans font-semibold text-heading-sm text-brand-navy mb-4">
                More insurance in {city.name}
              </h3>
              <ul className="space-y-2">
                {otherLines.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/${city.slug}/${l.slug}`} className="flex items-center gap-2 text-body font-sans text-neutral-600 hover:text-brand-orange transition-colors">
                      <ArrowRight className="w-4 h-4" />
                      {l.name} in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner variant="navy" title={`Ready for ${line.shortName.toLowerCase()} insurance in ${city.name}?`} />
    </>
  );
}
