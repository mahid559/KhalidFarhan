"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { KF_DATA } from "@/data/content";

type ActiveMenu = "services" | "learn" | "projects" | "about" | null;

const MEGA_MENU_DATA = {
  services: {
    search: [
      { label: "Search Engine Optimisation", href: "/services/seo" },
      { label: "Generative Engine Optimisation", href: "/services/geo" },
      { label: "AI Search Optimisation", href: "/services/ai-search-optimisation" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Technical SEO Audits", href: "/services/technical-seo-audits" },
    ],
    paidMedia: [
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "LinkedIn Ads", href: "/services/linkedin-ads" },
      { label: "TikTok Ads", href: "/services/tiktok-ads" },
      { label: "YouTube Ads", href: "/services/youtube-ads" },
    ],
    growthBuildCol1: [
      { label: "Email Marketing", href: "/services/email-marketing" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "YouTube Channel Management", href: "/services/youtube-channel-management" },
    ],
    growthBuildCol2: [
      { label: "Marketing Automation", href: "/services/marketing-automation" },
      { label: "Landing Page Design", href: "/services/landing-page-design" },
      { label: "Analytics & Tracking", href: "/services/analytics-and-tracking" },
      { label: "Copywriting", href: "/services/copywriting" },
    ],
    clientResults: [
      { label: "Case Studies", desc: "Detailed client results", href: "/work/case-studies" },
      { label: "Success Stories", desc: "Testimonials from clients", href: "/work/testimonials" },
      { label: "Client Portfolio", desc: "Brands we've worked with", href: "/work/projects" },
    ],
  },
  learn: {
    items: [
      { label: "EnglishAi", desc: "ইংরেজি বলা শিখুন, AI টিচারের সাথে", href: "/english" },
      { label: "Agency Masterclass", desc: "Live class on 27 November", href: "/masterclass" },
      { label: "Business School", desc: "Flagship online programme", href: "/businessschool" },
      { label: "Muggle Memo", desc: "My Friday newsletter, 100 BDT a year", href: "/mugglememo" },
    ],
    featured: {
      text: "Learn to build a real business in Business School",
      cta: "See Business School →",
      href: "/businessschool",
    },
  },
  projects: {
    items: [
      { label: "Shobdo", desc: "Free Bangla voice typing for Mac and Windows", href: "/shobdo" },
      { label: "SecondPassport", desc: "Higher study abroad, one fee", href: "/secondpassport" },
      { label: "Yapcorder", desc: "Record remote podcasts in full quality", href: "/yapcorder" },
      { label: "Longest Road", desc: "Free iPhone app to track your Catan wins", href: "/longest-road" },
      { label: "The Room of Recording", desc: "Podcast & content studio", href: "/studio" },
      { label: "FurryGhor", desc: "Bangladesh's first pet hotel", href: "/furryghor" },
      { label: "Founder's Den", desc: "Our Shark Tank — we back real founders", href: "/founders-den" },
    ],
    featured: {
      text: "New: Shobdo. Speak Bangla, and it types for you.",
      cta: "See Shobdo →",
      href: "/shobdo",
    },
  },
  about: {
    items: [
      { label: "Khalid's Story", desc: "Background & mission", href: "/about" },
      { label: "Contact", desc: "Get in touch", href: "/contact" },
      { label: "Press & Media", desc: "Featured coverage", href: "/press" },
      { label: "Blog", desc: "Every article", href: "/insights" },
    ],
    featured: {
      text: "From newspaper journalist to Bangladesh’s go-to digital marketer.",
      cta: "Read Khalid’s story →",
      href: "/about",
    },
  },
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<ActiveMenu>(null);
  const headerRef = useRef<HTMLElement>(null);

  const { header } = KF_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu: ActiveMenu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setActiveMenu(null)}
      className="relative z-50 w-full bg-[#F9F6F3] transition-colors"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo with Ali Abdaal curved doodle underline */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setActiveMenu(null)}>
            <div className="relative">
              <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#1B1624]">
                {header.brand}
              </span>
              <svg
                className="absolute -bottom-1.5 left-0 w-20 text-[#5DCDF1]"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7.5C25 2.5 75 2 98 8.5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#1B1624]">
            <button
              type="button"
              onMouseEnter={() => setActiveMenu("services")}
              onClick={() => toggleMenu("services")}
              className="flex items-center gap-1.5 text-[#54505B] hover:text-[#1B1624] transition-colors py-2 cursor-pointer"
              aria-expanded={activeMenu === "services"}
            >
              <span>Marketing Services</span>
              <ChevronDown
                className={`w-4 h-4 text-[#76737C] transition-transform duration-200 ${
                  activeMenu === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            <button
              type="button"
              onMouseEnter={() => setActiveMenu("learn")}
              onClick={() => toggleMenu("learn")}
              className="flex items-center gap-1.5 text-[#54505B] hover:text-[#1B1624] transition-colors py-2 cursor-pointer"
              aria-expanded={activeMenu === "learn"}
            >
              <span>Learn</span>
              <ChevronDown
                className={`w-4 h-4 text-[#76737C] transition-transform duration-200 ${
                  activeMenu === "learn" ? "rotate-180" : ""
                }`}
              />
            </button>

            <button
              type="button"
              onMouseEnter={() => setActiveMenu("projects")}
              onClick={() => toggleMenu("projects")}
              className="flex items-center gap-1.5 text-[#54505B] hover:text-[#1B1624] transition-colors py-2 cursor-pointer"
              aria-expanded={activeMenu === "projects"}
            >
              <span>Projects</span>
              <ChevronDown
                className={`w-4 h-4 text-[#76737C] transition-transform duration-200 ${
                  activeMenu === "projects" ? "rotate-180" : ""
                }`}
              />
            </button>

            <button
              type="button"
              onMouseEnter={() => setActiveMenu("about")}
              onClick={() => toggleMenu("about")}
              className="flex items-center gap-1.5 text-[#54505B] hover:text-[#1B1624] transition-colors py-2 cursor-pointer"
              aria-expanded={activeMenu === "about"}
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 text-[#76737C] transition-transform duration-200 ${
                  activeMenu === "about" ? "rotate-180" : ""
                }`}
              />
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/agency/free-marketing-audit"
              onClick={() => setActiveMenu(null)}
              className="ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] font-semibold text-sm px-6 py-2.5 rounded-full shadow-2xs hover:shadow-xs transition-all hover:-translate-y-0.5"
            >
              <span>Get a Free Marketing Audit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#1B1624] hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Full-Width Mega Menu Panel */}
      {activeMenu && (
        <div className="hidden lg:block absolute top-full left-0 w-full bg-white border-y border-[#ECE5E1] shadow-xl z-50">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-10">
            {activeMenu === "services" && (
              <div className="grid grid-cols-12 gap-8">
                {/* Col 1: SEARCH */}
                <div className="col-span-2 space-y-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#76737C]">
                    SEARCH
                  </div>
                  <ul className="space-y-3">
                    {MEGA_MENU_DATA.services.search.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="block text-sm font-medium text-[#1B1624] hover:text-[#FD976D] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 2: PAID MEDIA */}
                <div className="col-span-2 space-y-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#76737C]">
                    PAID MEDIA
                  </div>
                  <ul className="space-y-3">
                    {MEGA_MENU_DATA.services.paidMedia.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="block text-sm font-medium text-[#1B1624] hover:text-[#FD976D] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3: GROWTH & BUILD (2 sub-columns) */}
                <div className="col-span-5 space-y-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#76737C]">
                    GROWTH & BUILD
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      {MEGA_MENU_DATA.services.growthBuildCol1.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="block text-sm font-medium text-[#1B1624] hover:text-[#FD976D] transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {MEGA_MENU_DATA.services.growthBuildCol2.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="block text-sm font-medium text-[#1B1624] hover:text-[#FD976D] transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Col 4: CLIENT RESULTS + FEATURED RESULT */}
                <div className="col-span-3 space-y-5">
                  <div className="space-y-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#76737C]">
                      CLIENT RESULTS
                    </div>
                    <ul className="space-y-3">
                      {MEGA_MENU_DATA.services.clientResults.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group block"
                          >
                            <div className="text-sm font-semibold text-[#1B1624] group-hover:text-[#FD976D] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-[#76737C]">{item.desc}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#1B1624] text-white rounded-[20px] p-5 space-y-3">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-white/60">
                      FEATURED RESULT
                    </div>
                    <p className="text-sm font-bold text-white leading-snug">
                      A Dublin music school: +213% organic traffic
                    </p>
                    <Link
                      href="/services"
                      onClick={() => setActiveMenu(null)}
                      className="inline-block text-xs font-semibold text-[#FD976D] hover:underline transition-colors"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeMenu === "learn" && (
              <div className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-8 grid grid-cols-2 gap-6">
                  {MEGA_MENU_DATA.learn.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group block p-3 rounded-xl hover:bg-[#F9F6F3] transition-colors"
                    >
                      <div className="text-sm font-semibold text-[#1B1624] group-hover:text-[#FD976D] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-[#76737C] mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
                <div className="col-span-4 bg-[#F9F6F3] border border-[#ECE5E1] rounded-[20px] p-6 space-y-4">
                  <p className="text-sm font-semibold text-[#1B1624] leading-relaxed">
                    {MEGA_MENU_DATA.learn.featured.text}
                  </p>
                  <Link
                    href={MEGA_MENU_DATA.learn.featured.href}
                    onClick={() => setActiveMenu(null)}
                    className="inline-block text-xs font-bold text-[#1B1624] hover:text-[#FD976D] transition-colors"
                  >
                    {MEGA_MENU_DATA.learn.featured.cta}
                  </Link>
                </div>
              </div>
            )}

            {activeMenu === "projects" && (
              <div className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-8 grid grid-cols-2 gap-4">
                  {MEGA_MENU_DATA.projects.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group block p-3 rounded-xl hover:bg-[#F9F6F3] transition-colors"
                    >
                      <div className="text-sm font-semibold text-[#1B1624] group-hover:text-[#FD976D] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-[#76737C] mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
                <div className="col-span-4 bg-[#F9F6F3] border border-[#ECE5E1] rounded-[20px] p-6 space-y-4">
                  <p className="text-sm font-semibold text-[#1B1624] leading-relaxed">
                    {MEGA_MENU_DATA.projects.featured.text}
                  </p>
                  <Link
                    href={MEGA_MENU_DATA.projects.featured.href}
                    onClick={() => setActiveMenu(null)}
                    className="inline-block text-xs font-bold text-[#1B1624] hover:text-[#FD976D] transition-colors"
                  >
                    {MEGA_MENU_DATA.projects.featured.cta}
                  </Link>
                </div>
              </div>
            )}

            {activeMenu === "about" && (
              <div className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-8 grid grid-cols-2 gap-6">
                  {MEGA_MENU_DATA.about.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group block p-3 rounded-xl hover:bg-[#F9F6F3] transition-colors"
                    >
                      <div className="text-sm font-semibold text-[#1B1624] group-hover:text-[#FD976D] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-[#76737C] mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
                <div className="col-span-4 bg-[#F9F6F3] border border-[#ECE5E1] rounded-[20px] p-6 space-y-4">
                  <p className="text-sm font-semibold text-[#1B1624] leading-relaxed">
                    {MEGA_MENU_DATA.about.featured.text}
                  </p>
                  <Link
                    href={MEGA_MENU_DATA.about.featured.href}
                    onClick={() => setActiveMenu(null)}
                    className="inline-block text-xs font-bold text-[#1B1624] hover:text-[#FD976D] transition-colors"
                  >
                    {MEGA_MENU_DATA.about.featured.cta}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F6F3] border-b border-[#ECE5E1] px-4 pt-4 pb-8 space-y-3">
          <nav className="flex flex-col space-y-2">
            {/* Marketing Services */}
            <div className="border-b border-[#ECE5E1] pb-2">
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
                className="w-full flex items-center justify-between text-base font-semibold text-[#1B1624] py-2"
              >
                <span>Marketing Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "services" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "services" && (
                <div className="pl-3 pb-2 space-y-1.5 text-sm text-[#54505B]">
                  {[
                    ...MEGA_MENU_DATA.services.search,
                    ...MEGA_MENU_DATA.services.paidMedia,
                    ...MEGA_MENU_DATA.services.growthBuildCol1,
                    ...MEGA_MENU_DATA.services.growthBuildCol2,
                    ...MEGA_MENU_DATA.services.clientResults,
                    { label: "View all services", href: "/services" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1 hover:text-[#1B1624]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Learn */}
            <div className="border-b border-[#ECE5E1] pb-2">
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === "learn" ? null : "learn")}
                className="w-full flex items-center justify-between text-base font-semibold text-[#1B1624] py-2"
              >
                <span>Learn</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "learn" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "learn" && (
                <div className="pl-3 pb-2 space-y-1.5 text-sm text-[#54505B]">
                  {MEGA_MENU_DATA.learn.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1 hover:text-[#1B1624]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Projects */}
            <div className="border-b border-[#ECE5E1] pb-2">
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === "projects" ? null : "projects")}
                className="w-full flex items-center justify-between text-base font-semibold text-[#1B1624] py-2"
              >
                <span>Projects</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "projects" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "projects" && (
                <div className="pl-3 pb-2 space-y-1.5 text-sm text-[#54505B]">
                  {MEGA_MENU_DATA.projects.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1 hover:text-[#1B1624]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <div className="border-b border-[#ECE5E1] pb-2">
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === "about" ? null : "about")}
                className="w-full flex items-center justify-between text-base font-semibold text-[#1B1624] py-2"
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "about" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "about" && (
                <div className="pl-3 pb-2 space-y-1.5 text-sm text-[#54505B]">
                  {MEGA_MENU_DATA.about.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1 hover:text-[#1B1624]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="pt-2">
            <Link
              href="/agency/free-marketing-audit"
              className="ali-pill-btn bg-[#1B1624] text-white w-full py-3.5 flex items-center justify-center gap-3 text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-6 h-6 rounded-full overflow-hidden bg-white/20 shrink-0">
                <Image
                  src="/assets/khalid-avatar.webp"
                  alt="Khalid Farhan"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </span>
              <span>Get a Free Marketing Audit</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
