"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface ProjectCard {
  industry: string;
  year: string;
  title: string;
  desc: string;
  tags: string[];
}

export default function ProjectsClient({
  projects,
  allTags,
}: {
  projects: ProjectCard[];
  allTags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [projects, activeTag]);

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              WORK / PROJECTS
            </p>
            <h1 className="display-l mt-4 text-[44px] sm:text-[58px] lg:text-[66px] text-[#1B1624]">
              120+ PROJECTS DELIVERED.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
              A selection of client work across search, paid media, email, and web. Each project starts with a free audit.
            </p>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-[#1B1624] text-white py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { num: "120+", label: "PROJECTS DELIVERED" },
              { num: "4", label: "COUNTRIES" },
              { num: "19", label: "SERVICE LINES" },
              { num: "8+", label: "YEARS EXPERIENCE" },
            ].map((s) => (
              <div key={s.label}>
                <div className="ledger-num text-[38px] sm:text-[44px] leading-none text-[#FD976D]">
                  {s.num}
                </div>
                <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white/75">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FILTERABLE PORTFOLIO GRID */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-10">
              {["All", ...allTags].map((tag) => {
                const active = activeTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(tag)}
                    className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors cursor-pointer ${
                      active
                        ? "bg-[#1B1624] text-white"
                        : "bg-white border border-[#ECE5E1] text-[#54505B] hover:border-[#FD976D]"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((proj) => (
                <div
                  key={proj.title + proj.year}
                  className="ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-7 flex flex-col justify-between transition-colors hover:border-[#FD976D]"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.08em] text-[#76737C]">
                      <span>{proj.industry}</span>
                      <span>{proj.year}</span>
                    </div>
                    <h2 className="mt-4 text-[20px] font-bold text-[#1B1624]">{proj.title}</h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#54505B]">{proj.desc}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[#ECE5E1]">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#F3EDE9] px-3 py-1 text-[12px] font-medium text-[#54505B]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES CROSS-LINK */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              WANT MORE DETAIL?
            </p>
            <h2 className="heading-lg mt-2 text-[28px] sm:text-[38px] text-[#1B1624]">
              READ THE FULL CASE STUDIES.
            </h2>
            <div className="mt-6">
              <Link
                href="/work/case-studies"
                className="ali-pill-btn inline-flex items-center bg-[#1B1624] hover:bg-[#FD976D] text-white hover:text-[#1B1624] px-7 py-3 rounded-full text-[14px] font-semibold transition-all"
              >
                View Case Studies →
              </Link>
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

