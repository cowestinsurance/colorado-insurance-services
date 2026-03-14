import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("auto-insurance");

export const metadata: Metadata = {
  title: line?.metaTitle || "Auto Insurance",
  description: line?.metaDescription || "Get affordable auto insurance in Colorado.",
};

export default function AutoInsurancePage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
