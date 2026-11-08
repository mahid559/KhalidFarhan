"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { KF_DATA } from "@/data/content";

const ROTATING_WORDS = ["GROWTH", "SEARCH", "ADS", "AI VISIBILITY", "REVENUE"];

export default function Hero() {
  const { hero } = KF_DATA;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Double the 7 press logos (14 logos) per track to ensure wide displays are completely covered
  const marqueeSet = [...hero.pressLogos, ...hero.pressLogos];

  return (
    <section
      className="relative overflow-hidden bg-[#F9F6F3] rounded-b-[20px] pt-4 sm:pt-8 pb-16 sm:pb-24"
      style={{
        backgroundImage: "url('/assets/wave.png')",
        backgroundPosition: "52% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Top Hero Grid: 2 columns (Portrait on Left, Copy on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Yellow Speech Bubble (Exact Ali Abdaal Hero Composition) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[470px] aspect-[954/988] transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/assets/hero-khalid.png"
                alt="Khalid Farhan"
                width={954}
                height={988}
                priority
                unoptimized
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
              />
            </div>
          </motion.div>

          {/* Right Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 order-1 lg:order-2"
          >
            
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#1B1624] tracking-tight leading-[1.12]">
                <span>We’re your partners in </span>
                <br />
                <motion.span
                  className="relative inline-block text-[#1B1624] align-bottom"
                  layout
                  transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                >
                  {/* Fluid grid overlay: incoming and outgoing words animate simultaneously in the exact same cell */}
                  <span className="relative inline-grid overflow-hidden pb-1">
                    <AnimatePresence initial={false}>
                      <motion.span
                        key={ROTATING_WORDS[wordIndex]}
                        className="col-start-1 row-start-1 relative z-10 block whitespace-nowrap"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{
                          y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.45, ease: "easeOut" },
                        }}
                      >
                        {ROTATING_WORDS[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>

                  {/* Exact double curved doodle underline matching reference */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-[#5DCDF1] -z-0 pointer-events-none"
                    viewBox="0 0 160 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8C45 2.5 115 1.5 156 9"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 15C50 10.5 110 9.5 148 16"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </h1>
            </div>

            {/* Exact KF Section 1 Description */}
            <p className="text-base sm:text-lg text-[#54505B] leading-relaxed max-w-xl font-sans">
              {hero.description}
            </p>

            {/* Exact KF Section 1 CTA: Watch our story (Get a Free Marketing Audit is exclusively in the navbar per instructions) */}
            <div className="pt-2">
              <Link
                href="/about"
                className="ali-pill-btn bg-[#1B1624] hover:bg-[#2D2638] text-white font-semibold text-sm px-7 py-3.5 shadow-sm transition-all inline-flex items-center gap-2"
              >
                <span>{hero.ctaSecondary}</span>
              </Link>
            </div>

          </motion.div>

        </div>

        {/* Featured in Marquee Section (Exact KF Section 1 press bar with seamless infinite scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 pt-10 border-t border-[#ECE5E1]/60"
        >
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#76737C]">
              Featured in
            </span>
          </div>

          {/* Masked Marquee Wrapper with continuous animation */}
          <div
            className="marquee-container relative w-full max-w-5xl mx-auto overflow-hidden py-2"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            }}
          >
            <div className="marquee-content">
              {marqueeSet.map((logo, idx) => (
                <div
                  key={`m1-${idx}`}
                  className="flex items-center justify-center shrink-0"
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 sm:h-8 w-auto max-w-[140px] object-contain flex-shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    loading="eager"
                  />
                </div>
              ))}
            </div>

            <div className="marquee-content" aria-hidden="true">
              {marqueeSet.map((logo, idx) => (
                <div
                  key={`m2-${idx}`}
                  className="flex items-center justify-center shrink-0"
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 sm:h-8 w-auto max-w-[140px] object-contain flex-shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
