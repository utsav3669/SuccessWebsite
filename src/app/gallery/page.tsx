import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Camera, ShieldCheck, Filter } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Archival & Operational Gallery | Success Educational Consultancy (SEC)",
  description: "Visual documentation of academic counselling, student briefings, European university seminars, and institutional recognition at Success Educational Consultancy.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-sec-navy-dark text-sec-sand-light pt-28 pb-20 selection:bg-sec-gold selection:text-sec-navy-dark">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sec-gold uppercase hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-sec-gold" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-sec-gold">
            Photographic & Institutional Records
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-sec-sand-light max-w-4xl font-serif">
          Consultancy Gallery & Archives
        </h1>
        <p className="mt-6 text-base md:text-lg text-sec-sand-light/70 max-w-2xl font-light leading-relaxed">
          Preserved photography reflecting one-on-one student consultations, pre-departure gatherings, institutional credentials, and overseas education advisory sessions in Kathmandu.
        </p>
      </div>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="border border-sec-gold/15 bg-sec-navy/20 flex flex-col justify-between group hover:border-sec-gold/40 transition-colors"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sec-navy-dark/80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-sec-navy-dark/90 border border-sec-gold/20 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-sec-gold">
                  {item.category.replace("_", " ")}
                </div>
                {item.year && (
                  <div className="absolute top-3 right-3 bg-sec-navy-dark/90 border border-sec-gold/20 px-2.5 py-1 text-[10px] font-mono text-sec-sand-light/70">
                    {item.year}
                  </div>
                )}
              </div>

              <figcaption className="p-6">
                <div className="flex items-center gap-1.5 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sec-gold" />
                  <span className="text-[10px] font-mono text-sec-sand-light/50 uppercase tracking-wider">
                    Verified SEC Record
                  </span>
                </div>
                <h2 className="text-lg font-serif font-light text-sec-sand-light mb-2">
                  {item.title}
                </h2>
                <p className="text-xs text-sec-sand-light/70 leading-relaxed font-light">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Recognition & Institutional Registry Note */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="border border-sec-gold/20 bg-sec-navy/30 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-sec-gold block mb-3">
                Government Compliance & Verification
              </span>
              <h3 className="text-2xl font-serif font-light text-sec-sand-light mb-4">
                Recognized Operational Standards
              </h3>
              <p className="text-sm text-sec-sand-light/75 leading-relaxed font-light mb-4">
                Success Educational Consultancy operates under official educational consultancy authorizations in Nepal (Historical Ministry of Education Reg. No. 396). All academic and visa assistance follows regulated advisory protocols without exaggerated or unsubstantiated guarantees.
              </p>
              <p className="text-xs font-mono text-sec-sand-light/50">
                Institutional documents and original certificates may be reviewed in person at our Putalisadak central advisory office.
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center p-6 border border-sec-gold/20 bg-sec-navy-dark/60 w-44 h-44">
              <Image
                src="/images/sec-logo-transparent.png"
                alt="Success Educational Consultancy Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border border-sec-gold/30 bg-sec-navy/60 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-light text-sec-sand-light mb-4">
            Visit Our Central Office in Kathmandu
          </h3>
          <p className="text-sm text-sec-sand-light/70 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Meet our counsellors in person at Putalisadak-29 to review international university programs, required documentation, and preparation strategies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-sec-gold text-sec-navy-dark text-xs font-mono font-medium uppercase tracking-widest hover:bg-sec-sand-light transition-colors"
            >
              Get Directions & Book <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-sec-gold/30 text-sec-sand-light text-xs font-mono uppercase tracking-widest hover:border-sec-gold transition-colors"
            >
              Learn More About SEC
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
