import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/resources";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { companyInfo } from "@/data/company";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | SEC Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="space-y-4">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sec-navy hover:text-sec-red transition-colors font-poppins"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-sec-navy/5 text-sec-navy text-xs font-semibold rounded font-poppins">
              {post.category}
            </span>
          </div>

          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-sec-muted font-inter pt-2 border-t border-sec-gray-light">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-sec-red" />
              <span>{post.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative aspect-[16/9] rounded-img overflow-hidden shadow-card border border-sec-gray-light bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Body Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-sm sm:text-base font-inter text-sec-dark/90 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author & Consultation Signoff Box */}
        <div className="mt-12 p-6 sm:p-8 bg-sec-offwhite rounded-card border border-sec-gray-light space-y-4">
          <h4 className="font-poppins text-base font-bold text-sec-dark">
            Need Individualized Educational Advice?
          </h4>
          <p className="font-inter text-xs sm:text-sm text-sec-muted leading-relaxed">
            Our certified destination counsellors in Putilisadak-29 evaluate your transcripts, language scores, and family financial plans with complete discretion and transparency.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/book-counselling"
              className="w-full sm:w-auto px-5 py-2.5 bg-sec-red hover:bg-sec-red-dark text-white text-xs font-semibold font-poppins rounded-btn text-center"
            >
              Book Free Counselling Session
            </Link>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=Hello+SEC,+I+read+your+article+about+${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 bg-white border border-sec-gray-light text-sec-dark text-xs font-semibold font-poppins rounded-btn text-center hover:bg-sec-gray-light"
            >
              Ask Questions on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
