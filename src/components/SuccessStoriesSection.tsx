import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { MapPin } from "lucide-react";

export const SuccessStoriesSection: React.FC = () => {
  const featured = testimonials.find((t) => t.isFeatured) || testimonials[0];
  const supporting = testimonials.filter((t) => t.id !== featured.id);

  return (
    <section className="py-24 sm:py-36 bg-sec-offwhite border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="font-poppins text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-3">
            Real Experiences
          </span>
          <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Student Success Stories
          </h2>
          <p className="font-inter text-base sm:text-lg text-sec-muted mt-4 leading-relaxed font-normal">
            Reflections from students who completed their preparation, document verification, and visa applications through our Putilisadak office.
          </p>
        </div>

        {/* Asymmetric Editorial Layout: One Large Story + Supporting Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Featured Large Story (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-sec-gray-light p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-xs font-semibold text-sec-red uppercase tracking-widest block">
                Featured Student Journey
              </span>
              
              <blockquote className="font-poppins text-xl sm:text-2xl lg:text-3xl font-medium text-sec-dark leading-snug">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>

              <p className="font-inter text-sm sm:text-base text-sec-muted leading-relaxed font-normal">
                {featured.detailedStory}
              </p>
            </div>

            <div className="pt-6 border-t border-sec-gray-light flex items-center gap-5">
              <div className="relative w-14 h-14 bg-slate-100 border border-sec-gray-light flex-shrink-0">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-poppins text-base font-bold text-sec-dark">
                  {featured.name}
                </h4>
                <p className="text-xs font-semibold text-sec-navy font-poppins">
                  {featured.course} • {featured.university}
                </p>
                <p className="text-xs text-sec-muted flex items-center gap-1 mt-0.5 font-inter">
                  <MapPin className="w-3 h-3 text-sec-red" />
                  <span>{featured.destination} ({featured.intake})</span>
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Stories (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supporting.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="bg-white border border-sec-gray-light p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6"
              >
                <blockquote className="font-inter text-sm text-sec-dark leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-sec-gray-light flex items-center gap-4">
                  <div className="relative w-10 h-10 bg-slate-100 border border-sec-gray-light flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-poppins text-xs font-bold text-sec-dark truncate">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-sec-muted truncate font-inter">
                      {item.course} • {item.destination}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
