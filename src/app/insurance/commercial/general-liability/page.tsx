import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("general-liability");

export const metadata: Metadata = {
  title: line?.metaTitle || "General Liability Insurance",
  description: line?.metaDescription || "Essential protection for every Colorado business.",
};

export default function GeneralLiabilityPage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
