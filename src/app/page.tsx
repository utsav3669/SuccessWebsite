import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { AirplaneIntroLoader } from "@/components/AirplaneIntroLoader";
import { TrustStrip } from "@/components/TrustStrip";
import { StudyDestinationsGrid } from "@/components/StudyDestinationsGrid";
import { CourseFinder } from "@/components/CourseFinder";
import { StudentJourney } from "@/components/StudentJourney";
import { ServicesSection } from "@/components/ServicesSection";
import { WhySecSection } from "@/components/WhySecSection";
import { UniversitiesPreviewSection } from "@/components/UniversitiesPreviewSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { ResourcesPreviewSection } from "@/components/ResourcesPreviewSection";
import { FinalCounsellingCta } from "@/components/FinalCounsellingCta";
import { HomeTestPrepSection } from "@/components/HomeTestPrepSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* 0. INTRO TAKEOFF LOADING SCREEN (1.4s automatic takeoff, zero flight path, smooth reveal) */}
      <AirplaneIntroLoader />

      {/* 1. HERO (Bachelor Students on European Campus, Clean 'WHAT WE ARE' Eyebrow) */}
      <HeroSection />

      {/* 2. EDITORIAL STATEMENT & TRUST PILLARS (With SEC Since 2007) */}
      <TrustStrip />

      {/* 3. DESTINATION CHAPTERS (Asymmetric, editorial storytelling) */}
      <StudyDestinationsGrid />

      {/* 4. EDITORIAL CINEMATIC PAUSE (Quiet image-dominant moment to let the page breathe) */}
      <section className="py-12 sm:py-16 bg-white border-t border-sec-gray-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} duration={0.7}>
            <div className="group relative aspect-[21/9] sm:aspect-[24/9] w-full bg-slate-100 border border-sec-gray-light overflow-hidden editorial-img-frame">
              <Image
                src="/images/destinations/hungary-university.jpg"
                alt="Eötvös Loránd University historic European academic campus and university quadrangle"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sec-dark/25 group-hover:bg-sec-dark/35 transition-colors duration-700 pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div className="max-w-xl space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-white/80 block">
                    Academic Environment
                  </span>
                  <p className="text-lg sm:text-2xl font-semibold tracking-tight">
                    Degrees recognized across the European Union, UK, and worldwide.
                  </p>
                </div>
                <span className="text-xs text-white/80 hidden sm:block">
                  Kathmandu to Europe • 2025/2026
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. COURSES (Large typographic editorial rows) */}
      <section className="py-14 sm:py-20 bg-white border-t border-sec-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} duration={0.7}>
            <div className="max-w-3xl mb-8 sm:mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
                Academic Disciplines
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
                Curricular &amp; Study Areas
              </h2>
              <p className="text-base sm:text-lg text-sec-muted mt-2.5 sm:mt-3 leading-relaxed font-normal">
                Explore degree pathways across leading faculties in Hungary, the Netherlands, Germany, the UK, the USA, and Australia.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={20} duration={0.7} delay={0.15}>
            <CourseFinder showFilters={false} />
          </ScrollReveal>
        </div>
      </section>

      {/* 6. STUDENT JOURNEY (Architectural hairline progression) */}
      <StudentJourney />

      {/* 7. SERVICES (Clean vertical list) */}
      <ServicesSection />

      {/* 8. WHY SEC (6 numbered principles with generous whitespace) */}
      <WhySecSection />

      {/* 9. UNIVERSITIES (Sharp geometric institution features) */}
      <UniversitiesPreviewSection />

      {/* 10. TEST PREPARATION (Prepare With Confidence: IELTS, TOEFL, GRE, GMAT, SAT) */}
      <HomeTestPrepSection />

      {/* 11. SUCCESS STORIES (One large story + supporting quotes) */}
      <SuccessStoriesSection />

      {/* 12. RESOURCES (Editorial lead story & Did You Know callout) */}
      <ResourcesPreviewSection />

      {/* 13. GOOGLE BUSINESS PROFILE & REVIEWS (Just above the flight map section) */}
      <GoogleReviewsSection />

      {/* 14. FINAL COUNSELLING CTA & WORLD FLIGHT MAP */}
      <FinalCounsellingCta />
    </>
  );
}
