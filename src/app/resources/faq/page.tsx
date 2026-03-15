import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { insuranceLines } from "@/data/insurance-lines";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common insurance questions — home, auto, business, and more. Get expert answers from Colorado Insurance Services.",
};

export default function FAQPage() {
  const lineGroups = insuranceLines.map((line) => ({
    name: line.name,
    type: line.type,
    faqs: line.faqs,
  }));

  const personalLines = lineGroups.filter((l) => l.type === "personal");
  const commercialLines = lineGroups.filter((l) => l.type === "commercial");

  const generalFaqs = [
    {
      question: "What is an independent insurance agent?",
      answer:
        "An independent insurance agent represents multiple insurance companies, not just one. This means we can shop the market on your behalf, comparing coverage and pricing across many carriers to find the best fit for your needs and budget. We work for you, not the insurance company.",
    },
    {
      question: "How much does insurance cost?",
      answer:
        "Insurance costs vary significantly based on what you're insuring, your location, coverage limits, deductible, and risk factors. The best way to get an accurate price is to request a personalized quote. As an independent agency, we compare rates from multiple carriers to find you the most competitive price.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve the entire Denver Metro Area, including Denver, Aurora, Lakewood, Broomfield, Westminster, Arvada, Thornton, Boulder, Centennial, and Littleton. While our physical office is in Broomfield, we work with clients throughout Colorado.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "Contact us first — we'll guide you through the entire claims process. We'll help you report the claim to your carrier, document the damage, work with adjusters, and advocate on your behalf to ensure you get a fair settlement. Having an agent in your corner makes a big difference.",
    },
    {
      question: "Can I bundle my insurance policies?",
      answer:
        "Yes! Most carriers offer multi-policy discounts when you bundle. Common bundles include home + auto, and for businesses, a Business Owners Policy (BOP) bundles general liability with commercial property coverage. Bundling typically saves 10-25% on premiums.",
    },
    {
      question: "How often should I review my insurance?",
      answer:
        "We recommend reviewing your insurance annually, or whenever you experience a major life or business change — buying a home, getting married, starting a business, adding a vehicle, hiring employees, or expanding operations. Regular reviews ensure you're not over- or under-insured.",
    },
  ];

  const allFaqs = [
    ...generalFaqs,
    ...lineGroups.flatMap((l) => l.faqs),
  ];

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Resources" },
              { label: "FAQ" },
            ]}
            className="mb-8"
          />
          <FadeIn>
            <span className="eyebrow mb-3 block">FAQ</span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Frequently asked questions
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-3xl">
              Find answers to common insurance questions. Can&apos;t find what you&apos;re looking for? Contact us — we&apos;re happy to help.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* General FAQs */}
      <section className="section-padding bg-white">
        <Container variant="narrow">
          <SectionHeading eyebrow="General" title="General insurance questions" align="left" />
          <FadeIn>
            <Accordion items={generalFaqs} />
          </FadeIn>
        </Container>
      </section>

      {/* Personal Lines FAQs */}
      <section className="section-padding bg-brand-beige">
        <Container variant="narrow">
          <SectionHeading eyebrow="Personal Insurance" title="Home, auto, renters & umbrella" align="left" />
          {personalLines.map((line) => (
            <div key={line.name} className="mb-8 last:mb-0">
              <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-3">
                {line.name}
              </h3>
              <Accordion items={line.faqs} />
            </div>
          ))}
        </Container>
      </section>

      {/* Commercial Lines FAQs */}
      <section className="section-padding bg-white">
        <Container variant="narrow">
          <SectionHeading eyebrow="Business Insurance" title="Commercial insurance questions" align="left" />
          {commercialLines.map((line) => (
            <div key={line.name} className="mb-8 last:mb-0">
              <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-3">
                {line.name}
              </h3>
              <Accordion items={line.faqs} />
            </div>
          ))}
        </Container>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <CTABanner />
    </>
  );
}
