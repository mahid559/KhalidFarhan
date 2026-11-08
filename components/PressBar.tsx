"use client";

import React from "react";
import { motion } from "framer-motion";
import { KF_DATA } from "@/data/content";

export default function PressBar() {
  const { ourClients } = KF_DATA;

  return (
    <section className="bg-[#F9F6F3] text-[#1B1624] py-16 sm:py-20 border-b border-[#ECE5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No 'Portfolio' label per instructions) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#ECE5E1]"
        >
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1624]">
              {ourClients.title}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#54505B] max-w-lg font-sans">
            {ourClients.subtitle}
          </p>
        </motion.div>

        {/* Lead Client Logos (8 Featured Clients) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="py-12 border-b border-[#ECE5E1]"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-[#76737C] mb-8 text-center md:text-left">
            Featured Partners
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 sm:gap-10">
            {ourClients.leadLogos.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-2"
                title={client.name}
              >
                <span
                  role="img"
                  aria-label={client.name}
                  className="oc-mark cursor-pointer"
                  style={{
                    width: `${Math.round(client.width * 1.05)}px`,
                    height: `${Math.round(client.height * 1.05)}px`,
                    WebkitMaskImage: `url(/logos/wall/${client.file})`,
                    maskImage: `url(/logos/wall/${client.file})`,
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Client Engagements (28 More Clients inside Ali Abdaal White Container Card) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-[#76737C] mb-8 text-center md:text-left">
            Additional Client Engagements
          </div>
          <div className="bg-white border border-[#ECE5E1] rounded-[28px] p-8 sm:p-12 shadow-2xs">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-9">
              {ourClients.restLogos.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center p-1.5"
                  title={client.name}
                >
                  <span
                    role="img"
                    aria-label={client.name}
                    className="oc-mark cursor-pointer"
                    style={{
                      width: `${Math.round(client.width * 0.85)}px`,
                      height: `${Math.round(client.height * 0.85)}px`,
                      WebkitMaskImage: `url(/logos/wall/${client.file})`,
                      maskImage: `url(/logos/wall/${client.file})`,
                    }}
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
