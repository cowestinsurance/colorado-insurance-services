import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("commercial-auto");

export const metadata: Metadata = {
  title: line?.metaTitle || "Commercial Auto Insurance",
  description: line?.metaDescription || "Coverage for business vehicles and fleets.",
};

export default function CommercialAutoPage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
