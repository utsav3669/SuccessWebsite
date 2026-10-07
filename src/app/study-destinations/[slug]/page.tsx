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
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Destination Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-sec-gray-light">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{dest.flag}</span>
              <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
                Destination Guide
              </span>
            </div>
            <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight">
              Study in {dest.name}
            </h1>
            <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
              {dest.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/book-counselling?destination=${encodeURIComponent(dest.name)}`}
              className="px-6 py-3 bg-sec-red hover:bg-sec-red-dark text-white text-xs sm:text-sm font-semibold font-poppins rounded-btn shadow-sm transition-all text-center"
            >
              Book {dest.name} Counselling
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 cols): Deep Content */}
          <div className="lg:col-span-8 space-y-12">
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
            <div className="space-y-4">
              <h2 className="font-poppins text-2xl font-bold text-sec-dark">
                Educational Overview
              </h2>
              <p className="font-inter text-sm sm:text-base text-sec-muted leading-relaxed">
                {dest.description}
              </p>
            </div>

            {/* Key Advantages */}
            <div className="space-y-4 bg-sec-offwhite/60 p-6 sm:p-8 rounded-card border border-sec-gray-light">
              <h3 className="font-poppins text-xl font-bold text-sec-dark">
                Why Choose {dest.name}?
              </h3>
              <ul className="space-y-3">
                {dest.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-sec-dark font-inter">
                    <CheckCircle2 className="w-4 h-4 text-sec-red mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Universities */}
            <div className="space-y-5">
              <h3 className="font-poppins text-xl font-bold text-sec-dark">
                Featured Institutions in {dest.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.universities.map((uni) => (
                  <div
                    key={uni.name}
                    className="p-5 bg-white rounded-card border border-sec-gray-light shadow-subtle space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-sec-navy flex-shrink-0" />
                      <h4 className="font-poppins text-sm font-bold text-sec-dark">
                        {uni.name}
                      </h4>
                    </div>
                    <p className="text-xs text-sec-muted pl-6">{uni.city} • {uni.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Requirements */}
            <div className="space-y-6 pt-4 border-t border-sec-gray-light">
              <h3 className="font-poppins text-xl font-bold text-sec-dark">
                Admission & Eligibility Requirements
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-white rounded-card border border-sec-gray-light space-y-2">
                  <h4 className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-navy">
                    Undergraduate / Bachelor&apos;s
                  </h4>
                  <ul className="space-y-1.5 text-xs text-sec-muted font-inter">
                    {dest.applicationRequirements.bachelors.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sec-red font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-white rounded-card border border-sec-gray-light space-y-2">
                  <h4 className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-navy">
                    Postgraduate / Master&apos;s
                  </h4>
                  <ul className="space-y-1.5 text-xs text-sec-muted font-inter">
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
              <div className="p-4 bg-sec-offwhite rounded-lg text-xs text-sec-muted border border-sec-gray-light/60">
                <strong className="text-sec-dark font-poppins block mb-1">
                  Language Testing Benchmarks:
                </strong>
                <span>{dest.applicationRequirements.languageTests.join(" • ")}</span>
              </div>
            </div>

            {/* Destination Specific FAQs */}
            {dest.faqs.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-sec-gray-light">
                <h3 className="font-poppins text-xl font-bold text-sec-dark">
                  Frequently Asked Questions about {dest.name}
                </h3>
                <div className="space-y-3">
                  {dest.faqs.map((faq, i) => (
                    <div key={i} className="p-5 bg-white rounded-card border border-sec-gray-light space-y-2">
                      <h4 className="font-poppins text-sm font-semibold text-sec-dark">
                        {faq.question}
                      </h4>
                      <p className="font-inter text-xs sm:text-sm text-sec-muted leading-relaxed">
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
            <div className="sticky top-28 bg-white rounded-card border border-sec-gray-light p-6 shadow-card space-y-6">
              <h3 className="font-poppins text-base font-bold text-sec-dark pb-3 border-b border-sec-gray-light">
                Quick Facts & Key Stats
              </h3>

              <div className="space-y-4 text-xs font-inter">
                <div>
                  <span className="text-sec-muted block text-[11px]">Capital & Language</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {dest.capital} ({dest.language})
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Primary Intakes</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {dest.intakes}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Average Tuition</span>
                  <strong className="text-sec-navy font-poppins font-semibold text-sm">
                    {dest.averageTuition}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Monthly Living Budget</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {dest.livingCosts}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Student Work Rights</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {dest.workRights}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Post-Study Stay-Back</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {dest.postStudyWork}
                  </strong>
                </div>
              </div>

              {/* Consultation Box */}
              <div className="pt-4 border-t border-sec-gray-light space-y-3">
                <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red block">
                  Kathmandu Guidance
                </span>
                <p className="text-xs text-sec-muted leading-relaxed">
                  Discuss course entrance tests, visa slot availability, and bank balance preparation for {dest.name}.
                </p>
                <Link
                  href={`/book-counselling?destination=${encodeURIComponent(dest.name)}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-sec-navy hover:bg-sec-navy-dark text-white text-xs font-semibold font-poppins rounded-btn transition-colors text-center"
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
