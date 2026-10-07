"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignatureAirplane } from "./SignatureAirplane";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const heroHeight = containerRef.current.offsetHeight;
      // Fast, confident takeoff: complete the climb within the first ~380px of scroll
      const scrollDistance = Math.max(0, -rect.top);
      const activeThreshold = Math.min(380, heroHeight * 0.42);
      const progress = Math.min(1, scrollDistance / activeThreshold);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[94vh] flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden bg-[#FAFAF9]"
    >
      {/* ============================================================== */}
      {/* LAYER 00-A: HERO BACKGROUND ILLUSTRATION                       */}
      {/* Fine architectural line-art illustration backdrop in back       */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.15] mix-blend-multiply"
          style={{
            backgroundImage: "url('/images/hero-bg-illustration.jpg')",
            backgroundPosition: "center 42%",
          }}
        />
        {/* Soft gradient wash to guarantee high contrast and legible typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF9]/95 via-[#FAFAF9]/75 to-[#FAFAF9]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9]/80 via-transparent to-[#FAFAF9]" />
      </div>

      {/* ============================================================== */}
      {/* LAYER 00: LUMINOUS ATMOSPHERE & RESTRAINED DEPTH FIELDS       */}
      {/* Soft warm light + Subtle atmospheric depth to let hero breathe */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft Warm Neutral Luminosity (Upper Left) */}
        <div
          className="absolute -top-24 -left-24 w-[750px] h-[650px] opacity-60 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(254, 243, 199, 0.4) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />

        {/* Subtle Warm Accent (Upper Right sky area) */}
        <div
          className="absolute top-10 right-0 lg:right-16 w-[550px] h-[550px] opacity-40 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(224, 32, 48, 0.04) 0%, transparent 70%)",
          }}
        />

        {/* Subtle Navy Depth (Lower Left departure origin) */}
        <div
          className="absolute bottom-0 left-8 w-[500px] h-[500px] opacity-40 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(29, 47, 111, 0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* LAYER 01: SIGNATURE AIRPLANE TAKEOFF (No Lines, Fast, Clean)   */}
      {/* ============================================================== */}
      <SignatureAirplane scrollProgress={scrollProgress} />

      {/* ============================================================== */}
      {/* LAYER 04 & 05: FOREGROUND EDITORIAL CONTENT & PHOTOGRAPHY      */}
      {/* ============================================================== */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Typography & Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Small Eyebrow Label with Clean Red Pillar */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 bg-sec-red" />
              <span className="font-poppins text-[11px] uppercase tracking-[0.22em] text-sec-muted font-semibold">
                Success Educational Consultancy • Kathmandu
              </span>
            </div>

            {/* Confident Large Headline */}
            <h1 className="font-poppins text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-sec-dark leading-[1.08]">
              Empowering <br />
              Education for a <br />
              <span className="text-sec-navy">Global Future.</span>
            </h1>

            {/* One Short Supporting Statement */}
            <p className="font-inter text-base sm:text-lg text-sec-muted max-w-lg leading-relaxed font-normal">
              Direct institutional admissions from Kathmandu to accredited public research universities across Hungary, the Netherlands, Germany, the UK, the USA, and Australia.
            </p>

            {/* Restrained CTAs (Sharp rectangular edges, generous breathing room) */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/book-counselling"
                className="px-8 py-3.5 bg-sec-red hover:bg-sec-navy text-white text-xs font-semibold uppercase tracking-wider font-poppins transition-all duration-300 inline-flex items-center gap-2 border border-sec-red shadow-sm hover:shadow"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/study-destinations"
                className="group editorial-link text-xs font-semibold uppercase tracking-wider font-poppins text-sec-dark hover:text-sec-navy transition-colors inline-flex items-center gap-1.5 py-2"
              >
                <span>Explore Destinations</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* LAYER 05: Hero Photography / Asymmetric Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="group relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none bg-slate-100 border border-sec-gray-light overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="International student studying on historic European university campus"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{
                  transform: `scale(${1 + scrollProgress * 0.02})`,
                  transition: "transform 0.2s ease-out",
                }}
              />
              
              {/* Minimal Editorial Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 border-t border-sec-gray-light flex items-center justify-between text-[11px] font-inter">
                <span className="text-sec-muted">Featured European Horizon</span>
                <Link
                  href="/study-destinations/hungary"
                  className="font-poppins font-semibold text-sec-navy hover:text-sec-red transition-colors flex items-center gap-1"
                >
                  <span>Study in Hungary</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
