import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, CloudRain, Home as HomeIcon, DollarSign } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTABanner from "@/components/sections/CTABanner";
import { cities, getCityBySlug } from "@/data/cities";
import { insuranceLines } from "@/data/insurance-lines";

interface CityPageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
  };
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city);
  if (!city) return notFound();

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: city.name }]} className="mb-8" />
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span className="eyebrow">{city.name}, Colorado</span>
            </div>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Insurance services in {city.name}, CO
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-3xl">
              {city.description} Colorado Insurance Services is your local, independent insurance agency serving {city.name} families and businesses with personalized coverage.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Local Factors */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow={`Why ${city.name} Needs Great Insurance`}
            title={`Insurance considerations for ${city.name} residents`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-brand-beige rounded-2xl p-6">
                <CloudRain className="w-8 h-8 text-brand-orange mb-3" />
                <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2">Weather Risks</h3>
                <p className="text-body-sm text-neutral-600 font-sans">{city.localFactors.weatherRisks}</p>
              </div>
            </FadeIn>
            {city.localFactors.medianHomeValue && (
              <FadeIn delay={0.1}>
                <div className="bg-brand-beige rounded-2xl p-6">
                  <HomeIcon className="w-8 h-8 text-brand-orange mb-3" />
                  <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2">Median Home Value</h3>
                  <p className="text-display-sm font-serif text-brand-navy">{city.localFactors.medianHomeValue}</p>
                  <p className="text-body-sm text-neutral-500 font-sans mt-1">Adequate dwelling coverage is essential at this value.</p>
                </div>
              </FadeIn>
            )}
            {city.localFactors.trafficData && (
              <FadeIn delay={0.2}>
                <div className="bg-brand-beige rounded-2xl p-6">
                  <DollarSign className="w-8 h-8 text-brand-orange mb-3" />
                  <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2">Traffic & Auto</h3>
                  <p className="text-body-sm text-neutral-600 font-sans">{city.localFactors.trafficData}</p>
                </div>
              </FadeIn>
            )}
          </div>
        </Container>
      </section>

      {/* Insurance Lines for this city */}
      <section className="section-padding bg-brand-beige">
        <Container>
          <SectionHeading
            eyebrow="Coverage Options"
            title={`Insurance options in ${city.name}`}
            subtitle={`We offer a full range of personal and commercial insurance for ${city.name} residents and businesses.`}
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {insuranceLines.map((line) => (
              <StaggerItem key={line.slug}>
                <Link
                  href={`/${city.slug}/${line.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {line.name}
                  </h3>
                  <p className="text-body-sm text-neutral-500 font-sans mb-3">
                    {line.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                    {line.shortName} in {city.name} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner title={`Get a free insurance quote in ${city.name}`} />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            name: "Colorado Insurance Services",
            url: `https://coloradoinsuranceservices.com/${city.slug}`,
            areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Colorado" } },
            address: {
              "@type": "PostalAddress",
              streetAddress: "14212 Piney River Rd",
              addressLocality: "Broomfield",
              addressRegion: "CO",
              postalCode: "80023",
            },
            telephone: "+13035550100",
          }),
        }}
      />
    </>
  );
}
