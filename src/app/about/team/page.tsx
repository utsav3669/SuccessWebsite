import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck, History, Award, CheckCircle2 } from "lucide-react";
import { teamMembers, mdMessage } from "@/data/team";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Leadership & Team | Success Educational Consultancy (SEC)",
  description: "Meet the academic leadership, advisory board, and historical foundational records of Success Educational Consultancy in Kathmandu, Nepal.",
};

export default function TeamPage() {
  const verifiedMembers = teamMembers.filter((m) => m.status === "verified");
  const historicalMembers = teamMembers.filter((m) => m.status === "historical_record");

  return (
    <div className="min-h-screen bg-sec-navy-dark text-sec-sand-light pt-28 pb-20 selection:bg-sec-gold selection:text-sec-navy-dark">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sec-gold uppercase hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to About SEC
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-sec-gold" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-sec-gold">
            Advisory & Institutional Governance
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-sec-sand-light max-w-4xl font-serif">
          Leadership & Academic Council
        </h1>
        <p className="mt-6 text-base md:text-lg text-sec-sand-light/70 max-w-2xl font-light leading-relaxed">
          Rooted in Kathmandu since {companyInfo.establishedYear}, Success Educational Consultancy operates under
          strict ethical counselling mandates—matching each student's academic credentials with credible, accredited international institutions.
        </p>
      </div>

      {/* Managing Director Message / Leadership Feature */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="border border-sec-gold/20 bg-sec-navy/40 p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:w-1/3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sec-gold/15 text-sec-gold text-[11px] font-mono tracking-widest uppercase border border-sec-gold/30 mb-6">
                <CheckCircle2 className="w-3 h-3" /> Active Leadership
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-light text-sec-sand-light">
                {mdMessage.author}
              </h2>
              <p className="text-sec-gold font-mono text-xs tracking-wider uppercase mt-1">
                {mdMessage.role} • {mdMessage.qualification}
              </p>
              <p className="text-[11px] text-sec-sand-light/50 font-mono mt-3 leading-relaxed">
                {mdMessage.statusNote}
              </p>
              <div className="mt-6 pt-6 border-t border-sec-gold/10">
                <p className="text-xs text-sec-sand-light/60 font-mono uppercase tracking-wider mb-2">
                  Institutional Scope
                </p>
                <p className="text-xs text-sec-sand-light/80 leading-relaxed">
                  Strategic governance, European bilateral educational partnerships, and individualized student pathway audits.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-sec-gold/15 pt-8 lg:pt-0 lg:pl-12">
              <span className="text-[11px] font-mono text-sec-gold uppercase tracking-[0.2em] block mb-4">
                Executive Philosophy
              </span>
              <div className="space-y-4 text-sec-sand-light/80 text-sm md:text-base leading-relaxed font-light">
                {mdMessage.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Core Leadership Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="border-b border-sec-gold/20 pb-4 mb-8 flex items-baseline justify-between">
          <h2 className="text-xl md:text-2xl font-serif font-light text-sec-sand-light">
            Active Strategic Leadership
          </h2>
          <span className="text-xs font-mono text-sec-sand-light/50 uppercase">Verified Records</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedMembers.map((member) => (
            <div
              key={member.id}
              className="border border-sec-gold/15 bg-sec-navy/20 p-6 flex flex-col justify-between hover:border-sec-gold/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 border border-emerald-500/30 uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" /> {member.status}
                  </span>
                  <span className="text-[11px] font-mono text-sec-gold/80">{member.qualification}</span>
                </div>
                <h3 className="text-xl font-serif text-sec-sand-light mb-1">{member.name}</h3>
                <p className="text-xs font-mono text-sec-gold uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-xs text-sec-sand-light/70 leading-relaxed mb-4">{member.bio}</p>
              </div>
              {member.specialization && (
                <div className="pt-4 border-t border-sec-gold/10">
                  <span className="text-[10px] font-mono text-sec-sand-light/40 uppercase block mb-1">
                    Specialization
                  </span>
                  <span className="text-xs text-sec-sand-light/90">{member.specialization}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Historical Foundational Staff Directory (Clearly Marked) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="border-b border-sec-gold/20 pb-4 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <History className="w-4 h-4 text-sec-gold/70" />
            <h2 className="text-xl md:text-2xl font-serif font-light text-sec-sand-light">
              Foundational Team Archive (2007 – 2016)
            </h2>
          </div>
          <p className="text-xs text-sec-sand-light/60 max-w-3xl leading-relaxed">
            The following profiles are preserved from historical SEC records to document the institutional lineage of
            counsellors and officers who contributed to student admissions and compliance in our formative years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historicalMembers.map((member) => (
            <div
              key={member.id}
              className="border border-sec-gold/10 bg-sec-navy/10 p-6 flex flex-col justify-between opacity-85 hover:opacity-100 transition-opacity"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-sec-sand-light/60 bg-sec-sand-light/5 px-2 py-0.5 border border-sec-sand-light/10 uppercase tracking-wider">
                    <History className="w-2.5 h-2.5" /> Historical Archive
                  </span>
                  <span className="text-[11px] font-mono text-sec-sand-light/50">{member.qualification}</span>
                </div>
                <h3 className="text-lg font-serif text-sec-sand-light mb-1">{member.name}</h3>
                <p className="text-xs font-mono text-sec-sand-light/60 uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-sec-sand-light/60 leading-relaxed mb-4">{member.bio}</p>
              </div>
              <div className="pt-3 border-t border-sec-gold/10 text-[10px] font-mono text-sec-sand-light/40">
                {member.historicalNote}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border border-sec-gold/30 bg-sec-navy/60 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-light text-sec-sand-light mb-4">
            Connect With An Academic Advisor
          </h3>
          <p className="text-sm text-sec-sand-light/70 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Schedule an individualized session at our Putalisadak office or via video conference to evaluate your academic profile against official university admissions criteria.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-sec-gold text-sec-navy-dark text-xs font-mono font-medium uppercase tracking-widest hover:bg-sec-sand-light transition-colors"
            >
              Book Counselling Session <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/test-preparation"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-sec-gold/30 text-sec-sand-light text-xs font-mono uppercase tracking-widest hover:border-sec-gold transition-colors"
            >
              Explore Test Preparation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
