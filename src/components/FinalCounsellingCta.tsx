"use client";

import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { WorldFlightMap } from "./WorldFlightMap";
import { ScrollReveal } from "@/components/ScrollReveal";

export const FinalCounsellingCta: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-sec-navy-dark text-white border-t border-white/10 min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] xl:min-h-[820px] flex items-center justify-center">
      {/* 1. Background Layer: Full World Map & Traveling Airplane Arc Animations */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <WorldFlightMap />
      </div>

      {/* 2. Foreground Layer: Editorial Content & Restrained CTAs */}
      <div className="relative z-10 py-10 sm:py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <ScrollReveal direction="up" distance={20} duration={0.8}>
          <div className="pointer-events-auto bg-[#071326]/10 backdrop-blur-sm p-6 sm:p-9 border border-white/10 shadow-xl rounded-[8px] max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <span className="font-satoshi text-xs uppercase tracking-[0.22em] text-sec-gold block">
              Putilisadak-29, Kathmandu • Direct Embassy &amp; University Corridors
            </span>

            <h2 className="font-satoshi text-2xl sm:text-4xl lg:text-4xl font-light tracking-tight text-white leading-tight drop-shadow-sm">
              Ready to Begin Your <br />
              <span className="font-semibold text-white">International Journey?</span>
            </h2>

            <p className="font-satoshi text-sm sm:text-base text-slate-200/90 max-w-xl mx-auto leading-relaxed font-normal drop-shadow-sm">
              Schedule an individual consultation with our senior advisors. We evaluate your academic background and build a realistic roadmap for Hungary, the Netherlands, Germany, the UK, the USA, Australia, and New Zealand.
            </p>

            {/* Restrained CTAs (Sharp rectangular edges, premium contrast) */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/book-counselling"
                className="w-full sm:w-auto px-7 py-3 bg-sec-red hover:bg-sec-navy-light text-white text-xs font-semibold uppercase tracking-wider font-satoshi transition-all duration-300 flex items-center justify-center gap-2 group border border-sec-red shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>

              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(companyInfo.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-xs font-semibold uppercase tracking-wider font-satoshi transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

            {/* Minimal Office Details */}
            <div className="pt-4 mt-4 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300 font-satoshi">
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
        </ScrollReveal>
      </div>
    </section>
  );
};
