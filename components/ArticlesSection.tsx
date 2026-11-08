"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { KF_DATA } from "@/data/content";

const articleHoverClasses = [
  "hover-highlight-yellow",
  "hover-highlight-blue",
  "hover-highlight-purple",
];

export default function ArticlesSection() {
  const { articles } = KF_DATA;

  return (
    <section className="bg-[#F9F6F3] py-20 sm:py-24 border-b border-[#ECE5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No unauthorized 'Writing' label) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1624] tracking-tight">
              {articles.title}
            </h2>
          </div>

          <Link
            href="/insights"
            className="ali-pill-btn bg-white hover:bg-[#F3EDE9] text-[#1B1624] border border-[#ECE5E1] font-semibold text-xs sm:text-sm px-6 py-3 transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>{articles.cta}</span>
          </Link>
        </motion.div>

        {/* Articles Grid: 7 cols lead article on left, 5 cols 3-item list on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Lead Article (Dark featured container matching Ali Abdaal's feature card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex"
          >
            <Link
              href={articles.lead.href}
              className="group ali-card flex flex-col justify-between p-8 sm:p-12 !bg-[#1B1624] text-white rounded-[32px] border border-[#2D2638] hover:border-[#FD976D] w-full"
            >
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#FDD46B]">
                    {articles.lead.cat}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">{articles.lead.date}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {articles.lead.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#FD976D] transition-colors leading-tight">
                  {articles.lead.title}
                </h3>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-xl">
                  {articles.lead.excerpt}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#FD976D] transition-colors">
                <span>{articles.lead.readText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>
          </motion.div>

          {/* List of 3 Articles */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {articles.list.map((art, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex"
              >
                <Link
                  href={art.href}
                  className={`group ali-card ${articleHoverClasses[idx % articleHoverClasses.length]} w-full p-6 sm:p-7 bg-white border border-[#ECE5E1] rounded-[24px] flex flex-col justify-between space-y-3`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold uppercase tracking-wider text-[#FD976D]">
                        {art.cat}
                      </span>
                      <span className="text-[#76737C]">•</span>
                      <span className="text-[#76737C] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {art.readTime}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1B1624] group-hover:text-[#1B1624] transition-colors leading-snug">
                      {art.title}
                    </h4>
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <div className="w-8 h-8 rounded-full bg-[#F9F6F3] border border-[#ECE5E1] flex items-center justify-center group-hover:bg-[#1B1624] group-hover:border-[#1B1624] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
