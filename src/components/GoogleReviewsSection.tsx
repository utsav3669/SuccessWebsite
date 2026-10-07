"use client";

import React, { useState } from "react";
import { googleReviews, googleBusinessProfile } from "@/data/googleReviews";
import { Star, CheckCircle2, ArrowUpRight, MessageSquareQuote } from "lucide-react";
import { ScrollReveal, StaggerItem } from "@/components/ScrollReveal";

export const GoogleReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const destinations = ["all", ...Array.from(new Set(googleReviews.map((r) => r.destination)))];

  const filteredReviews = filter === "all"
    ? googleReviews
    : googleReviews.filter((r) => r.destination === filter);

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF9] border-t border-sec-gray-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block: Google Profile Badge & Editorial Intro */}
        <ScrollReveal direction="up" distance={20} duration={0.7}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2">
                {/* Google G SVG */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span className="text-xs uppercase tracking-[0.2em] text-sec-navy font-semibold">
                  Google Business Profile • Kathmandu HQ
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
                Verified Student Feedback
              </h2>
              <p className="text-base sm:text-lg text-sec-muted leading-relaxed">
                Authentic reviews from Nepalese students guided by Success Educational Consultancy through university admissions and embassy visas.
              </p>
            </div>

            {/* Official Google Score Card */}
            <div className="bg-white border border-black/10 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-extrabold text-sec-navy">
                    {googleBusinessProfile.rating}
                  </span>
                  <div>
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-sec-muted">
                      Based on {googleBusinessProfile.totalReviews}+ reviews
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-medium pt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google Verified Business Profile</span>
                </div>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-black/10 pt-3 sm:pt-0 sm:pl-5 space-y-1.5">
                <a
                  href={googleBusinessProfile.placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sec-red hover:text-sec-navy transition-colors uppercase tracking-wider"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="block text-[11px] text-sec-muted">
                  Putalisadak-29, Kathmandu
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal direction="up" distance={15} duration={0.6} delay={0.1}>
          <div className="flex flex-wrap items-center gap-1.5 mb-6 pb-3 border-b border-sec-gray-light">
            <span className="text-xs uppercase tracking-wider text-sec-muted mr-2">
              Filter by Destination:
            </span>
            {destinations.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all border ${
                  filter === d
                    ? "bg-sec-navy text-white border-sec-navy"
                    : "bg-white text-sec-dark border-black/10 hover:border-black/30"
                }`}
              >
                {d === "all" ? "All Reviews" : d}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <ScrollReveal direction="up" distance={16} duration={0.65} staggerChildren={0.05} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredReviews.map((review) => (
            <StaggerItem key={review.id}>
              <div
                className="h-full bg-white border border-black/10 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-sec-navy hover:shadow-lg hover:-translate-y-1 relative group"
              >
                <div className="space-y-3">
                  {/* Review Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-sec-dark">
                          {review.authorName}
                        </span>
                        <span className="inline-flex items-center text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 border border-emerald-200">
                          Verified
                        </span>
                      </div>
                      <span className="text-[11px] text-sec-muted">
                        {review.relativeTime} via Google
                      </span>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex items-center text-amber-500 flex-shrink-0">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Highlight Tag */}
                  {review.highlight && (
                    <div className="bg-sec-offwhite px-2.5 py-1 border-l-2 border-sec-red text-xs font-medium text-sec-dark">
                      &ldquo;{review.highlight}&rdquo;
                    </div>
                  )}

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-sec-dark/80 leading-relaxed font-normal">
                    {review.text}
                  </p>
                </div>

                {/* Destination Tag Footer */}
                <div className="pt-3 mt-4 border-t border-black/5 flex items-center justify-between text-xs text-sec-muted">
                  <span className="font-semibold text-sec-navy">
                    {review.destination}
                  </span>
                  {review.university && (
                    <span className="text-[11px] truncate max-w-[170px]" title={review.university}>
                      {review.university}
                    </span>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </ScrollReveal>

        {/* Bottom Proof Note */}
        <ScrollReveal direction="up" distance={15} duration={0.6} delay={0.15}>
          <div className="mt-8 pt-6 border-t border-sec-gray-light flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sec-muted">
            <div className="flex items-center gap-2">
              <MessageSquareQuote className="w-4 h-4 text-sec-red" />
              <span>All reviews are authentic student submissions directly on Google Business Profile.</span>
            </div>

            <a
              href={googleBusinessProfile.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sec-navy font-semibold hover:text-sec-red transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Leave a Review on Google</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
