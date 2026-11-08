"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { KF_DATA } from "@/data/content";

export default function AboutStory() {
  const { agencyStory } = KF_DATA;

  const statThemes = [
    { hoverBg: "hover:bg-[#FFF2EB]", hoverBorder: "hover:border-[#FD976D]", textAccent: "text-[#FD976D]" },
    { hoverBg: "hover:bg-[#EFF9FC]", hoverBorder: "hover:border-[#5DCDF1]", textAccent: "text-[#5DCDF1]" },
    { hoverBg: "hover:bg-[#FFF9EA]", hoverBorder: "hover:border-[#FDD46B]", textAccent: "text-[#E8BA3E]" },
  ];

  return (
    <section className="bg-[#F9F6F3] py-20 sm:py-28 border-b border-[#ECE5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Block: Text on Left (approx 55%), Founder Image on Right (approx 45%) */}
        {/* Exactly matching Ali Abdaal's 'Hey, I'm Ali Abdaal' section composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Heading, Body & Action */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1B1624] tracking-tight leading-[1.18]">
              <span>Me and my team can help you get more </span>
              <span className="relative inline-block text-[#1B1624]">
                <span className="relative z-10">customers.</span>
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-[#FD976D] -z-0"
                  viewBox="0 0 140 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C35 2 105 2 138 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#54505B] leading-relaxed max-w-xl font-sans">
              {agencyStory.body}
            </p>

            <div className="pt-2">
              <Link
                href="/services"
                className="ali-pill-btn bg-[#1B1624] hover:bg-[#2D2638] text-white text-sm px-7 py-3.5 shadow-sm transition-all inline-flex items-center gap-2"
              >
                <span>{agencyStory.cta}</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Founder Portrait pulled right (Ali Abdaal 'ali-about-image-pull-right') */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden border border-[#ECE5E1] bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F3]/40 via-transparent to-transparent z-10" />
              <Image
                src="/assets/khalid-320.webp"
                alt="Khalid Farhan"
                fill
                priority
                unoptimized
                className="object-cover object-top hover:scale-103 transition-transform duration-500 ease-out"
              />
            </div>
          </motion.div>

        </div>

        {/* 3 Stats Row (Exact KF numbers in Ali Abdaal Stat Cards with pastel hovers) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {agencyStory.stats.map((s, idx) => {
            const theme = statThemes[idx % statThemes.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`ali-card bg-white border border-[#ECE5E1] rounded-[24px] p-8 sm:p-10 text-center space-y-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(194,179,164,0.5)] ${theme.hoverBg} ${theme.hoverBorder}`}
              >
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1B1624] tracking-tight">
                  <span>{s.num}</span>
                  {s.suffix && <span className={theme.textAccent}>{s.suffix}</span>}
                </div>
                <div className="text-sm font-semibold text-[#54505B] font-sans">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
