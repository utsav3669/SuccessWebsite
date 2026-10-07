"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export const StudyDestinationsGrid: React.FC = () => {
  const hungary = destinations.find((d) => d.slug === "hungary") || destinations[0];
  const netherlands = destinations.find((d) => d.slug === "netherlands") || destinations[1];
  const germany = destinations.find((d) => d.slug === "germany") || destinations[2];
  const uk = destinations.find((d) => d.slug === "united-kingdom") || destinations[3];
  const usa = destinations.find((d) => d.slug === "usa") || destinations[4];
  const australia = destinations.find((d) => d.slug === "australia") || destinations[5];
  const sweden = destinations.find((d) => d.slug === "sweden") || destinations[6];

  return (
    <section id="destinations" className="py-14 sm:py-20 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
            Destination Chapters
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Where Will Your Journey Take You?
          </h2>
          <p className="text-base sm:text-lg text-sec-muted mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Seven verified destinations offering internationally recognized degrees, tuition affordability, and clear graduate pathways.
          </p>
        </ScrollReveal>

        {/* CHAPTER 01: HUNGARY (Heroic Full-Bleed Editorial Composition) */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <ScrollReveal direction="up" delay={0.1} distance={20} className="lg:col-span-7 group relative aspect-[16/10] bg-slate-100 border border-sec-gray-light overflow-hidden">
              <Image
                src={hungary.image}
                alt="Eötvös Loránd University campus architecture, Budapest, Hungary"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sec-dark/0 group-hover:bg-sec-dark/15 transition-colors duration-500 pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white text-sec-dark text-xs font-semibold border border-sec-gray-light">
                {hungary.flag} Chapter 01 • Central Europe
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.18} distance={20} className="lg:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <span className="text-[11px] uppercase tracking-widest text-sec-red font-semibold block">
                  Featured Destination
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-sec-dark">
                  {hungary.name}
                </h3>
                <p className="text-sm sm:text-base text-sec-muted leading-relaxed">
                  {hungary.shortDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-sec-gray-light grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-sec-muted block text-[11px]">Tuition Range</span>
                  <strong className="text-sec-navy font-semibold">{hungary.averageTuition}</strong>
                </div>
                <div>
                  <span className="text-sec-muted block text-[11px]">Work Rights</span>
                  <strong className="text-sec-dark font-semibold">{hungary.workRights}</strong>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href={`/study-destinations/${hungary.slug}`}
                  className="editorial-link text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red transition-colors inline-flex items-center gap-2 group"
                >
                  <span>Explore Hungary Chapter</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CHAPTER 02: NETHERLANDS & GERMANY (Asymmetric Paired Editorial Chapters) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16 pt-10 sm:pt-12 border-t border-sec-gray-light">
          {/* Netherlands */}
          <ScrollReveal direction="up" delay={0.1} distance={20} className="lg:col-span-6 space-y-4 group">
            <div className="relative aspect-[4/3] bg-slate-100 border border-sec-gray-light overflow-hidden">
              <Image
                src={netherlands.image}
                alt="Modern Dutch university campus and research faculties, Netherlands"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sec-dark/0 group-hover:bg-sec-dark/15 transition-colors duration-500 pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white text-sec-dark text-xs font-semibold border border-sec-gray-light">
                {netherlands.flag} Chapter 02
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                {netherlands.name}
              </h3>
              <p className="text-sm text-sec-muted leading-relaxed">
                {netherlands.shortDescription}
              </p>
              <div className="pt-1">
                <Link
                  href={`/study-destinations/${netherlands.slug}`}
                  className="editorial-link text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red transition-colors inline-flex items-center gap-2 group"
                >
                  <span>Explore Netherlands</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Germany */}
          <ScrollReveal direction="up" delay={0.2} distance={20} className="lg:col-span-6 space-y-4 lg:pt-6 group">
            <div className="relative aspect-[4/3] bg-slate-100 border border-sec-gray-light overflow-hidden">
              <Image
                src={germany.image}
                alt="German public research university campus and lecture hall, Germany"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sec-dark/0 group-hover:bg-sec-dark/15 transition-colors duration-500 pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white text-sec-dark text-xs font-semibold border border-sec-gray-light">
                {germany.flag} Chapter 03
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                {germany.name}
              </h3>
              <p className="text-sm text-sec-muted leading-relaxed">
                {germany.shortDescription}
              </p>
              <div className="pt-1">
                <Link
                  href={`/study-destinations/${germany.slug}`}
                  className="editorial-link text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Germany →</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CHAPTER 03: UK, USA, AUSTRALIA, SWEDEN (Clean Editorial Sequence) */}
        <ScrollReveal direction="up" distance={20} className="pt-10 sm:pt-12 border-t border-sec-gray-light space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-sec-dark">
              Global Destinations
            </span>
            <Link
              href="/study-destinations"
              className="editorial-link text-xs font-semibold uppercase tracking-wider text-sec-red"
            >
              <span>View All 7 Destinations →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[uk, usa, australia, sweden].map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3 group"
              >
                <div className="relative aspect-[3/2] bg-slate-100 border border-sec-gray-light overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-white text-[11px] font-semibold text-sec-dark">
                    {item.flag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-sec-muted line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                  <Link
                    href={`/study-destinations/${item.slug}`}
                    className="inline-block pt-1 text-xs font-semibold text-sec-navy group-hover:text-sec-red transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
