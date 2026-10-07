import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { testPrepPrograms } from "@/data/testPreparation";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Award, 
  BookOpen, 
  FileCheck,
  ChevronRight
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return testPrepPrograms.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const test = testPrepPrograms.find((p) => p.slug === params.slug);
  if (!test) return { title: "Test Preparation | Success Educational Consultancy" };

  return {
    title: `${test.name} Preparation in Kathmandu | Success Educational Consultancy`,
    description: `Complete ${test.fullName} (${test.name}) preparation coaching in Putalisadak-29, Kathmandu. Detailed syllabus, test structure, and registration support.`,
  };
}

export default function TestPrepDetailPage({ params }: Props) {
  const test = testPrepPrograms.find((p) => p.slug === params.slug);

  if (!test) {
    notFound();
  }

  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* 01 — BREADCRUMB & INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <nav className="flex items-center gap-2 text-xs font-satoshi text-sec-muted mb-4">
          <Link href="/" className="hover:text-sec-navy transition-colors">HOME</Link>
          <ChevronRight className="w-3 h-3 text-sec-muted" />
          <Link href="/test-preparation" className="hover:text-sec-navy transition-colors">TEST PREPARATION</Link>
          <ChevronRight className="w-3 h-3 text-sec-muted" />
          <span className="text-sec-red font-semibold">{test.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
              Program {test.code} • Standardized Assessment
            </span>
            <h1 className="font-satoshi text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
              {test.name} Preparation
            </h1>
            <p className="font-satoshi text-base sm:text-lg text-sec-navy font-medium">
              {test.fullName}
            </p>
            <p className="font-satoshi text-sm sm:text-base text-sec-muted leading-relaxed font-normal">
              {test.overview}
            </p>
          </div>

          {/* Quick Metrics Badge Card */}
          <div className="lg:col-span-4 bg-white border border-black/10 p-5 space-y-2.5 shadow-sm">
            <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-red font-semibold block">
              Test Key Metrics
            </span>
            <div className="space-y-1.5 text-xs font-satoshi border-t border-black/10 pt-2.5">
              <div className="flex justify-between py-1 border-b border-black/5">
                <span className="text-sec-muted">Format</span>
                <span className="font-medium text-sec-dark text-right">{test.format}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/5">
                <span className="text-sec-muted">Duration</span>
                <span className="font-medium text-sec-dark">{test.duration}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/5">
                <span className="text-sec-muted">Score Range</span>
                <span className="font-medium text-sec-dark">{test.scoringRange}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-sec-muted">Validity</span>
                <span className="font-medium text-sec-dark">{test.validity}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — EXAM SECTIONS BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-2xl mb-6">
          <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block mb-1.5">
            Structure & Components
          </span>
          <h2 className="font-satoshi text-2xl sm:text-3xl font-bold text-sec-dark">
            Official Exam Sections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {test.sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/10 p-5 flex flex-col justify-between space-y-3 shadow-sm"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-satoshi text-xs text-sec-red font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="font-satoshi text-[11px] text-sec-muted border border-black/10 px-2 py-0.5">
                    {sec.duration}
                  </span>
                </div>
                <h3 className="font-satoshi text-base sm:text-lg font-bold text-sec-dark">
                  {sec.name}
                </h3>
                <p className="font-satoshi text-xs text-sec-muted leading-relaxed font-normal">
                  {sec.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-black/5 text-[11px] font-satoshi text-sec-navy">
                <strong className="block text-[10px] text-sec-muted uppercase font-satoshi">Question Types</strong>
                <span>{sec.questionType}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — ROADMAP & PREPARATION TIMELINE */}
      <section className="bg-sec-offwhite/80 py-14 sm:py-18 border-y border-sec-gray-light mb-12 sm:mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block mb-1.5">
              Curriculum Architecture
            </span>
            <h2 className="font-satoshi text-2xl sm:text-3xl font-bold text-sec-dark">
              Structured Preparation Roadmap
            </h2>
            <p className="font-satoshi text-sm sm:text-base text-sec-muted leading-relaxed mt-1.5 font-normal">
              Designed to take students from initial diagnostic assessment to exam-day mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {test.preparationRoadmap.map((item, idx) => (
              <div key={idx} className="bg-white border border-black/10 p-5 space-y-2">
                <span className="font-satoshi text-xs text-sec-navy font-semibold block border-b border-black/10 pb-1.5">
                  {item.week}
                </span>
                <p className="font-satoshi text-xs sm:text-sm text-sec-dark/90 leading-relaxed font-normal">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — REGISTRATION & OFFICIAL PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
              Official Booking Protocol
            </span>
            <h2 className="font-satoshi text-2xl sm:text-3xl font-bold text-sec-dark">
              Kathmandu Test Registration Support
            </h2>
            <p className="font-satoshi text-sm sm:text-base text-sec-muted leading-relaxed font-normal">
              {test.registrationGuidance}
            </p>

            <div className="space-y-2.5 pt-1.5">
              <h4 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-dark">
                How SEC Facilitates Your Journey:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm font-satoshi text-sec-muted">
                {test.secSupport.map((support, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{support}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Institutional Recognition Card */}
          <div className="lg:col-span-6 bg-white border border-black/10 p-6 sm:p-7 space-y-4 shadow-sm">
            <div className="space-y-1.5">
              <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-navy font-semibold block">
                Institutional Acceptance
              </span>
              <h3 className="font-satoshi text-base sm:text-lg font-bold text-sec-dark">
                Global Recognition
              </h3>
              <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed font-normal">
                {test.recognizedBy}
              </p>
            </div>

            <div className="border-t border-black/10 pt-4 space-y-2">
              <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-red font-semibold block">
                Target Profile
              </span>
              <p className="font-satoshi text-xs text-sec-dark/80 leading-relaxed">
                {test.targetAudience}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/book-counselling"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sec-red hover:bg-sec-navy text-white text-xs font-semibold uppercase tracking-wider font-satoshi transition-colors duration-200"
              >
                <span>Book Diagnostic Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — OTHER TEST PREPARATION PROGRAMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/10 pt-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-satoshi text-base sm:text-lg font-bold text-sec-dark">
            Other Preparation Programs
          </h3>
          <Link
            href="/test-preparation"
            className="text-xs font-semibold text-sec-red hover:text-sec-navy transition-colors font-satoshi uppercase tracking-wider flex items-center gap-1"
          >
            <span>All Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {testPrepPrograms
            .filter((p) => p.slug !== test.slug)
            .slice(0, 4)
            .map((other) => (
              <Link
                key={other.slug}
                href={`/test-preparation/${other.slug}`}
                className="p-3.5 bg-white border border-black/10 hover:border-sec-navy transition-colors group block"
              >
                <span className="font-satoshi text-[10px] text-sec-red font-semibold block">
                  PROGRAM {other.code}
                </span>
                <h4 className="font-satoshi text-base font-bold text-sec-dark group-hover:text-sec-navy mt-0.5">
                  {other.name}
                </h4>
                <span className="font-satoshi text-[11px] text-sec-muted block mt-0.5 truncate">
                  {other.fullName}
                </span>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
