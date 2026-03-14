import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Colorado Insurance Services. Located in Broomfield, CO, serving the Denver Metro Area. Call, email, or visit us for personal and commercial insurance.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: "Contact" }]} className="mb-8" />
          <FadeIn>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Get in touch
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-2xl">
              Have a question about insurance? Want to get a quote? We&apos;d love to hear from you.
              Reach out by phone, email, or fill out the form below.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <h2 className="font-serif text-heading text-brand-navy mb-6">Send us a message</h2>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-brand-beige rounded-2xl p-8">
                  <h2 className="font-serif text-heading text-brand-navy mb-6">Contact Information</h2>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange-bg rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-brand-navy mb-1">Office Address</p>
                        <address className="not-italic font-sans text-body text-neutral-600">
                          14212 Piney River Rd<br />
                          Broomfield, CO 80023
                        </address>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange-bg rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-brand-navy mb-1">Phone</p>
                        <a href="tel:3035550100" className="font-sans text-body text-neutral-600 hover:text-brand-orange transition-colors">
                          (303) 555-0100
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange-bg rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-brand-navy mb-1">Email</p>
                        <a href="mailto:info@coloradoinsuranceservices.com" className="font-sans text-body text-neutral-600 hover:text-brand-orange transition-colors">
                          info@coloradoinsuranceservices.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange-bg rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-brand-navy mb-1">Hours</p>
                        <div className="font-sans text-body text-neutral-600">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: By Appointment</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            name: "Colorado Insurance Services",
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
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
            ],
          }),
        }}
      />
    </>
  );
}
