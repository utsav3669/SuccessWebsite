"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-label="Success Educational Consultancy Hero Banner"
      className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#071326] select-none"
    >
      {/* ============================================================== */}
      {/* FULL-BLEED HERO BANNER PHOTOGRAPHY                             */}
      {/* Premium international undergraduate bachelor students on campus */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.06, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-students.jpg"
            alt="International undergraduate bachelor students walking together across contemporary European university research campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-[64%_center] scale-100 transition-transform duration-1000 ease-out"
          />
        </motion.div>

        {/* ============================================================== */}
        {/* SUBTLE DARK / NAVY OVERLAY FOR MAXIMUM LEGIBILITY             */}
        {/* Editorial left-to-right density ensures negative space contrast */}
        {/* ============================================================== */}
        {/* 1. Primary Left-Weighted Navy Vignette (95% at text anchor, soft reveal on students) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#071326]/95 via-[#071326]/85 sm:via-[#071326]/65 to-[#071326]/25"
          aria-hidden="true"
        />

        {/* 2. Top-and-Bottom Architectural Atmosphere (blends smoothly into fixed navbar & trust strip) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#071326]/85 via-transparent to-[#071326]/80"
          aria-hidden="true"
        />

        {/* 3. Subtle SEC Red & Deep Indigo Ambient Radiance (Adds cinematic warmth to dark tones) */}
        <div
          className="absolute -top-32 left-0 w-[550px] h-[550px] opacity-25 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(29, 47, 111, 0.6) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ============================================================== */}
      {/* EDITORIAL CONTENT DIRECTLY OVER THE IMAGE (LEFT-ALIGNED)       */}
      {/* No cards, no panels, no rounded corners, pure typography       */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* EDITORIAL CONTENT DIRECTLY OVER THE IMAGE (LEFT-ALIGNED)       */}
      {/* No cards, no panels, no rounded corners, pure typography       */}
      {/* ============================================================== */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 lg:pt-20">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Eyebrow Label: WHAT WE ARE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 bg-sec-red inline-block" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/90 font-semibold">
              WHAT WE ARE
            </span>
          </motion.div>

          {/* Editorial Confident Headline (Directly over the image) */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-bold tracking-tight text-white leading-[1.05]"
          >
            Empowering <br />
            Education for a <br />
            <span className="text-white">Global Future.</span>
          </motion.h1>

          {/* Description statement (Directly over the image, high negative space legibility) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-slate-200/95 max-w-xl sm:max-w-2xl leading-relaxed font-normal"
          >
            Direct institutional admissions from Kathmandu to accredited public research universities across Hungary, the Netherlands, Germany, the UK, the USA, and Australia.
          </motion.p>

          {/* CTA Buttons: Sharp rectangular edges, no rounded corners, no cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/book-counselling"
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-sec-red hover:bg-sec-navy text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2.5 border border-sec-red shadow-lg hover:shadow-2xl hover:border-white/30 group"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/study-destinations"
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white group"
              >
                <span>Explore Destinations</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* EDITORIAL BOTTOM ANCHOR STRIP (NO ROUNDED CORNERS, NO PANELS)  */}
      {/* Grounded campaign metadata anchored within the 100vh banner    */}
      {/* ============================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 sm:pb-6 pt-3"
      >
        <div className="border-t border-white/20 pt-3 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-6 text-white/80 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/95 font-medium tracking-wide">
              Autumn 2025 &amp; Spring 2026 Admissions Open
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/70 tracking-normal sm:tracking-wider text-[10px] sm:text-xs">
            <span>Hungary • Netherlands • Germany • UK • USA • Australia</span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:inline text-white/90">Estd. 2007 Kathmandu</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
