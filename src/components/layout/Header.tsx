"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-nav"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-brand-navy text-lg leading-tight block">
                Colorado Insurance
              </span>
              <span className="font-sans text-neutral-500 text-caption leading-tight block">
                Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className="px-4 py-2 text-body font-sans font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-lg hover:bg-neutral-50"
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
              >
                Insurance
              </button>
              <MegaMenu isOpen={megaMenuOpen} />
            </div>
            <Link
              href="/industries"
              className="px-4 py-2 text-body font-sans font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-lg hover:bg-neutral-50"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-body font-sans font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-lg hover:bg-neutral-50"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-body font-sans font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-lg hover:bg-neutral-50"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-body font-sans font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-lg hover:bg-neutral-50"
            >
              Contact
            </Link>
          </nav>

          {/* Right side: phone + CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:3035550100"
              className="hidden md:flex items-center gap-2 text-body-sm font-sans font-medium text-neutral-600 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              (303) 555-0100
            </a>
            <Link
              href="/get-a-quote"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-brand-orange text-white font-sans font-semibold text-body-sm rounded-xl hover:bg-brand-orange-light transition-all duration-200 hover:-translate-y-[1px] shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden p-2 text-brand-navy hover:text-brand-orange transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
