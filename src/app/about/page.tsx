import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { mdMessage } from "@/data/team";
import { 
  ShieldCheck, 
  Target, 
  Award, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Users, 
  Calendar,
  Compass,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Success Educational Consultancy Pvt. Ltd.",
  description:
    "Learn about Success Educational Consultancy Pvt. Ltd. (SEC) in Putalisadak-29, Kathmandu. Supporting students on their international education journey since 2007.",
};

const fullServiceList = [
  { num: "01", title: "Education Counselling", desc: "One-on-one academic profile assessment, evaluating transcripts and prerequisites objectively." },
  { num: "02", title: "Course Selection", desc: "Aligning degrees with long-term international employability and academic strengths." },
  { num: "03", title: "University Selection", desc: "Shortlisting accredited institutions across Hungary, Netherlands, Germany, the UK, the US, and Australia." },
  { num: "04", title: "Application Support", desc: "Careful preparation of statements of purpose, reference letters, and portfolio submissions." },
  { num: "05", title: "Admission Support", desc: "Direct correspondence with international university admissions desks throughout review." },
  { num: "06", title: "Enrollment Guidance", desc: "Assisting with offer letter acceptances, fee transfers, and formal enrollment checklists." },
  { num: "07", title: "Visa Documentation Support", desc: "Structuring financial justifications, bank certifications, and relationship documentation according to embassy rules." },
  { num: "08", title: "Visa Interview Preparation", desc: "Rigorous mock interview simulations replicating embassy questioning and academic scrutiny." },
  { num: "09", title: "Test Preparation", desc: "Structured coaching for IELTS, TOEFL, GRE, GMAT, and Digital SAT." },
  { num: "10", title: "Pre-Departure Guidance", desc: "Housing advice, health insurance setup, airport logistics, and student survival orientation abroad." }
];

