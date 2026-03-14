import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("home-insurance");

export const metadata: Metadata = {
  title: line?.metaTitle || "Home Insurance",
  description: line?.metaDescription || "Protect your Colorado home.",
};

export default function HomeInsurancePage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
