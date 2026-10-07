import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { CounsellingBookingForm } from "@/components/CounsellingBookingForm";
import { companyInfo } from "@/data/company";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Free Counselling | Success Educational Consultancy",
  description:
    "Schedule your one-on-one international education counselling session in Putilisadak-29, Kathmandu with Success Educational Consultancy.",
};

export default function BookCounsellingPage() {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
            Complimentary Consultation
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Book Free Counselling
          </h1>
          <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
            Begin with an honest, structured conversation about your academic ambitions. No false promises, no pressure—only verified information.
          </p>
        </div>
      </section>

      {/* Main Form & Office Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Col (8 cols) */}
          <div className="lg:col-span-8">
            <CounsellingBookingForm />
          </div>

          {/* Sidebar Office & Assurance Col (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* What to Expect Card */}
            <div className="bg-sec-offwhite/80 rounded-card border border-sec-gray-light p-6 space-y-4">
              <h3 className="font-poppins text-base font-bold text-sec-dark">
                What to Expect During Your Session
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-sec-muted font-inter">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <span>Honest academic profile evaluation and prerequisite audit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <span>Real breakdown of tuition, living expenses, and health insurance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <span>Clear comparison of Hungarian, Dutch, German, and UK universities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <span>Custom roadmap for intake deadlines and embassy appointments.</span>
                </li>
              </ul>
            </div>

            {/* Office Information Box with Official Seal */}
            <div className="bg-white rounded-card border border-sec-gray-light p-6 shadow-subtle space-y-4">
              <div className="flex items-center gap-3.5 pb-2 border-b border-sec-gray-light">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src="/images/sec-logo-transparent.png"
                    alt="Success Educational Consultancy Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-poppins text-sm font-bold text-sec-dark leading-tight">
                    {companyInfo.name}
                  </h3>
                  <span className="font-inter text-[11px] text-sec-red font-medium block mt-0.5">
                    Authorized Education Advisory
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-sec-muted font-inter">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sec-red mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins">Physical Address</strong>
                    <span>{companyInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins">Consultation Hours</strong>
                    <span>{companyInfo.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins">Direct Office Lines</strong>
                    <span>{companyInfo.phones.join(" / ")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sec-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sec-dark font-poppins">Official Email</strong>
                    <span>{companyInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
