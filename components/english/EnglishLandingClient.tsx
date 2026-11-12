"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ROTATING_WORDS = ["interviews", "IELTS", "freelancing", "office", "everyday"];

const PRESS_LOGOS = [
  { src: "/logos/press/prothom-alo.svg", alt: "Prothom Alo" },
  { src: "/logos/press/daily-star.svg", alt: "The Daily Star" },
  { src: "/logos/press/jamuna-tv.svg", alt: "Jamuna TV" },
  { src: "/logos/press/channel-i.png", alt: "Channel I" },
  { src: "/logos/press/new-age.png", alt: "New Age Bangladesh" },
  { src: "/logos/press/niche-pursuits.jpg", alt: "Niche Pursuits" },
  { src: "/logos/press/search-engine-journal.png", alt: "Search Engine Journal" },
];

const CLIENT_LOGOS = [
  { src: "/logos/clients/grameenphone.svg", alt: "Grameenphone" },
  { src: "/logos/clients/teletalk.png", alt: "Teletalk" },
  { src: "/logos/clients/taptapsend.png", alt: "Taptap Send" },
  { src: "/logos/clients/shanta-holdings.svg", alt: "Shanta Holdings" },
  { src: "/logos/clients/hostinger-wordmark.svg", alt: "Hostinger" },
  { src: "/logos/clients/notion.svg", alt: "Notion" },
  { src: "/logos/clients/hatil.svg", alt: "Hatil" },
  { src: "/logos/clients/skybuy.svg", alt: "Skybuy BD" },
];

const SCREENS = [
  {
    src: "/english/home/test-result-v2.png",
    alt: "টেস্টের আসল রেজাল্ট স্ক্রিন",
    title: "আপনার রেজাল্ট",
    caption: "লেভেল, স্কোর, আর আপনার কথা শুনে একটা টিপস।",
  },
  {
    src: "/english/home/tutor-v2.png",
    alt: "লেসনে টিচারের ভুল ধরিয়ে দেওয়ার আসল স্ক্রিন",
    title: "পার্সোনাল টিচার",
    caption: "আগে ভুলের জায়গাটা দেখায়। দ্বিতীয়বারে ঠিক বাক্যটা বলে দেয়।",
  },
  {
    src: "/english/home/today-v2.png",
    alt: "অ্যাপের আসল হোম স্ক্রিন",
    title: "আপনার হোম",
    caption: "আজকের লেসন, স্ট্রিক, লিগ, সব এক জায়গায়।",
  },
];

const STATS = [
  { num: "2,367", label: "লেসন লাইভ" },
  { num: "24", label: "লেভেল, A1 থেকে B2" },
  { num: "2,221", label: "জন লেভেল টেস্ট দিয়েছেন" },
  { num: "20", label: "মিনিট, প্রতিদিন" },
];

const FAQS = [
  {
    q: "কত দিনে ইংরেজি শিখে ফেলবো?",
    a: "Cambridge-এর হিসাবে শূন্য থেকে মাঝারি লেভেলে যেতে কয়েকশো ঘণ্টা লাগে। আমরা যেভাবে সবকিছু সাজিয়েছি, তাতে একদম শূন্য থেকে শুরু করলে দুই বছরের মধ্যে আপনি সুন্দর করে ইংরেজি বলতে পারবেন। বেশিরভাগ মানুষ শূন্য থেকে শুরু করে না, সুতরাং আপনার সময় আরও কম লাগার কথা।",
  },
  {
    q: "আমি কিছুই পারি না। পারবো?",
    a: "আমাদের লেসনগুলো এমনভাবে সাজানো যে আপনি যত শিখবেন, লেসন তত কঠিন হবে। না পারলে সহজই থাকবে, যতদিন না আপনি ইম্প্রুভ করছেন।",
  },
  {
    q: "চাকরি বা IELTS-এর জন্য কাজে লাগবে?",
    a: "হ্যাঁ, এটা দুই ধরনের মানুষের জন্যই বানানো। প্রতিদিনের ইংরেজিতে ইন্টারভিউ, ক্লায়েন্ট আর অফিসের কথা মেশানো আছে। উচ্চশিক্ষার পথে IELTS-এর চারটা অংশ, মক টেস্ট আর বিদেশের জীবনের ইংরেজি। টেস্টের শুরুতে বেছে নেবেন, পরে প্রোফাইল থেকে বদলাতেও পারবেন।",
  },
  {
    q: "ফোন থেকে করা যাবে?",
    a: "হ্যাঁ। কোনো অ্যাপ নামাতে হবে না, ব্রাউজারেই চলবে। চাইলে হোম স্ক্রিনে রেখে দিতে পারবেন। মাইক্রোফোন লাগবে।",
  },
  {
    q: "মাসের মেয়াদ শেষ হলে কী হবে?",
    a: "মেয়াদ শেষের আগে ইমেইলে রিমাইন্ডার পাবেন। ইচ্ছা হলে আরেক মাসের জন্য আবার কিনতে পারবেন। না কিনলেও কোনো সমস্যা নেই।",
  },
];

