"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STEPS = [
  {
    num: "1",
    title: "Get ready",
    desc: "Set up your profile so people trust you and reply.",
  },
  {
    num: "2",
    title: "Find people",
    desc: "Find business owners who need your skill, and build a list.",
  },
  {
    num: "3",
    title: "Message them",
    desc: "Cold emails and calls that get replies. I do it on my screen.",
  },
  {
    num: "4",
    title: "Close the deal",
    desc: "What to say when a client is almost ready to say yes.",
  },
  {
    num: "5",
    title: "Get paid",
    desc: "Invoices, Stripe, and monthly payments you never chase.",
  },
  {
    num: "6",
    title: "Do the work with AI",
    desc: "Which services to sell, and the AI tools I use to do the work fast.",
  },
];

const FAQS = [
  {
    q: "I don't want to start an agency. Is this class for me?",
    a: "Yes. This class is about getting people to pay you for your skill. It works the same if you are a freelancer, a student with one skill, or someone with a job who wants side income. Grow it into an agency later if you want to.",
  },
  {
    q: "I don't have a skill yet. Can I still join?",
    a: "Yes. I show you which services you can sell, and how AI does a lot of the work. You will still need to practise, but you will know what to practise.",
  },
  {
    q: "I can't watch at 8 PM on 27 November.",
    a: "That is fine. The recording stays open until 27 December, so you can watch it when you have time. The gifts and bonuses are only for people who watch at 8 PM on the day.",
  },
  {
    q: "How do I pay?",
    a: "In Bangladesh you pay ৳2,000 by card, bKash or Nagad through SSLCommerz. Outside Bangladesh you pay $20 by card through Stripe. It is a one-time payment.",
  },
  {
    q: "How do I watch the class?",
    a: "After you pay, we email you your login. On 27 November, log in a few minutes before 8 PM Bangladesh time and the class starts on your screen.",
  },
  {
    q: "Can I get a refund?",
    a: "No. There are no refunds, so please book only if you are serious about getting clients.",
  },
];

