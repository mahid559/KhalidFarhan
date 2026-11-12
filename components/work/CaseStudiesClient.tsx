"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface CaseStudyItem {
  industry: string;
  location: string;
  metric: string;
  metricLabel: string;
  headline: string;
  clientType: string;
  href: string;
  category: "Search" | "Ads" | "Websites and growth";
}

const SERVICE_TABS = ["All", "Search", "Ads", "Websites and growth"] as const;

export default function CaseStudiesClient({
  items,
  industries,
}: {
  items: CaseStudyItem[];
  industries: string[];
}) {
  const [serviceTab, setServiceTab] = useState<(typeof SERVICE_TABS)[number]>("All");
  const [industry, setIndustry] = useState<string>("All industries");

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchService = serviceTab === "All" || item.category === serviceTab;
      const matchIndustry =
        industry === "All industries" ||
        item.industry.toLowerCase().includes(industry.toLowerCase()) ||
        industry.toLowerCase().includes(item.industry.toLowerCase());
      return matchService && matchIndustry;
    });
  }, [items, serviceTab, industry]);

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ECE5E1] py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
                CLIENT RESULTS
              </p>
              <h1 className="display-l mt-3 text-[44px] sm:text-[58px] lg:text-[66px] text-[#1B1624]">
                CASE STUDIES
              </h1>
              <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B] max-w-2xl">
                24 pieces of work, each with the numbers before and after. We do not name clients here. We say what kind of business it was, where it was, what we changed, and what happened.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[24px] border border-[#ECE5E1] bg-white p-7 sm:p-8 shadow-sm">
                <div className="ledger-num text-[44px] leading-none text-[#FD976D]">24</div>
                <div className="mt-2 text-[18px] font-bold text-[#1B1624]">
                  Verified client transformations
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-[#54505B]">
                  Across Search, Google &amp; Meta Ads, Websites, and Growth across Ireland, the UK, Europe, and Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS & GRID */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/50 py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#ECE5E1]">
              <div className="flex flex-wrap gap-2">
                {SERVICE_TABS.map((tab) => {
                  const active = serviceTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setServiceTab(tab)}
                      className={`rounded-full px-5 py-2 text-[14px] font-semibold transition-colors cursor-pointer ${
                        active
                          ? "bg-[#1B1624] text-white"
                          : "bg-white border border-[#ECE5E1] text-[#54505B] hover:border-[#FD976D]"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="cs-industry"
                  className="text-[13px] font-semibold text-[#54505B]"
                >
                  Industry
                </label>
                <select
                  id="cs-industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="rounded-full border border-[#ECE5E1] bg-white px-4 py-2 text-[14px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-6 text-[14px] font-semibold text-[#76737C]">
              {filtered.length} of {items.length} case studies
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-[#FD976D] hover:border-[#FD976D]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#76737C] group-hover:text-[#1B1624]/80">
                      <span>{item.industry}</span>
                      <span>{item.location}</span>
                    </div>

                    <div className="mt-5">
                      <div className="ledger-num text-[38px] leading-none text-[#1B1624]">
                        {item.metric}
                      </div>
                      <div className="mt-1 text-[13px] font-semibold text-[#54505B] group-hover:text-[#1B1624]/85">
                        {item.metricLabel}
                      </div>
                    </div>

                    <h2 className="mt-5 text-[20px] font-bold leading-snug text-[#1B1624]">
                      {item.headline}
                    </h2>
                    <p className="mt-2 text-[14px] text-[#54505B] group-hover:text-[#1B1624]/85">
                      {item.clientType}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ECE5E1] group-hover:border-[#1B1624]/15 text-[14px] font-semibold text-[#1B1624]">
                    Read the case study →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[48px] text-white">
              WANT RESULTS LIKE THESE?
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

