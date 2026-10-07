import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="font-poppins text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-3">
            Advisory Capabilities
          </span>
          <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Your Journey. Our Guidance.
          </h2>
          <p className="font-inter text-base sm:text-lg text-sec-muted mt-4 leading-relaxed font-normal">
            Seven structured advisory services designed to remove procedural risk, protect financial investment, and verify eligibility.
          </p>
        </div>

        {/* Clean Vertical Editorial List (Not a wall of cards) */}
        <div className="border-t border-sec-gray-light divide-y divide-sec-gray-light">
          {services.map((srv) => (
            <div
              key={srv.slug}
              className="group py-8 sm:py-12 transition-colors duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                {/* Number & Title */}
                <div className="lg:col-span-5 flex items-baseline gap-6 sm:gap-8">
                  <span className="font-mono text-xs sm:text-sm text-sec-red font-semibold">
                    {srv.number}
                  </span>
                  <h3 className="font-poppins text-xl sm:text-2xl lg:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                    <Link href={`/services/${srv.slug}`}>
                      {srv.title}
                    </Link>
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 pl-12 sm:pl-14 lg:pl-0">
                  <p className="font-inter text-sm sm:text-base text-sec-muted leading-relaxed font-normal">
                    {srv.shortSummary}
                  </p>
                </div>

                {/* Editorial Link CTA */}
                <div className="lg:col-span-2 pl-12 sm:pl-14 lg:pl-0 flex lg:justify-end items-center">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="editorial-link font-poppins text-xs font-semibold uppercase tracking-wider text-sec-navy group-hover:text-sec-red transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View Service</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="pt-10 flex items-center justify-between text-xs text-sec-muted font-inter">
          <span>Personalized sessions at Putilisadak-29</span>
          <Link
            href="/services"
            className="editorial-link font-poppins font-semibold uppercase tracking-wider text-sec-red"
          >
            <span>Read All Service Deliverables →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