export default function MasterclassClient() {
  const [region, setRegion] = useState<"bd" | "intl">("bd");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Target: 27 Nov 2026 20:00:00 BD time (+06:00)
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 3, min: 5, sec: 13 });

  useEffect(() => {
    const target = new Date("2026-11-27T20:00:00+06:00").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const min = Math.floor((diff / (1000 * 60)) % 60);
      const sec = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, min, sec });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624] pb-20 lg:pb-0">
      <Navbar />

      <main>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 space-y-12">
              {/* 1. Hero */}
              <header>
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#54505B]">
                  LIVE CLASS · FRIDAY, 27 NOVEMBER · 8 PM BANGLADESH TIME
                </p>
                <h1 className="display-l mt-4 text-[46px] sm:text-[58px] lg:text-[64px] text-[#1B1624]">
                  MAKE YOUR FIRST <span className="text-[#FD976D]">$1K ONLINE</span>
                </h1>
                <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
                  A class where I show you, step by step, how to find people who need your skill, message them, and get them to pay you. Then how to do the work fast with AI. You don&apos;t need an agency or any experience.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] font-medium text-[#1B1624]">
                  <span>Fri, 27 Nov, 8 PM BD time</span>
                  <span className="text-[#76737C]">·</span>
                  <span>2 to 4 hours</span>
                  <span className="text-[#76737C]">·</span>
                  <span>Replay until 27 Dec</span>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <a
                    href="#join-form"
                    className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                  >
                    Book My Seat for {region === "bd" ? "৳2,000" : "$20"} →
                  </a>
                  <Link
                    href="/masterclass/portal/login"
                    className="text-[15px] font-medium text-[#1B1624] underline decoration-[#ECE5E1] underline-offset-4 hover:text-[#FD976D] hover:decoration-[#FD976D] transition-colors"
                  >
                    Already joined? Log in
                  </Link>
                </div>

                <p className="mt-5 text-[14px] text-[#54505B]">
                  5,300+ people joined my last class in July.{" "}
                  <a
                    href="https://www.facebook.com/chandlerbingforlife/posts/pfbid0UmZyfkbpEyjKqtNXYPiJyQyeLAuK3ANp245mosBmTyXoKZgDHxiNCHwSD2C3entml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1B1624] underline hover:text-[#FD976D]"
                  >
                    Read their reviews ↗
                  </a>
                </p>
              </header>

              {/* 2. Video Preview */}
              <div className="overflow-hidden rounded-[24px] border border-[#ECE5E1] bg-black shadow-sm aspect-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/NIviYF-99P8?enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&playsinline=1"
                  title="Make Your First $1k Online, class preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* 3. Audience Fit */}
              <section className="grid grid-cols-1 sm:grid-cols-12 gap-6 rounded-[24px] border border-[#ECE5E1] bg-white p-7 sm:p-8">
                <div className="sm:col-span-7">
                  <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1B1624] mb-4">
                    THIS IS FOR YOU IF
                  </h2>
                  <ul className="space-y-3 text-[15px] text-[#54505B]">
                    {[
                      "You have a skill, but no one pays you for it yet",
                      "You freelance on Fiverr or Upwork and want your own clients",
                      "You have a job or you study, and want income on the side",
                      "You have one or two clients and want more",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FD976D] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:col-span-5 sm:border-l sm:border-[#ECE5E1] sm:pl-6">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#76737C] mb-4">
                    You do not need
                  </h3>
                  <ul className="space-y-3 text-[15px] text-[#54505B]">
                    {[
                      "A company or a team",
                      "Sales experience",
                      "A big following",
                      "Money for ads",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ECE5E1] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 4. 6-Step Curriculum */}
              <section>
                <h2 className="heading-lg text-[28px] sm:text-[36px] text-[#1B1624] mb-6">
                  WHAT I SHOW YOU, IN 6 STEPS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {STEPS.map((step) => (
                    <div
                      key={step.num}
                      className="rounded-[20px] border border-[#ECE5E1] bg-white p-6 transition-colors hover:border-[#FD976D]"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="ledger-num text-[28px] leading-none text-[#FD976D]">
                          {step.num}
                        </span>
                        <h3 className="text-[18px] font-bold text-[#1B1624]">{step.title}</h3>
                      </div>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-[#54505B]">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Who teaches you */}
              <section className="rounded-[24px] border border-[#ECE5E1] bg-white p-7 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src="/businessschool/khalid.webp"
                  alt="Khalid Farhan"
                  className="w-[100px] sm:w-[120px] h-auto rounded-[16px] object-cover border border-[#ECE5E1] shrink-0"
                />
                <div>
                  <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1B1624]">
                    WHO TEACHES YOU
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#54505B]">
                    I am Khalid Farhan. I got my first client in 2011, when I was 16, writing articles for $1 each. Today I run a digital marketing agency in Ireland. In this class I show you exactly how I get clients.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-8 border-t border-[#ECE5E1] pt-4">
                    <div>
                      <div className="ledger-num text-[26px] text-[#1B1624]">1.9M</div>
                      <div className="text-[13px] text-[#76737C]">YouTube subscribers</div>
                    </div>
                    <div>
                      <div className="ledger-num text-[26px] text-[#1B1624]">5,300+</div>
                      <div className="text-[13px] text-[#76737C]">joined my July class</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Questions (FAQ) */}
              <section>
                <h2 className="heading-lg text-[28px] sm:text-[36px] text-[#1B1624] mb-6">
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
                            {isOpen ? "×" : "+"}
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
              </section>
            </div>

            {/* RIGHT COLUMN: STICKY BOOKING CARD */}
            <aside id="join-form" className="lg:col-span-5 lg:sticky lg:top-8">
              <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-6 sm:p-8 shadow-sm">
                {/* Countdown box */}
                <div className="rounded-[18px] bg-[#1B1624] text-white p-4 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
                    CLASS STARTS IN
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {[
                      { val: timeLeft.days, label: "Days" },
                      { val: timeLeft.hours, label: "Hours" },
                      { val: timeLeft.min, label: "Min" },
                      { val: timeLeft.sec, label: "Sec" },
                    ].map((unit) => (
                      <div key={unit.label} className="rounded-[10px] bg-white/10 py-2">
                        <div className="ledger-num text-[24px] leading-none">
                          {String(unit.val).padStart(2, "0")}
                        </div>
                        <div className="mt-1 text-[11px] text-white/70">{unit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mt-6">
                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C]">
                    ONE-TIME PAYMENT
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="ledger-num text-[42px] leading-none text-[#1B1624]">
                      {region === "bd" ? "৳2,000" : "$20"}
                    </span>
                    <span className="text-[14px] font-semibold text-[#54505B]">
                      {region === "bd" ? "BDT" : "USD"}
                    </span>
                  </div>
                  <p className="mt-2 text-[14px] font-semibold text-[#D95A2B]">
                    Only 1,000 seats. When they are gone, booking closes.
                  </p>
                </div>

                <ul className="mt-5 space-y-2 border-y border-[#ECE5E1] py-4 text-[14px] text-[#54505B]">
                  <li>✓ The class on 27 November, 8 PM BD time</li>
                  <li>✓ Watch the recording until 27 December</li>
                  <li>✓ Gifts and bonuses if you watch at 8 PM on the day</li>
                </ul>

                {/* Region toggle */}
                <div className="mt-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#76737C] mb-2">
                    WHERE ARE YOU PAYING FROM?
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        setRegion("bd");
                        setSubmitted(false);
                      }}
                      className={`rounded-[12px] border py-2.5 text-[14px] font-semibold transition-colors cursor-pointer ${
                        region === "bd"
                          ? "border-[#1B1624] bg-[#1B1624] text-white"
                          : "border-[#ECE5E1] bg-white text-[#54505B] hover:border-[#FD976D]"
                      }`}
                    >
                      Bangladesh
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRegion("intl");
                        setSubmitted(false);
                      }}
                      className={`rounded-[12px] border py-2.5 text-[14px] font-semibold transition-colors cursor-pointer ${
                        region === "intl"
                          ? "border-[#1B1624] bg-[#1B1624] text-white"
                          : "border-[#ECE5E1] bg-white text-[#54505B] hover:border-[#FD976D]"
                      }`}
                    >
                      Outside BD
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#54505B] mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#54505B] mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                    />
                    <p className="mt-1 text-[12px] text-[#76737C]">
                      We will send your login to this email.
                    </p>
                  </div>

                  {region === "bd" && (
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#54505B] mb-1">
                        PHONE NUMBER (OPTIONAL)
                      </label>
                      <input
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    Book My Seat
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3.5 text-[14px] text-[#1B1624]">
                    Seat request received for {name} ({region === "bd" ? "৳2,000 BDT" : "$20 USD"}).
                  </div>
                )}

                <p className="mt-4 text-center text-[12px] text-[#76737C]">
                  {region === "bd"
                    ? "Secure payment via SSLCommerz (card, bKash, Nagad)"
                    : "Secure payment via Stripe"}
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* BOTTOM DARK CONTRAST CTA */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70">
              27 NOVEMBER, 8 PM BD TIME
            </p>
            <h2 className="heading-xl mt-3 text-[34px] sm:text-[48px] text-white">
              MAKE YOUR FIRST $1K ONLINE
            </h2>
            <div className="mt-7">
              <a
                href="#join-form"
                className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
              >
                Book My Seat
              </a>
            </div>
            <p className="mt-4 text-[14px] text-white/75">
              ৳2,000 in Bangladesh, $20 outside Bangladesh. Replay open until 27 December.
            </p>
          </div>
        </section>
      </main>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[#ECE5E1] bg-white px-4 py-3 flex items-center justify-between gap-3 shadow-lg">
        <div>
          <div className="ledger-num text-[22px] leading-none text-[#1B1624]">
            {region === "bd" ? "৳2,000" : "$20"}
          </div>
          <div className="text-[12px] text-[#54505B]">27 Nov, 8 PM BD time</div>
        </div>
        <a
          href="#join-form"
          className="ali-pill-btn rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-6 py-2.5 text-[14px] font-semibold"
        >
          Book My Seat
        </a>
      </div>

      <Footer />
    </div>
  );
}

