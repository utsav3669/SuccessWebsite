import React from "react";
import type { Metadata } from "next";
import { CourseFinder } from "@/components/CourseFinder";
import { studyLevels, courseFields } from "@/data/courses";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses Directory | Success Educational Consultancy",
  description:
    "Search verified undergraduate, postgraduate, and diploma courses across Hungary, Netherlands, Germany, UK, USA, Australia, and Sweden.",
};

export default function CoursesPage() {
  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="max-w-3xl space-y-3">
          <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red">
            Academic Programs
          </span>
          <h1 className="font-satoshi text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Explore Courses Worldwide
          </h1>
          <p className="font-satoshi text-base sm:text-lg text-sec-muted leading-relaxed">
            Find accredited degrees matched to your academic goals. Filter by level, discipline, or target country.
          </p>
        </div>
      </section>

      {/* Main Interactive Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CourseFinder showFilters={true} />
      </section>
    </div>
  );
}
