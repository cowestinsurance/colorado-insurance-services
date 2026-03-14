"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

const industryOptions = [
  { value: "restaurant", label: "Restaurant / Food Service" },
  { value: "construction", label: "Construction / Contractor" },
  { value: "retail", label: "Retail Store" },
  { value: "it-technology", label: "IT / Technology" },
  { value: "cleaning", label: "Cleaning Services" },
  { value: "landscaping", label: "Landscaping" },
  { value: "real-estate", label: "Real Estate" },
  { value: "healthcare", label: "Healthcare" },
  { value: "professional-services", label: "Professional Services / Consulting" },
  { value: "auto-repair", label: "Auto Repair / Body Shop" },
  { value: "salon-spa", label: "Salon / Spa / Beauty" },
  { value: "fitness", label: "Fitness / Gym" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "transportation", label: "Transportation / Trucking" },
  { value: "nonprofit", label: "Nonprofit" },
  { value: "other", label: "Other" },
];

const coverageTypes = [
  { value: "general-liability", label: "General Liability" },
  { value: "business-owners-policy", label: "Business Owners Policy (BOP)" },
  { value: "commercial-auto", label: "Commercial Auto" },
  { value: "workers-compensation", label: "Workers Compensation" },
  { value: "commercial-property", label: "Commercial Property" },
  { value: "professional-liability", label: "Professional Liability (E&O)" },
];

const cityOptions = [
  { value: "denver", label: "Denver" },
  { value: "aurora", label: "Aurora" },
  { value: "lakewood", label: "Lakewood" },
  { value: "broomfield", label: "Broomfield" },
  { value: "westminster", label: "Westminster" },
  { value: "arvada", label: "Arvada" },
  { value: "thornton", label: "Thornton" },
  { value: "boulder", label: "Boulder" },
  { value: "centennial", label: "Centennial" },
  { value: "littleton", label: "Littleton" },
  { value: "other", label: "Other" },
];

export default function CommercialQuoteForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    yearsInBusiness: "",
    numberOfEmployees: "",
    annualRevenue: "",
    businessCity: "",
    selectedCoverages: [] as string[],
    hasCurrentCoverage: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    preferredContactMethod: "email",
    additionalDetails: "",
  });

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCoverage = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCoverages: prev.selectedCoverages.includes(value)
        ? prev.selectedCoverages.filter((c) => c !== value)
        : [...prev.selectedCoverages, value],
    }));
  };

  const handleSubmit = async () => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote/commercial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-brand-green-bg rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="font-serif text-heading-sm text-brand-navy mb-2">Quote request received!</h3>
        <p className="font-sans text-body text-neutral-600">
          Thank you! We&apos;ll review your business information and reach out with tailored coverage options.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1">
            <div className={`h-2 rounded-full transition-colors ${s <= step ? "bg-brand-orange" : "bg-neutral-200"}`} />
            <p className="text-caption font-sans text-neutral-500 mt-1">Step {s}</p>
          </div>
        ))}
      </div>

      {/* Step 1: Business Info */}
      {step === 1 && (
        <div className="space-y-5">
          <h2 className="font-serif text-heading-sm text-brand-navy mb-2">Business information</h2>
          <Input label="Business Name" value={formData.businessName} onChange={(e) => update("businessName", e.target.value)} required placeholder="Your business name" />
          <Select label="Industry / Business Type" options={industryOptions} value={formData.industry} onChange={(e) => update("industry", e.target.value)} placeholder="What kind of work do you do?" />
          <div className="grid sm:grid-cols-2 gap-5">
            <Select label="Years in Business" options={[{value:"less-than-1",label:"Less than 1 year"},{value:"1-3",label:"1-3 years"},{value:"3-5",label:"3-5 years"},{value:"5-10",label:"5-10 years"},{value:"10+",label:"10+ years"}]} value={formData.yearsInBusiness} onChange={(e) => update("yearsInBusiness", e.target.value)} placeholder="Select" />
            <Select label="Number of Employees" options={[{value:"1",label:"Just me"},{value:"2-5",label:"2-5"},{value:"6-10",label:"6-10"},{value:"11-25",label:"11-25"},{value:"26-50",label:"26-50"},{value:"50+",label:"50+"}]} value={formData.numberOfEmployees} onChange={(e) => update("numberOfEmployees", e.target.value)} placeholder="Select" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Select label="Annual Revenue" options={[{value:"under-100k",label:"Under $100K"},{value:"100k-250k",label:"$100K - $250K"},{value:"250k-500k",label:"$250K - $500K"},{value:"500k-1m",label:"$500K - $1M"},{value:"1m-5m",label:"$1M - $5M"},{value:"5m+",label:"$5M+"}]} value={formData.annualRevenue} onChange={(e) => update("annualRevenue", e.target.value)} placeholder="Select" />
            <Select label="Business City" options={cityOptions} value={formData.businessCity} onChange={(e) => update("businessCity", e.target.value)} placeholder="Select your city" />
          </div>
          <button
            onClick={() => setStep(2)}
            disabled={!formData.businessName || !formData.industry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Step 2: Coverage Needs */}
      {step === 2 && (
        <div className="space-y-5">
          <h2 className="font-serif text-heading-sm text-brand-navy mb-2">What coverage do you need?</h2>
          <p className="text-body text-neutral-600 font-sans">Select all that apply. Not sure? That&apos;s okay — we&apos;ll help you figure it out.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {coverageTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => toggleCoverage(type.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  formData.selectedCoverages.includes(type.value)
                    ? "border-brand-orange bg-brand-orange-bg"
                    : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <span className="font-sans font-medium text-brand-navy">{type.label}</span>
              </button>
            ))}
          </div>
          <Select
            label="Do you currently have business insurance?"
            options={[{value:"yes",label:"Yes"},{value:"no",label:"No"}]}
            value={formData.hasCurrentCoverage}
            onChange={(e) => update("hasCurrentCoverage", e.target.value)}
            placeholder="Select"
          />
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-300 text-neutral-600 font-sans font-semibold rounded-xl hover:border-brand-navy hover:text-brand-navy transition-all">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button onClick={() => setStep(3)} className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-all">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Contact */}
      {step === 3 && (
        <div className="space-y-5">
          <h2 className="font-serif text-heading-sm text-brand-navy mb-2">Contact information</h2>
          <Input label="Your Name" value={formData.contactName} onChange={(e) => update("contactName", e.target.value)} required placeholder="Full name" />
          <div className="grid sm:grid-cols-2 gap-5">
            <Input label="Email" type="email" value={formData.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} required />
            <Input label="Phone" type="tel" value={formData.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} required />
          </div>
          <Select label="Preferred Contact Method" options={[{value:"email",label:"Email"},{value:"phone",label:"Phone"}]} value={formData.preferredContactMethod} onChange={(e) => update("preferredContactMethod", e.target.value)} />
          <Textarea label="Additional Details" value={formData.additionalDetails} onChange={(e) => update("additionalDetails", e.target.value)} placeholder="Anything else we should know about your business? (optional)" />

          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-300 text-neutral-600 font-sans font-semibold rounded-xl hover:border-brand-navy hover:text-brand-navy transition-all">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={status === "submitting" || !formData.contactName || !formData.contactEmail}
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-all disabled:opacity-50"
            >
              {status === "submitting" ? "Submitting..." : "Submit Quote Request"}
            </button>
          </div>

          {status === "error" && (
            <p className="text-red-600 text-body-sm font-sans">Something went wrong. Please try again or call us directly.</p>
          )}
        </div>
      )}
    </div>
  );
}
