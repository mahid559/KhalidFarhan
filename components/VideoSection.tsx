"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { KF_DATA } from "@/data/content";

export default function VideoSection() {
  const { youtube } = KF_DATA;

  // Combine lead and items into a complete video carousel list
  const allVideos = [youtube.lead, ...youtube.items];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? allVideos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === allVideos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="videos" className="bg-[#F9F6F3] py-20 sm:py-24 border-b border-[#ECE5E1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1624] tracking-tight">
              <span>On my </span>
              <span className="relative inline-block text-[#1B1624]">
                <span className="relative z-10">YouTube channel</span>
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-[#FDD46B] -z-0"
                  viewBox="0 0 160 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C40 3.5 115 2.5 155 12"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#54505B] font-sans">
              {youtube.subtitle}
            </p>
          </div>

          {/* Right Header: Round Controls + Subscribe Pill */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous video"
                className="cc-carousel-btn shadow-xs"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next video"
                className="cc-carousel-btn shadow-xs"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href={youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ali-pill-btn bg-white hover:bg-[#F9F6F3] text-[#1B1624] border border-[#ECE5E1] font-semibold text-xs sm:text-sm px-5 py-3 transition-all inline-flex items-center gap-2"
            >
              <span>{youtube.cta}</span>
            </a>
          </div>
        </motion.div>

        {/* Video Display: Featured Lead + Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Featured Video Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <a
              href={allVideos[currentIndex].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group ali-video-card block bg-white hover:bg-[#FD976D] border border-[#ECE5E1] hover:border-[#FD976D] rounded-[28px] overflow-hidden p-4 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="relative aspect-video w-full rounded-[20px] overflow-hidden bg-black/5 mb-5">
                <Image
                  src={allVideos[currentIndex].thumbnail}
                  alt={allVideos[currentIndex].title}
                  fill
                  unoptimized
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#1B1624] shadow-lg group-hover:scale-110 group-hover:bg-[#1B1624] group-hover:text-white transition-all duration-300">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 px-1 pb-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FD976D] group-hover:text-[#1B1624] transition-colors duration-300">
                  {allVideos[currentIndex].guest}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1624] leading-snug group-hover:text-[#1B1624] transition-colors duration-300">
                  {allVideos[currentIndex].title}
                </h3>
                <div className="text-xs text-[#76737C] group-hover:text-[#1B1624]/80 transition-colors duration-300">
                  {allVideos[currentIndex].date}
                </div>
              </div>
            </a>
          </motion.div>

          {/* Side Video Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {allVideos.map((vid, idx) => {
              const isActive = idx === currentIndex;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group ali-video-card flex flex-col sm:flex-row gap-4 p-4 sm:p-5 cursor-pointer rounded-[24px] border transition-all duration-300 hover:bg-[#FD976D] hover:border-[#FD976D] hover:shadow-lg hover:-translate-y-1 ${
                    isActive
                      ? "bg-white border-[#FD976D] shadow-md -translate-y-1"
                      : "bg-white border-[#ECE5E1]"
                  }`}
                >
                  <div className="relative w-full sm:w-48 h-32 sm:h-28 shrink-0 rounded-2xl overflow-hidden bg-black/5">
                    <Image
                      src={vid.thumbnail}
                      alt={vid.title}
                      fill
                      unoptimized
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                        isActive
                          ? "bg-[#FD976D] text-white scale-110 group-hover:bg-[#1B1624]"
                          : "bg-white/95 text-[#1B1624] group-hover:scale-110 group-hover:bg-[#1B1624] group-hover:text-white"
                      }`}>
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between py-1 space-y-2">
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#FD976D] group-hover:text-[#1B1624] transition-colors duration-300">
                        {vid.guest}
                      </div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#1B1624] leading-snug group-hover:text-[#1B1624] transition-colors duration-300">
                        {vid.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#76737C] group-hover:text-[#1B1624]/80 transition-colors duration-300">
                      <span>{vid.date}</span>
                      <a
                        href={vid.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#FD976D] group-hover:text-[#1B1624] font-semibold hover:underline transition-colors duration-300"
                      >
                        Watch on YouTube →
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
