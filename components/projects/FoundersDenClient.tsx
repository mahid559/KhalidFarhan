"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EPISODES = [
  "Should we invest in this restaurant?",
  "A marketplace for turf — worth millions?",
  "Building a perfume brand from Bangladesh — Rivore",
  "৳3 lakh a month importing from China",
  "A laptop skin business — do we back it?",
  "Making money with Bangladeshi board games",
  "An unusual tea business — should we invest?",
  "A lakh-taka business from just renting a rooftop",
  "Building a small delivery business from scratch",
  "Should we invest in this clothing business?",
];

const PORTFOLIO = ["FurryGhor", "Rivore", "Mad Koffee", "OnlyPasta", "Diceymio"];

export default function FoundersDenClient() {
  const [modal, setModal] = useState<"sell" | "invest" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const openModal = (type: "sell" | "invest") => {
    setSubmitted(false);
    setModal(type);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="border-b border-[#ECE5E1] py-20 sm:py-28 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="display-l text-[52px] sm:text-[68px] lg:text-[80px] text-[#1B1624]">
              FOUNDER&apos;S DEN
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[18px] sm:text-[20px] leading-[1.6] text-[#54505B]">
              Talent is everywhere. We support today&apos;s builders and founders with our fund.
            </p>
            <div className="mt-10">
              <a
                href="#doors"
                className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#76737C] hover:text-[#FD976D]"
              >
                ↓ SCROLL
              </a>
            </div>
          </div>
        </section>

        {/* 2. TWO DOORS */}
        <section id="doors" className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              HOW THE DEN WORKS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#FD976D]">
                    OUR MAIN FOCUS
                  </span>
                  <h3 className="heading-lg mt-3 text-[28px] sm:text-[34px] text-[#1B1624]">
                    SELL YOUR BUSINESS
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#54505B]">
                    Built a profitable brand, content site, SaaS, or local business in Bangladesh or abroad and ready for an exit or acquisition? Pitch us directly.
                  </p>
                </div>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => openModal("sell")}
                    className="ali-pill-btn rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3.5 text-[15px] font-semibold cursor-pointer"
                  >
                    Sell your business →
                  </button>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#ECE5E1] bg-[#1B1624] text-white p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#FD976D]">
                    CO-INVEST
                  </span>
                  <h3 className="heading-lg mt-3 text-[28px] sm:text-[34px] text-white">
                    INVEST WITH KHALID FARHAN
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-white/80">
                    Register your interest to invest alongside Founder&apos;s Den in vetted Bangladeshi and global businesses.
                  </p>
                </div>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => openModal("invest")}
                    className="ali-pill-btn rounded-full bg-white hover:bg-[#FD976D] text-[#1B1624] px-7 py-3.5 text-[15px] font-semibold cursor-pointer"
                  >
                    Invest with us →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INSIDE THE DEN */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              INSIDE THE DEN
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EPISODES.map((title, idx) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-[#ECE5E1] bg-white p-6 flex items-center justify-between gap-4 hover:border-[#FD976D] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="ledger-num text-[24px] text-[#FD976D] w-7">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] font-bold text-[#1B1624]">{title}</span>
                  </div>
                  <span className="text-[13px] font-semibold text-[#76737C] shrink-0">▶ Episode</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PORTFOLIO */}
        <section className="border-b border-[#ECE5E1] py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C] mb-8">
              PORTFOLIO
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {PORTFOLIO.map((brand) => (
                <div
                  key={brand}
                  className="rounded-full border border-[#ECE5E1] bg-white px-7 py-3 text-[17px] font-bold text-[#1B1624]"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. BOTTOM CTA */}
        <section className="bg-[#F3EDE9]/60 py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[48px] text-[#1B1624]">
              PICK YOUR DOOR
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => openModal("sell")}
                className="ali-pill-btn rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 text-[15px] font-semibold cursor-pointer"
              >
                Sell your business →
              </button>
              <button
                type="button"
                onClick={() => openModal("invest")}
                className="ali-pill-btn rounded-full bg-[#1B1624] hover:bg-[#2D2638] text-white px-8 py-3.5 text-[15px] font-semibold cursor-pointer"
              >
                Invest with us →
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-[28px] bg-white p-7 sm:p-9 text-[#1B1624] shadow-xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="heading-lg text-[26px]">
                {modal === "sell" ? "SELL IT TO THE DEN" : "INVEST ALONGSIDE US"}
              </h3>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-full bg-[#F3EDE9] px-3 py-1 text-[13px] font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>

            {modal === "sell" ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  required
                  placeholder="Your name *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <input
                  type="text"
                  required
                  placeholder="Business name / URL *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <input
                  type="text"
                  required
                  placeholder="Monthly revenue & asking price *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <button
                  type="submit"
                  className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3 text-[14px] font-semibold cursor-pointer"
                >
                  Submit business →
                </button>
              </form>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-3.5"
              >
                <input
                  type="text"
                  required
                  placeholder="Your name *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone (with country code) *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <input
                  type="text"
                  required
                  placeholder="Where are you based? *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <select
                  required
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                >
                  <option value="">How much are you looking to invest? *</option>
                  <option value="under-10l">Under ৳10 lakh</option>
                  <option value="10-50l">৳10–50 lakh</option>
                  <option value="50l-1cr">৳50 lakh – 1 crore</option>
                  <option value="1cr+">৳1 crore+</option>
                </select>
                <textarea
                  required
                  rows={2}
                  placeholder="Tell me more about you *"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                />
                <button
                  type="submit"
                  className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3 text-[14px] font-semibold cursor-pointer"
                >
                  Register my interest →
                </button>
              </form>
            )}

            {submitted && (
              <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3 text-[13px]">
                Thank you! Your submission has been received.
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

