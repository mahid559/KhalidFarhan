"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Clock, Search } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function InsightsPage() {
  const { articles, categories } = SITE_DATA;
  const [selectedTag, setSelectedTag] = useState("All");

  const filterCategories = ["All", ...categories];

  const filteredArticles = selectedTag === "All"
    ? articles
    : articles.filter(a => a.category.toLowerCase().includes(selectedTag.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#ECE5E1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#76737C]">
              <BookOpen className="w-3.5 h-3.5 text-[#FD976D]" />
              <span>Articles & Thought Leadership</span>
            </div>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-[#1B1624] tracking-tight">
              Marketing Insights & Guides
            </h1>
            <p className="text-lg text-[#54505B] leading-relaxed">
              Straightforward essays on Generative Engine Optimisation (GEO), Google and Meta ads, remote podcasting, and digital entrepreneurship.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`ali-pill-btn text-xs px-4 py-2 border transition-all cursor-pointer ${
                  selectedTag === cat
                    ? "bg-[#1B1624] text-white border-[#1B1624]"
                    : "bg-white text-[#54505B] border-[#ECE5E1] hover:border-[#1B1624]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art, idx) => (
              <div
                key={idx}
                className="ali-card p-8 sm:p-10 rounded-[28px] bg-white border border-[#ECE5E1] flex flex-col justify-between space-y-6 hover:border-[#5DCDF1] transition-all shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#76737C]">
                    <span className="font-bold uppercase tracking-wider text-[#FD976D]">
                      {art.category}
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1B1624] leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-sm text-[#54505B] leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#ECE5E1]/60 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1B1624]">
                  <span className="text-[#54505B]">Read full guide</span>
                  <div className="w-8 h-8 rounded-full bg-[#F3EDE9] flex items-center justify-center text-[#1B1624] group-hover:bg-[#1B1624] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#FD976D]" />
                  </div>
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

