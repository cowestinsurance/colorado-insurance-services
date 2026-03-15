export interface TopicalCluster {
  slug: string;
  name: string;
  pillarTitle: string;
  pillarSlug: string;
  description: string;
  spokes: { title: string; slug: string }[];
}

export const topicalMaps: TopicalCluster[] = [
  {
    slug: "home-insurance-colorado",
    name: "Home Insurance",
    pillarTitle: "The Ultimate Guide to Home Insurance in Colorado",
    pillarSlug: "ultimate-guide-home-insurance-colorado",
    description:
      "Everything Colorado homeowners need to know about protecting their home — from hail and wildfire coverage to cost-saving tips.",
    spokes: [
      { title: "Does Home Insurance Cover Hail Damage in Colorado?", slug: "home-insurance-hail-damage-colorado" },
      { title: "Wildfire Insurance in Colorado: What You Need to Know", slug: "wildfire-insurance-colorado" },
      { title: "How Much Does Home Insurance Cost in Colorado?", slug: "home-insurance-cost-colorado" },
      { title: "Understanding Home Insurance Deductibles", slug: "home-insurance-deductibles-explained" },
      { title: "How to File a Home Insurance Claim in Colorado", slug: "how-to-file-home-insurance-claim-colorado" },
    ],
  },
  {
    slug: "auto-insurance-colorado",
    name: "Auto Insurance",
    pillarTitle: "Colorado Auto Insurance: Everything Drivers Need to Know",
    pillarSlug: "colorado-auto-insurance-guide",
    description:
      "A comprehensive guide to Colorado auto insurance — minimum requirements, coverage types, and how to save.",
    spokes: [
      { title: "Colorado Minimum Auto Insurance Requirements (2025)", slug: "colorado-minimum-auto-insurance-requirements" },
      { title: "Do You Need Uninsured Motorist Coverage in Colorado?", slug: "uninsured-motorist-coverage-colorado" },
      { title: "How to Insure a Teen Driver in Colorado", slug: "insure-teen-driver-colorado" },
      { title: "Winter Driving in Colorado: Coverage You Need", slug: "winter-driving-colorado-insurance" },
    ],
  },
  {
    slug: "small-business-insurance",
    name: "Small Business Insurance",
    pillarTitle: "Small Business Insurance in Colorado: The Complete Guide",
    pillarSlug: "small-business-insurance-colorado-guide",
    description:
      "Everything Colorado small business owners need to know about protecting their business with the right insurance coverage.",
    spokes: [
      { title: "General Liability vs. Professional Liability: What's the Difference?", slug: "general-liability-vs-professional-liability" },
      { title: "How Much Does General Liability Insurance Cost?", slug: "general-liability-insurance-cost" },
      { title: "What Is a Certificate of Insurance (COI)?", slug: "certificate-of-insurance-explained" },
      { title: "Do I Need a BOP or Separate Policies?", slug: "bop-vs-separate-policies" },
      { title: "Workers Comp in Colorado: Requirements and Costs", slug: "workers-comp-colorado-requirements" },
    ],
  },
  {
    slug: "denver-metro-insurance",
    name: "Denver Metro Living",
    pillarTitle: "Living and Insuring in the Denver Metro Area",
    pillarSlug: "denver-metro-insurance-guide",
    description:
      "Local insurance insights for Denver Metro residents — weather risks, property trends, and neighborhood-level coverage advice.",
    spokes: [
      { title: "Colorado Hail Season: How to Protect Your Home and Car", slug: "colorado-hail-season-protection" },
      { title: "Denver Metro Weather Risks and Your Insurance", slug: "denver-metro-weather-risks-insurance" },
      { title: "Is Flood Insurance Required in Colorado?", slug: "flood-insurance-colorado" },
    ],
  },
  {
    slug: "insurance-basics",
    name: "Insurance 101",
    pillarTitle: "Insurance 101: A Beginner's Guide",
    pillarSlug: "insurance-101-beginners-guide",
    description:
      "Plain-English explanations of insurance concepts — deductibles, premiums, claims, bundling, and when to switch providers.",
    spokes: [
      { title: "Insurance Deductibles Explained: How They Work", slug: "insurance-deductibles-explained" },
      { title: "How the Insurance Claims Process Works", slug: "how-insurance-claims-process-works" },
      { title: "Should You Bundle Your Insurance? Pros and Cons", slug: "bundle-insurance-pros-cons" },
      { title: "When Should You Switch Insurance Providers?", slug: "when-to-switch-insurance-providers" },
      { title: "Independent Agent vs. Captive Agent: What's the Difference?", slug: "independent-vs-captive-agent" },
    ],
  },
];

export function getClusterBySlug(slug: string): TopicalCluster | undefined {
  return topicalMaps.find((c) => c.slug === slug);
}
