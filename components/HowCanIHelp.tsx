"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Target, Zap } from "lucide-react";
import { KF_DATA } from "@/data/content";

const pillarConfig = {
  "get-found": {
    icon: Search,
    hoverClass: "hover-orange",
    iconBg: "bg-[#FD976D]/15 text-[#FD976D] group-hover:bg-white group-hover:text-[#FD976D]",
    btnHover: "group-hover/link:bg-[#1B1624] group-hover/link:border-[#1B1624] group-hover/link:text-white",
  },
  "get-leads": {
    icon: Target,
    hoverClass: "hover-purple",
    iconBg: "bg-[#C9B1FB]/20 text-[#7C3AED] group-hover:bg-white group-hover:text-[#7C3AED]",
    btnHover: "group-hover/link:bg-[#1B1624] group-hover/link:border-[#1B1624] group-hover/link:text-white",
  },
  "turn-visitors": {
    icon: Zap,
    hoverClass: "hover-yellow",
    iconBg: "bg-[#FDD46B]/25 text-[#B45309] group-hover:bg-white group-hover:text-[#B45309]",
    btnHover: "group-hover/link:bg-[#1B1624] group-hover/link:border-[#1B1624] group-hover/link:text-white",
  },
};

export default function HowCanIHelp() {
  const { whatWeDo } = KF_DATA;

  return (
    <section className="bg-[#F9F6F3] py-20 sm:py-24 border-b border-[#ECE5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No unauthorized 'Capabilities' label) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1624] tracking-tight">
            What we do
          </h2>
        </motion.div>

        {/* 3 Pillars Grid - Ali Abdaal Category Cards Layout with exact hover mechanics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {whatWeDo.items.map((pillar, idx) => {
            const config = pillarConfig[pillar.id as keyof typeof pillarConfig] || pillarConfig["get-found"];
            const Icon = config.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className={`group ali-pillar-card ${config.hoverClass} flex flex-col justify-between p-8 sm:p-9 bg-white border border-[#ECE5E1] rounded-[28px]`}
              >
                <div className="space-y-6">
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${config.iconBg}`}>
                    <Icon className="w-6 h-6 stroke-[2] transition-colors" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1624] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#54505B] group-hover:text-[#1B1624] leading-relaxed font-sans transition-colors">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Exact KF Service Links */}
                  <div className="pt-4 border-t border-[#ECE5E1] group-hover:border-[#1B1624]/15 space-y-2 transition-colors">
                    {pillar.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="group/link flex items-center justify-between p-3 rounded-xl hover:bg-white/90 border border-transparent hover:border-[#ECE5E1] transition-all text-sm font-semibold text-[#1B1624]"
                      >
                        <span className="transition-colors group-hover/link:text-[#FD976D]">
                          {link.label}
                        </span>
                        <div className={`w-8 h-8 rounded-full bg-[#F9F6F3] border border-[#ECE5E1] flex items-center justify-center transition-all duration-200 ${config.btnHover}`}>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
