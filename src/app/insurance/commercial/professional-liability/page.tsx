import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("professional-liability");

export const metadata: Metadata = {
  title: line?.metaTitle || "Professional Liability Insurance (E&O)",
  description: line?.metaDescription || "Coverage for professional errors and omissions.",
};

export default function ProfessionalLiabilityPage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
