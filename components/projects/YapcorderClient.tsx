"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PODCASTS = [
  { id: "SrJT1Y5aCsw", title: "Remote Podcast Episode 1" },
  { id: "i1bcI3xHzmk", title: "Remote Podcast Episode 2" },
  { id: "ODmZMVFl_kk", title: "Remote Podcast Episode 3" },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Quick check",
    desc: "Verify mic, camera, and levels before hitting record.",
    img: "/media/yapcorder/check-v3.png",
  },
  {
    step: "02",
    title: "Waiting room",
    desc: "Send one link — guests join right in their browser, no app needed.",
    img: "/media/yapcorder/waiting-room-v3.png",
  },
  {
    step: "03",
    title: "Record locally",
    desc: "Each participant records locally in full quality even on weak Wi-Fi.",
    img: "/media/yapcorder/studio-v3.png",
  },
  {
    step: "04",
    title: "Download tracks",
    desc: "Separate audio and video files ready for editing as soon as you finish.",
    img: "/media/yapcorder/files-v3.png",
  },
];

const FAQS = [
  {
    q: "How is Yapcorder different from Zoom or Meet?",
    a: "Zoom compresses your video and drops frames whenever someone's internet dips. Yapcorder records locally on each person's device and uploads in the background, so bad Wi-Fi never ruins your episode.",
  },
  {
    q: "Do my guests need an account or an app?",
    a: "No. They click your invite link, allow mic/camera in their browser, and join in seconds.",
  },
  {
    q: "What happens if a guest closes the tab early?",
    a: "Yapcorder saves and uploads chunks continuously during the call, so what was recorded up to that moment is preserved.",
  },
  {
    q: "How does the 60-minute free trial work?",
    a: "Enter your email to get 60 minutes of 1080p recording with no card and no watermark.",
  },
  {
    q: "Can I cancel my monthly plan anytime?",
    a: "Yes. Both Starter ($2/month) and Pro ($10/month) are month-to-month with one-click cancellation.",
  },
];

