import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Colorado Insurance Services website.",
};

export default function TermsPage() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white">
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} className="mb-8" />
        <h1 className="font-serif text-display-sm text-brand-navy mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg font-sans text-neutral-600 space-y-6">
          <p><strong>Last updated:</strong> March 2025</p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Agreement to Terms</h2>
          <p>
            By accessing and using the Colorado Insurance Services website, you agree to be bound
            by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Use of Website</h2>
          <p>
            This website is provided for informational purposes and to facilitate communication
            about insurance products and services. The content on this site does not constitute
            insurance advice, and should not be relied upon as a substitute for consultation with
            a licensed insurance professional.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">No Insurance Contract</h2>
          <p>
            Requesting a quote through our website does not create an insurance contract or bind
            any coverage. Insurance coverage is only effective when a policy is issued by an
            insurance carrier and all required premiums have been paid.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Accuracy of Information</h2>
          <p>
            While we strive to keep the information on our website accurate and up to date, we make
            no warranties or representations about the completeness, accuracy, or reliability of any
            content. Insurance products, rates, and availability are subject to change without notice.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Limitation of Liability</h2>
          <p>
            Colorado Insurance Services shall not be liable for any damages arising from your use
            of this website or reliance on any information provided herein. This includes, but is
            not limited to, direct, indirect, incidental, or consequential damages.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">External Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            content, privacy practices, or accuracy of any external sites.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting to this website. Your continued use of the site
            constitutes acceptance of the updated terms.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Contact</h2>
          <p>
            Questions about these terms? Contact us at:
          </p>
          <p>
            Colorado Insurance Services<br />
            14212 Piney River Rd<br />
            Broomfield, CO 80023<br />
            Email: info@coloradoinsuranceservices.com
          </p>
        </div>
      </Container>
    </section>
  );
}
