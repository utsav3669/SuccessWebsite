import React from "react";
import type { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Services & Guidance | Success Educational Consultancy",
  description:
    "Comprehensive study abroad guidance from Kathmandu: Career Counselling, Course Selection, University Selection, Application Assistance, Visa Guidance, Scholarships, and Pre-Departure.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-3xl space-y-3">
          <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red">
            What We Do
          </span>
          <h1 className="font-satoshi text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Consultancy Services
          </h1>
          <p className="font-satoshi text-base sm:text-lg text-sec-muted leading-relaxed">
            Ethical, transparent, and structured assistance designed to protect your investment and optimize your chances of admission and visa issuance.
          </p>
        </div>
      </section>

      <ServicesSection />
    </div>
  );
}