export default function EnglishLandingClient() {
  const [wordIdx, setWordIdx] = useState(0);
  const [plan, setPlan] = useState<"lifetime" | "monthly">("lifetime");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const selectPlan = (nextPlan: "lifetime" | "monthly") => {
    setPlan(nextPlan);
    setSubmitted(false);
    const el = document.getElementById("signup-offer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || password.length < 8) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="border-b border-[#ECE5E1] py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <h1 className="display-l text-[44px] sm:text-[56px] lg:text-[62px] text-[#1B1624] tracking-tight">
                YOUR PERSONAL ENGLISH TEACHER FOR{" "}
                <span className="text-[#FD976D] transition-opacity duration-300">
                  {ROTATING_WORDS[wordIdx].toUpperCase()}
                </span>
              </h1>
              <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B] max-w-xl">
                Cambridge Curriculum দিয়ে সাজানো, 100% আপনার জন্য পার্সোনালাইজড। আপনার পার্সোনাল টিচার, প্রতিদিন 20 মিনিট।
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#lifetime"
                  onClick={(e) => {
                    e.preventDefault();
                    selectPlan("lifetime");
                  }}
                  className="ali-pill-btn inline-flex items-center gap-2.5 bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  <span className="rounded-full bg-[#FDD46B] px-2.5 py-0.5 text-[11px] font-bold text-[#1B1624]">
                    Best value
                  </span>
                  <span>10,000 BDT / Lifetime →</span>
                </a>
                <a
                  href="#monthly"
                  onClick={(e) => {
                    e.preventDefault();
                    selectPlan("monthly");
                  }}
                  className="ali-pill-btn inline-flex items-center bg-white hover:bg-[#1B1624] text-[#1B1624] hover:text-white border border-[#ECE5E1] px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  900 BDT / month
                </a>
              </div>

              <div className="mt-5">
                <Link
                  href="/english/test"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#1B1624] underline decoration-[#ECE5E1] underline-offset-4 hover:text-[#FD976D] hover:decoration-[#FD976D] transition-colors"
                >
                  আগে 5 মিনিটের লেভেল টেস্ট দিন →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-[340px] rounded-[28px] border border-[#ECE5E1] bg-white p-4 shadow-[0_24px_48px_-32px_rgba(27,22,36,0.18)]">
                <div className="overflow-hidden rounded-[20px] border border-[#ECE5E1] bg-[#F3EDE9]">
                  <video
                    src="/english/home/dashboard.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block aspect-[300/649] object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-[13px] text-[#76737C]">
                ভিতরের আসল স্ক্রিন: আজকের লেসন, পথ, লেসন, লিগ, ডুয়েল।
              </p>
            </div>
          </div>
        </section>

        {/* 2. FEATURED IN */}
        <section className="border-b border-[#ECE5E1] py-7" aria-label="Featured in">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#76737C]">
              Featured in
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-9">
              {PRESS_LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[26px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. OUR CLIENTS */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#76737C]">
              Our clients
            </h2>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {CLIENT_LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[28px] max-w-[120px] w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
                />
              ))}
              <span className="text-[13px] text-[#76737C]">and many more</span>
            </div>
          </div>
        </section>

        {/* 4. LEARNING PATHS */}
        <section id="paths" className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[46px] text-[#1B1624] mb-10">
              আপনি কেন ইংরেজি শিখছেন?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="ali-card flex flex-col justify-between rounded-[24px] border border-[#ECE5E1] bg-white p-8 sm:p-10 transition-all hover:border-[#FD976D]">
                <div>
                  <span className="inline-block rounded-full bg-[#F3EDE9] px-3.5 py-1 text-[12px] font-semibold text-[#54505B]">
                    কাজ, ফ্রিল্যান্সিং, ক্যারিয়ার
                  </span>
                  <h3 className="mt-4 text-[24px] sm:text-[28px] font-bold text-[#1B1624]">
                    প্রতিদিনের ইংরেজি
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#54505B]">
                    অফিসে, ক্লায়েন্টের সাথে, ইন্টারভিউতে, বা এমনিই ভালো ইংরেজি বলতে চান।
                  </p>
                  <ul className="mt-6 space-y-2.5 text-[15px] text-[#1B1624]">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                      <span>ইন্টারভিউ আর চাকরির কথা</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                      <span>ক্লায়েন্ট কল, মেসেজ আর ইমেইল</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                      <span>অফিস মিটিং আর সহকর্মীর সাথে কথা</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                      <span>দোকান, ডাক্তার, ফোন, প্রতিদিনের সব</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#ECE5E1]">
                  <Link
                    href="/english/test"
                    className="ali-pill-btn inline-flex items-center bg-[#1B1624] hover:bg-[#FD976D] text-white hover:text-[#1B1624] px-6 py-3 rounded-full text-[14px] font-semibold transition-all"
                  >
                    লেভেল টেস্ট দিন →
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="ali-card flex flex-col justify-between rounded-[24px] border border-[#ECE5E1] bg-white p-8 sm:p-10 transition-all hover:border-[#FD976D]">
                <div>
                  <span className="inline-block rounded-full bg-[#F3EDE9] px-3.5 py-1 text-[12px] font-semibold text-[#54505B]">
                    বিদেশে পড়তে যাবেন
                  </span>
                  <h3 className="mt-4 text-[24px] sm:text-[28px] font-bold text-[#1B1624]">
                    উচ্চশিক্ষা আর IELTS
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#54505B]">
                    UK, Ireland, Canada, Australia বা অন্য কোথাও পড়তে যাবেন। IELTS-এর চারটা অংশ আর বিদেশের জীবনের ইংরেজি।
                  </p>
                  <ul className="mt-6 space-y-2.5 text-[15px] text-[#1B1624]">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                      <span>IELTS Speaking, এক্সামিনারের সাথে প্র্যাকটিস</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                      <span>Listening, Reading আর Writing টাস্ক</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                      <span>মাসে মক টেস্ট</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                      <span>ভার্সিটি, ভিসা ইন্টারভিউ আর বিদেশের জীবন</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#ECE5E1]">
                  <Link
                    href="/english/test?goal=ielts"
                    className="ali-pill-btn inline-flex items-center bg-[#1B1624] hover:bg-[#FD976D] text-white hover:text-[#1B1624] px-6 py-3 rounded-full text-[14px] font-semibold transition-all"
                  >
                    IELTS লেভেল টেস্ট দিন →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DAILY 20 MINUTES */}
        <section id="day" className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[46px] text-[#1B1624]">
              প্রতিদিন 20 মিনিটে যা হয়
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[#54505B]">
              আমরা স্কুলে 12 বছর ইংরেজি পড়ি, বাট কারো সাথে কথা বলি না। ভুল করলে মানুষ হাসবে, এই ভয়ে মুখই খুলি না। পার্সোনাল টিচারের সামনে সেই ভয় নেই।
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  num: "1",
                  title: "কথা বলা",
                  desc: "পার্সোনাল টিচারের সাথে রোল-প্লে। ভুল করলে কেউ হাসবে না। টিচার আগে উত্তর বলে দেয় না, কোথায় ভুল সেটা দেখায়, ঠিক করেন আপনি।",
                  bullets: [
                    "রোল-প্লে, 5 মিনিট",
                    "উচ্চারণের স্কোর, শব্দ ধরে ধরে",
                    "দ্বিতীয়বারে ঠিক বাক্যটা",
                  ],
                },
                {
                  num: "2",
                  title: "বুঝে শেখা",
                  desc: "একবারে একটা জিনিস, বাংলায় বুঝিয়ে দেওয়া। গ্রামারের কঠিন নাম ছাড়া। যেটা ভুলে যাচ্ছেন সেটা রিভিউতে ফিরে আসে।",
                  bullets: [
                    "রিভিউ, 3 মিনিট",
                    "নতুন প্যাটার্ন, শুনে শুনে বলা",
                    "শোনা আর ছোট লেখা, AI ঠিক করে দেয়",
                  ],
                },
                {
                  num: "3",
                  title: "প্রতিদিন ফেরা",
                  desc: "ইংরেজি শেখা হয় প্রতিদিনের প্র্যাকটিসে। পরের দিন ফেরার কারণ রাখা আছে।",
                  bullets: [
                    "স্ট্রিক, মিস হলে ফ্রিজ বাঁচায়",
                    "ডুয়েল, আপনার লেভেলের একজনের সাথে",
                    "লিগ, 30 জনের সাপ্তাহিক গ্রুপ",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.num}
                  className="ali-card rounded-[20px] border border-[#ECE5E1] bg-white p-8 transition-all hover:border-[#FD976D]"
                >
                  <div className="ledger-num text-[38px] leading-none text-[#FD976D]">
                    {card.num}
                  </div>
                  <h3 className="mt-4 text-[22px] font-bold text-[#1B1624]">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#54505B]">{card.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#ECE5E1] pt-5 text-[14px] text-[#1B1624]">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. INSIDE THE APP + 4 STATS (Dark Contrast Block matching landing page #1B1624) */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[46px] text-white mb-12">
              ভিতরে যা দেখবেন
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {SCREENS.map((screen) => (
                <div key={screen.title} className="flex flex-col">
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white">
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      className="w-full h-auto block object-cover"
                    />
                  </div>
                  <h3 className="mt-5 text-[20px] font-bold text-white">{screen.title}</h3>
                  <p className="mt-1.5 text-[15px] text-white/75">{screen.caption}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.num}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-6 sm:p-8"
                >
                  <div className="ledger-num text-[38px] sm:text-[44px] leading-none text-[#FD976D]">
                    {stat.num}
                  </div>
                  <p className="mt-2.5 text-[14px] sm:text-[15px] text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING & SIGNUP OFFER */}
        <section id="signup-offer" className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div id="lifetime" />
          <div id="monthly" />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-center text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              900 BDT/month or 10,000 BDT/Lifetime
            </h2>

            <div className="mx-auto max-w-[520px] rounded-[28px] border border-[#ECE5E1] bg-white p-7 sm:p-10 shadow-sm">
              <h3 className="text-[24px] font-bold text-[#1B1624]">EnglishAi-তে যোগ দিন</h3>
              <p className="mt-1 text-[15px] text-[#54505B]">প্রথম দিন থেকেই সব।</p>

              <div className="mt-6 space-y-3">
                <label
                  className={`flex items-center justify-between gap-3 rounded-[16px] border p-4 cursor-pointer transition-colors ${
                    plan === "lifetime"
                      ? "border-[#FD976D] bg-[#FD976D]/10"
                      : "border-[#ECE5E1] bg-white hover:border-[#FD976D]/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="english-plan"
                      checked={plan === "lifetime"}
                      onChange={() => {
                        setPlan("lifetime");
                        setSubmitted(false);
                      }}
                      className="h-4 w-4 accent-[#1B1624]"
                    />
                    <div>
                      <div className="text-[15px] font-bold text-[#1B1624]">
                        Lifetime Access{" "}
                        <span className="font-normal text-[#54505B]">(Limited Time Deal)</span>
                      </div>
                      <span className="mt-1 inline-block rounded-full bg-[#FDD46B] px-2.5 py-0.5 text-[11px] font-bold text-[#1B1624]">
                        Best value
                      </span>
                    </div>
                  </div>
                  <span className="text-[16px] font-bold text-[#1B1624] shrink-0">10,000 BDT</span>
                </label>

                <label
                  className={`flex items-center justify-between gap-3 rounded-[16px] border p-4 cursor-pointer transition-colors ${
                    plan === "monthly"
                      ? "border-[#FD976D] bg-[#FD976D]/10"
                      : "border-[#ECE5E1] bg-white hover:border-[#FD976D]/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="english-plan"
                      checked={plan === "monthly"}
                      onChange={() => {
                        setPlan("monthly");
                        setSubmitted(false);
                      }}
                      className="h-4 w-4 accent-[#1B1624]"
                    />
                    <span className="text-[15px] font-bold text-[#1B1624]">Monthly</span>
                  </div>
                  <span className="text-[16px] font-bold text-[#1B1624] shrink-0">900 BDT</span>
                </label>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-[14px] font-semibold text-[#1B1624] mb-1.5">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-semibold text-[#1B1624] mb-1.5">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-semibold text-[#1B1624] mb-1.5">
                    পাসওয়ার্ড (কমপক্ষে 8 অক্ষর)
                  </label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  {plan === "lifetime" ? "Pay 10,000 BDT" : "Pay 900 BDT"}
                </button>
              </form>

              {submitted && (
                <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3.5 text-[14px] text-[#1B1624]">
                  ধন্যবাদ, {name}! আপনার {plan === "lifetime" ? "10,000 BDT Lifetime" : "900 BDT Monthly"} রেজিস্ট্রেশন রিকোয়েস্ট রিসিভ হয়েছে।
                </div>
              )}

              <p className="mt-4 text-center text-[13px] text-[#76737C]">
                bKash, Nagad, Rocket, কার্ড, ব্যাংক। SSLCommerz-এর মাধ্যমে।
              </p>

              <p className="mt-3 text-center text-[14px] text-[#54505B]">
                আগেই অ্যাকাউন্ট আছে?{" "}
                <Link
                  href="/english/login"
                  className="font-semibold text-[#1B1624] underline hover:text-[#FD976D]"
                >
                  লগইন করুন
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[44px] text-[#1B1624] mb-8">
              প্রশ্ন
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
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    >
                      <span className="text-[17px] font-bold text-[#1B1624]">{item.q}</span>
                      <span className="text-[22px] leading-none text-[#54505B] shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-0 text-[15px] leading-relaxed text-[#54505B]">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. BOTTOM CTA */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-xl text-[34px] sm:text-[48px] text-white">
              আজ থেকে প্রতিদিন 20 মিনিট
            </h2>
            <p className="mt-3 text-[17px] text-white/75">
              900 BDT/month or 10,000 BDT/Lifetime.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#lifetime"
                onClick={(e) => {
                  e.preventDefault();
                  selectPlan("lifetime");
                }}
                className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:-translate-y-0.5"
              >
                10,000 BDT / Lifetime
              </a>
              <a
                href="#monthly"
                onClick={(e) => {
                  e.preventDefault();
                  selectPlan("monthly");
                }}
                className="ali-pill-btn inline-flex items-center bg-white hover:bg-[#F3EDE9] text-[#1B1624] px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:-translate-y-0.5"
              >
                900 BDT / month
              </a>
              <Link
                href="/english/test"
                className="inline-flex items-center text-[15px] font-medium text-white underline decoration-white/40 underline-offset-4 hover:text-[#FD976D] px-3 py-2 transition-colors"
              >
                আগে লেভেল টেস্ট দিন
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

