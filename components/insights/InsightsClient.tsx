"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface InsightCard {
  category: string;
  title: string;
  excerpt: string;
  meta: string;
  href: string;
}

export default function InsightsClient({
  featured,
  articles,
}: {
  featured: InsightCard[];
  articles: InsightCard[];
}) {
  const categories = useMemo(() => {
    const set = new Set<string>(["All"]);
    articles.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [articles]);

  const [activeCat, setActiveCat] = useState("All");

  const filtered = useMemo(() => {
    if (activeCat === "All") return articles;
    return articles.filter((a) => a.category === activeCat);
  }, [articles, activeCat]);

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              BLOG
            </p>
            <h1 className="display-l mt-4 text-[44px] sm:text-[58px] lg:text-[66px] text-[#1B1624]">
              MARKETING THAT MAKES SENSE.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
              No fluff, no filler. Practical guides on SEO, paid media, GEO, and growing a business online, written from real client experience.
            </p>
          </div>
        </section>

        {/* FEATURED (3) */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#76737C] mb-6">
              FEATURED
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-[#FD976D] hover:border-[#FD976D]"
                >
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#FD976D] group-hover:text-[#1B1624]/80">
                      {post.category}
                    </div>
                    <h2 className="mt-3 text-[20px] font-bold leading-snug text-[#1B1624]">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#54505B] group-hover:text-[#1B1624]/85">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#ECE5E1] group-hover:border-[#1B1624]/15 text-[12px] font-semibold text-[#76737C] group-hover:text-[#1B1624]">
                    {post.meta}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ALL ARTICLES (28) */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <h2 className="heading-lg text-[28px] sm:text-[36px] text-[#1B1624]">
                ALL ARTICLES ({filtered.length})
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCat(cat)}
                    className={`rounded-full px-4 py-1.5 text-[12px] font-semibold transition-colors cursor-pointer ${
                      activeCat === cat
                        ? "bg-[#1B1624] text-white"
                        : "bg-white border border-[#ECE5E1] text-[#54505B] hover:border-[#FD976D]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-[#FD976D] hover:border-[#FD976D]"
                >
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C] group-hover:text-[#1B1624]/80">
                      {post.category}
                    </div>
                    <h3 className="mt-3 text-[19px] font-bold leading-snug text-[#1B1624]">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-[#54505B] group-hover:text-[#1B1624]/85">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#ECE5E1] group-hover:border-[#1B1624]/15 text-[12px] font-semibold text-[#76737C] group-hover:text-[#1B1624]">
                    {post.meta}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

