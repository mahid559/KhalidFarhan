"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { KF_DATA } from "@/data/content";

export default function ConversationCta() {
  const { conversation } = KF_DATA;

  return (
    <section className="bg-[#F9F6F3] py-16 sm:py-24 border-b border-[#ECE5E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white text-[#1B1624] rounded-[36px] py-16 sm:py-20 px-6 sm:px-12 text-center space-y-8 shadow-xs border border-[#ECE5E1] hover:border-[#FD976D] hover:shadow-[0_20px_35px_-10px_rgba(253,151,109,0.35)] transition-all"
        >
          <h2 className="display-l text-3xl sm:text-5xl lg:text-6xl text-[#1B1624] tracking-tight leading-tight">
            {conversation.title}
          </h2>

          <div>
            <Link
              href={conversation.href}
              className="ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] font-bold text-base px-8 py-4 shadow-sm transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span>{conversation.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#1B1624]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
