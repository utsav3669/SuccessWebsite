"use client";

import React, { useState } from "react";
import Link from "next/link";
import { courses, courseFields, Course } from "@/data/courses";
import { ArrowRight, Search, X } from "lucide-react";

interface CourseFinderProps {
  limit?: number;
  showFilters?: boolean;
}

export const CourseFinder: React.FC<CourseFinderProps> = ({
  limit,
  showFilters = false,
}) => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fieldList = [
    { num: "01", title: "Business & Management", count: "Undergraduate & MBA Programs" },
    { num: "02", title: "Information Technology", count: "Cloud, AI & Cybersecurity" },
    { num: "03", title: "Computer Science", count: "Software & Data Systems" },
    { num: "04", title: "Engineering", count: "Mechanical, Robotics & Sustainable Tech" },
    { num: "05", title: "Healthcare", count: "Nursing & Public Health" },
    { num: "06", title: "Hospitality & Tourism", count: "International Hotel & Resort Management" },
    { num: "07", title: "Social Sciences", count: "International Relations & Economics" },
    { num: "08", title: "Arts & Design", count: "Interactive Media & Architecture" },
    { num: "09", title: "Education", count: "Pedagogy & Curriculum Design" },
  ];

  const filteredFields = fieldList.filter((f) =>
    searchTerm === "" || f.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-10">
      {/* Search Input for directory mode */}
      {showFilters && (
        <div className="max-w-xl pb-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-0 top-1/2 -translate-y-1/2 text-sec-muted" />
            <input
              type="text"
              placeholder="Filter by field of study..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-7 pr-4 py-3 text-sm bg-transparent border-b border-sec-gray-light text-sec-dark focus:border-sec-navy focus:outline-none transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-sec-muted hover:text-sec-dark"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Large Typographic Rows (As requested in design specification) */}
      <div className="border-t border-sec-gray-light divide-y divide-sec-gray-light">
        {filteredFields.map((field) => (
          <div
            key={field.num}
            onMouseEnter={() => setActiveField(field.title)}
            onMouseLeave={() => setActiveField(null)}
            className="group py-6 sm:py-8 transition-colors duration-200"
          >
            <Link
              href={`/courses?field=${encodeURIComponent(field.title)}`}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="font-mono text-xs sm:text-sm text-sec-red font-semibold">
                  {field.num}
                </span>
                <span className="font-poppins text-xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-sec-dark group-hover:text-sec-navy group-hover:translate-x-2 transition-all duration-300">
                  {field.title}
                </span>
              </div>

              <div className="flex items-center gap-6 pl-12 sm:pl-0">
                <span className="font-inter text-xs text-sec-muted group-hover:text-sec-dark transition-colors hidden md:inline">
                  {field.count}
                </span>
                <span className="text-sec-muted group-hover:text-sec-red group-hover:translate-x-2 transition-all duration-300 text-lg font-light">
                  →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="pt-4 flex items-center justify-between text-xs text-sec-muted font-inter">
        <span>Verified degree syllabus across 7 destination countries</span>
        <Link
          href="/courses"
          className="editorial-link font-poppins font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red"
        >
          <span>Explore All Course Syllabi →</span>
        </Link>
      </div>
    </div>
  );
};
