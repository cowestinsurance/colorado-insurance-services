export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  badge?: string;
}

export const mainNavigation: NavItem[] = [
  {
    label: "Insurance",
    href: "/insurance",
    children: [
      {
        label: "Personal Insurance",
        href: "/insurance/personal",
        children: [
          { label: "Home Insurance", href: "/insurance/personal/home-insurance" },
          { label: "Auto Insurance", href: "/insurance/personal/auto-insurance" },
          { label: "Renters Insurance", href: "/insurance/personal/renters-insurance" },
          { label: "Umbrella Insurance", href: "/insurance/personal/umbrella-insurance" },
        ],
      },
      {
        label: "Commercial Insurance",
        href: "/insurance/commercial",
        children: [
          { label: "General Liability", href: "/insurance/commercial/general-liability" },
          { label: "Business Owners Policy", href: "/insurance/commercial/business-owners-policy" },
          { label: "Commercial Auto", href: "/insurance/commercial/commercial-auto" },
          { label: "Workers Compensation", href: "/insurance/commercial/workers-compensation" },
          { label: "Commercial Property", href: "/insurance/commercial/commercial-property" },
          { label: "Professional Liability", href: "/insurance/commercial/professional-liability" },
        ],
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Insurance Glossary", href: "/resources/glossary" },
      { label: "FAQ", href: "/resources/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
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
    { label: "FAQ", href: "/resources/faq" },
    { label: "Get a Quote", href: "/get-a-quote" },
    { label: "Industries", href: "/industries" },
  ],
};
