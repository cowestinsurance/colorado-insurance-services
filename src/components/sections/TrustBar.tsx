"use client";

import FadeIn from "@/components/animations/FadeIn";

const carriers = [
  "Nationwide",
  "The Hartford",
  "Liberty Mutual",
  "Travelers",
  "Progressive",
  "Safeco",
  "Chubb",
  "Acuity",
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-y border-neutral-100">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <p className="text-center text-body-sm font-sans font-medium text-neutral-400 uppercase tracking-wider mb-8">
            We shop top-rated carriers to find you the best coverage
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {carriers.map((carrier) => (
              <div
                key={carrier}
                className="flex items-center justify-center h-10 px-4 opacity-40 hover:opacity-70 transition-opacity"
              >
                <span className="font-sans font-semibold text-body text-neutral-500 whitespace-nowrap">
                  {carrier}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
