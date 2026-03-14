import type { FAQ } from "./insurance";

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: string;
  recommendedCoverage: string[];
  commonRisks: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}
