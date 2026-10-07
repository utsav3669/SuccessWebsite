"use client";

import React, { useState, useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Step {
  num: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Free Counselling",
    desc: "Sit down with our advisors in Putilisadak to assess your academic background, test scores, and real family budget.",
  },
  {
    num: "02",
    title: "Choose Your Destination",
    desc: "Evaluate Hungary, Netherlands, Germany, UK, US, Australia, or Sweden based on tuition, living costs, and post-study opportunities.",
  },
  {
    num: "03",
    title: "Select Your Course",
    desc: "Match your high school or undergraduate curriculum to accredited international degrees with recognized industry accreditations.",
  },
  {
    num: "04",
    title: "Select Your University",
    desc: "Formulate a balanced shortlist of target, match, and safe universities across reputable public and research institutions.",
  },
  {
    num: "05",
    title: "Prepare Application",
    desc: "Draft impactful Statements of Purpose (SOP), secure academic reference letters, and compile verified transcripts.",
  },
  {
    num: "06",
    title: "Receive Offer",
    desc: "Review conditional and unconditional offer letters, confirm tuition payment deposit deadlines, and receive acceptance letters.",
  },
  {
    num: "07",
    title: "Visa Guidance",
    desc: "Build comprehensive financial sponsorship dossiers and participate in one-on-one simulated embassy interview rehearsals.",
  },
  {
    num: "08",
    title: "Pre-Departure Briefing",
    desc: "Secure dormitory or student housing, arrange foreign exchange cards, attend orientation briefings, and meet fellow students.",
  },
  {
    num: "09",
    title: "Begin Your Global Journey",
    desc: "Board your flight from Kathmandu with confidence, knowing every requirement has been met honestly and professionally.",
  },
];

export const StudentJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, (-rect.top + windowHeight * 0.3) / rect.height));
      const stepIndex = Math.floor(progress * steps.length);
      setActiveStepIndex(Math.min(steps.length - 1, Math.max(0, stepIndex)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} duration={0.7}>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
              The Roadmap
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
              From Dream to Destination
            </h2>
            <p className="text-base sm:text-lg text-sec-muted mt-2.5 sm:mt-3 leading-relaxed font-normal">
              A nine-stage progression designed to give students and parents complete clarity from Kathmandu to your international campus.
            </p>
          </div>
        </ScrollReveal>

        {/* Minimalist Architectural Timeline */}
        <div ref={containerRef} className="relative max-w-4xl">
          {/* Vertical Hairline Guide */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-8 w-[1px] bg-sec-gray-light">
            {/* Red progressive drawing line */}
            <div
              className="w-full bg-sec-red transition-all duration-300 ease-out"
              style={{
                height: `${((activeStepIndex + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Sequential Stages */}
          <div className="space-y-7 sm:space-y-9">
            {steps.map((step, idx) => {
              const isActive = idx <= activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <div
                  key={step.num}
                  className={`relative pl-12 sm:pl-20 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {/* Square Stage Indicator Node */}
                  <div
                    className={`absolute left-4 sm:left-8 -translate-x-1/2 top-1.5 w-2 h-2 transition-all duration-300 ${
                      isCurrent
                        ? "bg-sec-red scale-125"
                        : isActive
                        ? "bg-sec-navy"
                        : "bg-sec-gray-light"
                    }`}
                  />

                  {/* Stage Typography */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs sm:text-sm text-sec-red font-semibold">
                        {step.num}
                      </span>
                      <h3
                        className={`text-lg sm:text-2xl font-bold tracking-tight transition-colors ${
                          isCurrent ? "text-sec-dark" : "text-sec-dark/90"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-sec-muted leading-relaxed max-w-2xl font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
