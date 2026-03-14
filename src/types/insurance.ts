export interface FAQ {
  question: string;
  answer: string;
}

export interface InsuranceLine {
  slug: string;
  name: string;
  shortName: string;
  type: "personal" | "commercial";
  icon: string;
  tagline: string;
  description: string;
  coverageIncludes: string[];
  coverageExcludes: string[];
  costFactors: string[];
  averageCost: string;
  whoNeedsThis: string;
  relatedLines: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  insuranceType?: string;
}
