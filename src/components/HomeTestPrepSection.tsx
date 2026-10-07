"use client";

import React from "react";
import Link from "next/link";
import { testPrepPrograms } from "@/data/testPreparation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export const HomeTestPrepSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block: Title & Restrained Editorial Positioning */}
        <ScrollReveal direction="up" distance={20} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
              Standardized Language &amp; Academic Testing
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
              Prepare With Confidence
            </h2>
            <p className="text-base sm:text-lg text-sec-muted leading-relaxed font-normal">
              Targeted instruction for required standardized tests. From foundational grammar to computerized mock simulations, we focus on genuine competency.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/test-preparation"
              className="inline-flex items-center gap-2 px-5 py-3 bg-sec-navy hover:bg-sec-red text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-200 group"
            >
              <span>Explore Test Preparation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Editorial Typographic Rows */}
        <div className="divide-y divide-black/10 border-y border-black/10">
          {testPrepPrograms.map((test, idx) => (
            <motion.div
              key={test.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.04 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/test-preparation/${test.slug}`}
                className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 group hover:bg-sec-offwhite/50 px-4 -mx-4 transition-all duration-200 hover:translate-x-1"
              >
                {/* Left: Code, Name & Full Name */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 md:w-2/5">
                  <span className="text-xs text-sec-red font-semibold w-6 shrink-0 transition-transform duration-200 group-hover:scale-110">
                    {test.code}
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                        {test.name}
                      </h3>
                      <span className="text-[10px] text-sec-muted uppercase tracking-wider border border-black/10 px-2 py-0.5">
                        {test.duration}
                      </span>
                    </div>
                    <p className="text-xs text-sec-muted mt-0.5">
                      {test.fullName}
                    </p>
                  </div>
                </div>

                {/* Middle: Purpose & Target Score Range */}
                <div className="md:w-2/5 space-y-0.5">
                  <p className="text-xs sm:text-sm text-sec-dark/80 line-clamp-1">
                    {test.tagline}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-sec-muted">
                    <span>Score: {test.scoringRange}</span>
                    <span>•</span>
                    <span>Validity: {test.validity}</span>
                  </div>
                </div>

                {/* Right: Direct Arrow Indicator */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-sec-navy group-hover:text-sec-red transition-colors shrink-0 md:justify-end">
                  <span className="uppercase tracking-wider text-[11px]">Syllabus &amp; Support</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Heritage Footnote */}
        <ScrollReveal direction="up" delay={0.15} distance={16} className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sec-muted">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Modern official exam specifications (ETS, Cambridge/British Council, GMAC, College Board).</span>
          </div>
          <span className="font-satoshi text-[11px] text-sec-muted">
            Putalisadak-29 Training Facility • Diagnostic Testing Available
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
};
