"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { KF_DATA } from "@/data/content";

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
            <h2 className="heading-xl text-3xl sm:text-4xl lg:text-5xl text-[#1B1624] tracking-tight">
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
              className="group ali-card ali-article-card flex flex-col justify-between p-8 sm:p-12 bg-white hover:bg-[#FD976D] text-[#1B1624] rounded-[32px] border border-[#ECE5E1] hover:border-[#FD976D] hover:shadow-[0_20px_35px_-10px_rgba(253,151,109,0.35)] hover:-translate-y-1.5 w-full shadow-2xs"
            >
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#FD976D] group-hover:text-[#1B1624] transition-colors duration-300">
                    {articles.lead.cat}
                  </span>
                  <span className="text-[#76737C] group-hover:text-[#1B1624]/60 transition-colors duration-300">•</span>
                  <span className="text-[#76737C] group-hover:text-[#1B1624]/80 transition-colors duration-300">{articles.lead.date}</span>
                  <span className="text-[#76737C] group-hover:text-[#1B1624]/60 transition-colors duration-300">•</span>
                  <span className="text-[#76737C] group-hover:text-[#1B1624]/80 transition-colors duration-300 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {articles.lead.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1624] group-hover:text-[#1B1624] transition-colors duration-300 leading-tight">
                  {articles.lead.title}
                </h3>

                <p className="text-sm sm:text-base text-[#54505B] group-hover:text-[#1B1624]/85 transition-colors duration-300 leading-relaxed max-w-xl">
                  {articles.lead.excerpt}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#ECE5E1] group-hover:border-[#1B1624]/20 flex items-center gap-2 text-sm font-semibold text-[#1B1624] group-hover:text-[#1B1624] transition-colors duration-300">
                <span>{articles.lead.readText}</span>
                <ArrowRight className="w-4 h-4 text-[#FD976D] group-hover:text-[#1B1624] transition-all duration-300 group-hover:translate-x-1.5" />
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
                  className="group ali-card ali-article-card w-full p-6 sm:p-7 bg-white hover:bg-[#FD976D] border border-[#ECE5E1] hover:border-[#FD976D] rounded-[24px] flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold uppercase tracking-wider text-[#FD976D] group-hover:text-[#1B1624] transition-colors duration-300">
                        {art.cat}
                      </span>
                      <span className="text-[#76737C] group-hover:text-[#1B1624]/60 transition-colors duration-300">•</span>
                      <span className="text-[#76737C] group-hover:text-[#1B1624]/80 transition-colors duration-300 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {art.readTime}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-[#1B1624] group-hover:text-[#1B1624] transition-colors duration-300 leading-snug">
                      {art.title}
                    </h4>
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <div className="w-8 h-8 rounded-full bg-[#F9F6F3] border border-[#ECE5E1] flex items-center justify-center group-hover:bg-[#1B1624] group-hover:border-[#1B1624] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-[#1B1624] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
