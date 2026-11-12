"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PAST_ISSUES = [
  "Launch a Mango Delivery Business & Make 500,000 BDT in 3 months",
  "How Pinin makes $2k/month",
  "Livestreaming Funerals: yes, there's a business there",
  'Starting an agency with only "cold emails"',
  "This guy built a $26k/month business alone",
  "3 Easy Business Ideas You Can Start With AI",
  "This 800 member FB Group Makes $5k/Month",
  "Can you create an experience business in Bangladesh?",
  "This mom created an app using AI in 3 days",
  "How to use Twitter/X to Find a Client in 24 Hours",
  "This 1 year old tool makes $92k/month",
  "A Dog Grooming Business On The Side",
];

const TOPICS = [
  {
    title: "BUSINESS IDEAS",
    desc: "A cool business I came across, how it makes money, and whether you could start something like it.",
  },
  {
    title: "AI",
    desc: "What changed in AI this week and how you can use it to work faster or earn more.",
  },
  {
    title: "MARKETING",
    desc: "A strategy I think everyone should try, explained so you can do it yourself.",
  },
  {
    title: "PRODUCTIVITY",
    desc: "Things you should be doing that you probably are not, to get more out of your week.",
  },
];

const FAQS = [
  {
    q: "How do I pay?",
    a: "In Bangladesh: bKash, Nagad, Rocket or any card, 100 BDT. Outside Bangladesh: any card, 1 USD.",
  },
  {
    q: "Does it renew by itself?",
    a: "Paying in BDT, no: nothing is charged automatically, and before your year ends I email you a link to renew. Paying 1 USD by card, yes: it renews each year until you cancel, using the link in your receipt.",
  },
  {
    q: "When does the first issue come?",
    a: "On the first Friday after you pay. It comes from khalid@news.khalidfarhan.com.",
  },
  {
    q: "Is it in English or Bangla?",
    a: "English. Short sentences and plain words, so it is easy to read on your phone.",
  },
  {
    q: "Can I stop it?",
    a: "Yes. Every email has an unsubscribe link at the bottom. One click and you are off the list.",
  },
];

