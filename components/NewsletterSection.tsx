"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/Icons";
import { KF_DATA } from "@/data/content";

export default function NewsletterSection() {
  const { newsletter } = KF_DATA;

  return (
    <section id="insights" className="bg-[#F9F6F3] py-20 sm:py-24 border-b border-[#ECE5E1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Insights Hub Card on Ali Abdaal Canvas (White card on #F9F6F3, no unauthorized label) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white border border-[#ECE5E1] rounded-[32px] p-8 sm:p-14 text-center space-y-8 overflow-hidden shadow-2xs hover:border-[#FD976D]/60 transition-colors"
        >
          
          {/* Heading & Subtitle (Exact KF Section 8 copy) */}
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1624] tracking-tight">
              {newsletter.title}
            </h2>
            <p className="text-base sm:text-lg text-[#54505B] leading-relaxed font-sans">
              {newsletter.subtitle}
            </p>
          </div>

          {/* 8 Category Pills (Exact KF categories with exact links and smooth hover) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto pt-2">
            {newsletter.categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="bg-[#F9F6F3] border border-[#ECE5E1] text-[#54505B] hover:text-[#1B1624] hover:border-[#1B1624] text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all hover:-translate-y-0.5 shadow-2xs"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Follow on LinkedIn CTA Button (Exact KF Action in Ali Abdaal Pill Button) */}
          <div className="pt-6 border-t border-[#ECE5E1]/60 flex items-center justify-center">
            <a
              href={newsletter.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ali-pill-btn bg-[#1B1624] hover:bg-[#2D2638] text-white font-semibold text-sm px-8 py-4 shadow-sm transition-all inline-flex items-center gap-3"
            >
              <LinkedinIcon className="w-4 h-4 text-[#5DCDF1]" />
              <span>{newsletter.cta}</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
