import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { scholarshipsList } from "@/data/resources";
import { GraduationCap, Award, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Scholarships & Financial Aid | Success Educational Consultancy",
  description:
    "Verified international government scholarship schemes including Stipendium Hungaricum, DAAD Germany, and Australian awards.",
};

export default function ScholarshipsPage() {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
            Financial Aid & Grants
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            International Scholarships
          </h1>
          <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
            Legitimate, government-funded and university merit scholarship opportunities for exceptional Nepalese applicants. No fake guarantees—only verifiable programs.
          </p>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {scholarshipsList.map((sch) => (
          <div
            key={sch.id}
            className="bg-white rounded-card border border-sec-gray-light p-6 sm:p-10 shadow-subtle hover:border-sec-navy/30 transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-sec-gray-light">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-sec-navy/10 text-sec-navy text-xs font-semibold rounded font-poppins">
                    {sch.country}
                  </span>
                  <span className="text-xs text-sec-muted font-inter">
                    Provider: {sch.provider}
                  </span>
                </div>
                <h2 className="font-poppins text-2xl font-bold text-sec-dark">
                  {sch.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-sec-offwhite rounded-md text-xs font-semibold text-sec-red font-poppins">
                <Calendar className="w-3.5 h-3.5" />
                <span>Deadline: {sch.deadline}</span>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <div className="p-4 bg-sec-offwhite rounded-lg border border-sec-gray-light/60">
                <strong className="text-xs font-semibold text-sec-dark font-poppins block mb-1">
                  Funding & Grant Coverage:
                </strong>
                <p className="text-xs sm:text-sm text-sec-navy font-semibold font-poppins">
                  {sch.coverage}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-dark">
                  Eligibility Criteria:
                </h4>
                <ul className="space-y-1.5 text-xs text-sec-muted font-inter">
                  {sch.eligibility.map((el, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-sec-gray-light flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-sec-muted font-inter">
                Need guidance tailoring your motivational essay and nomination portfolio?
              </span>

              <Link
                href="/services/scholarship-guidance"
                className="inline-flex items-center gap-1.5 text-xs font-semibold font-poppins text-sec-navy hover:text-sec-red"
              >
                <span>Read Scholarship Guidance details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
