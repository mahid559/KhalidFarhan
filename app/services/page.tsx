"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Search, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function ServicesPage() {
  const { services19 } = SITE_DATA;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Organic Search", "AI Search", "Paid Media", "Conversion", "Retention", "Content", "Video Growth", "Data"];

  const filteredServices = selectedCategory === "All"
    ? services19
    : services19.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#ECE5E1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#76737C]">
              <Sparkles className="w-3.5 h-3.5 text-[#FD976D]" />
              <span>Full-Stack Marketing Agency</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B1624] tracking-tight">
              All 19 Marketing Services
            </h1>
            <p className="text-lg text-[#54505B] leading-relaxed">
              We don’t outsource offshore, we don’t sell you what you don’t need, and we don’t hide behind dashboards. You work directly with experienced marketers.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`ali-pill-btn text-xs sm:text-sm px-4 py-2 border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1B1624] text-white border-[#1B1624]"
                    : "bg-white text-[#54505B] border-[#ECE5E1] hover:border-[#1B1624]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid matching Ali Abdaal card style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => (
              <div
                key={idx}
                className="ali-card p-8 rounded-[24px] bg-white border border-[#ECE5E1] flex flex-col justify-between hover:border-[#FD976D]/60 transition-all shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3EDE9] text-[#54505B]">
                    {service.category}
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1624] leading-snug">
                    {service.name}
                  </h2>
                  <p className="text-sm text-[#54505B] leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ECE5E1]/60 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1B1624]">
                  <Link
                    href="/agency/free-marketing-audit"
                    className="flex items-center gap-1.5 text-[#1B1624] hover:text-[#FD976D] transition-colors"
                  >
                    <span>Request audit for this service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FD976D]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-white border border-[#ECE5E1] rounded-[28px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1624]">
                Not sure where to start?
              </h2>
              <p className="text-sm text-[#54505B]">
                Book a free 30-minute marketing audit and let us diagnose your highest-impact opportunities.
              </p>
            </div>
            <Link
              href="/agency/free-marketing-audit"
              className="ali-pill-btn bg-[#1B1624] hover:bg-[#1B1624]/90 text-white text-sm px-6 py-3 shadow-xs shrink-0"
            >
              <span>Get Free Marketing Audit</span>
              <ArrowRight className="w-4 h-4 text-[#FD976D]" />
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

