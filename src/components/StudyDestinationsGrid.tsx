import React from "react";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { ArrowRight } from "lucide-react";

export const StudyDestinationsGrid: React.FC = () => {
  const hungary = destinations.find((d) => d.slug === "hungary") || destinations[0];
  const netherlands = destinations.find((d) => d.slug === "netherlands") || destinations[1];
  const germany = destinations.find((d) => d.slug === "germany") || destinations[2];
  const uk = destinations.find((d) => d.slug === "united-kingdom") || destinations[3];
  const usa = destinations.find((d) => d.slug === "usa") || destinations[4];
  const australia = destinations.find((d) => d.slug === "australia") || destinations[5];
  const sweden = destinations.find((d) => d.slug === "sweden") || destinations[6];

  return (
    <section id="destinations" className="py-24 sm:py-36 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous whitespace */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <span className="font-poppins text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-3">
            Destination Chapters
          </span>
          <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Where Will Your Journey Take You?
          </h2>
          <p className="font-inter text-base sm:text-lg text-sec-muted mt-4 leading-relaxed font-normal">
            Seven verified destinations offering internationally recognized degrees, tuition affordability, and clear graduate pathways.
          </p>
        </div>

        {/* CHAPTER 01: HUNGARY (Heroic Full-Bleed Editorial Composition) */}
        <div className="mb-24 sm:mb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 group relative aspect-[16/10] bg-slate-100 border border-sec-gray-light overflow-hidden">
              <Image
                src={hungary.image}
                alt="Eötvös Loránd University campus architecture, Budapest, Hungary"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sec-dark/0 group-hover:bg-sec-dark/15 transition-colors duration-500 pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white text-sec-dark text-xs font-semibold font-poppins border border-sec-gray-light">
                {hungary.flag} Chapter 01 • Central Europe
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sec-red font-semibold block">
                  Featured Destination
                </span>
                <h3 className="font-poppins text-3xl sm:text-4xl font-bold text-sec-dark">
                  {hungary.name}
                </h3>
                <p className="font-inter text-sm sm:text-base text-sec-muted leading-relaxed">
                  {hungary.shortDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-sec-gray-light grid grid-cols-2 gap-4 text-xs font-inter">
                <div>
                  <span className="text-sec-muted block text-[11px]">Tuition Range</span>
                  <strong className="text-sec-navy font-poppins font-semibold">{hungary.averageTuition}</strong>
                </div>
                <div>
                  <span className="text-sec-muted block text-[11px]">Work Rights</span>
                  <strong className="text-sec-dark font-poppins font-semibold">{hungary.workRights}</strong>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/study-destinations/${hungary.slug}`}
                  className="editorial-link font-poppins text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red transition-colors inline-flex items-center gap-2 group"
                >
                  <span>Explore Hungary Chapter</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CHAPTER 02: NETHERLANDS & GERMANY (Asymmetric Paired Editorial Chapters) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 sm:mb-36 pt-16 border-t border-sec-gray-light">
          {/* Netherlands */}
          <div className="lg:col-span-6 space-y-6 group">
            <div className="relative aspect-[4/3] bg-slate-100 border border-sec-gray-light overflow-hidden">
              <Image
                src={netherlands.image}
                alt="Modern Dutch university campus and research faculties, Netherlands"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sec-dark/0 group-hover:bg-sec-dark/15 transition-colors duration-500 pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white text-sec-dark text-xs font-semibold font-poppins border border-sec-gray-light">
                {netherlands.flag} Chapter 02
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                {netherlands.name}
              </h3>
              <p className="font-inter text-sm text-sec-muted leading-relaxed">
                {netherlands.shortDescription}
              </p>
              <div className="pt-2">
                <Link
                  href={`/study-destinations/${netherlands.slug}`}
                  className="editorial-link font-poppins text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red transition-colors inline-flex items-center gap-2 group"
                >
                  <span>Explore Netherlands</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Germany */}
          <div className="lg:col-span-6 space-y-6 lg:pt-12 group">
            <div className="relative aspect-[4/3] bg-slate-100 border border-sec-gray-light overflow-hidden">
              <Image
                src={germany.image}
                alt="German public research university campus and lecture hall, Germany"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sec-dark/0 group-hover:bg-sec-dark/15 transition-colors duration-500 pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white text-sec-dark text-xs font-semibold font-poppins border border-sec-gray-light">
                {germany.flag} Chapter 03
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                {germany.name}
              </h3>
              <p className="font-inter text-sm text-sec-muted leading-relaxed">
                {germany.shortDescription}
              </p>
              <div className="pt-2">
                <Link
                  href={`/study-destinations/${germany.slug}`}
                  className="editorial-link font-poppins text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Germany →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CHAPTER 03: UK, USA, AUSTRALIA, SWEDEN (Clean Editorial Sequence) */}
        <div className="pt-16 border-t border-sec-gray-light space-y-12">
          <div className="flex items-center justify-between">
            <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-dark">
              Global Destinations
            </span>
            <Link
              href="/study-destinations"
              className="editorial-link font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red"
            >
              <span>View All 7 Destinations →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[uk, usa, australia, sweden].map((item, idx) => (
              <div key={item.slug} className="space-y-4 group">
                <div className="relative aspect-[3/2] bg-slate-100 border border-sec-gray-light overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-white text-[11px] font-semibold text-sec-dark">
                    {item.flag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-poppins text-lg font-bold text-sec-dark group-hover:text-sec-navy transition-colors">
                    {item.name}
                  </h4>
                  <p className="font-inter text-xs text-sec-muted line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                  <Link
                    href={`/study-destinations/${item.slug}`}
                    className="inline-block pt-1 text-xs font-semibold font-poppins text-sec-navy group-hover:text-sec-red transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
