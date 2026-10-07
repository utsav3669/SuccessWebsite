import React from "react";
import type { Metadata } from "next";
import { UniversitiesPreviewSection } from "@/components/UniversitiesPreviewSection";

export const metadata: Metadata = {
  title: "Partner & Target Universities | Success Educational Consultancy",
  description:
    "Explore recognized public and research universities across Hungary, Netherlands, Germany, UK, USA, Australia, and Sweden.",
};

export default function UniversitiesPage() {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-3xl space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
            Higher Education Network
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Universities Directory
          </h1>
          <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
            Discover accredited universities known for outstanding research, international faculty, and industry-connected degree programs.
          </p>
        </div>
      </section>

      <UniversitiesPreviewSection />
    </div>
  );
}
