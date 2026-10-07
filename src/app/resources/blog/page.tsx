import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/data/resources";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Educational Articles | SEC Kathmandu",
  description:
    "Expert perspectives on studying in Hungary, European tuition costs, student visa interviews, and government scholarships.",
};

export default function BlogIndexPage() {
  const featured = blogPosts[0];
  const others = blogPosts.slice(1);

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-sec-red">
            Insights & Guides
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Articles & Updates
          </h1>
          <p className="font-inter text-base sm:text-lg text-sec-muted leading-relaxed">
            Researched analysis on European universities, embassy interview dynamics, and scholarship opportunities.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sec-offwhite rounded-card border border-sec-gray-light overflow-hidden p-6 sm:p-10">
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-img overflow-hidden bg-slate-200">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3 text-xs text-sec-muted font-inter">
              <span className="px-2.5 py-1 bg-white font-semibold text-sec-navy rounded font-poppins">
                {featured.category}
              </span>
              <span>•</span>
              <span>{featured.publishedDate}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>

            <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-sec-dark hover:text-sec-navy transition-colors">
              <Link href={`/resources/blog/${featured.slug}`}>
                {featured.title}
              </Link>
            </h2>

            <p className="font-inter text-sm text-sec-muted leading-relaxed">
              {featured.excerpt}
            </p>

            <div className="pt-2">
              <Link
                href={`/resources/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sec-red hover:bg-sec-red-dark text-white text-xs font-semibold font-poppins rounded-btn transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-poppins text-xl font-bold text-sec-dark mb-6">
          More Educational Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((post) => (
            <div
              key={post.slug}
              className="group bg-white rounded-card border border-sec-gray-light overflow-hidden hover:border-sec-navy/30 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded text-[11px] font-semibold text-sec-navy">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-sec-muted">
                    <Calendar className="w-3 h-3" />
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="font-poppins text-base font-bold text-sec-dark group-hover:text-sec-navy transition-colors line-clamp-2">
                    <Link href={`/resources/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h4>

                  <p className="font-inter text-xs text-sec-muted line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold font-poppins text-sec-red hover:text-sec-red-dark transition-colors"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
