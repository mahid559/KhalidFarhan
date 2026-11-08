"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { KF_DATA } from "@/data/content";

export default function ResultsSection() {
  const { results } = KF_DATA;

  return (
    <section className="bg-[#F9F6F3] py-20 sm:py-24 border-b border-[#ECE5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No unauthorized 'Case Studies' label) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1624] tracking-tight">
              {results.title}
            </h2>
          </div>

          <Link
            href="/work/case-studies"
            className="ali-pill-btn bg-white hover:bg-[#F3EDE9] text-[#1B1624] border border-[#ECE5E1] font-semibold text-xs sm:text-sm px-6 py-3 transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>{results.cta}</span>
          </Link>
        </motion.div>

        {/* 8 Case Studies Grid with Individual Hover Reactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Cork B&B */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0 * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work/case-studies/cork-bnb-seo"
              className="group ali-card hover-highlight-orange flex flex-col justify-between p-6 bg-white border border-[#ECE5E1] rounded-[24px] h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#76737C]">Organic clicks</span>
                  <span className="font-bold text-2xl font-serif text-[#1B1624] group-hover:text-[#FD976D] transition-colors">+180%</span>
                </div>

                {/* Exact SVG Chart from KF */}
                <div className="h-28 w-full bg-[#F9F6F3] rounded-xl p-2 flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 320 150" className="w-full h-full" aria-hidden="true">
                    <line x1="10" x2="310" y1="37.5" y2="37.5" stroke="#ECE5E1" strokeDasharray="3 3" />
                    <line x1="10" x2="310" y1="75" y2="75" stroke="#ECE5E1" strokeDasharray="3 3" />
                    <line x1="10" x2="310" y1="112.5" y2="112.5" stroke="#ECE5E1" strokeDasharray="3 3" />
                    <path
                      d="M10,126 L37,119 L64,122 L91,110 L119,103 L146,91 L173,81 L200,67 L228,56 L255,42 L282,34 L310,22 L310,150 L10,150 Z"
                      fill="#FD976D"
                      fillOpacity="0.15"
                      className="transition-opacity group-hover:fill-opacity-25"
                    />
                    <path
                      d="M10,126 L37,119 L64,122 L91,110 L119,103 L146,91 L173,81 L200,67 L228,56 L255,42 L282,34 L310,22"
                      fill="none"
                      stroke="#FD976D"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="310" cy="22" r="5" fill="#FD976D" className="group-hover:scale-125 origin-center transition-transform" />
                  </svg>
                </div>

                <div className="flex justify-between text-[11px] text-[#76737C]">
                  <span>Month 1</span>
                  <span>Month 9</span>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE5E1] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1B1624]">A boutique B&B in Cork</span>
                <span className="text-[#FD976D] font-semibold inline-flex items-center gap-1">
                  SEO rebuild <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: Galway Roofer Local SEO */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 1 * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work/case-studies/galway-roofer-local-seo"
              className="group ali-card hover-highlight-blue flex flex-col justify-between p-6 bg-white border border-[#ECE5E1] rounded-[24px] h-full"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#76737C]">Rankings, 6 months</span>
                  <span className="font-bold text-2xl font-serif text-[#1B1624] group-hover:text-[#5DCDF1] transition-colors">#1</span>
                </div>

                {/* Exact Keywords Table from KF */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center bg-[#F9F6F3] group-hover:bg-white transition-colors px-2.5 py-1.5 rounded-lg">
                    <span className="text-[#54505B] truncate pr-2">roofer galway</span>
                    <span className="text-[#76737C] line-through text-[11px]">14</span>
                    <span className="font-bold text-[#1B1624] pl-2">→ 1</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#F9F6F3] group-hover:bg-white transition-colors px-2.5 py-1.5 rounded-lg">
                    <span className="text-[#54505B] truncate pr-2">roof repair galway</span>
                    <span className="text-[#76737C] line-through text-[11px]">22</span>
                    <span className="font-bold text-[#1B1624] pl-2">→ 2</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#F9F6F3] group-hover:bg-white transition-colors px-2.5 py-1.5 rounded-lg">
                    <span className="text-[#54505B] truncate pr-2">flat roof galway</span>
                    <span className="text-[#76737C] line-through text-[11px]">31</span>
                    <span className="font-bold text-[#1B1624] pl-2">→ 3</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#F9F6F3] group-hover:bg-white transition-colors px-2.5 py-1.5 rounded-lg">
                    <span className="text-[#54505B] truncate pr-2">emergency roofer</span>
                    <span className="text-[#76737C] line-through text-[11px]">9</span>
                    <span className="font-bold text-[#1B1624] pl-2">→ 1</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE5E1] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1B1624]">A Galway-based roofer</span>
                <span className="text-[#5DCDF1] font-semibold inline-flex items-center gap-1">
                  Local SEO <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: Dog Daycare Maps */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 2 * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work/case-studies/dog-daycare-meta-ads"
              className="group ali-card hover-highlight-purple flex flex-col justify-between p-6 bg-white border border-[#ECE5E1] rounded-[24px] h-full"
            >
              <div className="space-y-3">
                <div className="h-32 w-full bg-[#1B1624] rounded-xl relative overflow-hidden flex items-center justify-center p-3">
                  <svg viewBox="0 0 320 180" className="w-full h-full" aria-hidden="true">
                    <path d="M0 40 Q80 20 160 60 T320 50" stroke="#373142" strokeWidth="8" fill="none" strokeLinecap="round" />
                    <path d="M30 0 Q60 90 20 180" stroke="#373142" strokeWidth="8" fill="none" strokeLinecap="round" />
                    <path d="M200 0 Q180 100 260 180" stroke="#373142" strokeWidth="8" fill="none" strokeLinecap="round" />
                    <circle cx="160" cy="80" r="14" fill="#C9B1FB" className="group-hover:scale-110 origin-center transition-transform" />
                    <circle cx="160" cy="80" r="6" fill="#FFFFFF" />
                    <circle cx="90" cy="110" r="8" fill="#76737C" />
                    <circle cx="240" cy="100" r="8" fill="#76737C" />
                  </svg>
                  <div className="absolute left-2.5 bottom-2.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#ECE5E1] shadow-xs">
                    <div className="text-[11px] font-bold text-[#1B1624]">Top 3 in Maps</div>
                    <div className="text-[9px] text-[#54505B]">★ 4.9 · 60+ reviews · Open now</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE5E1] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1B1624]">A premium dog daycare</span>
                <span className="text-[#7C3AED] font-semibold inline-flex items-center gap-1">
                  Google Maps <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 4: German Fintech Google Ads */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 3 * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work/case-studies/german-fintech-google-ads"
              className="group ali-card hover-highlight-yellow flex flex-col justify-between p-6 bg-white border border-[#ECE5E1] rounded-[24px] h-full"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#76737C]">Cost per lead, 90 days</span>
                  <span className="font-bold text-2xl font-serif text-[#1B1624] group-hover:text-[#B45309] transition-colors">−40%</span>
                </div>

                {/* Exact bars visualization */}
                <div className="flex items-end gap-1.5 h-20 bg-[#F9F6F3] rounded-xl p-3">
                  <span className="flex-1 bg-[#5DCDF1] rounded-t-xs transition-all group-hover:brightness-110" style={{ height: "100%" }} />
                  <span className="flex-1 bg-[#5DCDF1] rounded-t-xs transition-all group-hover:brightness-110" style={{ height: "94%" }} />
                  <span className="flex-1 bg-[#5DCDF1] rounded-t-xs transition-all group-hover:brightness-110" style={{ height: "88%" }} />
                  <span className="flex-1 bg-[#5DCDF1] rounded-t-xs transition-all group-hover:brightness-110" style={{ height: "79%" }} />
                  <span className="flex-1 bg-[#5DCDF1] rounded-t-xs transition-all group-hover:brightness-110" style={{ height: "71%" }} />
                  <span className="flex-1 bg-[#5DCDF1] rounded-t-xs transition-all group-hover:brightness-110" style={{ height: "66%" }} />
                  <span className="flex-1 bg-[#FD976D] rounded-t-xs transition-all group-hover:scale-y-105 origin-bottom" style={{ height: "60%" }} />
                </div>

                {/* Exact chips */}
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="bg-[#F9F6F3] border border-[#ECE5E1] px-2 py-0.5 rounded-full text-[#54505B]">
                    Leads <b>+62%</b>
                  </span>
                  <span className="bg-[#F9F6F3] border border-[#ECE5E1] px-2 py-0.5 rounded-full text-[#54505B]">
                    ROAS <b>3.2x</b>
                  </span>
                  <span className="bg-[#F9F6F3] border border-[#ECE5E1] px-2 py-0.5 rounded-full text-[#54505B]">
                    Wasted spend <b>−€4.1k</b>
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE5E1] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1B1624] truncate pr-2">An educational fintech in Germany</span>
                <span className="text-[#B45309] font-semibold inline-flex items-center gap-1 shrink-0">
                  Google Ads <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 5: Dublin Music School */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 4 * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work/case-studies/dublin-music-school-seo"
              className="group ali-card hover-highlight-orange flex flex-col justify-between p-6 bg-white border border-[#ECE5E1] rounded-[24px] h-full"
            >
              <div className="space-y-3">
                <div className="bg-[#F9F6F3] border border-[#ECE5E1] rounded-xl overflow-hidden group-hover:shadow-xs transition-shadow">
                  <div className="bg-[#ECE5E1]/60 px-3 py-1.5 flex items-center gap-1 text-[10px] text-[#76737C]">
                    <span className="w-2 h-2 rounded-full bg-[#1B1624]/20" />
                    <span className="w-2 h-2 rounded-full bg-[#1B1624]/20" />
                    <span className="w-2 h-2 rounded-full bg-[#1B1624]/20" />
                    <span className="ml-2 bg-white px-2 py-0.5 rounded-sm truncate text-[#54505B]">
                      musicschool.ie/guitar-lessons-dublin
                    </span>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-3 w-3/4 bg-[#1B1624] rounded-xs" />
                    <div className="h-2 w-1/2 bg-[#76737C]/40 rounded-xs" />
                    <div className="inline-block bg-[#FD976D] text-white text-[9px] font-bold px-2 py-1 rounded-full">
                      Book a free trial lesson
                    </div>
                    <div className="text-[10px] font-bold text-[#1B1624] bg-white border border-[#ECE5E1] p-1.5 rounded-lg text-center mt-1">
                      Waiting list in 9 months
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE5E1] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1B1624]">A music school in Dublin</span>
                <span className="text-[#FD976D] font-semibold inline-flex items-center gap-1">
                  SEO <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 6: Galway Roofer Review Programme */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 5 * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work/case-studies/galway-roofer-local-seo"
              className="group ali-card hover-highlight-yellow flex flex-col justify-between p-6 bg-white border border-[#ECE5E1] rounded-[24px] h-full"
            >
              <div className="space-y-3 text-center py-2">
                <div className="text-[#F3B344] text-lg tracking-widest group-hover:scale-105 transition-transform">
                  ★★★★★
                </div>
                <div className="font-serif text-5xl font-extrabold text-[#1B1624] group-hover:text-[#B45309] transition-colors">
                  60<span className="text-[#FD976D]">+</span>
                </div>
                <p className="text-xs text-[#54505B] max-w-[20ch] mx-auto font-sans">
                  Google reviews, up from 12 in six months
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE5E1] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1B1624]">A Galway-based roofer</span>
                <span className="text-[#B45309] font-semibold inline-flex items-center gap-1">
                  Reviews <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 7: Beauty Ecommerce Email Flows */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 6 * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work/case-studies/beauty-ecommerce-meta-ads"
              className="group ali-card hover-highlight-purple flex flex-col justify-between p-6 bg-white border border-[#ECE5E1] rounded-[24px] h-full"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#76737C]">Abandoned-cart flow</span>
                  <span className="font-bold text-lg font-serif text-[#1B1624] group-hover:text-[#7C3AED] transition-colors">+18% revenue</span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="bg-[#F9F6F3] group-hover:bg-white transition-colors p-2 rounded-lg border border-[#ECE5E1]">
                    <div className="flex justify-between text-[10px] text-[#FD976D] font-bold uppercase">
                      <span>1 hour</span>
                      <span>41% open</span>
                    </div>
                    <div className="text-[#1B1624] font-medium">You left something behind</div>
                  </div>
                  <div className="bg-[#F9F6F3] group-hover:bg-white transition-colors p-2 rounded-lg border border-[#ECE5E1]">
                    <div className="flex justify-between text-[10px] text-[#FD976D] font-bold uppercase">
                      <span>24 hours</span>
                      <span>33% open</span>
                    </div>
                    <div className="text-[#1B1624] font-medium">Still thinking it over?</div>
                  </div>
                  <div className="bg-[#F9F6F3] group-hover:bg-white transition-colors p-2 rounded-lg border border-[#ECE5E1]">
                    <div className="flex justify-between text-[10px] text-[#FD976D] font-bold uppercase">
                      <span>3 days</span>
                      <span>9.4% bought</span>
                    </div>
                    <div className="text-[#1B1624] font-medium">Last chance, 10% off</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE5E1] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1B1624]">A premium beauty brand</span>
                <span className="text-[#7C3AED] font-semibold inline-flex items-center gap-1">
                  Email flows <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 8: Beauty Ecommerce Meta Ads */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 7 * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work/case-studies/beauty-ecommerce-meta-ads"
              className="group ali-card hover-highlight-blue flex flex-col justify-between p-6 bg-white border border-[#ECE5E1] rounded-[24px] h-full"
            >
              <div className="space-y-3 text-center py-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl font-serif text-[#76737C] line-through">1.4x</span>
                  <span className="text-lg text-[#5DCDF1] transition-transform group-hover:translate-x-1">→</span>
                  <span className="text-4xl font-serif font-extrabold text-[#1B1624] group-hover:text-[#5DCDF1] transition-colors">4.2x</span>
                </div>
                <p className="text-xs text-[#54505B] max-w-[20ch] mx-auto font-medium font-sans">
                  Meta ROAS in 4 months, same budget
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE5E1] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1B1624]">A premium beauty brand</span>
                <span className="text-[#5DCDF1] font-semibold inline-flex items-center gap-1">
                  Meta Ads <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
