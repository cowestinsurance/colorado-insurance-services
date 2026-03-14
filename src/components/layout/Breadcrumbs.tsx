"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-1 flex-wrap text-body-sm font-sans">
        <li>
          <Link href="/" className="text-neutral-400 hover:text-brand-orange transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="text-neutral-400 hover:text-brand-orange transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-navy font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://coloradoinsuranceservices.com",
              },
              ...items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: item.label,
                ...(item.href
                  ? { item: `https://coloradoinsuranceservices.com${item.href}` }
                  : {}),
              })),
            ],
          }),
        }}
      />
    </nav>
  );
}
