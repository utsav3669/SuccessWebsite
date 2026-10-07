"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { universities } from "@/data/universities";
import { destinations } from "@/data/destinations";
import { ArrowRight, MapPin } from "lucide-react";

export const UniversitiesPreviewSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  const filteredUnis = selectedCountry === "All"
    ? universities
    : universities.filter((u) => u.country.toLowerCase() === selectedCountry.toLowerCase());

  return (
    <section className="py-24 sm:py-36 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Minimal Country Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl space-y-3">
            <span className="font-poppins text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block">
              Higher Education
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
              Find Your University
            </h2>
            <p className="font-inter text-base sm:text-lg text-sec-muted font-normal">
              Explore public and research universities recognized internationally for research excellence and degree credibility.
            </p>
          </div>

          {/* Minimal Country Filter Buttons (No pill shapes) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCountry("All")}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider font-poppins transition-colors border ${
                selectedCountry === "All"
                  ? "bg-sec-navy text-white border-sec-navy"
                  : "bg-white text-sec-dark border-sec-gray-light hover:border-sec-dark"
              }`}
            >
              All
            </button>
            {destinations.map((d) => (
              <button
                key={d.slug}
                onClick={() => setSelectedCountry(d.name)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider font-poppins transition-colors border whitespace-nowrap ${
                  selectedCountry === d.name
                    ? "bg-sec-navy text-white border-sec-navy"
                    : "bg-white text-sec-dark border-sec-gray-light hover:border-sec-dark"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sharp Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredUnis.map((uni) => (
            <div
              key={uni.slug}
              className="group border border-sec-gray-light bg-white flex flex-col justify-between transition-colors duration-200 hover:border-sec-navy"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-sec-gray-light">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-white text-[10px] font-semibold uppercase tracking-wider text-sec-navy font-poppins">
                    {uni.country}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-poppins text-base font-bold text-sec-dark group-hover:text-sec-navy transition-colors line-clamp-1">
                      {uni.name}
                    </h3>
                    <p className="text-xs text-sec-muted flex items-center gap-1 mt-1 font-inter">
                      <MapPin className="w-3 h-3 text-sec-red flex-shrink-0" />
                      <span>{uni.city}</span>
                    </p>
                  </div>

                  <p className="font-inter text-xs text-sec-muted line-clamp-2 leading-relaxed">
                    {uni.overview}
                  </p>

                  <div className="pt-3 border-t border-sec-gray-light">
                    <span className="text-[10px] uppercase font-semibold text-sec-dark tracking-wider block mb-1 font-poppins">
                      Selected Programs:
                    </span>
                    <ul className="text-xs text-sec-muted space-y-1 font-inter">
                      {uni.programs.slice(0, 2).map((prog, i) => (
                        <li key={i} className="line-clamp-1">
                          • {prog}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/universities/${uni.slug}`}
                  className="editorial-link font-poppins text-xs font-semibold uppercase tracking-wider text-sec-navy group-hover:text-sec-red transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Faculty</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Full Directory Link */}
        <div className="mt-14 pt-8 border-t border-sec-gray-light flex items-center justify-between text-xs text-sec-muted font-inter">
          <span>Accredited institutions matching student academic criteria</span>
          <Link
            href="/universities"
            className="editorial-link font-poppins font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red"
          >
            <span>Complete Universities Index →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
