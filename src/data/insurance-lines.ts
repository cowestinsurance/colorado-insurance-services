import type { InsuranceLine } from "@/types/insurance";

export const insuranceLines: InsuranceLine[] = [
  // ===== PERSONAL LINES =====
  {
    slug: "home-insurance",
    name: "Home Insurance",
    shortName: "Home",
    type: "personal",
    icon: "Home",
    tagline: "Protect your home, your belongings, and your peace of mind.",
    description:
      "Home insurance is a type of property insurance that covers losses and damages to your house, belongings, and provides liability protection. In Colorado, where hailstorms, wildfires, and severe weather are part of life, having the right homeowners policy is essential. Colorado Insurance Services shops multiple carriers to find you comprehensive coverage at competitive rates.",
    coverageIncludes: [
      "Dwelling (your home's structure)",
      "Personal property (furniture, electronics, clothing)",
      "Liability protection if someone is injured on your property",
      "Additional living expenses if your home is uninhabitable",
      "Other structures (detached garage, shed, fence)",
      "Medical payments for guests injured on your property",
    ],
    coverageExcludes: [
      "Flood damage (requires separate flood insurance)",
      "Earthquake damage",
      "Normal wear and tear or maintenance issues",
      "Damage from pests or insects",
      "Intentional damage by the homeowner",
    ],
    costFactors: [
      "Home's age, size, and construction type",
      "Location and proximity to fire stations",
      "Claims history and credit score",
      "Coverage limits and deductible amount",
      "Roof age and condition (critical in Colorado's hail belt)",
      "Security systems and protective devices",
    ],
    averageCost: "Starting around $150/month",
    whoNeedsThis:
      "Every homeowner in Colorado needs home insurance. Most mortgage lenders require it, but even if you own your home outright, it protects your biggest investment against the unpredictable Colorado weather, theft, liability claims, and more.",
    relatedLines: ["auto-insurance", "umbrella-insurance", "renters-insurance"],
    faqs: [
      {
        question: "Does home insurance cover hail damage in Colorado?",
        answer:
          "Yes, most standard home insurance policies cover hail damage to your roof, siding, windows, and other structures. Colorado is in the heart of 'Hail Alley,' so this coverage is especially important. However, some carriers may have separate hail deductibles — we'll help you understand your options.",
      },
      {
        question: "How much home insurance do I need?",
        answer:
          "You need enough coverage to rebuild your home from the ground up at current construction costs (dwelling coverage), replace your belongings (personal property), and protect against liability claims. We'll help you calculate the right amounts based on your specific home and situation.",
      },
      {
        question: "Does home insurance cover wildfire damage?",
        answer:
          "Yes, fire and wildfire damage is typically covered under standard home insurance policies. Given Colorado's increasing wildfire risk, we'll make sure your policy provides adequate coverage and help you explore additional options if you live in a high-risk fire area.",
      },
      {
        question: "Can I bundle home and auto insurance?",
        answer:
          "Absolutely! Most carriers offer multi-policy discounts when you bundle home and auto insurance. This can save you 10-25% on your premiums. As your independent agent, we'll find the best bundle deals across multiple carriers.",
      },
      {
        question: "What's the difference between actual cash value and replacement cost?",
        answer:
          "Replacement cost coverage pays to replace or repair damaged items at current prices, while actual cash value deducts depreciation. We typically recommend replacement cost coverage for both your dwelling and personal property to avoid out-of-pocket expenses after a claim.",
      },
    ],
    metaTitle: "Home Insurance in Colorado | Colorado Insurance Services",
    metaDescription:
      "Protect your Colorado home from hail, wildfire, and more. Get competitive home insurance quotes from a local, independent agent in the Denver Metro Area.",
  },
  {
    slug: "auto-insurance",
    name: "Auto Insurance",
    shortName: "Auto",
    type: "personal",
    icon: "Car",
    tagline: "Coverage for your vehicles, your drivers, and life on Colorado roads.",
    description:
      "Auto insurance is a contract between you and an insurance company that protects you against financial loss in the event of an accident or theft. Colorado law requires all drivers to carry minimum liability insurance. Colorado Insurance Services helps you find the right balance of coverage and cost — from minimum requirements to comprehensive protection for Colorado's unique driving conditions.",
    coverageIncludes: [
      "Liability coverage (bodily injury and property damage)",
      "Collision coverage (damage from accidents)",
      "Comprehensive coverage (theft, hail, vandalism, wildlife)",
      "Uninsured/underinsured motorist coverage",
      "Medical payments coverage",
      "Rental car reimbursement",
    ],
    coverageExcludes: [
      "Mechanical breakdowns and regular maintenance",
      "Damage to personal belongings inside the car (covered by home/renters)",
      "Commercial use of a personal vehicle",
      "Intentional damage",
      "Racing or off-road activities",
    ],
    costFactors: [
      "Driving record and claims history",
      "Age, gender, and marital status",
      "Vehicle make, model, year, and safety features",
      "Annual mileage and commute distance",
      "Credit score (used in Colorado for rating)",
      "Coverage levels and deductible amounts",
    ],
    averageCost: "Starting around $120/month",
    whoNeedsThis:
      "Every driver in Colorado is required by law to carry auto insurance. Beyond the legal minimum, comprehensive and collision coverage protect your vehicle from Colorado's frequent hailstorms, wildlife encounters, and winter driving conditions.",
    relatedLines: ["home-insurance", "umbrella-insurance", "renters-insurance"],
    faqs: [
      {
        question: "What are Colorado's minimum auto insurance requirements?",
        answer:
          "Colorado requires minimum liability limits of 25/50/15: $25,000 bodily injury per person, $50,000 bodily injury per accident, and $15,000 property damage. However, these minimums often aren't enough — we recommend higher limits to adequately protect your assets.",
      },
      {
        question: "Does auto insurance cover hail damage?",
        answer:
          "Yes, comprehensive coverage pays for hail damage to your vehicle. Given Colorado's position in 'Hail Alley,' comprehensive coverage is highly recommended. We'll help you choose a deductible that balances your premium with your risk tolerance.",
      },
      {
        question: "Do I need uninsured motorist coverage?",
        answer:
          "While not required in Colorado, we strongly recommend it. Colorado has a relatively high rate of uninsured drivers. Uninsured/underinsured motorist coverage protects you if you're hit by a driver who has no insurance or insufficient coverage.",
      },
      {
        question: "How can I lower my auto insurance premium?",
        answer:
          "Common ways to reduce your premium include: bundling with home insurance, maintaining a clean driving record, raising your deductible, asking about available discounts (safe driver, anti-theft, good student), and letting us shop multiple carriers for you.",
      },
    ],
    metaTitle: "Auto Insurance in Colorado | Colorado Insurance Services",
    metaDescription:
      "Get affordable auto insurance in Colorado. We shop multiple carriers to find the best coverage for Colorado's roads, hail, and winter driving conditions.",
  },
  {
    slug: "renters-insurance",
    name: "Renters Insurance",
    shortName: "Renters",
    type: "personal",
    icon: "Building2",
    tagline: "Protect your belongings and liability, even as a renter.",
    description:
      "Renters insurance is a type of insurance policy that protects your personal belongings and provides liability coverage when you rent a home, apartment, or condo. Your landlord's policy covers the building, but it does not protect your furniture, electronics, clothing, or other personal items. Renters insurance is affordable and provides essential protection for Colorado renters.",
    coverageIncludes: [
      "Personal property (furniture, electronics, clothing, jewelry)",
      "Liability protection if someone is injured in your rental",
      "Additional living expenses if your rental is uninhabitable",
      "Medical payments for guests",
      "Personal property away from home (theft from your car, etc.)",
    ],
    coverageExcludes: [
      "The building structure itself (that's your landlord's responsibility)",
      "Flood damage (requires separate policy)",
      "Earthquake damage",
      "Your roommate's belongings (they need their own policy)",
      "High-value items above policy limits without a rider",
    ],
    costFactors: [
      "Location and neighborhood",
      "Coverage amount for personal property",
      "Deductible amount chosen",
      "Credit score",
      "Security features (deadbolts, smoke detectors, alarm systems)",
      "Claims history",
    ],
    averageCost: "Starting around $15/month",
    whoNeedsThis:
      "Every renter in Colorado should have renters insurance. It's one of the most affordable types of insurance and protects your belongings from theft, fire, water damage, and other covered events. Many landlords require it as part of your lease.",
    relatedLines: ["auto-insurance", "umbrella-insurance", "home-insurance"],
    faqs: [
      {
        question: "Is renters insurance required in Colorado?",
        answer:
          "Renters insurance is not required by Colorado law, but many landlords require it as a condition of your lease. Even if it's not required, it's highly recommended — it's very affordable and protects your belongings and liability.",
      },
      {
        question: "How much renters insurance do I need?",
        answer:
          "We recommend creating a home inventory to estimate the total value of your belongings. Most renters need $20,000-$50,000 in personal property coverage. We'll help you determine the right amount based on your specific situation.",
      },
      {
        question: "Does renters insurance cover my belongings outside my apartment?",
        answer:
          "Yes! Renters insurance typically covers your belongings wherever they are — at home, in your car, at work, or while traveling. This includes protection against theft and other covered perils.",
      },
    ],
    metaTitle: "Renters Insurance in Colorado | Colorado Insurance Services",
    metaDescription:
      "Affordable renters insurance in Colorado starting at $15/month. Protect your belongings and liability with a local, independent agent.",
  },
  {
    slug: "umbrella-insurance",
    name: "Umbrella Insurance",
    shortName: "Umbrella",
    type: "personal",
    icon: "Umbrella",
    tagline: "Extra liability protection that goes beyond your other policies.",
    description:
      "Umbrella insurance is a type of personal liability insurance that provides an extra layer of protection beyond the limits of your home, auto, and other insurance policies. It kicks in when your underlying policy limits are exhausted, protecting your assets and future earnings from costly lawsuits and claims.",
    coverageIncludes: [
      "Excess liability beyond home insurance limits",
      "Excess liability beyond auto insurance limits",
      "Certain claims not covered by underlying policies",
      "Legal defense costs",
      "Personal injury (libel, slander, defamation)",
      "Worldwide coverage",
    ],
    coverageExcludes: [
      "Your own injuries or property damage",
      "Business-related liability (need commercial coverage)",
      "Intentional or criminal acts",
      "Damage to property you own",
      "Workers compensation claims",
    ],
    costFactors: [
      "Coverage amount ($1M, $2M, $5M, etc.)",
      "Number of vehicles and drivers in household",
      "Number of properties owned",
      "Risk factors (pool, trampoline, dog breed, etc.)",
      "Claims history",
      "Underlying policy limits",
    ],
    averageCost: "Starting around $20/month for $1M coverage",
    whoNeedsThis:
      "Umbrella insurance is recommended for anyone who wants to protect their assets beyond standard policy limits. It's especially important if you have significant savings, own rental property, have a pool or trampoline, have teen drivers, or are at higher risk of being sued.",
    relatedLines: ["home-insurance", "auto-insurance"],
    faqs: [
      {
        question: "How much umbrella insurance do I need?",
        answer:
          "A general rule of thumb is to have enough umbrella coverage to protect your net worth. Most people start with $1 million in coverage, which is surprisingly affordable — often just $200-$300 per year. We'll help you assess your risk and recommend the right amount.",
      },
      {
        question: "Does umbrella insurance cover car accidents?",
        answer:
          "Yes. If you're at fault in a car accident and the damages exceed your auto insurance liability limits, your umbrella policy kicks in to cover the excess. This is one of the most common scenarios where umbrella insurance is used.",
      },
    ],
    metaTitle: "Umbrella Insurance in Colorado | Colorado Insurance Services",
    metaDescription:
      "Protect your assets with affordable umbrella insurance starting at $20/month. Extra liability coverage beyond your home and auto policies.",
  },

  // ===== COMMERCIAL LINES =====
  {
    slug: "general-liability",
    name: "General Liability Insurance",
    shortName: "General Liability",
    type: "commercial",
    icon: "Shield",
    tagline: "Essential protection every business needs.",
    description:
      "General liability insurance is a type of business insurance that protects your company from financial loss resulting from claims of bodily injury, property damage, and personal or advertising injury caused by your business operations, products, or on your premises. It's the foundation of most business insurance programs and is often required by clients, landlords, and contracts.",
    coverageIncludes: [
      "Bodily injury to third parties (slip-and-fall, etc.)",
      "Property damage caused by your business operations",
      "Personal and advertising injury (libel, slander, copyright infringement)",
      "Legal defense costs and settlements",
      "Medical payments for injured third parties",
      "Products and completed operations liability",
    ],
    coverageExcludes: [
      "Employee injuries (covered by workers comp)",
      "Professional errors (covered by professional liability/E&O)",
      "Auto accidents (covered by commercial auto)",
      "Your own property damage (covered by commercial property)",
      "Intentional or criminal acts",
      "Cyber incidents and data breaches",
    ],
    costFactors: [
      "Industry and business type",
      "Annual revenue and payroll",
      "Number of employees",
      "Claims history",
      "Location and operations territory",
      "Coverage limits and deductibles",
    ],
    averageCost: "Starting around $50/month",
    whoNeedsThis:
      "Every business needs general liability insurance. Whether you're a sole proprietor, freelancer, or growing company, GL insurance protects you from the most common business risks. Many clients, landlords, and contracts require proof of general liability coverage.",
    relatedLines: ["business-owners-policy", "professional-liability", "commercial-property"],
    faqs: [
      {
        question: "What's the difference between general liability and professional liability?",
        answer:
          "General liability covers physical injuries and property damage caused by your business, while professional liability (E&O) covers financial losses caused by your professional advice, services, or errors. Many businesses need both.",
      },
      {
        question: "How much general liability insurance do I need?",
        answer:
          "Most small businesses start with $1 million per occurrence / $2 million aggregate limits. However, your specific needs depend on your industry, contracts, and risk level. We'll help you determine the right limits for your business.",
      },
      {
        question: "Do I need general liability insurance if I work from home?",
        answer:
          "Yes. Your home insurance policy typically doesn't cover business-related claims. If a client visits your home office and is injured, or if your business causes property damage, you need general liability to be protected.",
      },
    ],
    metaTitle: "General Liability Insurance in Colorado | Colorado Insurance Services",
    metaDescription:
      "Protect your Colorado business with general liability insurance starting at $50/month. Get a free quote from a local, independent commercial insurance agent.",
  },
  {
    slug: "business-owners-policy",
    name: "Business Owners Policy (BOP)",
    shortName: "BOP",
    type: "commercial",
    icon: "Briefcase",
    tagline: "Bundled coverage at a better price for small businesses.",
    description:
      "A Business Owners Policy (BOP) is a bundled insurance package that combines general liability insurance and commercial property insurance into one convenient, cost-effective policy. BOPs are designed for small to mid-sized businesses and typically cost less than buying each coverage separately. They can also be customized with additional endorsements for your specific industry.",
    coverageIncludes: [
      "General liability protection",
      "Commercial property coverage (building, equipment, inventory)",
      "Business income / loss of income coverage",
      "Equipment breakdown coverage",
      "Data breach / cyber liability (optional endorsement)",
      "Hired and non-owned auto (optional endorsement)",
    ],
    coverageExcludes: [
      "Workers compensation",
      "Commercial auto insurance",
      "Professional liability / E&O",
      "Health and disability insurance for employees",
      "Employment practices liability",
    ],
    costFactors: [
      "Industry and business type",
      "Business location (owned vs. leased space)",
      "Property value and equipment",
      "Annual revenue",
      "Number of employees",
      "Claims history",
    ],
    averageCost: "Starting around $75/month",
    whoNeedsThis:
      "BOPs are ideal for small to mid-sized businesses that need both liability and property coverage. They're particularly popular with office-based businesses, retail stores, restaurants, and service businesses. If your business has a physical location or valuable equipment, a BOP is often the most cost-effective option.",
    relatedLines: ["general-liability", "commercial-property", "workers-compensation"],
    faqs: [
      {
        question: "What's the difference between a BOP and general liability?",
        answer:
          "A BOP includes general liability PLUS commercial property coverage and business income protection — all bundled together at a lower price than buying them separately. Think of it as the 'value meal' of business insurance.",
      },
      {
        question: "Can I customize my BOP?",
        answer:
          "Yes! Most carriers allow you to add endorsements to your BOP for additional coverage like cyber liability, equipment breakdown, hired and non-owned auto, and more. We'll help you build a BOP that fits your specific business needs.",
      },
    ],
    metaTitle: "Business Owners Policy (BOP) in Colorado | Colorado Insurance Services",
    metaDescription:
      "Save money with a Business Owners Policy that bundles general liability and property coverage. Get a BOP quote for your Colorado business.",
  },
  {
    slug: "commercial-auto",
    name: "Commercial Auto Insurance",
    shortName: "Commercial Auto",
    type: "commercial",
    icon: "Truck",
    tagline: "Coverage for business vehicles and fleets.",
    description:
      "Commercial auto insurance covers vehicles owned or used by your business. Whether you have a single work truck or an entire fleet, commercial auto provides liability, collision, and comprehensive coverage tailored to business use. Personal auto policies typically don't cover vehicles used for business purposes, making commercial auto essential for any business that uses vehicles.",
    coverageIncludes: [
      "Liability coverage (bodily injury and property damage)",
      "Collision coverage for business vehicles",
      "Comprehensive coverage (theft, hail, vandalism)",
      "Uninsured/underinsured motorist coverage",
      "Medical payments for vehicle occupants",
      "Hired and non-owned auto coverage",
    ],
    coverageExcludes: [
      "Personal use of the vehicle (may need a personal policy too)",
      "Cargo or goods being transported (need inland marine)",
      "Damage to property you're working on",
      "Employee injuries (covered by workers comp)",
    ],
    costFactors: [
      "Number and type of vehicles",
      "Vehicle use (delivery, service, sales, etc.)",
      "Driver records and experience",
      "Annual mileage per vehicle",
      "Cargo type and value",
      "Coverage limits and deductibles",
    ],
    averageCost: "Starting around $150/month per vehicle",
    whoNeedsThis:
      "Any business that owns, leases, or uses vehicles for business purposes needs commercial auto insurance. This includes delivery services, contractors, sales teams, and anyone who drives for work. If employees use their personal cars for business, hired and non-owned auto coverage is essential.",
    relatedLines: ["general-liability", "business-owners-policy", "workers-compensation"],
    faqs: [
      {
        question: "Can I use my personal auto insurance for business?",
        answer:
          "Generally no. Personal auto policies typically exclude business use. If you're in an accident while working and only have personal coverage, your claim could be denied. Commercial auto insurance is designed specifically for business vehicle use.",
      },
      {
        question: "What is hired and non-owned auto insurance?",
        answer:
          "Hired and non-owned auto covers liability when employees use rental cars (hired) or their personal vehicles (non-owned) for business purposes. It's an affordable way to protect your business from auto liability even if you don't own any vehicles.",
      },
    ],
    metaTitle: "Commercial Auto Insurance in Colorado | Colorado Insurance Services",
    metaDescription:
      "Protect your business vehicles with commercial auto insurance in Colorado. Coverage for trucks, vans, fleets, and hired/non-owned vehicles.",
  },
  {
    slug: "workers-compensation",
    name: "Workers Compensation Insurance",
    shortName: "Workers Comp",
    type: "commercial",
    icon: "HardHat",
    tagline: "Protect your employees and your business.",
    description:
      "Workers compensation insurance provides benefits to employees who are injured or become ill as a result of their job. It covers medical expenses, lost wages, rehabilitation costs, and death benefits. In Colorado, most employers are required by law to carry workers compensation insurance, regardless of the number of employees.",
    coverageIncludes: [
      "Medical expenses for work-related injuries and illness",
      "Lost wages during recovery (typically 2/3 of average wage)",
      "Rehabilitation and physical therapy costs",
      "Death benefits for employees' families",
      "Employer's liability protection",
      "Legal defense costs for covered claims",
    ],
    coverageExcludes: [
      "Injuries from employee intoxication or drug use",
      "Self-inflicted injuries",
      "Injuries occurring outside of work",
      "Independent contractor injuries (they need their own coverage)",
      "Penalties and fines from OSHA violations",
    ],
    costFactors: [
      "Industry classification codes",
      "Annual payroll amount",
      "Number of employees",
      "Claims history (experience modification rate)",
      "State requirements and rates",
      "Workplace safety programs",
    ],
    averageCost: "Varies significantly by industry and payroll",
    whoNeedsThis:
      "In Colorado, almost every employer with one or more employees is required to carry workers compensation insurance. This includes full-time, part-time, and seasonal employees. Sole proprietors and independent contractors can opt in for their own coverage.",
    relatedLines: ["general-liability", "business-owners-policy", "commercial-auto"],
    faqs: [
      {
        question: "Is workers comp required in Colorado?",
        answer:
          "Yes. Colorado law requires almost all employers to carry workers compensation insurance, even if you only have one employee. There are very few exceptions. Failing to carry workers comp can result in significant fines and personal liability.",
      },
      {
        question: "How is workers comp premium calculated?",
        answer:
          "Workers comp premiums are based on your classification code (industry type), total payroll, and experience modification rate (claims history). Businesses with good safety records and few claims get lower rates. We can help you find the most competitive rates.",
      },
    ],
    metaTitle: "Workers Compensation Insurance in Colorado | Colorado Insurance Services",
    metaDescription:
      "Colorado requires workers comp for most employers. Get competitive workers compensation quotes from a local independent insurance agent.",
  },
  {
    slug: "commercial-property",
    name: "Commercial Property Insurance",
    shortName: "Commercial Property",
    type: "commercial",
    icon: "Building",
    tagline: "Protect your building, equipment, and inventory.",
    description:
      "Commercial property insurance protects your business's physical assets — including your building (if you own it), equipment, inventory, furniture, and other business property — from covered perils like fire, theft, vandalism, and certain weather events. In Colorado, where hail and severe weather can cause significant damage, commercial property coverage is essential for any business with physical assets.",
    coverageIncludes: [
      "Building structure (if owned)",
      "Business equipment and machinery",
      "Inventory and stock",
      "Furniture and fixtures",
      "Signage and outdoor property",
      "Business income loss due to covered events",
    ],
    coverageExcludes: [
      "Flood damage (requires separate policy)",
      "Earthquake damage",
      "Employee theft (requires crime insurance)",
      "Boiler and machinery breakdown (can be added)",
      "Normal wear and tear",
    ],
    costFactors: [
      "Property value and construction type",
      "Location and local weather risks",
      "Security and fire protection systems",
      "Type of business and occupancy",
      "Claims history",
      "Coverage limits and deductibles",
    ],
    averageCost: "Starting around $75/month",
    whoNeedsThis:
      "Any business that owns or leases a physical space, has valuable equipment, or maintains inventory needs commercial property insurance. This includes retail stores, offices, warehouses, restaurants, and manufacturing facilities.",
    relatedLines: ["business-owners-policy", "general-liability", "commercial-auto"],
    faqs: [
      {
        question: "Does commercial property insurance cover natural disasters?",
        answer:
          "Standard commercial property insurance covers most weather events including wind, hail, lightning, and fire. However, flood and earthquake damage typically require separate policies. In Colorado, hail coverage is especially important.",
      },
      {
        question: "What's the difference between commercial property and a BOP?",
        answer:
          "A Business Owners Policy (BOP) bundles commercial property with general liability insurance. If you need both (most businesses do), a BOP is usually more cost-effective than buying each separately.",
      },
    ],
    metaTitle: "Commercial Property Insurance in Colorado | Colorado Insurance Services",
    metaDescription:
      "Protect your Colorado business property, equipment, and inventory. Get commercial property insurance quotes from a local independent agent.",
  },
  {
    slug: "professional-liability",
    name: "Professional Liability Insurance (E&O)",
    shortName: "Professional Liability",
    type: "commercial",
    icon: "Scale",
    tagline: "Coverage for professional errors, advice, and services.",
    description:
      "Professional liability insurance, also known as Errors and Omissions (E&O) insurance, protects professionals and businesses from claims of negligence, errors, or failure to deliver professional services. Unlike general liability, which covers physical injuries, professional liability covers financial losses your clients may suffer due to your professional advice, services, or actions.",
    coverageIncludes: [
      "Claims of professional negligence or errors",
      "Failure to deliver promised services",
      "Missed deadlines causing client financial loss",
      "Inaccurate advice or recommendations",
      "Legal defense costs and settlements",
      "Copyright infringement claims related to your work",
    ],
    coverageExcludes: [
      "Bodily injury claims (covered by general liability)",
      "Property damage claims (covered by general liability)",
      "Employee-related claims (covered by EPLI)",
      "Criminal acts or intentional wrongdoing",
      "Claims arising before the policy period (unless with prior acts coverage)",
    ],
    costFactors: [
      "Profession and industry",
      "Annual revenue and number of clients",
      "Years of experience",
      "Claims history",
      "Coverage limits and deductible",
      "Services provided and risk level",
    ],
    averageCost: "Starting around $60/month",
    whoNeedsThis:
      "Any business or professional that provides advice, services, or expertise to clients should carry professional liability insurance. This includes consultants, IT professionals, accountants, architects, engineers, real estate agents, marketing agencies, and many more.",
    relatedLines: ["general-liability", "business-owners-policy", "commercial-property"],
    faqs: [
      {
        question: "What's the difference between E&O and general liability?",
        answer:
          "General liability covers physical injuries and property damage. Professional liability (E&O) covers financial losses from your professional services, advice, or errors. A consultant who gives bad advice that costs a client money would need E&O, while a contractor whose scaffold falls on someone would need GL.",
      },
      {
        question: "Do I need professional liability if I have general liability?",
        answer:
          "Often yes. General liability and professional liability cover different types of risks. If your business provides any kind of professional advice, services, or expertise, you likely need both policies for complete protection.",
      },
    ],
    metaTitle: "Professional Liability Insurance (E&O) in Colorado | Colorado Insurance Services",
    metaDescription:
      "Protect your Colorado business from claims of professional errors and negligence. Get E&O insurance quotes from a local independent agent.",
  },
];

export function getInsuranceLineBySlug(slug: string): InsuranceLine | undefined {
  return insuranceLines.find((line) => line.slug === slug);
}

export function getPersonalLines(): InsuranceLine[] {
  return insuranceLines.filter((line) => line.type === "personal");
}

export function getCommercialLines(): InsuranceLine[] {
  return insuranceLines.filter((line) => line.type === "commercial");
}
