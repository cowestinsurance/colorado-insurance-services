"use client";

import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SVGDraw from "@/components/animations/SVGDraw";

export default function Hero() {
  return (
    <section className="relative bg-brand-beige overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative SVG lines */}
      <div className="absolute top-20 right-0 opacity-30 pointer-events-none hidden lg:block">
        <SVGDraw
          d="M0,80 Q100,10 200,80 T400,80"
          width={400}
          height={120}
          strokeColor="#eb6424"
          strokeWidth={2}
          duration={2}
          delay={0.5}
        />
      </div>
      <div className="absolute bottom-10 left-0 opacity-20 pointer-events-none hidden lg:block">
        <SVGDraw
          d="M0,40 Q80,100 160,40 T320,40"
          width={320}
          height={120}
          strokeColor="#226f54"
          strokeWidth={2}
          duration={2}
          delay={0.8}
        />
      </div>

      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <FadeIn direction="up" delay={0.1}>
              <span className="eyebrow mb-4 block">Denver Metro&apos;s Trusted Insurance Agency</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-brand-navy mb-6">
                A <em className="text-brand-orange not-italic">human</em> approach to Colorado insurance.
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-body-lg text-neutral-600 font-sans mb-8 max-w-lg">
                We&apos;re a local, independent agency that shops multiple carriers to find
                you the best coverage at the best price. No chatbots, no call centers — just
                real people who know Colorado.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-sans font-semibold text-body-lg rounded-xl hover:bg-brand-orange-light transition-all duration-200 hover:-translate-y-[1px] shadow-sm hover:shadow-md"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:3035550100"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-navy text-brand-navy font-sans font-semibold text-body-lg rounded-xl hover:bg-brand-navy hover:text-white transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Talk to an Agent
                </a>
              </div>
            </FadeIn>

            {/* Trust signals */}
            <FadeIn direction="up" delay={0.5}>
              <div className="flex items-center gap-6 text-body-sm font-sans text-neutral-500">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <span className="ml-1 font-semibold text-brand-navy">5.0</span>
                  <span>Google Reviews</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-neutral-300" />
                <span className="hidden sm:block">Serving Colorado Since 2024</span>
              </div>
            </FadeIn>
          </div>

          {/* Right: Image placeholder */}
          <FadeIn direction="right" delay={0.3}>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-hero p-8 md:p-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-beige to-brand-green-bg rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🏔️</span>
                    </div>
                    <p className="font-serif text-heading-sm text-brand-navy">
                      Protecting Colorado
                    </p>
                    <p className="font-sans text-body-sm text-neutral-500 mt-1">
                      Families &amp; Businesses
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-brand-green text-white rounded-2xl px-5 py-3 shadow-card">
                <p className="font-sans font-bold text-body-lg">10+</p>
                <p className="font-sans text-caption text-green-100">Cities Served</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
