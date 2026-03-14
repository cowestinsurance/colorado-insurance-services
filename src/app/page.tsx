import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import InsuranceLines from "@/components/sections/InsuranceLines";
import ProcessSteps from "@/components/sections/ProcessSteps";
import QuoteInitiator from "@/components/sections/QuoteInitiator";
import AgentStory from "@/components/sections/AgentStory";
import CityServiceArea from "@/components/sections/CityServiceArea";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <InsuranceLines />
      <ProcessSteps />
      <QuoteInitiator />
      <AgentStory />
      <CityServiceArea />
      <Testimonials />
      <FAQSection faqs={[]} />
      <CTABanner />

      {/* InsuranceAgency Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            name: "Colorado Insurance Services",
            description:
              "Local, independent insurance agency serving the Denver Metro Area. Personal and commercial insurance with a human touch.",
            url: "https://coloradoinsuranceservices.com",
            telephone: "+13035550100",
            email: "info@coloradoinsuranceservices.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "14212 Piney River Rd",
              addressLocality: "Broomfield",
              addressRegion: "CO",
              postalCode: "80023",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 39.9205,
              longitude: -105.0867,
            },
            areaServed: [
              { "@type": "City", name: "Denver" },
              { "@type": "City", name: "Aurora" },
              { "@type": "City", name: "Lakewood" },
              { "@type": "City", name: "Broomfield" },
              { "@type": "City", name: "Westminster" },
              { "@type": "City", name: "Arvada" },
              { "@type": "City", name: "Thornton" },
              { "@type": "City", name: "Boulder" },
              { "@type": "City", name: "Centennial" },
              { "@type": "City", name: "Littleton" },
            ],
            openingHours: "Mo-Fr 08:00-17:00",
            priceRange: "$$",
            naics: "524210",
          }),
        }}
      />
    </>
  );
}
