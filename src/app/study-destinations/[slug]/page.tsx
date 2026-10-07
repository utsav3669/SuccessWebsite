import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations, Destination } from "@/data/destinations";
import { 
  CheckCircle2, 
  MapPin, 
  DollarSign, 
  Clock, 
  Building2, 
  FileText, 
  HelpCircle, 
  ArrowRight,
  GraduationCap
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destination = destinations.find((d) => d.slug === params.slug);
  if (!destination) return { title: "Destination Not Found" };

  return {
    title: `Study in ${destination.name} | Success Educational Consultancy`,
    description: `Complete guide for Nepalese students planning to study in ${destination.name}: universities, tuition fees, student visa requirements, and work rights.`,
  };
}

export default function DestinationDetailPage({ params }: Props) {
  const dest = destinations.find((d) => d.slug === params.slug);
  if (!dest) {
    notFound();
  }

  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* Destination Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 border-b border-sec-gray-light">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{dest.flag}</span>
              <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red">
                Destination Guide
              </span>
            </div>
            <h1 className="font-satoshi text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight">
              Study in {dest.name}
            </h1>
            <p className="font-satoshi text-base sm:text-lg text-sec-muted leading-relaxed">
              {dest.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/book-counselling?destination=${encodeURIComponent(dest.name)}`}
              className="px-6 py-2.5 bg-sec-red hover:bg-sec-red-dark text-white text-xs sm:text-sm font-semibold font-satoshi rounded-btn shadow-sm transition-all text-center"
            >
              Book {dest.name} Counselling
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column (8 cols): Deep Content */}
          <div className="lg:col-span-8 space-y-7 sm:space-y-8">
            {/* Hero Image */}
            <div className="relative aspect-[16/9] rounded-img overflow-hidden shadow-card border border-sec-gray-light">
              <Image
                src={dest.image}
                alt={`Higher education in ${dest.name}`}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <h2 className="font-satoshi text-xl sm:text-2xl font-bold text-sec-dark">
                Educational Overview
              </h2>
              <p className="font-satoshi text-sm sm:text-base text-sec-muted leading-relaxed">
                {dest.description}
              </p>
            </div>

            {/* Key Advantages */}
            <div className="space-y-3 bg-sec-offwhite/60 p-5 sm:p-6 rounded-card border border-sec-gray-light">
              <h3 className="font-satoshi text-lg sm:text-xl font-bold text-sec-dark">
                Why Choose {dest.name}?
              </h3>
              <ul className="space-y-2">
                {dest.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-sec-dark font-satoshi">
                    <CheckCircle2 className="w-4 h-4 text-sec-red mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Universities */}
            <div className="space-y-4">
              <h3 className="font-satoshi text-lg sm:text-xl font-bold text-sec-dark">
                Featured Institutions in {dest.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {dest.universities.map((uni) => (
                  <div
                    key={uni.name}
                    className="p-4 bg-white rounded-card border border-sec-gray-light shadow-subtle space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-sec-navy flex-shrink-0" />
                      <h4 className="font-satoshi text-sm font-bold text-sec-dark">
                        {uni.name}
                      </h4>
                    </div>
                    <p className="text-xs text-sec-muted pl-6 font-satoshi">{uni.city} • {uni.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Requirements */}
            <div className="space-y-4 pt-3 border-t border-sec-gray-light">
              <h3 className="font-satoshi text-lg sm:text-xl font-bold text-sec-dark">
                Admission & Eligibility Requirements
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-card border border-sec-gray-light space-y-2">
                  <h4 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-navy">
                    Undergraduate / Bachelor&apos;s
                  </h4>
                  <ul className="space-y-1 text-xs text-sec-muted font-satoshi">
                    {dest.applicationRequirements.bachelors.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sec-red font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-card border border-sec-gray-light space-y-2">
                  <h4 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-navy">
                    Postgraduate / Master&apos;s
                  </h4>
                  <ul className="space-y-1 text-xs text-sec-muted font-satoshi">
                    {dest.applicationRequirements.masters.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sec-red font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Language Tests */}
              <div className="p-3.5 bg-sec-offwhite rounded-lg text-xs text-sec-muted border border-sec-gray-light/60 font-satoshi">
                <strong className="text-sec-dark font-satoshi block mb-1">
                  Language Testing Benchmarks:
                </strong>
                <span>{dest.applicationRequirements.languageTests.join(" • ")}</span>
              </div>
            </div>

            {/* Destination Specific FAQs */}
            {dest.faqs.length > 0 && (
              <div className="space-y-3 pt-3 border-t border-sec-gray-light">
                <h3 className="font-satoshi text-lg sm:text-xl font-bold text-sec-dark">
                  Frequently Asked Questions about {dest.name}
                </h3>
                <div className="space-y-2.5">
                  {dest.faqs.map((faq, i) => (
                    <div key={i} className="p-4 bg-white rounded-card border border-sec-gray-light space-y-1.5">
                      <h4 className="font-satoshi text-sm font-semibold text-sec-dark">
                        {faq.question}
                      </h4>
                      <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (4 cols): Sticky Sidebar Specs */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-card border border-sec-gray-light p-5 shadow-card space-y-4">
              <h3 className="font-satoshi text-base font-bold text-sec-dark pb-2.5 border-b border-sec-gray-light">
                Quick Facts & Key Stats
              </h3>

              <div className="space-y-3 text-xs font-satoshi">
                <div>
                  <span className="text-sec-muted block text-[11px]">Capital & Language</span>
                  <strong className="text-sec-dark font-satoshi font-semibold text-sm">
                    {dest.capital} ({dest.language})
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Primary Intakes</span>
                  <strong className="text-sec-dark font-satoshi font-semibold text-sm">
                    {dest.intakes}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Average Tuition</span>
                  <strong className="text-sec-navy font-satoshi font-semibold text-sm">
                    {dest.averageTuition}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Monthly Living Budget</span>
                  <strong className="text-sec-dark font-satoshi font-semibold text-sm">
                    {dest.livingCosts}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Student Work Rights</span>
                  <strong className="text-sec-dark font-satoshi font-semibold text-sm">
                    {dest.workRights}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Post-Study Stay-Back</span>
                  <strong className="text-sec-dark font-satoshi font-semibold text-sm">
                    {dest.postStudyWork}
                  </strong>
                </div>
              </div>

              {/* Consultation Box */}
              <div className="pt-3 border-t border-sec-gray-light space-y-2.5">
                <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red block">
                  Kathmandu Guidance
                </span>
                <p className="text-xs text-sec-muted leading-relaxed font-satoshi">
                  Discuss course entrance tests, visa slot availability, and bank balance preparation for {dest.name}.
                </p>
                <Link
                  href={`/book-counselling?destination=${encodeURIComponent(dest.name)}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-sec-navy hover:bg-sec-navy-dark text-white text-xs font-semibold font-satoshi rounded-btn transition-colors text-center"
                >
                  Book Free Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
