import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, MapPin, CheckCircle, Tag, Archive } from "lucide-react";
import { eventsArchive } from "@/data/events";

export const metadata: Metadata = {
  title: "Events Archive & Educational Seminars | Success Educational Consultancy (SEC)",
  description: "Browse historical education fairs, university delegations, and international academic seminars hosted by Success Educational Consultancy since 2007 in Kathmandu, Nepal.",
};

export default function EventsArchivePage() {
  return (
    <div className="min-h-screen bg-sec-navy-dark text-sec-sand-light pt-16 pb-14 sm:pt-20 sm:pb-16 font-satoshi selection:bg-sec-gold selection:text-sec-navy-dark">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-12">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-xs font-satoshi tracking-widest text-sec-gold uppercase hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
        </Link>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-sec-gold" />
          <span className="text-xs font-satoshi uppercase tracking-[0.22em] text-sec-gold">
            Institutional History & Delegations
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-sec-sand-light max-w-4xl font-satoshi">
          Events & Seminars Archive
        </h1>
        <p className="mt-4 text-base sm:text-lg text-sec-sand-light/70 max-w-2xl font-normal leading-relaxed">
          A documented record of international education symposia, university representative visits, and pre-departure briefings hosted by Success Educational Consultancy in Kathmandu.
        </p>

        {/* Archival Notice */}
        <div className="mt-5 border border-sec-gold/20 bg-sec-navy/40 p-3.5 max-w-3xl flex items-start gap-3">
          <Archive className="w-4 h-4 text-sec-gold shrink-0 mt-0.5" />
          <p className="text-xs font-satoshi text-sec-sand-light/70 leading-relaxed">
            <strong className="text-sec-gold uppercase">Archival Notice:</strong> All sessions cataloged on this page represent completed historical events. Dates and admission parameters reflect their respective historical periods and do not constitute active intake deadlines.
          </p>
        </div>
      </div>

      {/* Events List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-14">
        <div className="space-y-5">
          {eventsArchive.map((ev, idx) => (
            <article
              key={ev.id}
              className="border border-sec-gold/15 bg-sec-navy/25 p-5 sm:p-6 hover:border-sec-gold/40 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-sec-sand-light/10 text-sec-sand-light/80 text-[10px] font-satoshi tracking-widest uppercase border border-sec-sand-light/15">
                      <Archive className="w-3 h-3 text-sec-gold" /> {ev.status}
                    </span>
                    <span className="text-xs font-satoshi text-sec-gold uppercase tracking-wider">
                      {ev.country}
                    </span>
                    <span className="text-[11px] font-satoshi text-sec-sand-light/40">
                      Record #{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-satoshi font-light text-sec-sand-light">
                    {ev.title}
                  </h2>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-1.5 text-xs font-satoshi text-sec-sand-light/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-sec-gold" />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sec-gold" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm md:text-base text-sec-sand-light/80 font-normal leading-relaxed mb-4 max-w-4xl">
                {ev.description}
              </p>

              <div className="border-t border-sec-gold/10 pt-4">
                <span className="text-xs font-satoshi uppercase tracking-wider text-sec-gold block mb-2.5">
                  Key Topics & Syllabus Addressed:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                  {ev.focusAreas.map((area, fIdx) => (
                    <div
                      key={fIdx}
                      className="border border-sec-gold/10 bg-sec-navy-dark/40 p-2.5 text-xs text-sec-sand-light/75 flex items-start gap-2"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-sec-gold shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-[11px] font-satoshi text-sec-sand-light/40">
                  Context: {ev.historicalContext}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Counselling Inquiries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="border border-sec-gold/30 bg-sec-navy/60 p-6 sm:p-8 md:p-10 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-satoshi font-light text-sec-sand-light mb-3">
            Looking for Current Intake Schedules?
          </h3>
          <p className="text-sm text-sec-sand-light/70 max-w-xl mx-auto mb-6 font-normal leading-relaxed">
            University application deadlines for Europe, UK, and USA evolve each cycle. Schedule an in-person briefing to verify active intake requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-sec-gold text-sec-navy-dark text-xs font-satoshi font-semibold uppercase tracking-wider hover:bg-sec-sand-light transition-colors"
            >
              Consult an Advisor <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/study-destinations"
              className="inline-flex items-center gap-2 px-7 py-3 border border-sec-gold/30 text-sec-sand-light text-xs font-satoshi uppercase tracking-wider hover:border-sec-gold transition-colors"
            >
              Browse Active Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
