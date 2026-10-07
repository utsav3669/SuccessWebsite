import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, didYouKnowFacts } from "@/data/resources";
import { ArrowRight } from "lucide-react";

export const ResourcesPreviewSection: React.FC = () => {
  const featuredArticle = blogPosts[0];
  const secondaryArticle = blogPosts[1];
  const fact = didYouKnowFacts[0];

  return (
    <section className="py-24 sm:py-36 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-2xl space-y-3">
            <span className="font-poppins text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block">
              Knowledge & Preparation
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
              Resources for Your Journey
            </h2>
            <p className="font-inter text-base sm:text-lg text-sec-muted font-normal">
              Verified immigration frameworks, destination guides, and academic insights prepared by our advisory team.
            </p>
          </div>

          <Link
            href="/resources"
            className="editorial-link font-poppins text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red transition-colors whitespace-nowrap"
          >
            <span>All Educational Resources →</span>
          </Link>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left: Lead Editorial Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 group">
            <div className="relative aspect-[16/10] bg-slate-100 border border-sec-gray-light overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white text-xs font-semibold font-poppins text-sec-dark border border-sec-gray-light">
                {featuredArticle.category}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-sec-muted font-inter">
                <span>{featuredArticle.publishedDate}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors leading-snug">
                <Link href={`/resources/blog/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h3>

              <p className="font-inter text-sm text-sec-muted leading-relaxed line-clamp-2 font-normal">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/resources/blog/${featuredArticle.slug}`}
                  className="editorial-link font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red hover:text-sec-red-dark transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read Full Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Secondary Story & Editorial Fact (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Secondary Article */}
            {secondaryArticle && (
              <div className="p-8 border border-sec-gray-light bg-white space-y-3">
                <span className="text-[11px] font-mono text-sec-red font-semibold uppercase tracking-widest block">
                  {secondaryArticle.category}
                </span>
                <h4 className="font-poppins text-lg sm:text-xl font-bold text-sec-dark hover:text-sec-navy transition-colors">
                  <Link href={`/resources/blog/${secondaryArticle.slug}`}>
                    {secondaryArticle.title}
                  </Link>
                </h4>
                <p className="font-inter text-xs text-sec-muted line-clamp-2 leading-relaxed">
                  {secondaryArticle.excerpt}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-sec-muted font-inter">
                  <span>{secondaryArticle.readTime}</span>
                  <Link
                    href={`/resources/blog/${secondaryArticle.slug}`}
                    className="editorial-link font-poppins font-semibold text-sec-navy"
                  >
                    <span>Read →</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Editorial Fact Callout (Did You Know) */}
            <div className="p-8 bg-sec-navy-dark text-white space-y-3 border border-sec-navy-dark">
              <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-sec-gold block">
                Fact • {fact.tag}
              </span>
              <p className="font-poppins text-base font-medium text-white leading-relaxed">
                &ldquo;{fact.fact}&rdquo;
              </p>
              <p className="font-inter text-xs text-slate-300 leading-relaxed font-normal">
                {fact.context}
              </p>
            </div>

            {/* Minimal Navigational Index */}
            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-poppins border-t border-sec-gray-light">
              <Link
                href="/resources/study-guides"
                className="editorial-link text-sec-dark hover:text-sec-navy font-semibold uppercase tracking-wider py-1"
              >
                <span>Study Guides →</span>
              </Link>
              <Link
                href="/resources/faqs"
                className="editorial-link text-sec-dark hover:text-sec-navy font-semibold uppercase tracking-wider py-1"
              >
                <span>Student FAQs →</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
