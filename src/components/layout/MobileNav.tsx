"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";

const navSections = [
  {
    label: "Personal Insurance",
    items: [
      { label: "Home Insurance", href: "/insurance/personal/home-insurance" },
      { label: "Auto Insurance", href: "/insurance/personal/auto-insurance" },
      { label: "Renters Insurance", href: "/insurance/personal/renters-insurance" },
      { label: "Umbrella Insurance", href: "/insurance/personal/umbrella-insurance" },
    ],
  },
  {
    label: "Commercial Insurance",
    items: [
      { label: "General Liability", href: "/insurance/commercial/general-liability" },
      { label: "Business Owners Policy", href: "/insurance/commercial/business-owners-policy" },
      { label: "Commercial Auto", href: "/insurance/commercial/commercial-auto" },
      { label: "Workers Compensation", href: "/insurance/commercial/workers-compensation" },
      { label: "Commercial Property", href: "/insurance/commercial/commercial-property" },
      { label: "Professional Liability", href: "/insurance/commercial/professional-liability" },
    ],
  },
];

const directLinks = [
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/resources/faq" },
  { label: "Contact", href: "/contact" },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Nav Panel */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-[72px] right-0 bottom-0 w-full max-w-sm bg-white shadow-hero z-50 lg:hidden overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="p-6 space-y-2">
              {/* Accordion sections */}
              {navSections.map((section) => (
                <div key={section.label} className="border-b border-neutral-100">
                  <button
                    onClick={() => toggleSection(section.label)}
                    className="flex items-center justify-between w-full py-3 text-body-lg font-sans font-semibold text-brand-navy"
                    aria-expanded={expandedSection === section.label}
                  >
                    {section.label}
                    <motion.span
                      animate={{ rotate: expandedSection === section.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-neutral-400" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {expandedSection === section.label && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pb-2"
                      >
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="block py-2 pl-4 text-body font-sans text-neutral-600 hover:text-brand-orange transition-colors"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Direct links */}
              {directLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-body-lg font-sans font-semibold text-brand-navy hover:text-brand-orange transition-colors border-b border-neutral-100"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA section */}
              <div className="pt-6 space-y-3">
                <Link
                  href="/get-a-quote"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:3035550100"
                  className="flex items-center justify-center gap-2 w-full py-3 border-2 border-brand-navy text-brand-navy font-sans font-semibold rounded-xl hover:bg-brand-navy hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (303) 555-0100
                </a>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
