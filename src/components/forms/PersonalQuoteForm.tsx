"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Home, Car, Building2, Umbrella, ArrowRight, ArrowLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

const insuranceTypes = [
  { value: "home-insurance", label: "Home Insurance", icon: Home },
  { value: "auto-insurance", label: "Auto Insurance", icon: Car },
  { value: "renters-insurance", label: "Renters Insurance", icon: Building2 },
  { value: "umbrella-insurance", label: "Umbrella Insurance", icon: Umbrella },
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

export default function PersonalQuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("type") || "";

  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    insuranceType: preselected,
    propertyType: "",
    yearBuilt: "",
    squareFootage: "",
    numberOfVehicles: "",
    numberOfDrivers: "",
    rentalType: "",
    hasCurrentCoverage: "",
    currentProvider: "",
    desiredStartDate: "",
    additionalNotes: "",
  });

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote/personal", {
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
          Thank you! We&apos;ll review your information and get back to you with personalized quotes — usually within 24 hours.
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

      {/* Step 1: Contact + Insurance Type */}
      {step === 1 && (
        <div className="space-y-5">
          <h2 className="font-serif text-heading-sm text-brand-navy mb-2">Your information</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <Input label="First Name" value={formData.firstName} onChange={(e) => update("firstName", e.target.value)} required />
            <Input label="Last Name" value={formData.lastName} onChange={(e) => update("lastName", e.target.value)} required />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Input label="Email" type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} required />
            <Input label="Phone" type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} required />
          </div>
          <Select label="Your City" options={cityOptions} value={formData.city} onChange={(e) => update("city", e.target.value)} placeholder="Select your city" />

          <div>
            <p className="block text-body-sm font-sans font-semibold text-brand-navy mb-3">What type of insurance do you need?</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {insuranceTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => update("insuranceType", type.value)}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    formData.insuranceType === type.value
                      ? "border-brand-orange bg-brand-orange-bg"
                      : "border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <type.icon className={`w-6 h-6 mx-auto mb-2 ${formData.insuranceType === type.value ? "text-brand-orange" : "text-neutral-400"}`} />
                  <span className="text-body-sm font-sans font-medium text-brand-navy">{type.label.replace(" Insurance", "")}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!formData.firstName || !formData.email || !formData.insuranceType}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Step 2: Coverage Details */}
      {step === 2 && (
        <div className="space-y-5">
          <h2 className="font-serif text-heading-sm text-brand-navy mb-2">Coverage details</h2>

          {formData.insuranceType === "home-insurance" && (
            <>
              <Select label="Property Type" options={[{value:"single-family",label:"Single Family Home"},{value:"condo",label:"Condo/Townhouse"},{value:"multi-family",label:"Multi-Family"},{value:"mobile",label:"Mobile Home"}]} value={formData.propertyType} onChange={(e) => update("propertyType", e.target.value)} placeholder="Select property type" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Year Built" value={formData.yearBuilt} onChange={(e) => update("yearBuilt", e.target.value)} placeholder="e.g., 2005" />
                <Input label="Square Footage" value={formData.squareFootage} onChange={(e) => update("squareFootage", e.target.value)} placeholder="e.g., 2,000" />
              </div>
            </>
          )}

          {formData.insuranceType === "auto-insurance" && (
            <div className="grid sm:grid-cols-2 gap-5">
              <Select label="Number of Vehicles" options={[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4+",label:"4+"}]} value={formData.numberOfVehicles} onChange={(e) => update("numberOfVehicles", e.target.value)} placeholder="Select" />
              <Select label="Number of Drivers" options={[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4+",label:"4+"}]} value={formData.numberOfDrivers} onChange={(e) => update("numberOfDrivers", e.target.value)} placeholder="Select" />
            </div>
          )}

          {formData.insuranceType === "renters-insurance" && (
            <Select label="Rental Type" options={[{value:"apartment",label:"Apartment"},{value:"house",label:"House"},{value:"condo",label:"Condo"},{value:"townhouse",label:"Townhouse"}]} value={formData.rentalType} onChange={(e) => update("rentalType", e.target.value)} placeholder="Select rental type" />
          )}

          {formData.insuranceType === "umbrella-insurance" && (
            <p className="text-body text-neutral-600 font-sans bg-brand-beige p-4 rounded-xl">
              Umbrella insurance provides extra liability protection beyond your home and auto policies. We&apos;ll review your current coverage and recommend the right umbrella amount.
            </p>
          )}

          <Select
            label="Do you currently have this type of coverage?"
            options={[{value:"yes",label:"Yes"},{value:"no",label:"No"}]}
            value={formData.hasCurrentCoverage}
            onChange={(e) => update("hasCurrentCoverage", e.target.value)}
            placeholder="Select"
          />

          {formData.hasCurrentCoverage === "yes" && (
            <Input label="Current Insurance Provider" value={formData.currentProvider} onChange={(e) => update("currentProvider", e.target.value)} placeholder="e.g., State Farm" />
          )}

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

      {/* Step 3: Final Details */}
      {step === 3 && (
        <div className="space-y-5">
          <h2 className="font-serif text-heading-sm text-brand-navy mb-2">Final details</h2>
          <Input label="Desired Start Date" type="date" value={formData.desiredStartDate} onChange={(e) => update("desiredStartDate", e.target.value)} />
          <Textarea label="Additional Notes" value={formData.additionalNotes} onChange={(e) => update("additionalNotes", e.target.value)} placeholder="Anything else we should know? (optional)" />

          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-300 text-neutral-600 font-sans font-semibold rounded-xl hover:border-brand-navy hover:text-brand-navy transition-all">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={status === "submitting"}
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