export default function MuggleMemoClient() {
  const [region, setRegion] = useState<"bd" | "intl">("bd");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="border-b border-[#ECE5E1] py-14 sm:py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <h1 className="display-l text-[52px] sm:text-[64px] lg:text-[72px] text-[#1B1624]">
                MUGGLE
                <br />
                MEMO
              </h1>
              <div className="mt-4 h-1 w-12 bg-[#FD976D] rounded-full" />

              <p className="mt-6 text-[18px] leading-[1.65] text-[#54505B] max-w-xl">
                Every Friday I send one email about the most useful thing I found that week. One week it is a business idea, the next it is AI, a marketing strategy or a habit worth building. For people who want to start something and keep getting better.
              </p>

              <div className="mt-8 flex items-center gap-3.5">
                <img
                  src="/team/khalid-avatar.webp"
                  alt="Khalid Farhan"
                  className="h-11 w-11 rounded-full object-cover border border-[#ECE5E1] shrink-0"
                />
                <div>
                  <div className="text-[14px] font-bold text-[#1B1624]">
                    Written by Khalid Farhan
                  </div>
                  <div className="text-[13px] text-[#76737C]">
                    1.9M on YouTube. Runs an agency in Dublin. 10+ years building businesses.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#ECE5E1] max-w-[544px] grid grid-cols-3 gap-6">
                <div>
                  <div className="ledger-num text-[22px] sm:text-[26px] text-[#1B1624]">
                    EVERY FRIDAY
                  </div>
                  <div className="text-[13px] text-[#76737C]">one email</div>
                </div>
                <div>
                  <div className="ledger-num text-[22px] sm:text-[26px] text-[#1B1624]">60+</div>
                  <div className="text-[13px] text-[#76737C]">issues sent so far</div>
                </div>
                <div>
                  <div className="ledger-num text-[22px] sm:text-[26px] text-[#1B1624]">
                    18,000+
                  </div>
                  <div className="text-[13px] text-[#76737C]">readers</div>
                </div>
              </div>
            </div>

            {/* Right Column: Subscribe Card */}
            <aside id="join" className="lg:col-span-5">
              <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-6 sm:p-8 shadow-sm">
                {/* Region Tabs */}
                <div
                  role="tablist"
                  className="grid grid-cols-2 rounded-full bg-[#F3EDE9] p-1"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={region === "bd"}
                    onClick={() => {
                      setRegion("bd");
                      setSubmitted(false);
                    }}
                    className={`rounded-full py-2 text-[13px] font-semibold transition-all cursor-pointer ${
                      region === "bd"
                        ? "bg-white text-[#1B1624] shadow-sm"
                        : "text-[#54505B] hover:text-[#1B1624]"
                    }`}
                  >
                    Bangladesh
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={region === "intl"}
                    onClick={() => {
                      setRegion("intl");
                      setSubmitted(false);
                    }}
                    className={`rounded-full py-2 text-[13px] font-semibold transition-all cursor-pointer ${
                      region === "intl"
                        ? "bg-white text-[#1B1624] shadow-sm"
                        : "text-[#54505B] hover:text-[#1B1624]"
                    }`}
                  >
                    Outside Bangladesh
                  </button>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="ledger-num text-[44px] leading-none text-[#1B1624]">
                      {region === "bd" ? "100 BDT" : "1 USD"}
                    </span>
                    <span className="text-[15px] text-[#54505B]">a year</span>
                  </div>
                  <p className="mt-2 text-[14px] font-semibold text-[#D95A2B]">
                    {region === "bd" ? "Less than 2 taka a week." : "52 issues for one dollar."}
                  </p>
                  <p className="text-[13px] text-[#76737C]">
                    {region === "bd"
                      ? "bKash, Nagad, Rocket or card."
                      : "Any debit or credit card."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1B1624] mb-1">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1B1624] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    {region === "bd" ? "Join for 100 BDT a year" : "Join for 1 USD a year"}
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3 text-[13px] text-[#1B1624]">
                    Thanks, {name}! Your Muggle Memo subscription request ({email}) has been received.
                  </div>
                )}

                <p className="mt-4 text-center text-[12px] text-[#76737C]">
                  {region === "bd"
                    ? "Join 18,000+ readers. No auto-renewal."
                    : "Join 18,000+ readers. Renews automatically. Cancel any time."}
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* 2. SOME PAST ISSUES */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end mb-10">
              <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624]">
                SOME PAST ISSUES
              </h2>
              <p className="text-[16px] text-[#54505B]">
                Real subject lines from emails I have already sent.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#ECE5E1] bg-white divide-y divide-[#ECE5E1] overflow-hidden">
              {PAST_ISSUES.map((subject) => (
                <div
                  key={subject}
                  className="px-6 py-4 grid grid-cols-1 sm:grid-cols-[150px_1fr_40px] gap-2 sm:gap-4 items-center hover:bg-[#F9F6F3] transition-colors"
                >
                  <span className="text-[14px] font-semibold text-[#54505B]">Khalid Farhan</span>
                  <span className="text-[15px] font-bold text-[#1B1624]">{subject}</span>
                  <span className="text-[13px] text-[#76737C] sm:text-right">Fri</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. NO TWO FRIDAYS ARE THE SAME */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624]">
                NO TWO FRIDAYS ARE THE SAME
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[#54505B]">
                Every Friday I sit down and decide what this week&apos;s email should be about. Even I don&apos;t know what next Friday will bring. Any week could be about:
              </p>

              <div className="mt-8 space-y-6">
                {TOPICS.map((topic) => (
                  <div key={topic.title} className="border-l-2 border-[#FD976D] pl-5">
                    <h3 className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#1B1624]">
                      {topic.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[#54505B]">
                      {topic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[24px] border border-[#ECE5E1] bg-white p-7 sm:p-9 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#ECE5E1] pb-4">
                  <img
                    src="/team/khalid-avatar.webp"
                    alt="Khalid Farhan"
                    className="h-9 w-9 rounded-full object-cover border border-[#ECE5E1]"
                  />
                  <div>
                    <div className="text-[14px] font-bold text-[#1B1624]">
                      Khalid Farhan &lt;khalid@news.khalidfarhan.com&gt;
                    </div>
                    <div className="text-[12px] text-[#76737C]">to me</div>
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#54505B]">
                  <p className="text-[#1B1624] font-medium">Heloo! Happy Friday.</p>

                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#FD976D]">
                    STORY
                  </div>
                  <p>
                    Two years ago, bored software engineer Tony Dinh walked away from his Singapore job with two years of savings and a single goal: find $1000 in monthly revenue.
                  </p>
                  <p>
                    Three days after the ChatGPT API came out, Tony registered TypingMind.com at breakfast, shipped the MVP that weekend, and made $22k in seven days.
                  </p>
                  <p className="font-semibold text-[#1B1624]">Lessons to take away:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Build in public. Go to X and search &ldquo;buildinpublic&rdquo; to understand the ecosystem.</li>
                    <li>Launch more things if you are new.</li>
                  </ul>

                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#FD976D] pt-2">
                    TECH
                  </div>
                  <p>Perplexity received 780 million queries last month.</p>

                  <p className="pt-2">
                    Thank you for reading today&apos;s email. I will see you next Friday.
                  </p>
                  <p className="font-semibold text-[#1B1624]">Farhan</p>
                </div>
              </div>
              <p className="mt-3 text-center text-[13px] text-[#76737C]">
                From a past issue, shortened.
              </p>
            </div>
          </div>
        </section>

        {/* 4. QUESTIONS */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="heading-xl text-[36px] sm:text-[48px] text-white">QUESTIONS</h2>
              <p className="mt-4 text-[18px] text-white/80">
                100 BDT a year.
                <br />
                Less than 2 taka a week.
              </p>
              <div className="mt-7">
                <a
                  href="#join"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  Join Muggle Memo
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={item.q}
                    className="rounded-[20px] border border-white/15 bg-white/5 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-bold text-white">{item.q}</span>
                      <span className="text-[20px] leading-none text-white/70 shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-[15px] leading-relaxed text-white/80">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

