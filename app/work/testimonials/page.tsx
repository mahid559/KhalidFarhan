import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Testimonials, Client Reviews | Khalid Farhan",
  description:
    "Real reviews from real clients across Ireland, the UK, and Bangladesh. SEO, Google Ads, Meta Ads, and more.",
};

const QUOTES = [
  "“Khalid's team completely transformed our online presence. Organic bookings are up significantly and we're now ranking for searches we never thought possible.”",
  "“The results speak for themselves — over 200% growth in organic traffic within nine months. The team is professional, transparent, and genuinely invested in our success.”",
  "“Our cost per lead dropped dramatically while lead quality went up. Khalid's approach to Google Ads is data-first and results-driven.”",
  "“We went from struggling to fill spots to having a waiting list. Meta Ads handled by this team are a different level.”",
  "“Local SEO results were almost immediate. We're now the top result for roofing in Galway and the phone hasn't stopped.”",
  "“ROAS improved by over 3x after switching to Khalid's team. They understand e-commerce deeply.”",
  "“Highly recommend for any professional services firm looking to build a serious organic presence.”",
  "“Bookings up year on year since working with Khalid's team. They understand local tourism marketing better than anyone.”",
];

const STATS = [
  { num: "120+", label: "CLIENTS SERVED" },
  { num: "4", label: "COUNTRIES" },
  { num: "8+", label: "YEARS" },
  { num: "0", label: "FAKE REVIEWS" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              WORK / TESTIMONIALS
            </p>
            <h1 className="display-l mt-4 text-[44px] sm:text-[58px] lg:text-[66px] text-[#1B1624]">
              WHAT CLIENTS SAY.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
              Unfiltered feedback from businesses we&apos;ve worked with across Ireland, the UK, Bangladesh, and globally.
            </p>
          </div>
        </section>

        {/* TESTIMONIAL QUOTES */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {QUOTES.map((quote, idx) => (
                <blockquote
                  key={idx}
                  className="ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-8 flex flex-col justify-between transition-colors hover:border-[#FD976D]"
                >
                  <p className="text-[17px] leading-relaxed text-[#1B1624]">{quote}</p>
                  <footer className="mt-6 pt-4 border-t border-[#ECE5E1] text-[13px] font-semibold text-[#76737C]">
                    Client Testimonial
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STANDARD + 4 STATS */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
                OUR STANDARD
              </p>
              <h2 className="heading-xl mt-3 text-[32px] sm:text-[44px] text-[#1B1624]">
                WE ONLY WORK WITH CLIENTS WE CAN GENUINELY HELP.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[#54505B]">
                Before any engagement, we do a free audit to understand whether there&apos;s a real opportunity. If we don&apos;t think we can deliver meaningful results, we say so, and refer you to someone who can. That approach is why our clients stay, and why they talk about us.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-[#ECE5E1] bg-white p-7"
                >
                  <div className="ledger-num text-[42px] leading-none text-[#FD976D]">
                    {stat.num}
                  </div>
                  <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#54505B]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR CLIENTS DARK SECTION */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-white">OUR CLIENTS</h2>
            <p className="mt-3 text-[17px] text-white/75">
              400+ clients across 10+ countries over the last 12 years.
            </p>

            <div className="mt-12 rounded-[32px] border border-white/15 bg-white/5 py-12 px-6 sm:px-12">
              <h3 className="heading-lg text-[28px] sm:text-[38px] text-white">
                READY TO BECOME A SUCCESS STORY?
              </h3>
              <div className="mt-7">
                <Link
                  href="/agency/free-marketing-audit"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  Get a Free Marketing Audit →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
