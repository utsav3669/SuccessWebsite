import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { testPrepPrograms } from "@/data/testPreparation";
import { ArrowRight, CheckCircle2, BookOpen, Clock, Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Test Preparation | IELTS, TOEFL, GRE, GMAT, SAT | Success Educational Consultancy",
  description:
    "Comprehensive test preparation coaching at Success Educational Consultancy, Putalisadak-29, Kathmandu. Master IELTS, TOEFL iBT, GRE, GMAT Focus, and Digital SAT.",
};

export default function TestPreparationIndexPage() {
  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* 01 — HERO INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="max-w-3xl space-y-3.5">
          <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
            Academic & Language Competency
          </span>
          <h1 className="font-satoshi text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Prepare With Confidence
          </h1>
          <p className="font-satoshi text-base sm:text-lg text-sec-muted leading-relaxed font-normal">
            Standardized test preparation tailored to international university admissions. We focus on genuine linguistic proficiency and quantitative mastery—free from short-term gimmicks.
          </p>
        </div>
      </section>

      {/* 02 — THE 5 TEST PREPARATION PROGRAMS (Typographic Editorial Rows) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="border-t border-black/15 divide-y divide-black/10">
          {testPrepPrograms.map((test) => (
            <div
              key={test.slug}
              className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
            >
              {/* Left Column: Number, Title & Acronym */}
              <div className="lg:col-span-4 space-y-1.5">
                <span className="font-satoshi text-xs text-sec-red font-semibold block">
                  PROGRAM {test.code}
                </span>
                <h2 className="font-satoshi text-2xl sm:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                  {test.name}
                </h2>
                <p className="font-satoshi text-xs text-sec-muted font-medium">
                  {test.fullName}
                </p>
                <div className="pt-1.5">
                  <span className="inline-block font-satoshi text-[11px] text-sec-navy bg-sec-offwhite px-2.5 py-1 border border-black/10">
                    Duration: {test.duration}
                  </span>
                </div>
              </div>

              {/* Middle Column: Overview, Target Audience & Structure */}
              <div className="lg:col-span-5 space-y-3">
                <p className="font-satoshi text-sm sm:text-base text-sec-dark/85 leading-relaxed font-normal">
                  {test.overview}
                </p>

                <div className="space-y-1.5 text-xs font-satoshi text-sec-muted pt-2 border-t border-black/5">
                  <div>
                    <strong className="text-sec-dark font-medium">Scoring Scale: </strong>
                    <span>{test.scoringRange}</span>
                  </div>
                  <div>
                    <strong className="text-sec-dark font-medium">Score Validity: </strong>
                    <span>{test.validity}</span>
                  </div>
                  <div>
                    <strong className="text-sec-dark font-medium">Target Candidates: </strong>
                    <span>{test.targetAudience}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: CTA & Key Support Points */}
              <div className="lg:col-span-3 flex flex-col justify-between space-y-4 lg:text-right">
                <div className="space-y-1.5 text-xs font-satoshi text-sec-muted lg:items-end">
                  {test.whyTake.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start lg:justify-end gap-2 text-left lg:text-right">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0 order-first lg:order-last" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <Link
                    href={`/test-preparation/${test.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-sec-navy hover:bg-sec-red text-white text-xs font-semibold uppercase tracking-wider font-satoshi transition-colors duration-200"
                  >
                    <span>Full Syllabus & Prep</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — OUR PREPARATION METHODOLOGY */}
      <section className="bg-sec-offwhite/80 py-14 sm:py-18 border-y border-sec-gray-light mb-14 sm:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
              Teaching Framework
            </span>
            <h2 className="font-satoshi text-2xl sm:text-4xl font-bold text-sec-dark">
              How We Structure Your Preparation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-7 border border-black/10 space-y-2.5">
              <span className="font-satoshi text-xs text-sec-red font-semibold block">01 / DIAGNOSTIC</span>
              <h3 className="font-satoshi text-lg font-bold text-sec-dark">Baseline Audit</h3>
              <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
                Before placing you in a cohort, we evaluate your starting grammar, vocabulary, reading speed, and quantitative baseline to establish realistic score targets.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-black/10 space-y-2.5">
              <span className="font-satoshi text-xs text-sec-red font-semibold block">02 / SIMULATION</span>
              <h3 className="font-satoshi text-lg font-bold text-sec-dark">Full-Length Mocks</h3>
              <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
                Timed, computerized mock tests that reproduce official exam software (ETS, Cambridge, College Board) so you face zero surprises on exam day.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-black/10 space-y-2.5">
              <span className="font-satoshi text-xs text-sec-red font-semibold block">03 / APPLICATION SYNERGY</span>
              <h3 className="font-satoshi text-lg font-bold text-sec-dark">University Matching</h3>
              <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
                Your test scores are coordinated directly with your admission timelines for Hungary, Netherlands, Germany, the UK, the USA, and Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — REGISTRATION DESK CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sec-navy text-white p-6 sm:p-10 border border-sec-navy flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-gold font-semibold block">
              Official Kathmandu Test Venue Assistance
            </span>
            <h2 className="font-satoshi text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Book Your Diagnostic Test?
            </h2>
            <p className="font-satoshi text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Visit our Putalisadak-29 classroom for a free assessment and study plan consultation with senior test advisors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <Link
              href="/book-counselling"
              className="w-full sm:w-auto px-6 py-3 bg-sec-red hover:bg-white hover:text-sec-navy text-white text-xs font-semibold uppercase tracking-wider font-satoshi transition-colors duration-200 text-center"
            >
              Book Free Assessment
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 border border-white/30 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider font-satoshi transition-colors duration-200 text-center"
            >
              Contact Advisory Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
