import React from "react";
import Link from "next/link";
import Image from "next/image";
import { featuredDestination } from "@/data/destinations";
import { ArrowRight, CheckCircle2, Building2, GraduationCap, Coins } from "lucide-react";

export const FeaturedDestination: React.FC = () => {
  const d = featuredDestination;

  return (
    <section className="py-14 sm:py-20 bg-sec-offwhite/50 border-t border-sec-gray-light font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Large Editorial Image with Landmark / Student Life */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-img overflow-hidden shadow-card border border-sec-gray-light">
              <Image
                src={d.image}
                alt="Hungarian Parliament and Danube River in Budapest"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sec-navy-dark/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Highlight Card */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-white/95 backdrop-blur-md rounded-lg border border-white/40 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sec-red tracking-wider block font-satoshi">
                    Heart of Europe
                  </span>
                  <span className="text-sm font-bold text-sec-dark font-satoshi">
                    Schengen Area & High Academic Standards
                  </span>
                </div>
                <span className="text-3xl">{d.flag}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hungary Story & Facts */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1.5">
              <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red flex items-center gap-1.5">
                <span>Featured Destination</span>
                <span>•</span>
                <span>Central Europe</span>
              </span>
              <h2 className="font-satoshi text-2xl sm:text-4xl font-bold text-sec-dark tracking-tight">
                Study in Hungary
              </h2>
              <p className="font-satoshi text-sm sm:text-base text-sec-muted leading-relaxed">
                Hungary is prominently featured in SEC&apos;s guidance portfolio. Positioned in the heart of Europe, it combines internationally accredited degrees, safe and historic student cities, and reasonable tuition fees with full European Union recognition.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-white rounded-lg border border-sec-gray-light">
                <span className="text-[11px] text-sec-muted block font-satoshi">Average Tuition</span>
                <strong className="text-xs sm:text-sm text-sec-navy font-satoshi font-semibold">
                  {d.averageTuition}
                </strong>
              </div>
              <div className="p-3 bg-white rounded-lg border border-sec-gray-light">
                <span className="text-[11px] text-sec-muted block font-satoshi">Work Rights</span>
                <strong className="text-xs sm:text-sm text-sec-navy font-satoshi font-semibold">
                  {d.workRights}
                </strong>
              </div>
              <div className="p-3 bg-white rounded-lg border border-sec-gray-light col-span-2 sm:col-span-1">
                <span className="text-[11px] text-sec-muted block font-satoshi">Post-Study Permit</span>
                <strong className="text-xs sm:text-sm text-sec-navy font-satoshi font-semibold">
                  {d.postStudyWork}
                </strong>
              </div>
            </div>

            {/* Why Hungary Pillars */}
            <div className="space-y-2 pt-1">
              <h4 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-dark">
                Why Nepalese Students Choose Hungary:
              </h4>
              <ul className="space-y-1.5">
                {d.keyBenefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-sec-muted font-satoshi">
                    <CheckCircle2 className="w-4 h-4 text-sec-red mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Universities Preview */}
            <div className="pt-1">
              <h4 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-dark mb-2">
                Key University Options:
              </h4>
              <div className="flex flex-wrap gap-2">
                {d.universities.map((uni) => (
                  <span
                    key={uni.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sec-gray-light rounded-md text-xs font-medium text-sec-dark font-satoshi"
                  >
                    <Building2 className="w-3 h-3 text-sec-navy" />
                    <span>{uni.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/study-destinations/hungary"
                className="w-full sm:w-auto px-6 py-2.5 bg-sec-navy hover:bg-sec-navy-dark text-white text-xs sm:text-sm font-semibold font-satoshi rounded-btn shadow-sm transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Explore Hungary Opportunities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/book-counselling?destination=Hungary"
                className="text-xs sm:text-sm font-semibold text-sec-red hover:underline font-satoshi"
              >
                Book Hungary Counselling →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
