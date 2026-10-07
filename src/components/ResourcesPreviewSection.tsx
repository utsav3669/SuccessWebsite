import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, didYouKnowFacts } from "@/data/resources";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ResourcesPreviewSection: React.FC = () => {
  const featuredArticle = blogPosts[0];
  const secondaryArticle = blogPosts[1];
  const fact = didYouKnowFacts[0];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-sec-gray-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} duration={0.7}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block">
                Knowledge &amp; Preparation
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
                Resources for Your Journey
              </h2>
              <p className="text-base sm:text-lg text-sec-muted font-normal">
                Verified immigration frameworks, destination guides, and academic insights prepared by our advisory team.
              </p>
            </div>

            <Link
              href="/resources"
              className="editorial-link text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red transition-colors whitespace-nowrap"
            >
              <span>All Educational Resources →</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Lead Editorial Story (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" distance={20} duration={0.7} delay={0.1}>
              <div className="space-y-4 group">
                <div className="relative aspect-[16/10] bg-slate-100 border border-sec-gray-light overflow-hidden editorial-img-frame">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white text-xs font-semibold text-sec-dark border border-sec-gray-light">
                    {featuredArticle.category}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-sec-muted">
                    <span>{featuredArticle.publishedDate}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-sec-dark group-hover:text-sec-navy transition-colors leading-snug">
                    <Link href={`/resources/blog/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-sec-muted leading-relaxed line-clamp-2 font-normal">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-1">
                    <Link
                      href={`/resources/blog/${featuredArticle.slug}`}
                      className="editorial-link text-xs font-semibold uppercase tracking-wider text-sec-red hover:text-sec-red-dark transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Read Full Guide</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Secondary Story & Editorial Fact (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" distance={20} duration={0.7} delay={0.15}>
              <div className="flex flex-col justify-between space-y-4 sm:space-y-5">
                
                {/* Secondary Article */}
                {secondaryArticle && (
                  <div className="p-5 sm:p-6 border border-sec-gray-light bg-white space-y-2.5 transition-colors duration-300 hover:border-sec-navy">
                    <span className="text-[11px] text-sec-red font-semibold uppercase tracking-widest block">
                      {secondaryArticle.category}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-sec-dark hover:text-sec-navy transition-colors">
                      <Link href={`/resources/blog/${secondaryArticle.slug}`}>
                        {secondaryArticle.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-sec-muted line-clamp-2 leading-relaxed">
                      {secondaryArticle.excerpt}
                    </p>
                    <div className="pt-1 flex items-center justify-between text-xs text-sec-muted">
                      <span>{secondaryArticle.readTime}</span>
                      <Link
                        href={`/resources/blog/${secondaryArticle.slug}`}
                        className="editorial-link font-semibold text-sec-navy"
                      >
                        <span>Read →</span>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Editorial Fact Callout (Did You Know) */}
                <div className="p-5 sm:p-6 bg-sec-navy-dark text-white space-y-2.5 border border-sec-navy-dark">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sec-gold block">
                    Fact • {fact.tag}
                  </span>
                  <p className="text-base font-medium text-white leading-relaxed">
                    &ldquo;{fact.fact}&rdquo;
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {fact.context}
                  </p>
                </div>

                {/* Minimal Navigational Index */}
                <div className="pt-2 grid grid-cols-2 gap-4 text-xs border-t border-sec-gray-light">
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
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
