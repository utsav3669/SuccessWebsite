"use client";

import React from "react";
import Link from "next/link";
import { testPrepPrograms } from "@/data/testPreparation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HomeTestPrepSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block: Title & Restrained Editorial Positioning */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
              Standardized Language & Academic Testing
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
              Prepare With Confidence
            </h2>
            <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed font-normal">
              Targeted instruction for required standardized tests. From foundational grammar to computerized mock simulations, we focus on genuine competency.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/test-preparation"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-sec-navy hover:bg-sec-red text-white text-xs font-semibold uppercase tracking-wider font-poppins transition-colors duration-200"
            >
              <span>Explore Test Preparation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Editorial Typographic Rows (Not card grids, clean editorial styling) */}
        <div className="divide-y divide-black/10 border-y border-black/10">
          {testPrepPrograms.map((test) => (
            <Link
              key={test.slug}
              href={`/test-preparation/${test.slug}`}
              className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-sec-offwhite/50 px-4 -mx-4 transition-colors duration-150"
            >
              {/* Left: Code, Name & Full Name */}
              <div className="flex items-start sm:items-center gap-6 md:w-2/5">
                <span className="font-mono text-xs text-sec-red font-semibold w-6 shrink-0">
                  {test.code}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-poppins text-xl sm:text-2xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                      {test.name}
                    </h3>
                    <span className="font-mono text-[10px] text-sec-muted uppercase tracking-wider border border-black/10 px-2 py-0.5">
                      {test.duration}
                    </span>
                  </div>
                  <p className="text-xs text-sec-muted font-inter mt-1">
                    {test.fullName}
                  </p>
                </div>
              </div>

              {/* Middle: Purpose & Target Score Range */}
              <div className="md:w-2/5 space-y-1">
                <p className="text-xs sm:text-sm text-sec-dark/80 font-inter line-clamp-1">
                  {test.tagline}
                </p>
                <div className="flex items-center gap-4 text-[11px] text-sec-muted font-mono">
                  <span>Score: {test.scoringRange}</span>
                  <span>•</span>
                  <span>Validity: {test.validity}</span>
                </div>
              </div>

              {/* Right: Direct Arrow Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-sec-navy group-hover:text-sec-red transition-colors shrink-0 md:justify-end">
                <span className="font-poppins uppercase tracking-wider text-[11px]">Syllabus & Support</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Editorial Heritage Footnote */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sec-muted font-inter">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Modern official exam specifications (ETS, Cambridge/British Council, GMAC, College Board).</span>
          </div>
          <span className="font-mono text-[11px]">
            Putalisadak-29 Training Facility • Diagnostic Testing Available
          </span>
        </div>
      </div>
    </section>
  );
};
