import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { ArrowRight, MapPin, DollarSign, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Study Destinations | Success Educational Consultancy",
  description:
    "Explore higher education opportunities across Hungary, Netherlands, Germany, United Kingdom, USA, Australia, and Sweden with Success Educational Consultancy.",
};

export default function StudyDestinationsPage() {
  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-red">
            Global Pathways
          </span>
          <h1 className="font-satoshi text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Study Destinations
          </h1>
          <p className="font-satoshi text-base sm:text-lg text-sec-muted leading-relaxed">
            We specialize in verified destinations that deliver high academic return on investment, recognized qualifications, and clear immigration pathways.
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {destinations.map((dest, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={dest.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-5 sm:p-7 rounded-card border border-sec-gray-light bg-white shadow-subtle hover:border-sec-navy/30 transition-all duration-300 ${
                dest.slug === "hungary" ? "ring-2 ring-sec-red/20" : ""
              }`}
            >
              {/* Image Col (5 cols) */}
              <div
                className={`lg:col-span-5 relative aspect-[16/11] rounded-img overflow-hidden shadow-sm bg-slate-100 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={dest.image}
                  alt={`Study in ${dest.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-sec-dark flex items-center gap-1.5 shadow-sm">
                  <span className="text-base">{dest.flag}</span>
                  <span className="font-satoshi">{dest.name}</span>
                  {dest.slug === "hungary" && (
                    <span className="ml-1 px-1.5 py-0.5 text-[9px] font-bold text-white bg-sec-red rounded uppercase">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content Col (7 cols) */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-sec-red uppercase tracking-wider font-satoshi">
                    {dest.tagline}
                  </span>
                  <h2 className="font-satoshi text-2xl sm:text-3xl font-bold text-sec-dark">
                    Study in {dest.name}
                  </h2>
                  <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-satoshi border-y border-sec-gray-light/70 py-3.5">
                  <div>
                    <span className="text-sec-muted block text-[11px]">Tuition Range</span>
                    <strong className="text-sec-dark font-satoshi font-semibold">{dest.averageTuition}</strong>
                  </div>
                  <div>
                    <span className="text-sec-muted block text-[11px]">Living Budget</span>
                    <strong className="text-sec-dark font-satoshi font-semibold">{dest.livingCosts}</strong>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-sec-muted block text-[11px]">Post-Study Stay</span>
                    <strong className="text-sec-dark font-satoshi font-semibold">{dest.postStudyWork}</strong>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-1.5">
                  <h4 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-dark">
                    Key Advantages:
                  </h4>
                  <ul className="space-y-1 text-xs text-sec-muted font-satoshi">
                    {dest.keyBenefits.slice(0, 3).map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sec-red mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-1.5 flex items-center gap-4">
                  <Link
                    href={`/study-destinations/${dest.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-sec-navy hover:bg-sec-navy-dark text-white text-xs font-semibold font-satoshi rounded-btn transition-colors group"
                  >
                    <span>View Full {dest.name} Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href={`/book-counselling?destination=${encodeURIComponent(dest.name)}`}
                    className="text-xs font-semibold text-sec-red hover:underline font-satoshi"
                  >
                    Book Counselling →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
