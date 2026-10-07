"use client";

import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { WorldFlightMap } from "./WorldFlightMap";

export const FinalCounsellingCta: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-sec-navy-dark text-white border-t border-white/10">
      {/* 1. Background Layer: World Map & Traveling Airplane Arc Animations */}
      <div className="absolute inset-0 z-0">
        <WorldFlightMap />
      </div>

      {/* 2. Foreground Layer: Editorial Content & Restrained CTAs */}
      <div className="relative z-10 py-24 sm:py-36 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-sec-gold block">
          Putilisadak-29, Kathmandu • Direct Embassy & University Corridors
        </span>

        <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
          Ready to Begin Your <br />
          <span className="font-semibold text-white">International Journey?</span>
        </h2>

        <p className="font-inter text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
          Schedule an individual consultation with our senior advisors. We evaluate your academic background and build a realistic roadmap for Hungary, the Netherlands, Germany, the UK, the USA, Australia, and New Zealand.
        </p>

        {/* Restrained CTAs (Sharp rectangular edges, premium contrast) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/book-counselling"
            className="w-full sm:w-auto px-8 py-3.5 bg-sec-red hover:bg-sec-navy-light text-white text-xs font-semibold uppercase tracking-wider font-poppins transition-all duration-300 flex items-center justify-center gap-2 group border border-sec-red shadow-lg"
          >
            <span>Book Free Counselling</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(companyInfo.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-wider font-poppins transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

        {/* Minimal Office Details */}
        <div className="pt-10 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300 font-inter">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-sec-gold" />
            <span>{companyInfo.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-sec-gold" />
            <span>{companyInfo.phones[0]} / {companyInfo.phones[1]}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
