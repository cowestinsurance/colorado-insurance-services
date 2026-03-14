"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";

export default function AgentStory() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <FadeIn direction="left">
            <div className="bg-brand-beige rounded-3xl p-8 aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">👤</span>
                </div>
                <p className="font-sans text-body-sm text-neutral-500">Agent Photo Placeholder</p>
              </div>
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn direction="right">
            <span className="eyebrow mb-4 block">Our Story</span>
            <h2 className="font-serif text-display-sm md:text-display text-brand-navy mb-6">
              Second generation. First in service.
            </h2>
            <p className="text-body-lg text-neutral-600 font-sans mb-4">
              Colorado Insurance Services carries on a family tradition of helping
              Coloradans protect what matters most. We took over from CoWest Insurance
              Group of Aurora — a business built on referrals and relationships — and
              brought it into the modern age.
            </p>
            <p className="text-body-lg text-neutral-600 font-sans mb-6">
              As an independent agency, we&apos;re not tied to any single insurance company.
              That means we work for <em>you</em>, shopping multiple carriers to find the best
              coverage and price. And because we&apos;re local to the Denver Metro Area, we
              understand the unique risks Colorado families and businesses face.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans font-semibold text-brand-orange hover:text-brand-orange-light transition-colors group"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
