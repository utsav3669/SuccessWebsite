"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SecLogo } from "./SecLogo";
import { destinations } from "@/data/destinations";
import { courseFields, studyLevels } from "@/data/courses";
import { services } from "@/data/services";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Sparkles,
  PhoneCall,
  Globe,
  Calendar,
  Camera
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Active dropdown index: 'destinations' | 'courses' | 'services' | 'resources' | null
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll listener for sticky compact navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/10 py-2.5 shadow-sm"
            : "bg-white/90 backdrop-blur-sm border-b border-black/5 py-3.5"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="w-full flex items-center justify-between lg:justify-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
            {/* 1. Brand Logo / Name: SUCCESS EDUCATIONAL CONSULTANCY */}
            <div className="shrink-0">
              <SecLogo size={scrolled ? "sm" : "md"} showTagline={false} showSubtitle={false} />
            </div>

            {/* 2. All Navigation Links: Centered together with brand and CTA */}
            <nav className="hidden lg:flex items-center justify-center shrink-0 gap-0 xl:gap-0.5">
              <Link
                href="/"
                className={`nav-link-indicator px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                  pathname === "/"
                    ? "text-sec-navy font-bold active"
                    : "text-sec-dark/70 hover:text-sec-navy"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`nav-link-indicator px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                  pathname === "/about"
                    ? "text-sec-navy font-bold active"
                    : "text-sec-dark/70 hover:text-sec-navy"
                }`}
              >
                About
              </Link>

              {/* Study Destinations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("destinations")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`nav-link-indicator flex items-center gap-1 px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                    pathname.startsWith("/study-destinations") || activeDropdown === "destinations"
                      ? "text-sec-navy font-bold active"
                      : "text-sec-dark/70 hover:text-sec-navy"
                  }`}
                  aria-expanded={activeDropdown === "destinations"}
                >
                  <span>Destinations</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ease-out ${activeDropdown === "destinations" ? "rotate-180 text-sec-red" : "text-sec-muted"}`} />
                </button>

                {/* Destinations Mega Dropdown */}
                <AnimatePresence>
                  {activeDropdown === "destinations" && (
                    <motion.div
                      key="destinations-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.985 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px] will-change-transform"
                    >
                      <div className="bg-white border border-black/10 p-6 grid grid-cols-2 gap-3 shadow-xl">
                        <div className="col-span-2 pb-3 mb-2 border-b border-black/10 flex items-center justify-between">
                          <div>
                            <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-red font-semibold block">
                              Portfolio
                            </span>
                            <h4 className="font-satoshi text-sm font-medium text-sec-navy mt-0.5">
                              Primary Study Destinations
                            </h4>
                          </div>
                          <Link
                            href="/study-destinations"
                            className="text-xs font-medium text-sec-red hover:text-sec-navy transition-colors flex items-center gap-1 group"
                          >
                            View all destinations <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>

                        {destinations.map((dest) => (
                          <Link
                            key={dest.slug}
                            href={`/study-destinations/${dest.slug}`}
                            className="group p-3 border border-black/5 hover:border-black/20 hover:bg-sec-offwhite/50 transition-all duration-200 hover:translate-x-1 flex items-start gap-3"
                          >
                            <span className="text-2xl flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">{dest.flag}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h5 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-dark group-hover:text-sec-red transition-colors">
                                  {dest.name}
                                </h5>
                                <span className="text-xs text-sec-muted group-hover:text-sec-red group-hover:translate-x-1 transition-transform duration-200">
                                  →
                                </span>
                              </div>
                              <p className="text-[11px] text-sec-muted line-clamp-1 mt-1 font-satoshi">
                                {dest.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("courses")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`nav-link-indicator flex items-center gap-1 px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                    pathname.startsWith("/courses") || activeDropdown === "courses"
                      ? "text-sec-navy font-bold active"
                      : "text-sec-dark/70 hover:text-sec-navy"
                  }`}
                  aria-expanded={activeDropdown === "courses"}
                >
                  <span>Courses</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ease-out ${activeDropdown === "courses" ? "rotate-180 text-sec-red" : "text-sec-muted"}`} />
                </button>

                {/* Courses Mega Dropdown */}
                <AnimatePresence>
                  {activeDropdown === "courses" && (
                    <motion.div
                      key="courses-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.985 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[760px] will-change-transform"
                    >
                      <div className="bg-white border border-black/10 p-6 grid grid-cols-12 gap-6 shadow-xl">
                        {/* Left: Study Levels */}
                        <div className="col-span-4 border-r border-black/10 pr-5">
                          <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-red font-semibold block mb-3">
                            Degree Level
                          </span>
                          <ul className="space-y-1">
                            {studyLevels.map((lvl) => (
                              <li key={lvl}>
                                <Link
                                  href={`/courses?degree=${encodeURIComponent(lvl)}`}
                                  className="block px-3 py-2 text-xs font-medium text-sec-dark hover:text-sec-red hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1"
                                >
                                  {lvl}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right: Popular Fields & CTA */}
                        <div className="col-span-8 flex flex-col justify-between">
                          <div>
                            <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-red font-semibold block mb-3">
                              Disciplines
                            </span>
                            <div className="grid grid-cols-2 gap-1.5">
                              {courseFields.map((field) => (
                                <Link
                                  key={field}
                                  href={`/courses?field=${encodeURIComponent(field)}`}
                                  className="px-3 py-2 text-xs font-medium text-sec-dark hover:text-sec-navy hover:bg-sec-offwhite/50 transition-all duration-150 flex items-center justify-between group border border-transparent hover:border-black/5 hover:translate-x-1"
                                >
                                  <span>{field}</span>
                                  <span className="text-sec-muted group-hover:text-sec-red group-hover:translate-x-1 transition-transform duration-200">→</span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between">
                            <span className="text-xs text-sec-muted">
                              Need tailored curriculum advice?
                            </span>
                            <Link
                              href="/courses"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sec-red hover:text-sec-navy transition-colors font-satoshi group"
                            >
                              Explore All Courses <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Universities Link */}
              <Link
                href="/universities"
                className={`nav-link-indicator px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                  pathname === "/universities"
                    ? "text-sec-navy font-bold active"
                    : "text-sec-dark/70 hover:text-sec-navy"
                }`}
              >
                Universities
              </Link>

              {/* Test Preparation Link */}
              <Link
                href="/test-preparation"
                className={`nav-link-indicator px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                  pathname.startsWith("/test-preparation")
                    ? "text-sec-navy font-bold active"
                    : "text-sec-dark/70 hover:text-sec-navy"
                }`}
              >
                Test Prep
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`nav-link-indicator flex items-center gap-1 px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                    pathname.startsWith("/services") || activeDropdown === "services"
                      ? "text-sec-navy font-bold active"
                      : "text-sec-dark/70 hover:text-sec-navy"
                  }`}
                  aria-expanded={activeDropdown === "services"}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ease-out ${activeDropdown === "services" ? "rotate-180 text-sec-red" : "text-sec-muted"}`} />
                </button>

                {/* Services Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      key="services-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.985 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[480px] will-change-transform"
                    >
                      <div className="bg-white border border-black/10 p-5 space-y-1 shadow-xl">
                        <div className="px-3 pb-2.5 border-b border-black/10 mb-2">
                          <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-red font-semibold block">
                            Advisory
                          </span>
                          <h4 className="font-satoshi text-xs font-semibold uppercase tracking-wider text-sec-navy mt-0.5">
                            Professional Guidance Services
                          </h4>
                        </div>
                        {services.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/services/${srv.slug}`}
                            className="flex items-center justify-between px-3 py-2 border border-transparent hover:border-black/5 hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1 group"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-satoshi text-sec-red">{srv.number}</span>
                                <span className="text-xs font-medium text-sec-dark group-hover:text-sec-navy">
                                  {srv.title}
                                </span>
                              </div>
                            </div>
                            <span className="text-sec-muted group-hover:text-sec-red group-hover:translate-x-1 transition-transform duration-200 text-xs">
                              →
                            </span>
                          </Link>
                        ))}

                        <div className="pt-3 mt-2 border-t border-black/10 px-3 flex justify-end">
                          <Link
                            href="/services"
                            className="text-xs font-semibold text-sec-red hover:text-sec-navy flex items-center gap-1 font-satoshi group"
                          >
                            View All Services <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`nav-link-indicator flex items-center gap-1 px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                    pathname.startsWith("/resources") || activeDropdown === "resources"
                      ? "text-sec-navy font-bold active"
                      : "text-sec-dark/70 hover:text-sec-navy"
                  }`}
                  aria-expanded={activeDropdown === "resources"}
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ease-out ${activeDropdown === "resources" ? "rotate-180 text-sec-red" : "text-sec-muted"}`} />
                </button>

                {/* Resources Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === "resources" && (
                    <motion.div
                      key="resources-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.985 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full right-0 pt-3 w-[320px] will-change-transform"
                    >
                      <div className="bg-white border border-black/10 p-3 space-y-1 shadow-xl">
                        <Link
                          href="/resources/blog"
                          className="flex items-center gap-3 p-3 border border-transparent hover:border-black/5 hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1 group"
                        >
                          <BookOpen className="w-4 h-4 text-sec-navy transition-transform duration-200 group-hover:scale-110" />
                          <div>
                            <span className="block text-xs font-semibold font-satoshi text-sec-dark group-hover:text-sec-red transition-colors">Blog & Articles</span>
                            <span className="text-[11px] text-sec-muted">Latest education updates</span>
                          </div>
                        </Link>

                        <Link
                          href="/resources/study-guides"
                          className="flex items-center gap-3 p-3 border border-transparent hover:border-black/5 hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1 group"
                        >
                          <FileText className="w-4 h-4 text-sec-navy transition-transform duration-200 group-hover:scale-110" />
                          <div>
                            <span className="block text-xs font-semibold font-satoshi text-sec-dark group-hover:text-sec-red transition-colors">Study Guides</span>
                            <span className="text-[11px] text-sec-muted">Destination roadmaps</span>
                          </div>
                        </Link>

                        <Link
                          href="/resources/visa-guides"
                          className="flex items-center gap-3 p-3 border border-transparent hover:border-black/5 hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1 group"
                        >
                          <Globe className="w-4 h-4 text-sec-navy transition-transform duration-200 group-hover:scale-110" />
                          <div>
                            <span className="block text-xs font-semibold font-satoshi text-sec-dark group-hover:text-sec-red transition-colors">Visa Guides</span>
                            <span className="text-[11px] text-sec-muted">Embassy document checklists</span>
                          </div>
                        </Link>

                        <Link
                          href="/resources/scholarships"
                          className="flex items-center gap-3 p-3 border border-transparent hover:border-black/5 hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1 group"
                        >
                          <GraduationCap className="w-4 h-4 text-sec-navy transition-transform duration-200 group-hover:scale-110" />
                          <div>
                            <span className="block text-xs font-semibold font-satoshi text-sec-dark group-hover:text-sec-red transition-colors">Scholarships</span>
                            <span className="text-[11px] text-sec-muted">Verified government grants</span>
                          </div>
                        </Link>

                        <Link
                          href="/resources/events"
                          className="flex items-center gap-3 p-3 border border-transparent hover:border-black/5 hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1 group"
                        >
                          <Calendar className="w-4 h-4 text-sec-navy transition-transform duration-200 group-hover:scale-110" />
                          <div>
                            <span className="block text-xs font-semibold font-satoshi text-sec-dark group-hover:text-sec-red transition-colors">Events & Seminars</span>
                            <span className="text-[11px] text-sec-muted">Institutional delegations & archive</span>
                          </div>
                        </Link>

                        <Link
                          href="/gallery"
                          className="flex items-center gap-3 p-3 border border-transparent hover:border-black/5 hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1 group"
                        >
                          <Camera className="w-4 h-4 text-sec-navy transition-transform duration-200 group-hover:scale-110" />
                          <div>
                            <span className="block text-xs font-semibold font-satoshi text-sec-dark group-hover:text-sec-red transition-colors">Gallery & Milestones</span>
                            <span className="text-[11px] text-sec-muted">Photographic records</span>
                          </div>
                        </Link>

                        <Link
                          href="/resources/faqs"
                          className="flex items-center gap-3 p-3 border border-transparent hover:border-black/5 hover:bg-sec-offwhite/50 transition-all duration-150 hover:translate-x-1 group"
                        >
                          <HelpCircle className="w-4 h-4 text-sec-navy transition-transform duration-200 group-hover:scale-110" />
                          <div>
                            <span className="block text-xs font-semibold font-satoshi text-sec-dark group-hover:text-sec-red transition-colors">FAQs</span>
                            <span className="text-[11px] text-sec-muted">Clear student queries</span>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`nav-link-indicator px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                  pathname === "/contact"
                    ? "text-sec-navy font-bold active"
                    : "text-sec-dark/70 hover:text-sec-navy"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action CTA with interactive micro-motion */}
            <div className="hidden lg:flex items-center shrink-0">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/book-counselling"
                  className="relative group overflow-hidden inline-flex items-center justify-center whitespace-nowrap shrink-0 px-4 xl:px-5 py-2 xl:py-2.5 text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-white bg-sec-red hover:bg-sec-navy transition-all duration-300 border border-sec-red hover:border-sec-navy shadow-sm hover:shadow-md"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>Book Counselling</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button with smooth icon transition */}
            <div className="flex items-center lg:hidden shrink-0">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-sec-dark hover:text-sec-navy focus:outline-none transition-transform duration-200 active:scale-95"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="w-6 h-6 text-sec-red animate-in fade-in" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Subtle accent hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sec-red/30 to-transparent pointer-events-none" />

        {/* Mobile Slide-Out Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden border-t border-black/10 bg-white px-5 pt-4 pb-8 max-h-[85vh] overflow-y-auto shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="py-2 text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red border-b border-black/5 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="py-2 text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red border-b border-black/5 transition-colors"
                >
                  About SEC
                </Link>

                {/* Mobile Destinations Submenu */}
                <div className="py-2 border-b border-black/5">
                  <span className="font-satoshi text-[10px] uppercase tracking-widest text-sec-red font-semibold block mb-2">
                    Study Destinations
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {destinations.map((d) => (
                      <Link
                        key={d.slug}
                        href={`/study-destinations/${d.slug}`}
                        className="py-1.5 text-xs text-sec-dark hover:text-sec-red flex items-center gap-1.5 transition-colors"
                      >
                        <span>{d.flag}</span>
                        <span>{d.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Courses & Universities */}
                <div className="py-2 border-b border-black/5 space-y-2">
                  <Link
                    href="/courses"
                    className="block text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red transition-colors"
                  >
                    Courses Directory
                  </Link>
                  <Link
                    href="/universities"
                    className="block text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red transition-colors"
                  >
                    Universities Directory
                  </Link>
                  <Link
                    href="/test-preparation"
                    className="block text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red transition-colors"
                  >
                    Test Preparation (IELTS / GRE / TOEFL / SAT)
                  </Link>
                  <Link
                    href="/services"
                    className="block text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red transition-colors"
                  >
                    All Services
                  </Link>
                  <Link
                    href="/resources/events"
                    className="block text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red transition-colors"
                  >
                    Events & Seminars Archive
                  </Link>
                  <Link
                    href="/gallery"
                    className="block text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red transition-colors"
                  >
                    Gallery & Recognition
                  </Link>
                  <Link
                    href="/resources/faqs"
                    className="block text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red transition-colors"
                  >
                    Frequently Asked Questions
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-xs font-semibold uppercase tracking-widest text-sec-dark hover:text-sec-red transition-colors"
                  >
                    Contact & Office
                  </Link>
                </div>

                <div className="pt-3">
                  <Link
                    href="/book-counselling"
                    className="w-full inline-flex items-center justify-center whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-sec-red hover:bg-sec-navy transition-colors text-center border border-sec-red shadow-sm"
                  >
                    Book Counselling
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
