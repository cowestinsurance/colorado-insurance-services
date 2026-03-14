"use client";

import Link from "next/link";
import {
  Home, Car, Building2, Umbrella, Shield, Briefcase,
  Truck, HardHat, Building, Scale, ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const personalLines = [
  { name: "Home Insurance", href: "/insurance/personal/home-insurance", icon: Home, description: "Protect your home, belongings, and liability." },
  { name: "Auto Insurance", href: "/insurance/personal/auto-insurance", icon: Car, description: "Coverage for your vehicles and drivers." },
  { name: "Renters Insurance", href: "/insurance/personal/renters-insurance", icon: Building2, description: "Protect your belongings as a renter." },
  { name: "Umbrella Insurance", href: "/insurance/personal/umbrella-insurance", icon: Umbrella, description: "Extra liability protection beyond your policies." },
];

const commercialLines = [
  { name: "General Liability", href: "/insurance/commercial/general-liability", icon: Shield, description: "Essential protection for every business." },
  { name: "Business Owners Policy", href: "/insurance/commercial/business-owners-policy", icon: Briefcase, description: "Bundled coverage at a better price." },
  { name: "Commercial Auto", href: "/insurance/commercial/commercial-auto", icon: Truck, description: "Coverage for business vehicles and fleets." },
  { name: "Workers Compensation", href: "/insurance/commercial/workers-compensation", icon: HardHat, description: "Protect your employees on the job." },
  { name: "Commercial Property", href: "/insurance/commercial/commercial-property", icon: Building, description: "Protect your building, equipment, and inventory." },
  { name: "Professional Liability", href: "/insurance/commercial/professional-liability", icon: Scale, description: "Coverage for professional errors and omissions." },
];

function InsuranceCard({
  name,
  href,
  icon: Icon,
  description,
}: {
  name: string;
  href: string;
  icon: React.ElementType;
  description: string;
}) {
  return (
    <StaggerItem>
      <Link
        href={href}
        className="group block bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-brand-orange-bg rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 transition-colors">
          <Icon className="w-6 h-6 text-brand-orange" />
        </div>
        <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
          {name}
        </h3>
        <p className="text-body-sm text-neutral-500 font-sans mb-3">{description}</p>
        <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </StaggerItem>
  );
}

export default function InsuranceLines() {
  return (
    <section className="section-padding bg-brand-beige">
      <Container>
        <SectionHeading
          eyebrow="What We Cover"
          title="Insurance solutions for every need"
          subtitle="Whether you're protecting your family or your business, we have the coverage options to keep you secure."
        />

        {/* Personal Lines */}
        <div className="mb-16">
          <h3 className="font-sans font-semibold text-heading-sm text-brand-navy mb-6 text-center">
            Personal Insurance
          </h3>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalLines.map((line) => (
              <InsuranceCard key={line.href} {...line} />
            ))}
          </StaggerChildren>
        </div>

        {/* Commercial Lines */}
        <div>
          <h3 className="font-sans font-semibold text-heading-sm text-brand-navy mb-6 text-center">
            Commercial Insurance
          </h3>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commercialLines.map((line) => (
              <InsuranceCard key={line.href} {...line} />
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}