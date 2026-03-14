import type { Industry } from "@/types/industry";

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants & Food Service",
    description: "Restaurants face unique risks from food-borne illness claims to kitchen fires and employee injuries. We help Colorado restaurant owners find comprehensive coverage that protects every aspect of their operation.",
    icon: "UtensilsCrossed",
    recommendedCoverage: ["general-liability", "business-owners-policy", "workers-compensation", "commercial-property"],
    commonRisks: ["Slip-and-fall injuries from customers", "Foodborne illness liability", "Kitchen fires and equipment damage", "Employee injuries (burns, cuts, slips)", "Liquor liability (if serving alcohol)", "Property damage from grease fires"],
    faqs: [
      { question: "What insurance does a restaurant need in Colorado?", answer: "At minimum, restaurants need general liability, workers compensation (required in CO for any employees), and commercial property insurance. A Business Owners Policy (BOP) is often the most cost-effective way to bundle these. If you serve alcohol, you'll also need liquor liability coverage." },
      { question: "How much does restaurant insurance cost?", answer: "Restaurant insurance costs vary based on your revenue, number of employees, whether you serve alcohol, and your claims history. A typical small restaurant might pay $3,000-$8,000 per year for a BOP. We'll shop multiple carriers to find you the best rate." },
    ],
    metaTitle: "Restaurant Insurance in Colorado | Colorado Insurance Services",
    metaDescription: "Protect your Colorado restaurant with comprehensive business insurance. General liability, workers comp, property, and liquor liability coverage.",
  },
  {
    slug: "contractors",
    name: "Contractors & Construction",
    description: "Construction is one of the highest-risk industries for insurance. Colorado contractors need robust coverage to protect against job-site injuries, property damage, and project-related claims.",
    icon: "HardHat",
    recommendedCoverage: ["general-liability", "workers-compensation", "commercial-auto", "professional-liability"],
    commonRisks: ["Job-site injuries to workers and third parties", "Property damage during construction", "Completed operations claims", "Tool and equipment theft", "Vehicle accidents", "Subcontractor liability"],
    faqs: [
      { question: "What insurance do contractors need in Colorado?", answer: "Colorado contractors typically need general liability, workers compensation, commercial auto (if using vehicles), and tools/equipment coverage. Many clients and general contractors also require you to carry specific coverage limits before you can bid on projects." },
      { question: "Is workers comp required for contractors in Colorado?", answer: "Yes, if you have any employees. Sole proprietors can exempt themselves but still face personal liability. Many general contractors require subcontractors to carry workers comp regardless of employee count." },
    ],
    metaTitle: "Contractor Insurance in Colorado | Colorado Insurance Services",
    metaDescription: "Comprehensive contractor and construction insurance in Colorado. General liability, workers comp, commercial auto, and equipment coverage.",
  },
  {
    slug: "retail",
    name: "Retail Stores",
    description: "Retail businesses need coverage for their physical space, inventory, customer injuries, and employee protection. We help Colorado retailers find the right balance of coverage and cost.",
    icon: "ShoppingBag",
    recommendedCoverage: ["general-liability", "business-owners-policy", "workers-compensation", "commercial-property"],
    commonRisks: ["Customer slip-and-fall injuries", "Product liability claims", "Inventory loss from theft or damage", "Employee injuries", "Property damage from weather or fire", "Cyber liability from POS systems"],
    faqs: [
      { question: "What insurance does a retail store need?", answer: "Retail stores typically need a Business Owners Policy (BOP) that bundles general liability and commercial property, plus workers compensation if you have employees. Depending on your products, you may also need product liability coverage." },
    ],
    metaTitle: "Retail Store Insurance in Colorado | Colorado Insurance Services",
    metaDescription: "Protect your Colorado retail business with comprehensive insurance. BOP, general liability, property, and workers comp coverage.",
  },
  {
    slug: "it-technology",
    name: "IT & Technology",
    description: "Technology companies face unique risks around data security, professional errors, and intellectual property. We help Colorado tech businesses find coverage that addresses both cyber and traditional business risks.",
    icon: "Monitor",
    recommendedCoverage: ["professional-liability", "general-liability", "business-owners-policy"],
    commonRisks: ["Professional errors causing client financial loss", "Data breaches and cyber attacks", "Intellectual property disputes", "Project delivery failures", "Third-party software failures", "Client data loss"],
    faqs: [
      { question: "Do IT companies need professional liability insurance?", answer: "Absolutely. Professional liability (E&O) insurance is essential for IT companies. If a software bug, missed deadline, or technical error causes a client financial loss, E&O coverage protects you from the resulting claims." },
    ],
    metaTitle: "IT & Technology Insurance in Colorado | Colorado Insurance Services",
    metaDescription: "Protect your Colorado tech company with professional liability, cyber coverage, and general liability insurance. Free quotes from an independent agent.",
  },
  {
    slug: "cleaning-services",
    name: "Cleaning Services",
    description: "Cleaning businesses work in clients' homes and offices, creating unique liability risks. We help Colorado cleaning companies find affordable coverage that protects against property damage, injuries, and theft claims.",
    icon: "Sparkles",
    recommendedCoverage: ["general-liability", "workers-compensation", "commercial-auto"],
    commonRisks: ["Damage to client property while cleaning", "Employee injuries from chemicals or falls", "Theft accusations", "Vehicle accidents between job sites", "Slip-and-fall incidents"],
    faqs: [
      { question: "What insurance does a cleaning business need?", answer: "At minimum, cleaning businesses need general liability to cover property damage and injuries. If you have employees, workers comp is required in Colorado. If you use vehicles, commercial auto is also necessary." },
    ],
    metaTitle: "Cleaning Business Insurance in Colorado | Colorado Insurance Services",
    metaDescription: "Affordable cleaning business insurance in Colorado. General liability, workers comp, and bonding for house cleaners and janitorial services.",
  },
  {
    slug: "landscaping",
    name: "Landscaping & Lawn Care",
    description: "Landscaping businesses face physical risks from equipment, weather exposure, and working on client properties. We help Colorado landscapers find coverage that keeps their business protected year-round.",
    icon: "Trees",
    recommendedCoverage: ["general-liability", "commercial-auto", "workers-compensation", "commercial-property"],
    commonRisks: ["Property damage to client landscaping or structures", "Employee injuries from equipment", "Vehicle and trailer accidents", "Equipment theft", "Chemical application liability"],
    faqs: [
      { question: "What insurance does a landscaping company need?", answer: "Landscapers need general liability, commercial auto (for trucks and trailers), and workers compensation. Equipment/tools coverage is also important for protecting mowers, trimmers, and other expensive equipment." },
    ],
    metaTitle: "Landscaping Insurance in Colorado | Colorado Insurance Services",
    metaDescription: "Protect your Colorado landscaping business. General liability, commercial auto, workers comp, and equipment coverage for landscapers.",
  },
  {
    slug: "professional-services",
    name: "Professional Services & Consulting",
    description: "Consultants, accountants, and professional service firms need coverage that protects against claims of errors, negligence, and professional malpractice.",
    icon: "Briefcase",
    recommendedCoverage: ["professional-liability", "general-liability", "business-owners-policy"],
    commonRisks: ["Client claims of negligence or errors", "Missed deadlines causing financial loss", "Breach of contract allegations", "Data privacy violations", "Intellectual property disputes"],
    faqs: [
      { question: "Do consultants need insurance?", answer: "Yes. Professional liability (E&O) insurance protects consultants from claims that their advice or services caused a client financial harm. General liability covers bodily injury and property damage. Many clients require proof of coverage before signing contracts." },
    ],
    metaTitle: "Professional Services Insurance in Colorado | Colorado Insurance Services",
    metaDescription: "E&O and general liability insurance for Colorado consultants and professional service firms. Protect your business from negligence claims.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "Real estate professionals face unique risks from property showings, transaction errors, and client disputes. We help Colorado real estate agents and brokerages find comprehensive coverage.",
    icon: "Building2",
    recommendedCoverage: ["professional-liability", "general-liability", "commercial-auto"],
    commonRisks: ["Errors in property listings or disclosures", "Client injury during property showings", "Misrepresentation claims", "Contract disputes", "Vehicle accidents while showing properties"],
    faqs: [
      { question: "What insurance do real estate agents need in Colorado?", answer: "Real estate agents need professional liability (E&O) to cover errors in transactions and disclosures, plus general liability for client injuries during showings. If you drive clients to properties, auto coverage is also important." },
    ],
    metaTitle: "Real Estate Insurance in Colorado | Colorado Insurance Services",
    metaDescription: "E&O and liability insurance for Colorado real estate agents and brokerages. Protect your real estate business with an independent agent.",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((ind) => ind.slug === slug);
}
