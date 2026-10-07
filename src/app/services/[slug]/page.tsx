import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, ServiceItem } from "@/data/services";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { companyInfo } from "@/data/company";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | SEC Kathmandu`,
    description: service.shortSummary,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-sec-gray-light">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-sm font-bold text-sec-red">
              Service {service.number}
            </span>
            <h1 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight">
              {service.title}
            </h1>
            <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
              {service.shortSummary}
            </p>
          </div>

          <div>
            <Link
              href="/book-counselling"
              className="px-6 py-3.5 bg-sec-red hover:bg-sec-red-dark text-white text-xs sm:text-sm font-semibold font-poppins rounded-btn shadow-md transition-all inline-block"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Detailed Description */}
            <div className="space-y-4">
              <h2 className="font-poppins text-2xl font-bold text-sec-dark">
                How We Deliver This Service
              </h2>
              <p className="font-inter text-sm sm:text-base text-sec-muted leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Scope of Work */}
            <div className="bg-sec-offwhite/60 p-6 sm:p-8 rounded-card border border-sec-gray-light space-y-4">
              <h3 className="font-poppins text-xl font-bold text-sec-dark">
                What Our Advisory Team Does
              </h3>
              <ul className="space-y-3">
                {service.whatWeDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-sec-dark font-inter">
                    <CheckCircle2 className="w-4 h-4 text-sec-red mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Benefits */}
            <div className="space-y-4">
              <h3 className="font-poppins text-xl font-bold text-sec-dark">
                Direct Benefits to You and Your Family
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.studentBenefits.map((b, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white rounded-card border border-sec-gray-light shadow-subtle space-y-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-sec-navy block" />
                    <p className="text-xs sm:text-sm text-sec-dark font-inter leading-relaxed">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="p-6 bg-white rounded-card border border-sec-gray-light space-y-3">
              <h3 className="font-poppins text-lg font-bold text-sec-dark">
                Tangible Outcomes You Receive:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-sec-muted font-inter">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-sec-navy font-bold">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-card border border-sec-gray-light p-6 shadow-card space-y-6">
              <h3 className="font-poppins text-base font-bold text-sec-dark pb-3 border-b border-sec-gray-light">
                All Guidance Services
              </h3>

              <div className="space-y-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-medium font-poppins transition-colors ${
                      s.slug === service.slug
                        ? "bg-sec-navy text-white"
                        : "text-sec-dark hover:bg-sec-offwhite"
                    }`}
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] font-mono">{s.number}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-sec-gray-light space-y-3">
                <Link
                  href="/book-counselling"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-sec-red hover:bg-sec-red-dark text-white text-xs font-semibold font-poppins rounded-btn transition-colors text-center shadow-sm"
                >
                  Schedule Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
