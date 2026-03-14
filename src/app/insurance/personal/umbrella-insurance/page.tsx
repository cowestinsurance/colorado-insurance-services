import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("umbrella-insurance");

export const metadata: Metadata = {
  title: line?.metaTitle || "Umbrella Insurance",
  description: line?.metaDescription || "Extra liability protection in Colorado.",
};

export default function UmbrellaInsurancePage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
