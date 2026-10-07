"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { universities } from "@/data/universities";
import { destinations } from "@/data/destinations";
import { ArrowRight, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

export const UniversitiesPreviewSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  const filteredUnis = selectedCountry === "All"
    ? universities
    : universities.filter((u) => u.country.toLowerCase() === selectedCountry.toLowerCase());

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Minimal Country Switcher */}
        <ScrollReveal direction="up" distance={20} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block">
              Higher Education
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
              Find Your University
            </h2>
            <p className="text-base sm:text-lg text-sec-muted font-normal">
              Explore public and research universities recognized internationally for research excellence and degree credibility.
            </p>
          </div>

          {/* Minimal Country Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCountry("All")}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                selectedCountry === "All"
                  ? "bg-sec-navy text-white border-sec-navy shadow-sm"
                  : "bg-white text-sec-dark border-sec-gray-light hover:border-sec-dark"
              }`}
            >
              All
            </button>
            {destinations.map((d) => (
              <button
                key={d.slug}
                onClick={() => setSelectedCountry(d.name)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border whitespace-nowrap ${
                  selectedCountry === d.name
                    ? "bg-sec-navy text-white border-sec-navy shadow-sm"
                    : "bg-white text-sec-dark border-sec-gray-light hover:border-sec-dark"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Sharp Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredUnis.map((uni, idx) => (
              <motion.div
                key={uni.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.04 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-sec-gray-light bg-white flex flex-col justify-between transition-all duration-300 hover:border-sec-navy hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-sec-gray-light">
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-white text-[10px] font-semibold uppercase tracking-wider text-sec-navy">
                      {uni.country}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div>
                      <h3 className="text-base font-bold text-sec-dark group-hover:text-sec-navy transition-colors line-clamp-1">
                        {uni.name}
                      </h3>
                      <p className="text-xs text-sec-muted flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-sec-red flex-shrink-0" />
                        <span>{uni.city}</span>
                      </p>
                    </div>

                    <p className="text-xs text-sec-muted line-clamp-2 leading-relaxed">
                      {uni.overview}
                    </p>

                    <div className="pt-2.5 border-t border-sec-gray-light">
                      <span className="text-[10px] uppercase font-semibold text-sec-dark tracking-wider block mb-1">
                        Selected Programs:
                      </span>
                      <ul className="text-xs text-sec-muted space-y-0.5">
                        {uni.programs.slice(0, 2).map((prog, i) => (
                          <li key={i} className="line-clamp-1">
                            • {prog}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/universities/${uni.slug}`}
                    className="editorial-link text-xs font-semibold uppercase tracking-wider text-sec-navy group-hover:text-sec-red transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>Explore Faculty</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full Directory Link */}
        <ScrollReveal direction="up" delay={0.15} distance={16} className="mt-8 sm:mt-10 pt-6 border-t border-sec-gray-light flex items-center justify-between text-xs text-sec-muted">
          <span>Accredited institutions matching student academic criteria</span>
          <Link
            href="/universities"
            className="editorial-link font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red"
          >
            <span>Complete Universities Index →</span>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
};
