"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const cities = [
  { name: "Denver", slug: "denver" },
  { name: "Aurora", slug: "aurora" },
  { name: "Lakewood", slug: "lakewood" },
  { name: "Broomfield", slug: "broomfield" },
  { name: "Westminster", slug: "westminster" },
  { name: "Arvada", slug: "arvada" },
  { name: "Thornton", slug: "thornton" },
  { name: "Boulder", slug: "boulder" },
  { name: "Centennial", slug: "centennial" },
  { name: "Littleton", slug: "littleton" },
];

export default function CityServiceArea() {
  return (
    <section className="section-padding bg-brand-beige">
      <Container>
        <SectionHeading
          eyebrow="Service Area"
          title="Serving the Denver Metro Area"
          subtitle="We proudly serve families and businesses across these Colorado communities."
        />

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cities.map((city) => (
            <StaggerItem key={city.slug}>
              <Link
                href={`/${city.slug}`}
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-brand-orange hover:shadow-card transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span className="font-sans font-semibold text-body text-brand-navy group-hover:text-brand-orange transition-colors">
                  {city.name}
                </span>
                <span className="text-caption text-neutral-400 font-sans">CO</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-sans font-semibold text-brand-orange hover:text-brand-orange-light transition-colors group"
          >
            Don&apos;t see your city? We may still serve your area
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}