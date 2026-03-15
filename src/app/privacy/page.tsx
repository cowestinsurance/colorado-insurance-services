import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Colorado Insurance Services.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white">
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-8" />
        <h1 className="font-serif text-display-sm text-brand-navy mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg font-sans text-neutral-600 space-y-6">
          <p><strong>Last updated:</strong> March 2025</p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Information We Collect</h2>
          <p>
            When you use our website, request a quote, or contact us, we may collect personal
            information including your name, email address, phone number, mailing address, and
            information about your insurance needs. We collect this information to provide you
            with insurance quotes and services.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide insurance quotes and recommendations</li>
            <li>Communicate with you about your insurance needs</li>
            <li>Process and manage your insurance policies</li>
            <li>Improve our website and services</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="font-serif text-heading-sm text-brand-navy">Information Sharing</h2>
          <p>
            We may share your information with insurance carriers for the purpose of obtaining
            quotes and binding coverage. We do not sell your personal information to third parties
            for marketing purposes.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Cookies</h2>
          <p>
            Our website uses cookies and similar technologies to improve your browsing experience,
            analyze site traffic, and understand where our visitors are coming from. You can control
            cookies through your browser settings.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise
            these rights, please contact us using the information below.
          </p>

          <h2 className="font-serif text-heading-sm text-brand-navy">Contact Us</h2>
          <p>
            If you have questions about this privacy policy or our data practices, contact us at:
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
