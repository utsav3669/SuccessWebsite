import React from "react";
import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Success Educational Consultancy",
  description:
    "Honest answers regarding studying in Hungary, European tuition fees, student work rights, embassy interview prep, and SEC services.",
};

export default function FaqsPage() {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
            Clarity & Transparency
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
            Find direct, honest answers across admissions, visa regulations, scholarships, and living abroad.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FaqAccordion showCategoryTabs={true} />
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center p-8 bg-sec-offwhite rounded-card border border-sec-gray-light space-y-4">
        <h3 className="font-poppins text-xl font-bold text-sec-dark">
          Still Have a Specific Question?
        </h3>
        <p className="font-inter text-xs sm:text-sm text-sec-muted max-w-lg mx-auto leading-relaxed">
          Our senior counselling team is available at our Putilisadak-29 office Sunday through Friday from 9:30 AM to 5:30 PM.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-sec-navy hover:bg-sec-navy-dark text-white text-xs font-semibold font-poppins rounded-btn transition-colors"
          >
            Contact Kathmandu Office
          </Link>
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=Hello+SEC,+I+have+a+question+that+wasn't+in+the+FAQs`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white border border-sec-gray-light text-sec-dark text-xs font-semibold font-poppins rounded-btn hover:bg-sec-gray-light transition-colors"
          >
            Ask On WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
