import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Trophy, Star, CheckCircle } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export const metadata = {
  title: "Case Studies | Khalid Farhan Marketing Agency",
  description: "Real client results: +180% organic clicks, #1 Google rankings, 6.3x ROAS.",
};

export default function CaseStudiesPage() {
  const { caseStudies } = SITE_DATA;

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#ECE5E1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#76737C]">
              <Trophy className="w-3.5 h-3.5 text-[#FD976D]" />
              <span>Proven Commercial Outcomes</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B1624] tracking-tight">
              Results that speak for themselves
            </h1>
            <p className="text-lg text-[#54505B] leading-relaxed">
              400+ clients across 10+ countries over 12 years. Here are a few examples of how we help ambitious businesses turn marketing into revenue.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="ali-card p-8 sm:p-10 rounded-[28px] bg-white border border-[#ECE5E1] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#FD976D]/60 transition-all"
              >
                <div className="space-y-4">
                  
                  {/* Category & Stars */}
                  <div className="flex items-center justify-between border-b border-[#ECE5E1]/60 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FD976D]">
                      {cs.category}
                    </span>
                    <div className="flex text-[#FDD46B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Client & Headline */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-[#76737C]">
                      Client: {cs.client} · {cs.timeframe}
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-[#1B1624] leading-snug">
                      {cs.headline}
                    </h2>
                  </div>

                  {/* Primary Metric Badge */}
                  <div className="inline-block bg-[#F3EDE9] rounded-2xl p-4">
                    <div className="font-serif text-3xl font-extrabold text-[#1B1624]">
                      {cs.stat}
                    </div>
                    <div className="text-xs text-[#54505B] font-medium">
                      {cs.statLabel}
                    </div>
                  </div>

                  <p className="text-sm text-[#54505B] leading-relaxed">
                    {cs.description}
                  </p>

                  {/* Result Bullet Points */}
                  <div className="space-y-2 pt-2">
                    {cs.results.map((r, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#54505B]">
                        <CheckCircle className="w-4 h-4 text-[#79D287] shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-6 border-t border-[#ECE5E1]/60">
                  <Link
                    href="/agency/free-marketing-audit"
                    className="ali-pill-btn bg-[#1B1624] hover:bg-[#1B1624]/90 text-white text-xs sm:text-sm px-5 py-2.5 shadow-2xs"
                  >
                    <span>Get Similar Results</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FD976D]" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

