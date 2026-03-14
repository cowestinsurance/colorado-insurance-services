import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceLineTemplate from "@/components/insurance/InsuranceLineTemplate";
import { getInsuranceLineBySlug } from "@/data/insurance-lines";

const line = getInsuranceLineBySlug("workers-compensation");

export const metadata: Metadata = {
  title: line?.metaTitle || "Workers Compensation Insurance",
  description: line?.metaDescription || "Protect your employees on the job.",
};

export default function WorkersCompensationPage() {
  if (!line) return notFound();
  return <InsuranceLineTemplate line={line} />;
}
