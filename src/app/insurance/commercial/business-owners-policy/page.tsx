import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("business-owners-policy");

export const metadata: Metadata = {
  title: line?.metaTitle || "Business Owners Policy (BOP)",
  description: line?.metaDescription || "Bundled business coverage at a better price.",
};

export default function BusinessOwnersPolicyPage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
