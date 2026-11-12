import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Press, Khalid Farhan | Khalid Farhan",
  description:
    "Press mentions, media kit, and contact information for journalists and media.",
};

const OUTLETS = [
  { name: "Prothom Alo", logo: "/logos/press/prothom-alo.svg" },
  { name: "The Daily Star", logo: "/logos/press/daily-star.svg" },
  { name: "Jamuna TV", logo: "/logos/press/jamuna-tv.svg" },
  { name: "Channel I", logo: "/logos/press/channel-i.png" },
  { name: "New Age Bangladesh", logo: "/logos/press/new-age.png" },
  { name: "Niche Pursuits", logo: "/logos/press/niche-pursuits.jpg" },
  { name: "Search Engine Journal", logo: "/logos/press/search-engine-journal.png" },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              PRESS
            </p>
            <h1 className="display-l mt-4 text-[46px] sm:text-[60px] lg:text-[68px] text-[#1B1624]">
              PRESS &amp; MEDIA.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
              Press mentions, media kit, and information for journalists. For press enquiries, email{" "}
              <a
                href="mailto:press@khalidfarhan.com"
                className="font-semibold text-[#1B1624] underline hover:text-[#FD976D]"
              >
                press@khalidfarhan.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* 2. OUTLETS */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-lg text-[28px] sm:text-[36px] text-[#1B1624] mb-8">
              FEATURED IN
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {OUTLETS.map((o) => (
                <div
                  key={o.name}
                  className="rounded-[20px] border border-[#ECE5E1] bg-white p-7 flex flex-col items-center justify-center gap-4"
                >
                  <img
                    src={o.logo}
                    alt={o.name}
                    className="h-9 max-w-[150px] w-auto object-contain"
                  />
                  <span className="text-[13px] font-semibold text-[#76737C]">{o.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MEDIA KIT & BIO */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FD976D]">
                MEDIA KIT
              </p>
              <h2 className="heading-xl text-[32px] sm:text-[42px] text-[#1B1624]">
                LOGOS, BIO, AND ASSETS.
              </h2>
              <p className="text-[16px] leading-relaxed text-[#54505B]">
                Our media kit includes logos, headshots, approved biography text, and brand guidelines. Available on request. Email{" "}
                <a
                  href="mailto:press@khalidfarhan.com"
                  className="font-semibold text-[#1B1624] underline hover:text-[#FD976D]"
                >
                  press@khalidfarhan.com
                </a>
                .
              </p>

              <div className="rounded-[24px] border border-[#ECE5E1] bg-white p-7 mt-4">
                <h3 className="text-[15px] font-bold text-[#1B1624]">
                  Khalid Farhan, Short Bio (50 words)
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#54505B]">
                  Khalid Farhan is the founder of khalidfarhan.com, a digital marketing agency based in Dublin, Ireland. He has worked with 400+ clients across 10+ countries over the last 12 years, with most in Ireland, the UK, and Bangladesh. He also runs the 2026 Challenge, a programme with 5,500+ members building online income.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[28px] border border-[#ECE5E1] bg-[#1B1624] text-white p-8 space-y-4">
              <h3 className="heading-lg text-[26px] text-white">Press contact</h3>
              <p className="text-[15px] text-white/80">
                Email:{" "}
                <a
                  href="mailto:press@khalidfarhan.com"
                  className="underline hover:text-[#FD976D]"
                >
                  press@khalidfarhan.com
                </a>
              </p>
              <p className="text-[15px] text-white/80">Response time: within 24 hours</p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3 rounded-full text-[14px] font-semibold"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
