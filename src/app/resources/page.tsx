import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Globe, GraduationCap, HelpCircle, ArrowRight } from "lucide-react";
import { blogPosts, studyGuides, scholarshipsList } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources & Knowledge Hub | Success Educational Consultancy",
  description:
    "Free educational resources for Nepalese students: Study Guides, Visa Checklists, Scholarship Opportunities, Blog Articles, and FAQs.",
};

const resourceSections = [
  {
    icon: BookOpen,
    title: "Blog & Articles",
    desc: "Analytical articles exploring European degree value, visa mock interviews, and student life.",
    href: "/resources/blog",
  },
  {
    icon: FileText,
    title: "Study Guides",
    desc: "In-depth roadmaps for Hungary, Netherlands, Germany, UK, US, Australia, and Sweden.",
    href: "/resources/study-guides",
  },
  {
    icon: Globe,
    title: "Visa Guides",
    desc: "Official embassy document checklists, financial sponsorship rules, and processing timelines.",
    href: "/resources/visa-guides",
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    desc: "Verified government grants including Stipendium Hungaricum, DAAD, and international bursaries.",
    href: "/resources/scholarships",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    desc: "Direct answers to common questions regarding fees, English requirements, and university admissions.",
    href: "/resources/faqs",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-3xl space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
            Knowledge Hub
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Resources for Your Global Journey
          </h1>
          <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
            Authentic, up-to-date guidance written by education specialists in Kathmandu to help you prepare effectively.
          </p>
        </div>
      </section>

      {/* Resource Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceSections.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href={item.href}
                className="group bg-white rounded-card border border-sec-gray-light p-6 sm:p-7 shadow-subtle hover:border-sec-navy/30 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-md bg-sec-navy/10 text-sec-navy group-hover:bg-sec-red group-hover:text-white transition-colors flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-sec-muted mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-sec-gray-light/60 flex items-center justify-between text-xs font-semibold font-poppins text-sec-navy group-hover:text-sec-red">
                  <span>Explore Section</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
