"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const insuranceOptions = [
  { value: "home-insurance", label: "Home Insurance", type: "personal" },
  { value: "auto-insurance", label: "Auto Insurance", type: "personal" },
  { value: "renters-insurance", label: "Renters Insurance", type: "personal" },
  { value: "umbrella-insurance", label: "Umbrella Insurance", type: "personal" },
  { value: "general-liability", label: "General Liability", type: "commercial" },
  { value: "business-owners-policy", label: "Business Owners Policy", type: "commercial" },
  { value: "commercial-auto", label: "Commercial Auto", type: "commercial" },
  { value: "workers-compensation", label: "Workers Compensation", type: "commercial" },
  { value: "commercial-property", label: "Commercial Property", type: "commercial" },
  { value: "professional-liability", label: "Professional Liability", type: "commercial" },
];

export default function QuoteInitiator() {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;

    const option = insuranceOptions.find((o) => o.value === selected);
    if (option) {
      const quoteType = option.type === "personal" ? "personal" : "commercial";
      router.push(`/get-a-quote/${quoteType}?type=${selected}`);
    }
  };

  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-display-sm md:text-display text-white mb-4">
              What kind of insurance do you need?
            </h2>
            <p className="text-body-lg text-neutral-300 font-sans mb-8">
              Select your insurance type and get started with a free, no-obligation quote.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="flex-1 px-5 py-4 rounded-xl font-sans text-body text-brand-navy bg-white border-0 focus:outline-none focus:ring-2 focus:ring-brand-orange appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Choose insurance type...
                </option>
                <optgroup label="Personal Insurance">
                  {insuranceOptions
                    .filter((o) => o.type === "personal")
                    .map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                </optgroup>
                <optgroup label="Commercial Insurance">
                  {insuranceOptions
                    .filter((o) => o.type === "commercial")
                    .map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                </optgroup>
              </select>
              <button
                type="submit"
                disabled={!selected}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-[1px] shadow-sm hover:shadow-md"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
