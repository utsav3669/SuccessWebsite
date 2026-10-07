"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export const SuccessStoriesSection: React.FC = () => {
  const featured = testimonials.find((t) => t.isFeatured) || testimonials[0];
  const supporting = testimonials.filter((t) => t.id !== featured.id);

  return (
    <section className="py-14 sm:py-20 bg-sec-offwhite border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
            Real Experiences
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Student Success Stories
          </h2>
          <p className="text-base sm:text-lg text-sec-muted mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Reflections from students who completed their preparation, document verification, and visa applications through our Putilisadak office.
          </p>
        </ScrollReveal>

        {/* Asymmetric Editorial Layout: One Large Story + Supporting Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Featured Large Story (7 cols) */}
          <ScrollReveal direction="up" delay={0.1} distance={20} className="lg:col-span-7 bg-white border border-sec-gray-light p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all duration-300 hover:shadow-lg hover:border-sec-navy">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-sec-red uppercase tracking-widest block">
                Featured Student Journey
              </span>
              
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-sec-dark leading-snug">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-sec-muted leading-relaxed font-normal">
                {featured.detailedStory}
              </p>
            </div>

            <div className="pt-4 border-t border-sec-gray-light flex items-center gap-4">
              <div className="relative w-12 h-12 bg-slate-100 border border-sec-gray-light flex-shrink-0 overflow-hidden group">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <h4 className="text-base font-bold text-sec-dark">
                  {featured.name}
                </h4>
                <p className="text-xs font-semibold text-sec-navy">
                  {featured.course} • {featured.university}
                </p>
                <p className="text-xs text-sec-muted flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-sec-red" />
                  <span>{featured.destination} ({featured.intake})</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Supporting Stories (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {supporting.slice(0, 2).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-sec-gray-light p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3.5 transition-all duration-300 hover:shadow-md hover:border-sec-navy hover:-translate-y-0.5"
              >
                <blockquote className="text-sm text-sec-dark leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="pt-3 border-t border-sec-gray-light flex items-center gap-3">
                  <div className="relative w-9 h-9 bg-slate-100 border border-sec-gray-light flex-shrink-0 overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-sec-dark truncate">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-sec-muted truncate">
                      {item.course} • {item.destination}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
