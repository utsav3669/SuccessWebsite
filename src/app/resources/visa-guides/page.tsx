import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { visaGuides } from "@/data/resources";
import { Globe, Clock, DollarSign, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Visa Checklists & Embassy Guides | SEC",
  description:
    "Official embassy visa protocols, financial sponsorship criteria, and document checklists for Hungary, Germany, and the UK.",
};

export default function VisaGuidesPage() {
  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="max-w-3xl space-y-3">
          <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red">
            Immigration Compliance
          </span>
          <h1 className="font-satoshi text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Student Visa Guides & Checklists
          </h1>
          <p className="font-satoshi text-base sm:text-lg text-sec-muted leading-relaxed">
            Strict, compliance-first documentation checklists for student residence permits and entry visas. Zero shortcuts, 100% adherence to official embassy rules.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        {visaGuides.map((guide) => (
          <div
            key={guide.slug}
            className="bg-white rounded-card border border-sec-gray-light p-5 sm:p-7 shadow-subtle hover:border-sec-navy/30 transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-sec-gray-light">
              <div>
                <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red">
                  {guide.country} Student Visa
                </span>
                <h2 className="font-satoshi text-xl sm:text-2xl font-bold text-sec-dark mt-0.5">
                  {guide.title}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-satoshi text-sec-muted">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sec-navy" />
                  <span>Processing: {guide.processingTime}</span>
                </div>
              </div>
            </div>

            <div className="py-4 space-y-3.5">
              <div className="p-3.5 bg-sec-offwhite rounded-lg border border-sec-gray-light/60">
                <strong className="text-xs font-semibold text-sec-dark font-satoshi block mb-1">
                  Financial Proof & Sponsorship Standard:
                </strong>
                <p className="text-xs text-sec-muted leading-relaxed font-satoshi">
                  {guide.financialRequirements}
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-dark">
                  Core Document Dossier Checklist:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-sec-dark font-satoshi">
                  {guide.keyChecklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-2.5 rounded border border-sec-gray-light/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sec-red mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3.5 border-t border-sec-gray-light flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-sec-muted font-satoshi">
                Need mock interview rehearsals for your embassy appointment?
              </span>

              <Link
                href="/services/visa-guidance"
                className="inline-flex items-center gap-1.5 text-xs font-semibold font-satoshi text-sec-navy hover:text-sec-red"
              >
                <span>Read Visa Guidance Service details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
