"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQS = [
  {
    q: "Is it really free?",
    a: "Yes. Shobdo is completely free for Mac and Windows with no account required and no usage limits.",
  },
  {
    q: "Which computers does it run on?",
    a: "Mac (Apple Silicon & Intel, v1.2) and Windows (64-bit, Windows 10 & 11).",
  },
  {
    q: "Windows says “Windows protected your PC”. Is that safe?",
    a: "Yes. That SmartScreen prompt appears for new independent desktop apps that haven't been code-signed with an expensive EV certificate yet. Click 'More info' and then 'Run anyway'.",
  },
  {
    q: "Where do my recordings go?",
    a: "In Offline mode, everything runs locally on your computer and audio never leaves your device. In Cloud mode, audio is sent directly using your own Google Gemini API key.",
  },
  {
    q: "Does it work in every app?",
    a: "Yes. Hold the hotkey, speak in Bangla or English, and let go — Shobdo types the words into whichever app or text box your cursor is currently in.",
  },
  {
    q: "Can I change the keys?",
    a: "Yes. You can customise your push-to-talk hotkey inside Shobdo's settings at any time.",
  },
];

export default function ShobdoClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="border-b border-[#ECE5E1] py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FD976D]">
                SHOBDO
              </p>
              <h1 className="display-l mt-3 text-[44px] sm:text-[56px] lg:text-[62px] text-[#1B1624]">
                Bangla voice typing, free on Mac and Windows.
              </h1>
              <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
                Hold a key, speak in Bangla or English, let go. The words appear wherever you were typing.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setNotice("Download for Mac (v1.2 · Apple Silicon & Intel) started.")}
                  className="ali-pill-btn rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3.5 text-left transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="text-[15px] font-bold">Download for Mac</div>
                  <div className="text-[12px] text-[#1B1624]/80">v1.2 · Apple Silicon &amp; Intel</div>
                </button>
                <button
                  type="button"
                  onClick={() => setNotice("Download for Windows (64-bit · Windows 10 & 11) started.")}
                  className="ali-pill-btn rounded-full bg-[#1B1624] hover:bg-[#2D2638] text-white px-7 py-3.5 text-left transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="text-[15px] font-bold">Download for Windows</div>
                  <div className="text-[12px] text-white/75">64-bit · Windows 10 &amp; 11</div>
                </button>
              </div>

              {notice && (
                <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 px-4 py-2.5 text-[14px] text-[#1B1624]">
                  {notice}
                </div>
              )}

              <p className="mt-5 text-[13px] font-medium text-[#76737C]">
                Free · no account · works offline
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[546px] overflow-hidden rounded-[24px] border border-[#ECE5E1] bg-white p-3 shadow-sm">
                <img
                  src="/shobdo/app-home.webp"
                  alt="Shobdo desktop app interface"
                  className="w-full h-auto rounded-[16px] block object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. HOW IT WORKS */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              HOW IT WORKS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Hold a key",
                  desc: "Press and hold your shortcut key anywhere — Docs, Slack, Gmail, WhatsApp Web, or your code editor.",
                },
                {
                  num: "02",
                  title: "Speak",
                  desc: "Talk naturally in Bangla, English, or a mix of both.",
                },
                {
                  num: "03",
                  title: "Let go",
                  desc: "Release the key and clean text appears right where your cursor was.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-8"
                >
                  <div className="ledger-num text-[34px] leading-none text-[#FD976D]">
                    {step.num}
                  </div>
                  <h3 className="mt-4 text-[20px] font-bold text-[#1B1624]">{step.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[#54505B]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TWO MODES */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              TWO MODES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-[24px] border border-[#ECE5E1] bg-white p-8">
                <h3 className="text-[22px] font-bold text-[#1B1624]">Offline (no key needed)</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#54505B]">
                  Runs completely on your Mac or Windows PC. No internet connection needed, no API key required, and your voice never leaves your device.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#ECE5E1] bg-white p-8">
                <h3 className="text-[22px] font-bold text-[#1B1624]">Cloud (Google Gemini key)</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#54505B]">
                  Plug in your own Google Gemini API key for fast cloud transcription with smart Bangla/English formatting and punctuation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[820px] mx-auto px-4 sm:px-6">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-8">
              QUESTIONS
            </h2>

            <div className="space-y-3">
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={item.q}
                    className="rounded-[20px] border border-[#ECE5E1] bg-white overflow-hidden transition-colors hover:border-[#FD976D]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-bold text-[#1B1624]">{item.q}</span>
                      <span className="text-[20px] leading-none text-[#54505B] shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-[15px] leading-relaxed text-[#54505B]">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. BOTTOM DOWNLOAD CTA */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[48px] text-white">
              DOWNLOAD SHOBDO FREE
            </h2>
            <p className="mt-3 text-[16px] text-white/75">
              Free · no account · works offline
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setNotice("Download for Mac (v1.2 · Apple Silicon & Intel) started.")}
                className="ali-pill-btn rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Download for Mac
              </button>
              <button
                type="button"
                onClick={() => setNotice("Download for Windows (64-bit · Windows 10 & 11) started.")}
                className="ali-pill-btn rounded-full bg-white hover:bg-[#F3EDE9] text-[#1B1624] px-8 py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Download for Windows
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

