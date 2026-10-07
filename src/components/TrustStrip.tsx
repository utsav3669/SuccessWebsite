"use client";

import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const pillars = [
  "Expert Counselling",
  "Course Alignment",
  "University Selection",
  "Application Support",
  "Visa Guidance",
  "Pre-Departure Briefing",
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Editorial Philosophy Statement */}
          <ScrollReveal direction="up" delay={0.1} distance={20} className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block">
                Since 2007 • Putalisadak HQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-sec-dark leading-tight">
              Higher education guidance based on fact, not promises.
            </h2>
            <p className="text-xs text-sec-muted italic">
              &ldquo;Supporting students on their international education journey since 2007.&rdquo;
            </p>
          </ScrollReveal>

          {/* Spacious Typographic Pillars */}
          <ScrollReveal direction="up" delay={0.2} distance={20} className="lg:col-span-7">
            <p className="text-sm sm:text-base text-sec-muted leading-relaxed mb-5">
              Success Educational Consultancy advises Nepalese students with complete transparency. We verify every entry criterion directly with accredited faculties in Europe, the UK, the USA, and Australia, ensuring zero misleading claims or inflated success rates.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 pt-4 border-t border-sec-gray-light text-xs">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-0.5 group cursor-default"
                >
                  <span className="text-[11px] text-sec-red font-semibold block transition-transform duration-200 group-hover:translate-x-0.5">
                    0{idx + 1}
                  </span>
                  <span className="font-semibold text-sec-dark block group-hover:text-sec-navy transition-colors duration-200">
                    {pillar}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
