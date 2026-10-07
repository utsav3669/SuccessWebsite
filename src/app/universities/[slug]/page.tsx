import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { universities, University } from "@/data/universities";
import { 
  Building2, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { companyInfo } from "@/data/company";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return universities.map((u) => ({
    slug: u.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const uni = universities.find((u) => u.slug === params.slug);
  if (!uni) return { title: "University Not Found" };

  return {
    title: `${uni.name} (${uni.country}) | SEC Kathmandu`,
    description: `Admissions, popular courses, campus overview, and application guidance for ${uni.name} in ${uni.city}, ${uni.country}.`,
  };
}

export default function UniversityDetailPage({ params }: Props) {
  const uni = universities.find((u) => u.slug === params.slug);
  if (!uni) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-sec-gray-light">
          <div className="space-y-3 max-w-3xl">
            <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
              {uni.type} • Est. {uni.establishedYear}
            </span>
            <h1 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight">
              {uni.name}
            </h1>
            <p className="font-inter text-base text-sec-muted flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sec-red flex-shrink-0" />
              <span>{uni.location}, {uni.country}</span>
            </p>
          </div>

          <div>
            <Link
              href={`/book-counselling?university=${encodeURIComponent(uni.name)}`}
              className="px-6 py-3.5 bg-sec-red hover:bg-sec-red-dark text-white text-xs sm:text-sm font-semibold font-poppins rounded-btn shadow-md transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Apply to this University</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Campus Image */}
            <div className="relative aspect-[16/9] rounded-img overflow-hidden shadow-card border border-sec-gray-light bg-slate-100">
              <Image
                src={uni.image}
                alt={uni.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <h2 className="font-poppins text-2xl font-bold text-sec-dark">
                About the Institution
              </h2>
              <p className="font-inter text-sm sm:text-base text-sec-muted leading-relaxed">
                {uni.overview}
              </p>
            </div>

            {/* Key Strengths */}
            <div className="bg-sec-offwhite/60 p-6 sm:p-8 rounded-card border border-sec-gray-light space-y-4">
              <h3 className="font-poppins text-xl font-bold text-sec-dark">
                Institutional Strengths & Accreditations
              </h3>
              <ul className="space-y-2.5">
                {uni.keyStrengths.map((str, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-sec-dark font-inter">
                    <CheckCircle2 className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Programs */}
            <div className="space-y-4">
              <h3 className="font-poppins text-xl font-bold text-sec-dark flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sec-navy" />
                <span>Popular Degree Programs</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {uni.programs.map((prog, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-lg border border-sec-gray-light text-xs font-semibold text-sec-dark font-poppins flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-sec-red" />
                    <span>{prog}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-card border border-sec-gray-light p-6 shadow-card space-y-6">
              <h3 className="font-poppins text-base font-bold text-sec-dark pb-3 border-b border-sec-gray-light">
                Institutional Details
              </h3>

              <div className="space-y-4 text-xs font-inter">
                <div>
                  <span className="text-sec-muted block text-[11px]">Country</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {uni.country}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Location</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {uni.city}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Standard Intakes</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {uni.intakes.join(" & ")}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Category</span>
                  <strong className="text-sec-navy font-poppins font-semibold text-sm">
                    {uni.type}
                  </strong>
                </div>
              </div>

              <div className="pt-4 border-t border-sec-gray-light space-y-3">
                <Link
                  href={`/book-counselling?university=${encodeURIComponent(uni.name)}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-sec-navy hover:bg-sec-navy-dark text-white text-xs font-semibold font-poppins rounded-btn transition-colors text-center"
                >
                  Request Application Roadmap
                </Link>

                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hello+SEC,+I+have+a+question+about+admissions+to+${encodeURIComponent(uni.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-sec-offwhite hover:bg-sec-gray-light text-sec-dark text-xs font-semibold font-poppins rounded-btn transition-colors text-center"
                >
                  WhatsApp Inquiries
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
