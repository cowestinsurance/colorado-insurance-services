"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import FadeIn from "@/components/animations/FadeIn";
import type { FAQ } from "@/types/insurance";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  faqs: FAQ[];
  className?: string;
}

const defaultFAQs: FAQ[] = [
  {
    question: "What types of insurance do you offer?",
    answer:
      "We offer a full range of personal insurance (home, auto, renters, umbrella) and commercial insurance (general liability, business owners policy, commercial auto, workers compensation, commercial property, and professional liability). We do not sell life or health insurance.",
  },
  {
    question: "How is an independent agent different from a direct carrier?",
    answer:
      "Unlike agents who work for a single insurance company, we're independent — meaning we shop multiple carriers to find you the best coverage at the most competitive price. We work for you, not the insurance company.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Denver Metro Area, including Denver, Aurora, Lakewood, Broomfield, Westminster, Arvada, Thornton, Boulder, Centennial, and Littleton. Our office is located in Broomfield, CO.",
  },
  {
    question: "How long does it take to get a quote?",
    answer:
      "Most quotes can be prepared within 24 hours. For straightforward personal lines like auto insurance, we can often provide quotes the same day. Commercial insurance may take slightly longer depending on the complexity of your business.",
  },
  {
    question: "Do I have to pay anything for a quote?",
    answer:
      "No — our quotes are always free with no obligation. We believe in earning your business by finding you the right coverage, not by pressuring you into a sale.",
  },
  {
    question: "Can you help with claims?",
    answer:
      "Absolutely. One of the biggest advantages of working with a local agent is having someone in your corner when you need to file a claim. We'll guide you through the process, advocate on your behalf, and make sure you get the coverage you're paying for.",
  },
];

export default function FAQSection({
  title = "Frequently asked questions",
  subtitle = "Have more questions? We're always happy to help — give us a call or send us a message.",
  eyebrow = "FAQ",
  faqs,
  className = "",
}: FAQSectionProps) {
  const faqItems = faqs.length > 0 ? faqs : defaultFAQs;

  return (
    <section className={`section-padding bg-brand-beige ${className}`}>
      <Container variant="narrow">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <FadeIn>
          <Accordion items={faqItems} />
        </FadeIn>
      </Container>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
