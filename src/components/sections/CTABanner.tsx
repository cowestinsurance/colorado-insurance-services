"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

interface CTABannerProps {
  variant?: "orange" | "navy";
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
}

export default function CTABanner({
  variant = "orange",
  title = "Ready to protect what matters most?",
  subtitle = "Get a free, no-obligation quote from a local Colorado agent today.",
  showPhone = true,
}: CTABannerProps) {
  const bgClass = variant === "orange" ? "bg-brand-orange" : "bg-brand-navy";
  const textClass = "text-white";
  const subtitleClass = variant === "orange" ? "text-orange-100" : "text-neutral-300";

  return (
    <section className={`py-20 ${bgClass} relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={`font-serif text-display-sm md:text-display ${textClass} mb-4`}>
              {title}
            </h2>
            <p className={`text-body-lg font-sans ${subtitleClass} mb-8`}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-sans font-semibold text-body-lg rounded-xl transition-all duration-200 hover:-translate-y-[1px] shadow-sm hover:shadow-md ${
                  variant === "orange"
                    ? "bg-white text-brand-orange hover:bg-neutral-100"
                    : "bg-brand-orange text-white hover:bg-brand-orange-light"
                }`}
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              {showPhone && (
                <a
                  href="tel:3035550100"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-sans font-semibold text-body-lg rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  (303) 555-0100
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
