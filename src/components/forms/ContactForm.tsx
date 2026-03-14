"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
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
        <h3 className="font-serif text-heading-sm text-brand-navy mb-2">Message sent!</h3>
        <p className="font-sans text-body text-neutral-600">
          Thank you for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label="Full Name" name="name" placeholder="John Smith" required />
        <Input label="Email" name="email" type="email" placeholder="john@example.com" required />
      </div>
      <Input label="Phone" name="phone" type="tel" placeholder="(303) 555-0100" />
      <Textarea label="Message" name="message" placeholder="How can we help you?" required />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-3 bg-brand-orange text-white font-sans font-semibold rounded-xl hover:bg-brand-orange-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-[1px]"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-body-sm font-sans">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
