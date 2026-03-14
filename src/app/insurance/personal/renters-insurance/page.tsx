import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("renters-insurance");

export const metadata: Metadata = {
  title: line?.metaTitle || "Renters Insurance",
  description: line?.metaDescription || "Affordable renters insurance in Colorado.",
};

export default function RentersInsurancePage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
