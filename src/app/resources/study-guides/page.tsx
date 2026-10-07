import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { studyGuides } from "@/data/resources";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Study Abroad Guides | Success Educational Consultancy",
  description:
    "Comprehensive country-specific study guides for Hungary, Netherlands, Germany, and the UK written for Nepalese students.",
};

export default function StudyGuidesPage() {
  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="max-w-3xl space-y-3">
          <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red">
            Educational Roadmaps
          </span>
          <h1 className="font-satoshi text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Destination Study Guides
          </h1>
          <p className="font-satoshi text-base sm:text-lg text-sec-muted leading-relaxed">
            Downloadable frameworks and detailed information regarding education structures, student housing, and part-time employment rules.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {studyGuides.map((guide) => (
            <div
              key={guide.slug}
              className="bg-white rounded-card border border-sec-gray-light p-5 sm:p-6 shadow-subtle hover:border-sec-navy/30 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sec-navy" />
                  <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red">
                    {guide.country}
                  </span>
                </div>

                <h2 className="font-satoshi text-xl font-bold text-sec-dark">
                  {guide.title}
                </h2>

                <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
                  {guide.description}
                </p>

                <div className="pt-2 border-t border-sec-gray-light/60">
                  <span className="text-[11px] font-semibold text-sec-dark block mb-1.5 font-satoshi">
                    Key Topics Covered:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-sec-muted font-satoshi">
                    {guide.keyTopics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sec-navy flex-shrink-0" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-sec-gray-light/60 flex items-center justify-between">
                <Link
                  href={`/study-destinations/${guide.country.toLowerCase()}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold font-satoshi text-sec-navy hover:text-sec-red"
                >
                  <span>Explore {guide.country} Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
