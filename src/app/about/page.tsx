import type { Metadata } from "next";
import { Users, MapPin, Shield, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTABanner from "@/components/sections/CTABanner";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Colorado Insurance Services is a second-generation, independent insurance agency serving the Denver Metro Area. Learn about our story and commitment to local, personal service.",
};

const values = [
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "We live and work in Colorado. We understand the hail, wildfire, and weather risks unique to the Front Range — and how to protect against them.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "No chatbots, no call centers. When you call us, a real person answers. We build relationships, not transaction counts.",
  },
  {
    icon: Shield,
    title: "Competitive Rates",
    description:
      "As an independent agency, we shop multiple carriers to find you the best coverage at the best price. We work for you, not the insurance company.",
  },
  {
    icon: Handshake,
    title: "Claims Advocacy",
    description:
      "When you need to file a claim, we're in your corner. We guide you through the process and advocate on your behalf to make sure you get what you deserve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: "About" }]} className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="eyebrow mb-4 block">About Us</span>
                <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-6">
                  Second generation. First in service.
                </h1>
                <p className="text-body-lg text-neutral-600 font-sans mb-4">
                  Colorado Insurance Services is the next chapter of a family insurance legacy.
                  We took over from CoWest Insurance Group of Aurora — a business our father built
                  on handshakes, referrals, and doing right by people.
                </p>
                <p className="text-body-lg text-neutral-600 font-sans">
                  We kept everything that made the old business great — the personal relationships,
                  the integrity, the deep knowledge of Colorado — and added the modern tools and
                  digital presence to serve you even better.
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white rounded-3xl shadow-hero p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-beige to-brand-green-bg rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-5xl">👤</span>
                    </div>
                    <p className="font-serif text-heading-sm text-brand-navy">Agent Name</p>
                    <p className="font-sans text-body-sm text-neutral-500">Owner &amp; Agent</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <Container variant="narrow">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Story"
              title="From old-school referrals to modern service"
              align="left"
            />
            <div className="prose prose-lg font-sans text-neutral-600 space-y-4">
              <p>
                For years, CoWest Insurance Group of Aurora operated the way many small agencies
                do — by reputation and referral. Our father built a loyal book of business by
                simply being honest, available, and thorough. He never needed a website because
                his clients did the marketing for him.
              </p>
              <p>
                When we took over, we saw an opportunity: keep the values that made the business
                work, but reach more people who need the same kind of honest, personal insurance
                advice. Colorado Insurance Services was born — an agency that pairs old-school
                integrity with modern convenience.
              </p>
              <p>
                Today, we serve families and businesses across the Denver Metro Area. As an
                independent agency, we represent multiple insurance carriers — which means we
                can shop the market on your behalf and find coverage that actually fits your
                needs and budget. No single-carrier bias. No sales quotas. Just the right
                coverage for you.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-beige">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What sets us apart"
            subtitle="We believe insurance should be simple, personal, and fair."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-brand-orange-bg rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600 font-sans">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner variant="navy" />
    </>
  );
}
