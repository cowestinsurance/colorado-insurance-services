import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/resources/faq" },
  ],
  personal: [
    { label: "Home Insurance", href: "/insurance/personal/home-insurance" },
    { label: "Auto Insurance", href: "/insurance/personal/auto-insurance" },
    { label: "Renters Insurance", href: "/insurance/personal/renters-insurance" },
    { label: "Umbrella Insurance", href: "/insurance/personal/umbrella-insurance" },
  ],
  commercial: [
    { label: "General Liability", href: "/insurance/commercial/general-liability" },
    { label: "Business Owners Policy", href: "/insurance/commercial/business-owners-policy" },
    { label: "Commercial Auto", href: "/insurance/commercial/commercial-auto" },
    { label: "Workers Compensation", href: "/insurance/commercial/workers-compensation" },
    { label: "Commercial Property", href: "/insurance/commercial/commercial-property" },
    { label: "Professional Liability", href: "/insurance/commercial/professional-liability" },
  ],
  resources: [
    { label: "Insurance Glossary", href: "/resources/glossary" },
    { label: "Get a Quote", href: "/get-a-quote" },
    { label: "Industries", href: "/industries" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white" aria-label="Site footer">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">C</span>
              </div>
              <div>
                <span className="font-serif font-bold text-white text-lg leading-tight block">
                  Colorado Insurance
                </span>
                <span className="font-sans text-neutral-400 text-caption leading-tight block">
                  Services
                </span>
              </div>
            </Link>
            <p className="text-body text-neutral-300 font-sans mb-6 max-w-sm">
              Your local, independent insurance agency serving the Denver Metro Area.
              Personal and commercial insurance with a human touch.
            </p>

            {/* Contact info - NAP for local SEO */}
            <ul className="space-y-3 text-body-sm font-sans text-neutral-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-orange flex-shrink-0" />
                <address className="not-italic">
                  14212 Piney River Rd<br />
                  Broomfield, CO 80023
                </address>
              </li>
              <li>
                <a href="tel:3035550100" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                  <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  (303) 555-0100
                </a>
              </li>
              <li>
                <a href="mailto:info@coloradoinsuranceservices.com" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                  <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  info@coloradoinsuranceservices.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-brand-orange flex-shrink-0" />
                <div>
                  Mon-Fri: 8:00 AM - 5:00 PM<br />
                  Sat: By Appointment
                </div>
              </li>
            </ul>
          </div>

          {/* Personal Insurance */}
          <div>
            <h3 className="font-sans text-body-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Personal Insurance
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.personal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm font-sans text-neutral-300 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Insurance */}
          <div>
            <h3 className="font-sans text-body-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Commercial Insurance
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.commercial.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm font-sans text-neutral-300 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Resources */}
          <div>
            <h3 className="font-sans text-body-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm font-sans text-neutral-300 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-sans text-body-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm font-sans text-neutral-300 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption font-sans text-neutral-400">
            &copy; {new Date().getFullYear()} Colorado Insurance Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-caption font-sans text-neutral-400">
            <Link href="/privacy-policy" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
