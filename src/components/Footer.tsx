import React from "react";
import Link from "next/link";
import { SecLogo } from "./SecLogo";
import { companyInfo } from "@/data/company";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sec-navy-dark text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <SecLogo variant="dark" size="md" />
            
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-inter">
              Empowering education for a global future. Assisting ambitious students from Nepal in choosing their ideal destination, university, and accredited degree without misleading claims.
            </p>

            <p className="text-[11px] font-mono text-sec-gold/80 italic tracking-wider">
              Foundational Legacy: &ldquo;{companyInfo.historicalTagline}&rdquo; • Established 2007
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sec-red mt-0.5 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sec-red flex-shrink-0" />
                <span>{companyInfo.phones.join(" / ")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sec-red flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-sec-red flex-shrink-0" />
                <span>{companyInfo.website}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="font-poppins text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {destinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/study-destinations/${d.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{d.flag}</span>
                    <span>{d.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/study-destinations"
                  className="text-sec-red hover:text-white font-medium flex items-center gap-1"
                >
                  All Destinations <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-poppins text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-sec-red hover:text-white font-medium flex items-center gap-1"
                >
                  View All Services <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Resources */}
          <div>
            <h4 className="font-poppins text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Company & Academy
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About SEC
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-white transition-colors">
                  Leadership & Team
                </Link>
              </li>
              <li>
                <Link href="/test-preparation" className="hover:text-white transition-colors text-sec-gold">
                  Test Preparation (IELTS / GRE / SAT)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Course Finder
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-white transition-colors">
                  University Profiles
                </Link>
              </li>
              <li>
                <Link href="/resources/events" className="hover:text-white transition-colors">
                  Events & Seminars Archive
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery & Recognition
                </Link>
              </li>
              <li>
                <Link href="/resources/faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {companyInfo.name} ({companyInfo.shortName}). All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="text-slate-400">
              Developed By{" "}
              <span className="text-slate-200 font-medium">Untitled Creatives Studio</span>
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-slate-400">Authorized Educational Consultancy</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Putalisadak-29, Kathmandu
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