const timelineMilestones = [
  {
    year: "2007",
    title: "Foundational Establishment",
    desc: "SEC was established in Kathmandu and began supporting Nepalese students pursuing overseas higher education with an ethos of transparency."
  },
  {
    year: "2011",
    title: "Central European Corridor",
    desc: "Pioneered verified admissions pathways to accredited Hungarian state universities (Debrecen, ELTE), expanding accessible tuition options in the Schengen zone."
  },
  {
    year: "2015",
    title: "Standardized Testing & Training Hub",
    desc: "Introduced structured institutional preparation for IELTS and TOEFL, anchoring academic readiness before visa submissions."
  },
  {
    year: "2019",
    title: "Continental European Expansion",
    desc: "Formalized advisory networks for Dutch research universities and German applied science faculties with APS guidance."
  },
  {
    year: "Present",
    title: "Global Education Advisory",
    desc: "Continuing over a decade and a half of student-first international educational counselling with zero misleading claims."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16 pb-14 sm:pt-20 sm:pb-20 font-satoshi">
      {/* ============================================================== */}
      {/* 01 — INTRODUCTION                                              */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl space-y-3.5">
          <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
            01 / Introduction & Identity
          </span>
          <h1 className="font-satoshi text-4xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Success Educational Consultancy
          </h1>
          <p className="font-satoshi text-lg sm:text-xl text-sec-navy font-medium">
            Success Educational Consultancy Pvt. Ltd. (SEC)
          </p>
          <p className="font-satoshi text-base sm:text-lg text-sec-muted leading-relaxed font-normal">
            Based in Putalisadak-29, Kathmandu, Success Educational Consultancy is an overseas education advisory helping Nepalese students identify, apply to, and enroll in accredited higher education institutions worldwide.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 02 — OUR STORY & HISTORICAL MOTTO                              */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden border border-sec-gray-light bg-slate-100 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Students receiving educational guidance at SEC"
              fill
              className="object-cover"
            />
            {/* Official Accreditation Crest Badge */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-black/10 p-3.5 shadow-lg flex items-center gap-3.5 max-w-xs">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/images/sec-logo-transparent.png"
                  alt="Success Educational Consultancy Official Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-satoshi text-xs font-bold text-sec-navy">Success Educational Consultancy</span>
                <span className="block font-satoshi text-[10px] text-sec-red font-medium">Educating The World For Success</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
              02 / Our Story
            </span>
            <h2 className="font-satoshi text-2xl sm:text-3xl lg:text-4xl font-bold text-sec-dark leading-tight">
              Supporting Students on Their Journey Since 2007
            </h2>
            <p className="font-satoshi text-sm sm:text-base text-sec-muted leading-relaxed font-normal">
              SEC was established in Kathmandu in 2007 to restore clarity, dignity, and rigor to overseas study advisory. While students frequently encountered exaggerated promises and hidden agendas, our foundational premise was simple: provide realistic, factual guidance rooted strictly in institutional verification.
            </p>
            <div className="bg-sec-offwhite border-l-2 border-sec-navy p-4 space-y-1">
              <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-muted block">
                Historical Brand Motto
              </span>
              <p className="font-satoshi text-sm font-semibold text-sec-navy italic">
                &ldquo;Educating the World for Success&rdquo;
              </p>
              <p className="font-satoshi text-xs text-sec-muted">
                Our legacy brand statement, underpinning over 17 years of educational advisory from Putalisadak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 03 — WHAT WE DO: 10-POINT SERVICE MODEL                        */}
      {/* ============================================================== */}
      <section className="bg-sec-offwhite/80 py-14 sm:py-20 border-y border-sec-gray-light mb-14 sm:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
              03 / Service Architecture
            </span>
            <h2 className="font-satoshi text-2xl sm:text-4xl font-bold text-sec-dark">
              What We Do
            </h2>
            <p className="font-satoshi text-sm sm:text-base text-sec-muted leading-relaxed mt-2 font-normal">
              A comprehensive ten-stage framework supporting students from initial credential audit to international campus arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {fullServiceList.map((svc) => (
              <div
                key={svc.num}
                className="bg-white border border-black/10 p-5 sm:p-6 flex items-start gap-4 shadow-sm hover:border-sec-navy transition-colors"
              >
                <span className="font-satoshi text-sm font-bold text-sec-red shrink-0 pt-0.5">
                  {svc.num}
                </span>
                <div className="space-y-1">
                  <h3 className="font-satoshi text-base font-bold text-sec-dark">
                    {svc.title}
                  </h3>
                  <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed font-normal">
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sec-navy hover:text-sec-red font-satoshi transition-colors"
            >
              <span>Explore Detailed Service Modules</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 04 — OUR APPROACH (Ethical & Individualized)                   */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
            04 / Advisory Philosophy
          </span>
          <h2 className="font-satoshi text-2xl sm:text-4xl font-bold text-sec-dark">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white border border-black/10 p-6 sm:p-7 space-y-2.5 shadow-sm">
            <span className="font-satoshi text-xs text-sec-red font-semibold block">01 / AUDIT</span>
            <h3 className="font-satoshi text-lg font-bold text-sec-dark">Profile First</h3>
            <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
              We carefully review academic records, gaps, financial constraints, and student aspirations before suggesting any study destination.
            </p>
          </div>

          <div className="bg-white border border-black/10 p-6 sm:p-7 space-y-2.5 shadow-sm">
            <span className="font-satoshi text-xs text-sec-red font-semibold block">02 / INSTITUTIONAL REALISM</span>
            <h3 className="font-satoshi text-lg font-bold text-sec-dark">Accredited Matching</h3>
            <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
              We exclusively match students with accredited faculties whose graduation outcomes and post-study opportunities are formally documented.
            </p>
          </div>

          <div className="bg-white border border-black/10 p-6 sm:p-7 space-y-2.5 shadow-sm">
            <span className="font-satoshi text-xs text-sec-red font-semibold block">03 / EMBASSY COMPLIANCE</span>
            <h3 className="font-satoshi text-lg font-bold text-sec-dark">Document Integrity</h3>
            <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed">
              Zero fabricated documentation. We ensure all financial declarations, transcripts, and statement letters meet strict consular standards.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 05 — LEADERSHIP & MD MESSAGE                                   */}
      {/* ============================================================== */}
      <section className="bg-white border-y border-sec-gray-light py-14 sm:py-20 mb-14 sm:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-3.5">
              <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
                05 / Leadership
              </span>
              <h2 className="font-satoshi text-2xl sm:text-4xl font-bold text-sec-dark leading-tight">
                Managing Director&apos;s Perspective
              </h2>
              <div className="pt-2">
                <h3 className="font-satoshi text-xl font-bold text-sec-navy">
                  {mdMessage.author}
                </h3>
                <span className="font-satoshi text-xs text-sec-muted block">
                  {mdMessage.role} • {mdMessage.qualification}
                </span>
                <span className="font-satoshi text-[10px] text-sec-red mt-1 block">
                  {mdMessage.statusNote}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-sec-offwhite border border-black/10 p-6 sm:p-8 space-y-4">
              {mdMessage.paragraphs.map((p, idx) => (
                <p key={idx} className="font-satoshi text-sm sm:text-base text-sec-dark/85 leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-sec-muted font-satoshi">
                <span className="font-semibold text-sec-dark">Success Educational Consultancy Pvt. Ltd.</span>
                <span className="font-satoshi text-[11px]">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 06 — TEAM SECTION LINK                                         */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="bg-[#FAFAF9] border border-black/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-xl">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block">
              06 / Human Advisory Team
            </span>
            <h3 className="font-satoshi text-xl sm:text-2xl font-bold text-sec-dark">
              Meet Our Advisory & Verification Team
            </h3>
            <p className="font-satoshi text-xs sm:text-sm text-sec-muted">
              Learn about our counsellors, institutional officers, and archival leadership team behind student applications.
            </p>
          </div>

          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sec-navy hover:bg-sec-red text-white text-xs font-semibold uppercase tracking-wider font-satoshi transition-colors duration-200 shrink-0"
          >
            <span>View Team Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 07 — CREDENTIALS & REGISTRATION                                */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="max-w-2xl mb-8">
          <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
            07 / Credentials & Governance
          </span>
          <h2 className="font-satoshi text-2xl sm:text-4xl font-bold text-sec-dark">
            Institutional Verification
          </h2>
        </div>

        <div className="bg-white border border-black/10 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 shadow-sm">
          <div className="space-y-2.5 border-b md:border-b-0 md:border-r border-black/10 pb-5 md:pb-0 md:pr-6">
            <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-red font-semibold block">
              Ministry Registration Record
            </span>
            <h3 className="font-satoshi text-lg font-bold text-sec-dark">
              Nepal Ministry of Education
            </h3>
            <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed font-normal">
              Historical website archives reference <strong>{companyInfo.registrationNumberHistorical}</strong>. Documented for institutional accountability and verified advisory compliance in Nepal.
            </p>
            <span className="inline-block font-satoshi text-[10px] text-sec-navy bg-sec-offwhite px-2 py-0.5 border border-black/10">
              Status: Verified Corporate Record
            </span>
          </div>

          <div className="space-y-2.5">
            <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-navy font-semibold block">
              Operational Standards
            </span>
            <h3 className="font-satoshi text-lg font-bold text-sec-dark">
              Ethical Code of Conduct
            </h3>
            <p className="font-satoshi text-xs sm:text-sm text-sec-muted leading-relaxed font-normal">
              We strictly adhere to zero document falsification, zero inflated visa percentages, and transparent disclosure of all institutional fee structures.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 08 — HISTORICAL TIMELINE                                       */}
      {/* ============================================================== */}
      <section className="bg-sec-offwhite/80 py-14 sm:py-20 border-y border-sec-gray-light mb-14 sm:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-sec-red font-semibold block mb-2">
              08 / Chronology
            </span>
            <h2 className="font-satoshi text-2xl sm:text-4xl font-bold text-sec-dark">
              Historical Timeline
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-0.5 before:bg-black/15">
            {timelineMilestones.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-5 sm:gap-8 pl-1 sm:pl-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-none bg-sec-red text-white flex items-center justify-center shrink-0 border-2 border-white shadow-sm mt-1 z-10">
                  <span className="w-1.5 h-1.5 bg-white" />
                </div>
                <div className="bg-white border border-black/10 p-5 sm:p-6 flex-1 shadow-sm">
                  <span className="font-satoshi text-xs text-sec-navy font-bold block mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-satoshi text-base sm:text-lg font-bold text-sec-dark">
                    {item.title}
                  </h3>
                  <p className="font-satoshi text-xs sm:text-sm text-sec-muted mt-1.5 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 09 — FINAL COUNSELLING CALLOUT                                 */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sec-navy-dark text-white p-8 sm:p-12 text-center space-y-5">
          <span className="font-satoshi text-xs uppercase tracking-[0.25em] text-sec-gold block">
            09 / Connect With Us
          </span>
          <h2 className="font-satoshi text-2xl sm:text-4xl font-bold tracking-tight">
            Meet With a Senior Counselor
          </h2>
          <p className="font-satoshi text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are evaluating European degrees or preparing for standardized tests, begin with a factual profile review in Putalisadak-29.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-counselling"
              className="w-full sm:w-auto px-7 py-3 bg-sec-red hover:bg-white hover:text-sec-navy text-white text-xs font-semibold uppercase tracking-wider font-satoshi transition-colors duration-200"
            >
              Book Free Counselling
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3 border border-white/30 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider font-satoshi transition-colors duration-200"
            >
              Visit Kathmandu Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
