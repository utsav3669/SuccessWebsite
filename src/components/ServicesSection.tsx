"use client";

import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
            Advisory Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Your Journey. Our Guidance.
          </h2>
          <p className="text-base sm:text-lg text-sec-muted mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Seven structured advisory services designed to remove procedural risk, protect financial investment, and verify eligibility.
          </p>
        </ScrollReveal>

        {/* Clean Vertical Editorial List (Not a wall of cards) */}
        <div className="border-t border-sec-gray-light divide-y divide-sec-gray-light">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.04 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="group py-5 sm:py-7 transition-all duration-200 hover:translate-x-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-baseline">
                {/* Number & Title */}
                <div className="lg:col-span-5 flex items-baseline gap-6 sm:gap-8">
                  <span className="text-xs sm:text-sm text-sec-red font-semibold transition-transform duration-200 group-hover:scale-110">
                    {srv.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                    <Link href={`/services/${srv.slug}`}>
                      {srv.title}
                    </Link>
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 pl-10 sm:pl-12 lg:pl-0">
                  <p className="text-sm sm:text-base text-sec-muted leading-relaxed font-normal">
                    {srv.shortSummary}
                  </p>
                </div>

                {/* Editorial Link CTA */}
                <div className="lg:col-span-2 pl-10 sm:pl-12 lg:pl-0 flex lg:justify-end items-center">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="editorial-link text-xs font-semibold uppercase tracking-wider text-sec-navy group-hover:text-sec-red transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View Service</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <ScrollReveal direction="up" delay={0.15} distance={16} className="pt-6 sm:pt-8 flex items-center justify-between text-xs text-sec-muted">
          <span>Personalized sessions at Putilisadak-29</span>
          <Link
            href="/services"
            className="editorial-link font-semibold uppercase tracking-wider text-sec-red"
          >
            <span>Read All Service Deliverables →</span>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
};
