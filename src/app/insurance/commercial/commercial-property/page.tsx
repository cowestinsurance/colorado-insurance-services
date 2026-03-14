import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("commercial-property");

export const metadata: Metadata = {
  title: line?.metaTitle || "Commercial Property Insurance",
  description: line?.metaDescription || "Protect your building and equipment.",
};

export default function CommercialPropertyPage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
