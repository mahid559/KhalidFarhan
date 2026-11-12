import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Khalid Farhan — Agency & Founder | Khalid Farhan",
  description:
    "Built for results, not for vanity. A founder-led digital marketing agency and entrepreneurship education platform operating from Dublin and Dhaka.",
};

const STATS = [
  { num: "10+", label: "YEARS IN MARKETING" },
  { num: "1.9M+", label: "YOUTUBE SUBSCRIBERS" },
  { num: "30,000+", label: "STUDENTS TAUGHT" },
  { num: "400+", label: "CLIENTS SERVED" },
];

const PRESS_LOGOS = [
  { src: "/logos/press/prothom-alo.svg", alt: "Prothom Alo" },
  { src: "/logos/press/daily-star.svg", alt: "The Daily Star" },
  { src: "/logos/press/jamuna-tv.svg", alt: "Jamuna TV" },
  { src: "/logos/press/channel-i.png", alt: "Channel I" },
  { src: "/logos/press/new-age.png", alt: "New Age Bangladesh" },
  { src: "/logos/press/niche-pursuits.jpg", alt: "Niche Pursuits" },
  { src: "/logos/press/search-engine-journal.png", alt: "Search Engine Journal" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              ABOUT
            </p>
            <h1 className="display-l mt-4 text-[44px] sm:text-[58px] lg:text-[66px] text-[#1B1624]">
              BUILT FOR RESULTS. NOT FOR VANITY.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
              A founder-led digital marketing agency and entrepreneurship education platform operating from Dublin and Dhaka.
            </p>
          </div>
        </section>

        {/* 2. DARK STATS BAR */}
        <section className="bg-[#1B1624] text-white py-14">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="ledger-num text-[38px] sm:text-[46px] leading-none text-[#FD976D]">
                  {s.num}
                </div>
                <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white/75">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. STORY & VALUES */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FD976D]">
                THE STORY
              </p>
              <h2 className="heading-xl text-[32px] sm:text-[42px] text-[#1B1624]">
                FROM BANGLADESH TO DUBLIN, AND BACK TO BUILDING THINGS.
              </h2>
              <p className="text-[16px] leading-relaxed text-[#54505B]">
                I got my first client in 2011 at age 16, writing articles for $1 each. Over the last 12+ years, that turned into a digital marketing agency in Dublin, Ireland serving 400+ clients across 10+ countries, alongside Business School and products built for creators and founders.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-[28px] border border-[#ECE5E1] bg-white p-8 sm:p-10 space-y-6">
              <h3 className="heading-lg text-[26px] text-[#1B1624]">OUR VALUES.</h3>
              <ul className="space-y-4 text-[15px] text-[#54505B]">
                <li>
                  <strong className="text-[#1B1624]">Honest numbers:</strong> We report revenue, leads, and real ROI — never vanity impressions.
                </li>
                <li>
                  <strong className="text-[#1B1624]">Direct access:</strong> Agency clients talk directly to the people doing the work, not layers of account managers.
                </li>
                <li>
                  <strong className="text-[#1B1624]">Build in public:</strong> Everything we teach in Business School and YouTube comes from businesses and campaigns we run ourselves.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. FOUNDER BIO */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[920px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row gap-8 items-center">
            <img
              src="/team/khalid-avatar.webp"
              alt="Khalid Farhan"
              className="h-40 w-40 rounded-full object-cover border border-[#ECE5E1] shrink-0"
            />
            <div className="space-y-3 text-center sm:text-left">
              <h2 className="heading-lg text-[28px] text-[#1B1624]">Khalid Farhan</h2>
              <p className="text-[16px] leading-relaxed text-[#54505B]">
                Founder of khalidfarhan.com. MSc from Trinity College Dublin. Host to 1.9M+ subscribers on YouTube and 30,000+ students in Business School. Leading SEO, Paid Media, GEO, and Web Growth campaigns from Dublin and Dhaka.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FEATURED IN */}
        <section className="border-b border-[#ECE5E1] py-8" aria-label="Featured in">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#76737C]">
              Featured in
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-9">
              {PRESS_LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[26px] w-auto object-contain opacity-80"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. BOTTOM CTA */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[48px] text-white">
              READY TO WORK TOGETHER?
            </h2>
            <div className="mt-8">
              <Link
                href="/agency/free-marketing-audit"
                className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
              >
                Get a Free Marketing Audit →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
