export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  relatedTerms?: string[];
  relatedLine?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "premium",
    term: "Premium",
    definition:
      "The amount you pay for your insurance policy, typically on a monthly, quarterly, or annual basis. Your premium is determined by factors like your coverage limits, deductible, location, claims history, and risk profile. In Colorado, premiums for home insurance tend to be higher than the national average due to hail and wildfire risk.",
    relatedTerms: ["deductible", "coverage-limit", "underwriting"],
  },
  {
    slug: "deductible",
    term: "Deductible",
    definition:
      "The amount you pay out of pocket before your insurance coverage kicks in when you file a claim. For example, if you have a $1,000 deductible and file a $5,000 claim, you pay $1,000 and your insurer pays $4,000. Choosing a higher deductible typically lowers your premium. In Colorado, some home insurance policies have separate, percentage-based hail deductibles.",
    relatedTerms: ["premium", "claim", "coverage-limit"],
    relatedLine: "home-insurance",
  },
  {
    slug: "claim",
    term: "Claim",
    definition:
      "A formal request you make to your insurance company asking them to pay for a covered loss or event. The claims process typically involves reporting the incident, documenting the damage, working with an adjuster, and receiving payment. Filing too many claims can affect your future premiums and insurability.",
    relatedTerms: ["deductible", "adjuster", "premium"],
  },
  {
    slug: "coverage-limit",
    term: "Coverage Limit",
    definition:
      "The maximum amount your insurance company will pay for a covered claim. Limits can be per-occurrence (per incident), aggregate (total for the policy period), or per-person. For example, auto liability limits of 25/50/15 mean $25,000 per person / $50,000 per accident for bodily injury, and $15,000 for property damage.",
    relatedTerms: ["premium", "deductible", "umbrella-insurance"],
    relatedLine: "auto-insurance",
  },
  {
    slug: "liability-insurance",
    term: "Liability Insurance",
    definition:
      "Insurance that covers your legal responsibility for injuries or damage you cause to others. Liability coverage pays for the other party's medical bills, property repair, and your legal defense costs. It's a required component of auto insurance in Colorado and a critical part of both personal and business insurance programs.",
    relatedTerms: ["general-liability", "coverage-limit"],
    relatedLine: "general-liability",
  },
  {
    slug: "general-liability",
    term: "General Liability Insurance",
    definition:
      "A type of business insurance that protects your company from claims of bodily injury, property damage, and personal/advertising injury caused by your business operations. It's the foundation of most commercial insurance programs and is often required by clients, landlords, and contracts.",
    relatedTerms: ["liability-insurance", "bop", "professional-liability"],
    relatedLine: "general-liability",
  },
  {
    slug: "bop",
    term: "Business Owners Policy (BOP)",
    definition:
      "A bundled insurance package that combines general liability and commercial property coverage into one policy, usually at a lower cost than purchasing each separately. BOPs are designed for small to mid-sized businesses and can be customized with endorsements for additional coverage like cyber liability or equipment breakdown.",
    relatedTerms: ["general-liability", "commercial-property"],
    relatedLine: "business-owners-policy",
  },
  {
    slug: "endorsement",
    term: "Endorsement (Rider)",
    definition:
      "An add-on or modification to your existing insurance policy that changes your coverage. Endorsements can add coverage (like adding jewelry coverage to a home policy), remove exclusions, or modify limits. They allow you to customize a standard policy to fit your specific needs.",
    relatedTerms: ["premium", "coverage-limit", "exclusion"],
  },
  {
    slug: "exclusion",
    term: "Exclusion",
    definition:
      "A specific event, condition, or type of loss that your insurance policy does not cover. Common exclusions include flood damage on home insurance, intentional acts, and wear and tear. Understanding your policy's exclusions is critical so you know what risks you may need additional coverage for.",
    relatedTerms: ["endorsement", "coverage-limit", "claim"],
  },
  {
    slug: "underwriting",
    term: "Underwriting",
    definition:
      "The process an insurance company uses to evaluate risk and decide whether to offer coverage, and at what price. Underwriters assess factors like your location, claims history, credit score, property condition, and business type to determine your premium and coverage terms.",
    relatedTerms: ["premium", "risk"],
  },
  {
    slug: "adjuster",
    term: "Claims Adjuster",
    definition:
      "A person who investigates insurance claims to determine the extent of the insurance company's liability. Adjusters inspect damage, review documentation, and negotiate settlements. There are company adjusters (work for the insurer), independent adjusters (contracted), and public adjusters (hired by the policyholder).",
    relatedTerms: ["claim", "deductible"],
  },
  {
    slug: "actual-cash-value",
    term: "Actual Cash Value (ACV)",
    definition:
      "A method of valuing insured property that accounts for depreciation. ACV pays you what the item was worth at the time of loss, not what it costs to replace it new. For example, a 5-year-old TV worth $300 today would be valued at $300, even if a new replacement costs $600. Compare with replacement cost coverage.",
    relatedTerms: ["replacement-cost", "claim"],
  },
  {
    slug: "replacement-cost",
    term: "Replacement Cost",
    definition:
      "A method of valuing insured property based on the current cost to replace it with a similar item, without deducting for depreciation. Replacement cost coverage typically has higher premiums than actual cash value but provides better protection. Most insurance professionals recommend replacement cost for dwelling and personal property coverage.",
    relatedTerms: ["actual-cash-value", "premium"],
    relatedLine: "home-insurance",
  },
  {
    slug: "certificate-of-insurance",
    term: "Certificate of Insurance (COI)",
    definition:
      "A document issued by an insurance company or agent that summarizes your insurance coverage, including policy types, coverage limits, and effective dates. COIs are commonly required by clients, landlords, general contractors, and lenders as proof that you carry adequate insurance.",
    relatedTerms: ["general-liability", "additional-insured"],
    relatedLine: "general-liability",
  },
  {
    slug: "additional-insured",
    term: "Additional Insured",
    definition:
      "A person or entity added to your liability insurance policy who receives coverage under your policy for claims arising from your operations. For example, a property owner may require a tenant to add them as an additional insured on their general liability policy. This is done through an endorsement.",
    relatedTerms: ["certificate-of-insurance", "endorsement", "general-liability"],
  },
  {
    slug: "umbrella-insurance",
    term: "Umbrella Insurance",
    definition:
      "A type of liability insurance that provides coverage beyond the limits of your underlying policies (home, auto, etc.). If a claim exceeds your standard policy limits, your umbrella policy kicks in to cover the excess. Umbrella policies typically start at $1 million in coverage and are relatively affordable.",
    relatedTerms: ["liability-insurance", "coverage-limit"],
    relatedLine: "umbrella-insurance",
  },
  {
    slug: "workers-compensation",
    term: "Workers Compensation Insurance",
    definition:
      "Insurance that provides benefits to employees who are injured or become ill as a result of their job. Workers comp covers medical expenses, lost wages, and rehabilitation costs. In Colorado, nearly all employers are required by law to carry workers compensation insurance, even with just one employee.",
    relatedTerms: ["experience-modification-rate"],
    relatedLine: "workers-compensation",
  },
  {
    slug: "experience-modification-rate",
    term: "Experience Modification Rate (EMR)",
    definition:
      "A number used in workers compensation insurance that compares your company's claims history to the average for your industry. An EMR of 1.0 is average. Below 1.0 means fewer claims than average (lower premiums). Above 1.0 means more claims than average (higher premiums). Your EMR directly impacts your workers comp premium.",
    relatedTerms: ["workers-compensation", "premium"],
  },
  {
    slug: "professional-liability",
    term: "Professional Liability Insurance (E&O)",
    definition:
      "Insurance that protects professionals and businesses from claims of negligence, errors, or failure to perform professional services. Also called Errors and Omissions (E&O) insurance. Unlike general liability which covers physical injuries, professional liability covers financial losses your clients suffer due to your professional advice or services.",
    relatedTerms: ["general-liability", "liability-insurance"],
    relatedLine: "professional-liability",
  },
  {
    slug: "independent-agent",
    term: "Independent Insurance Agent",
    definition:
      "An insurance agent who represents multiple insurance companies rather than just one. Independent agents can shop the market on your behalf, comparing coverage and pricing across carriers to find the best fit. Colorado Insurance Services is an independent agency — we work for you, not the insurance company.",
    relatedTerms: ["premium", "underwriting"],
  },
  {
    slug: "named-peril",
    term: "Named Peril Policy",
    definition:
      "An insurance policy that only covers losses caused by perils (events) specifically listed in the policy. If the cause of loss is not named, it's not covered. Compare with an open peril (all-risk) policy, which covers everything except what is specifically excluded.",
    relatedTerms: ["exclusion", "open-peril"],
  },
  {
    slug: "open-peril",
    term: "Open Peril (All-Risk) Policy",
    definition:
      "An insurance policy that covers all causes of loss except those specifically excluded in the policy. Open peril policies provide broader protection than named peril policies. Most modern homeowners policies are open peril for the dwelling but may be named peril for personal property.",
    relatedTerms: ["named-peril", "exclusion"],
    relatedLine: "home-insurance",
  },
  {
    slug: "declarations-page",
    term: "Declarations Page",
    definition:
      "The first page(s) of your insurance policy that summarizes the key details: who is insured, what is covered, coverage limits, deductibles, premium amount, and the policy period. The declarations page (or 'dec page') is the quickest way to review your coverage at a glance.",
    relatedTerms: ["premium", "coverage-limit", "deductible"],
  },
  {
    slug: "binder",
    term: "Insurance Binder",
    definition:
      "A temporary document that provides proof of insurance coverage before your official policy is issued. Binders are commonly used during real estate closings or when you need immediate proof of coverage. They typically remain in effect for 30-90 days until the formal policy is delivered.",
    relatedTerms: ["certificate-of-insurance", "underwriting"],
  },
  {
    slug: "risk",
    term: "Risk",
    definition:
      "In insurance, risk refers to the chance that a loss will occur. Insurance companies assess risk to determine whether to offer coverage and at what price. Risk factors vary by insurance type — for home insurance in Colorado, hail and wildfire are major risk factors that significantly affect premiums.",
    relatedTerms: ["underwriting", "premium"],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
