"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Car,
  Building2,
  Umbrella,
  Shield,
  Briefcase,
  Truck,
  HardHat,
  Building,
  Scale,
  ArrowRight,
} from "lucide-react";

const personalLines = [
  { label: "Home Insurance", href: "/insurance/personal/home-insurance", icon: Home },
  { label: "Auto Insurance", href: "/insurance/personal/auto-insurance", icon: Car },
  { label: "Renters Insurance", href: "/insurance/personal/renters-insurance", icon: Building2 },
  { label: "Umbrella Insurance", href: "/insurance/personal/umbrella-insurance", icon: Umbrella },
];

const commercialLines = [
  { label: "General Liability", href: "/insurance/commercial/general-liability", icon: Shield },
  { label: "Business Owners Policy", href: "/insurance/commercial/business-owners-policy", icon: Briefcase },
  { label: "Commercial Auto", href: "/insurance/commercial/commercial-auto", icon: Truck },
  { label: "Workers Compensation", href: "/insurance/commercial/workers-compensation", icon: HardHat },
  { label: "Commercial Property", href: "/insurance/commercial/commercial-property", icon: Building },
  { label: "Professional Liability", href: "/insurance/commercial/professional-liability", icon: Scale },
];

interface MegaMenuProps {
  isOpen: boolean;
}

export default function MegaMenu({ isOpen }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] mt-1 bg-white rounded-2xl shadow-hero border border-neutral-100 p-6"
        >
          <div className="grid grid-cols-2 gap-8">
            {/* Personal Insurance */}
            <div>
              <h3 className="font-sans text-caption font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Personal Insurance
              </h3>
              <ul className="space-y-1">
                {personalLines.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-body font-sans text-brand-navy hover:bg-brand-beige hover:text-brand-orange transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-brand-orange transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/insurance/personal"
                className="flex items-center gap-1 mt-3 px-3 py-2 text-body-sm font-sans font-semibold text-brand-orange hover:text-brand-orange-light transition-colors"
              >
                View all personal insurance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Commercial Insurance */}
            <div>
              <h3 className="font-sans text-caption font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Commercial Insurance
              </h3>
              <ul className="space-y-1">
                {commercialLines.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-body font-sans text-brand-navy hover:bg-brand-beige hover:text-brand-orange transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-brand-orange transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/insurance/commercial"
                className="flex items-center gap-1 mt-3 px-3 py-2 text-body-sm font-sans font-semibold text-brand-orange hover:text-brand-orange-light transition-colors"
              >
                View all commercial insurance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
            <p className="text-body-sm font-sans text-neutral-500">
              Not sure what coverage you need?
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange text-white font-sans font-semibold text-body-sm rounded-xl hover:bg-brand-orange-light transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