export default function YapcorderClient() {
  const [starterEmail, setStarterEmail] = useState("");
  const [proEmail, setProEmail] = useState("");
  const [trialEmail, setTrialEmail] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="border-b border-[#ECE5E1] py-14 sm:py-20 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FD976D]">
              YAPCORDER
            </p>
            <h1 className="display-l mt-3 text-[44px] sm:text-[58px] lg:text-[66px] text-[#1B1624] max-w-4xl mx-auto">
              RECORD REMOTE PODCASTS IN FULL QUALITY.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
              Local audio and video recording for hosts and guests. Built so a recording does not go missing, even on bad internet.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#try"
                className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
              >
                Try 60 minutes free →
              </a>
              <Link
                href="/yapcorder/login"
                className="ali-pill-btn inline-flex items-center bg-white hover:bg-[#1B1624] text-[#1B1624] hover:text-white border border-[#ECE5E1] px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all"
              >
                Sign in
              </Link>
            </div>

            <div className="mt-12 mx-auto max-w-[1098px] overflow-hidden rounded-[28px] border border-[#ECE5E1] bg-white p-3 shadow-sm">
              <img
                src="/media/yapcorder/studio-v3.png"
                alt="Yapcorder recording studio interface"
                className="w-full h-auto rounded-[20px] block object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. PODCASTS I RECORDED THIS WAY */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              PODCASTS I RECORDED THIS WAY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PODCASTS.map((vid) => (
                <div
                  key={vid.id}
                  className="overflow-hidden rounded-[22px] border border-[#ECE5E1] bg-black aspect-video"
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${vid.id}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              HOW IT WORKS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {WORKFLOW.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[24px] border border-[#ECE5E1] bg-white p-6 sm:p-8"
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="ledger-num text-[28px] text-[#FD976D]">{item.step}</span>
                    <h3 className="text-[20px] font-bold text-[#1B1624]">{item.title}</h3>
                  </div>
                  <p className="text-[15px] text-[#54505B] mb-5">{item.desc}</p>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto rounded-[16px] border border-[#ECE5E1] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. RELIABILITY & GUEST UX */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-8 sm:p-12">
              <h2 className="heading-lg text-[28px] sm:text-[38px] text-[#1B1624]">
                BUILT SO A RECORDING DOES NOT GO MISSING
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#54505B]">
                Every second of audio and video is captured locally and backed up continuously in chunks. Even if a browser crashes or Wi-Fi drops mid-sentence, your tracks stay safe.
              </p>
            </div>

            <div>
              <h2 className="heading-lg text-[28px] sm:text-[38px] text-[#1B1624] mb-6">
                EASY FOR YOUR GUESTS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[24px] border border-[#ECE5E1] bg-white p-5">
                  <img
                    src="/media/yapcorder/guest-waiting-v3.png"
                    alt="Yapcorder guest waiting room"
                    className="w-full h-auto rounded-[16px] border border-[#ECE5E1]"
                  />
                </div>
                <div className="rounded-[24px] border border-[#ECE5E1] bg-white p-5">
                  <img
                    src="/media/yapcorder/guest-done-v3.png"
                    alt="Yapcorder guest upload complete"
                    className="w-full h-auto rounded-[16px] border border-[#ECE5E1]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PRICING */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-center text-[32px] sm:text-[44px] text-[#1B1624] mb-12">
              TWO PLANS, BOTH MONTHLY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Starter */}
              <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-8 flex flex-col justify-between">
                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#76737C]">
                    STARTER
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="ledger-num text-[44px] text-[#1B1624]">$2</span>
                    <span className="text-[15px] text-[#54505B]">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 text-[15px] text-[#54505B]">
                    <li>✓ 2 hours recording / month</li>
                    <li>✓ Up to 2 people</li>
                    <li>✓ 720p local recording</li>
                    <li>✓ 7-day file storage</li>
                  </ul>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (starterEmail) setNotice(`Starter ($2/mo) checkout started for ${starterEmail}.`);
                  }}
                  className="mt-8 space-y-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={starterEmail}
                    onChange={(e) => setStarterEmail(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                  />
                  <button
                    type="submit"
                    className="ali-pill-btn w-full rounded-full bg-[#1B1624] hover:bg-[#2D2638] text-white py-3 text-[14px] font-semibold cursor-pointer"
                  >
                    GET STARTER FOR $2
                  </button>
                </form>
              </div>

              {/* Pro */}
              <div className="rounded-[28px] border-2 border-[#FD976D] bg-white p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#FD976D]">
                    PRO
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="ledger-num text-[44px] text-[#1B1624]">$10</span>
                    <span className="text-[15px] text-[#54505B]">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 text-[15px] text-[#54505B]">
                    <li>✓ 10 hours recording / month</li>
                    <li>✓ Up to 4 people</li>
                    <li>✓ 1080p local recording</li>
                    <li>✓ 30-day file storage</li>
                  </ul>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (proEmail) setNotice(`Pro ($10/mo) checkout started for ${proEmail}.`);
                  }}
                  className="mt-8 space-y-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={proEmail}
                    onChange={(e) => setProEmail(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                  />
                  <button
                    type="submit"
                    className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3 text-[14px] font-semibold cursor-pointer"
                  >
                    GET PRO FOR $10
                  </button>
                </form>
              </div>
            </div>

            {notice && (
              <div className="mt-6 mx-auto max-w-xl rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3.5 text-center text-[14px] text-[#1B1624]">
                {notice}
              </div>
            )}
          </div>
        </section>

        {/* 6. FAQ */}
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
                    className="rounded-[20px] border border-[#ECE5E1] bg-white overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-bold text-[#1B1624]">{item.q}</span>
                      <span className="text-[20px] leading-none text-[#54505B]">
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

        {/* 7. BOTTOM TRIAL FORM */}
        <section id="try" className="bg-[#1B1624] text-white py-16 sm:py-24 text-center">
          <div className="max-w-[600px] mx-auto px-4 sm:px-6">
            <h2 className="heading-xl text-[34px] sm:text-[46px] text-white">
              TRY IT ON YOUR NEXT EPISODE
            </h2>
            <p className="mt-3 text-[16px] text-white/75">
              60 minutes free, in 1080p. No card, no watermark.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (trialEmail) setNotice(`Free 60-minute trial link sent to ${trialEmail}.`);
              }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={trialEmail}
                onChange={(e) => setTrialEmail(e.target.value)}
                className="flex-1 rounded-full border border-white/20 bg-white px-5 py-3.5 text-[15px] text-[#1B1624] focus:outline-none"
              />
              <button
                type="submit"
                className="ali-pill-btn rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3.5 text-[14px] font-semibold cursor-pointer shrink-0"
              >
                START MY FREE TRIAL
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

