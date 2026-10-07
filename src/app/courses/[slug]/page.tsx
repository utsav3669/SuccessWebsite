import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, Course } from "@/data/courses";
import { 
  GraduationCap, 
  MapPin, 
  Building2, 
  Clock, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  Briefcase, 
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
  return courses.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} at ${course.university} | SEC`,
    description: `Detailed admission criteria, tuition fees, duration, and career pathways for ${course.title} in ${course.country}.`,
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-sec-gray-light">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-semibold text-sec-navy bg-sec-navy/5 rounded-full font-poppins">
                {course.degree}
              </span>
              <span className="text-xs text-sec-muted font-medium font-inter">
                {course.field}
              </span>
            </div>
            <h1 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight">
              {course.title}
            </h1>
            <p className="font-inter text-base text-sec-muted flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sec-navy" />
              <span>{course.university}</span>
              <span>•</span>
              <MapPin className="w-4 h-4 text-sec-red" />
              <span>{course.country}</span>
            </p>
          </div>

          <div>
            <Link
              href={`/book-counselling?course=${encodeURIComponent(course.title)}`}
              className="px-6 py-3.5 bg-sec-red hover:bg-sec-red-dark text-white text-xs sm:text-sm font-semibold font-poppins rounded-btn shadow-md transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to a Counsellor</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 cols): Course Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="font-poppins text-2xl font-bold text-sec-dark">
                Program Overview
              </h2>
              <p className="font-inter text-sm sm:text-base text-sec-muted leading-relaxed">
                {course.overview}
              </p>
            </div>

            {/* Entry Requirements */}
            <div className="bg-sec-offwhite/60 p-6 sm:p-8 rounded-card border border-sec-gray-light space-y-4">
              <h3 className="font-poppins text-xl font-bold text-sec-dark">
                Entry Requirements
              </h3>
              <ul className="space-y-2.5">
                {course.entryRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-sec-dark font-inter">
                    <CheckCircle2 className="w-4 h-4 text-sec-red mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-4">
              <h3 className="font-poppins text-xl font-bold text-sec-dark flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sec-navy" />
                <span>Career Pathways & Employability</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.careerOpportunities.map((career, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-lg border border-sec-gray-light text-xs font-semibold text-sec-dark font-poppins flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sec-navy" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process Walkthrough */}
            <div className="p-6 bg-white rounded-card border border-sec-gray-light space-y-4">
              <h3 className="font-poppins text-xl font-bold text-sec-dark">
                How SEC Assists Your Application
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-sec-muted font-inter">
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-sec-navy">01.</span>
                  <span>Review your academic transcripts and evaluate syllabus prerequisite match.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-sec-navy">02.</span>
                  <span>Guide you on Statement of Purpose (SOP) writing tailored specifically for this faculty.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-sec-navy">03.</span>
                  <span>Submit through university direct portal and track admission committee feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-sec-navy">04.</span>
                  <span>Provide complete financial document review and mock visa interview training.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column (4 cols): Quick Metadata Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-card border border-sec-gray-light p-6 shadow-card space-y-6">
              <h3 className="font-poppins text-base font-bold text-sec-dark pb-3 border-b border-sec-gray-light">
                Key Program Specifications
              </h3>

              <div className="space-y-4 text-xs font-inter">
                <div>
                  <span className="text-sec-muted block text-[11px]">Degree Award</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {course.degree}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Duration</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {course.duration}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Tuition Fee Estimate</span>
                  <strong className="text-sec-navy font-poppins font-semibold text-sm">
                    {course.tuition}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Available Intakes</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {course.intake.join(", ")}
                  </strong>
                </div>

                <div>
                  <span className="text-sec-muted block text-[11px]">Location</span>
                  <strong className="text-sec-dark font-poppins font-semibold text-sm">
                    {course.university}, {course.country}
                  </strong>
                </div>
              </div>

              <div className="pt-4 border-t border-sec-gray-light space-y-3">
                <Link
                  href={`/book-counselling?course=${encodeURIComponent(course.title)}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-sec-red hover:bg-sec-red-dark text-white text-xs font-semibold font-poppins rounded-btn transition-colors text-center shadow-sm"
                >
                  Apply For This Program
                </Link>

                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hello+SEC,+I+am+interested+in+${encodeURIComponent(course.title)}+at+${encodeURIComponent(course.university)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-sec-offwhite hover:bg-sec-gray-light text-sec-dark text-xs font-semibold font-poppins rounded-btn transition-colors text-center"
                >
                  Ask On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
