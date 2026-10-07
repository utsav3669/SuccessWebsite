"use client";

import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Personalized Counselling",
    desc: "Every student has unique strengths, test scores, and family considerations. We take time to understand your individual profile rather than pushing generic packages.",
  },
  {
    num: "02",
    title: "Destination Guidance",
    desc: "Honest comparative insights across European, British, American, and Australian education systems, clarifying real living costs, academic requirements, and work rights.",
  },
  {
    num: "03",
    title: "Course & University Selection",
    desc: "Unbiased recommendations matching your career aspirations with verified, accredited higher education institutions known for academic excellence.",
  },
  {
    num: "04",
    title: "Application Support",
    desc: "Meticulous guidance on Statements of Purpose, CV preparation, reference letters, and transcript authentication ensuring zero procedural disqualifications.",
  },
  {
    num: "05",
    title: "Visa Guidance",
    desc: "Strict adherence to official embassy financial regulations and extensive one-on-one mock interview coaching that prepares you to articulate genuine student intent.",
  },
  {
    num: "06",
    title: "Student-Focused Service",
    desc: "No misleading claims, no hidden commissions, and no false guarantees. We work ethically on your behalf from our office in Putilisadak-29.",
  },
];

export const WhySecSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-sec-offwhite border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
            Core Principles
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Why Students Choose SEC
          </h2>
          <p className="text-base sm:text-lg text-sec-muted mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Built on integrity, precision, and student-first educational planning in Kathmandu.
          </p>
        </ScrollReveal>

        {/* 6 Number-Based Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 pt-4 border-t border-sec-gray-light group transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="text-xs text-sec-red font-semibold block transition-transform duration-200 group-hover:translate-x-0.5">
                {item.num}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-sec-muted leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
