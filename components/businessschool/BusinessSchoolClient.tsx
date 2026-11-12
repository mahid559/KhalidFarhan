"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const EARNING_PATHS = [
  {
    title: "FREELANCE AND WIN CLIENTS",
    desc: "Fiverr, Upwork and direct clients abroad. This is how most of the members below started.",
    courses: [
      { name: "Lead Generation", meta: "Course, 11 lessons", img: "/businessschool/courses/lead-generation.webp" },
      { name: "Proposal Masterclass", meta: "Masterclass, 1 session", img: "/businessschool/courses/proposal.webp" },
      { name: "Sales Masterclass", meta: "Masterclass, 1 session", img: "/businessschool/courses/sales.webp" },
    ],
  },
  {
    title: "START YOUR OWN BUSINESS",
    desc: "An f-commerce or online business of your own, with a new researched idea every month.",
    courses: [
      { name: "2026 Challenge", meta: "Challenge, 10 lessons", img: "/businessschool/courses/challenge-2026.webp" },
      { name: "Project 2024", meta: "Project, 23 lessons", img: "/businessschool/courses/project-2024.webp" },
      { name: "How to Find Business Ideas", meta: "Masterclass, 1 session", img: "/businessschool/courses/ideas.webp" },
    ],
  },
  {
    title: "BUILD AN AUDIENCE THAT PAYS",
    desc: "A newsletter or brand that earns from the people who follow it.",
    courses: [
      { name: "Start a Newsletter Business", meta: "Course, 9 lessons", img: "/businessschool/courses/newsletter.webp" },
      { name: "How to Tell a Good Story", meta: "Masterclass, 1 session", img: "/businessschool/courses/story.webp" },
    ],
  },
];

const MEMBER_STORIES = [
  {
    id: "masud",
    name: "Masud",
    role: "SEO writer, Gaibandha",
    avatar: "/businessschool/podcasts/masud-face.webp",
    playLabel: "Play from 4:00",
    videoUrl: "https://youtu.be/VkbolcPCcX0?t=240",
    quoteBn: "“এরপর আর আমাকে কখনো পেছন ফিরে তাকাতে হয় নাই।”",
    quoteEn: "“After that, I never had to look back.”",
    before: "2021. A Master's degree, no job, and failed attempts at SEO writing on his own.",
    after: [
      "Feb 2022: Joined Business School and rebuilt his pitch from scratch.",
      "Dec 2022: Crossed steady international client retainers from Gaibandha.",
      "2023: Full-time independent SEO writer serving global clients.",
    ],
  },
  {
    id: "top-rated",
    name: "Top Rated freelancer",
    role: "SEO, Barishal",
    avatar: "/businessschool/podcasts/barishal-face.webp",
    playLabel: "Play from 8:00",
    videoUrl: "https://youtu.be/5riYtt-YgdQ?t=480",
    quoteBn: "“ছয় মাসে এক লাখ টাকা আসছে, ওই সময় ক্লাস একাদশে।”",
    quoteEn: "“I made one lakh taka in six months, while I was in class eleven.”",
    before: "2019. A technical-school student in Barishal trying to learn SEO from free videos.",
    after: [
      "Class 11: Earned 100,000+ BDT in six months.",
      "Now: Top Rated freelancer with recurring international clients.",
      "Now: Supports family independently while continuing studies.",
    ],
  },
  {
    id: "agency-founder",
    name: "SEO agency founder",
    role: "Local SEO for US businesses",
    avatar: "/businessschool/podcasts/agency-face.webp",
    playLabel: "Play from 14:06",
    videoUrl: "https://youtu.be/Hitw3Ss3ayc?t=846",
    quoteBn: "“আপনার যে স্ট্রাটেজিটা আপনি প্রায় প্রায় বলতেন, ওইটাই আমি কাজে লাগাই।”",
    quoteEn: "“I used the exact strategy you kept talking about.”",
    before: "A Fiverr top seller who lost his account and had to rebuild from zero.",
    after: [
      "2018: Switched from marketplace dependency to direct outreach.",
      "Now: Runs a dedicated Local SEO agency serving US businesses.",
      "Now: Manages an in-house team on monthly retainers.",
    ],
  },
];

const TESTIMONIAL_IMAGES = [
  "/testimonials/107-768x325-1.webp",
  "/testimonials/131-768x374-1.webp",
  "/testimonials/146-768x376-1.webp",
  "/testimonials/155-768x346-1.webp",
  "/testimonials/163-768x446-1.webp",
  "/testimonials/180-768x316-1.webp",
  "/testimonials/187-768x371-1.webp",
  "/testimonials/196-768x428-1.webp",
  "/testimonials/203-768x436-1.webp",
  "/testimonials/21-768x784-1.webp",
  "/testimonials/220-768x369-1.webp",
  "/testimonials/236-768x388-1.webp",
  "/testimonials/263-768x389-1.webp",
  "/testimonials/265-768x426-1.webp",
  "/testimonials/299-768x442-1.webp",
  "/testimonials/30-768x655-1.webp",
  "/testimonials/31-768x415-1.webp",
  "/testimonials/324-768x415-1.webp",
  "/testimonials/330-768x315-1.webp",
  "/testimonials/35-768x380-1.webp",
  "/testimonials/47-768x333-1.webp",
  "/testimonials/50-768x265-1.webp",
  "/testimonials/62-768x372-1.webp",
  "/testimonials/66-768x591-1.webp",
];

const RECEIPT_ROWS = [
  {
    num: "01",
    title: "Every course inside",
    sub: "8 programmes and 57 lessons today, with 2 to 3 new ones every year",
  },
  {
    num: "02",
    title: "Hands-on, no theory",
    sub: "Step-by-step guides you follow while you build",
  },
  {
    num: "03",
    title: "Live challenges and projects",
    sub: "Build a real business on a deadline, step by step",
  },
  {
    num: "04",
    title: "A business idea report, every month",
    sub: "50 to 64 pages, researched for Bangladesh",
  },
  {
    num: "05",
    title: "1-on-1 help by email",
    sub: "Answered by me, not a support team",
  },
  {
    num: "06",
    title: "AI courses, from January 2027",
    sub: "Included in your membership",
  },
];

const REPORT_PAGES = [
  {
    src: "/businessschool/report-0001.webp",
    caption: "Page one gives the verdict, before you spend a taka",
  },
  {
    src: "/businessschool/report-0002.webp",
    caption: "22 sections, from market size to when to stop",
  },
  {
    src: "/businessschool/report-0040.webp",
    caption: "Three years of numbers, in three scenarios",
  },
  {
    src: "/businessschool/report-0046.webp",
    caption: "A week-by-week plan for the first 120 days",
  },
];

const FAQS = [
  {
    q: "How does the price work?",
    a: "It is ৳5,000 a year and everything opens from day one. Paying in BDT, nothing is charged automatically: before each year ends I email you a link to pay for the next one. Paying $50 by international card, it renews each year until you cancel, using the link in your receipt.",
  },
  {
    q: "What happens if I stop paying?",
    a: "Your access pauses at the end of your paid year, until you pay for the next one. Nothing is deleted: your courses, progress and certificates come back the moment you pay. I email you before each year ends so it never catches you by surprise.",
  },
  {
    q: "What is in a business idea report?",
    a: "Each report takes one idea and researches it for Bangladesh: the market and who buys, startup costs, competitors, three years of revenue in three scenarios, and a week-by-week plan for the first 120 days, with clear points where you should stop. They run 50 to 64 pages. A new one is added every month and you keep access to all of them.",
  },
  {
    q: "Who is Business School for?",
    a: "Anyone who wants to learn to build a business online from someone who has done it, in Bangladesh or anywhere else, and who is willing to put in the work.",
  },
  {
    q: "What happens after I pay?",
    a: "You get an email with your login. Log in at course.khalidfarhan.com and every course is there straight away.",
  },
  {
    q: "How many devices can I use?",
    a: "Two. Your account works on up to 2 devices, for example your phone and your laptop. If you log in from a 3rd device, the account locks to protect it from sharing. Email masud@khalidfarhan.com and we will unlock it for you.",
  },
  {
    q: "Do I need any experience?",
    a: "No. The courses are hands-on and start from the basics. You follow along step by step while you build, with no theory to memorise first.",
  },
  {
    q: "What new courses are coming?",
    a: "Two to three new courses are added every year, and older ones get refreshed. AI courses start in January 2027 and are included in your membership.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes. Your certificates sit in your account with your courses and progress.",
  },
  {
    q: "Do coupon codes work?",
    a: "Yes. Enter it at checkout and the discount comes off your first year.",
  },
  {
    q: "Is there a refund?",
    a: "No. Business School does not offer refunds, so please only join if you are serious about doing the work.",
  },
  {
    q: "I was a Passive Journal member. Do I need to join again?",
    a: "No. Passive Journal members were moved to Business School automatically. Log in with your existing account.",
  },
];

export default function BusinessSchoolClient() {
  const [activeStory, setActiveStory] = useState(0);
  const [showAllResults, setShowAllResults] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [region, setRegion] = useState<"bd" | "intl">("bd");
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const story = MEMBER_STORIES[activeStory];
  const visibleTestimonials = showAllResults
    ? TESTIMONIAL_IMAGES
    : TESTIMONIAL_IMAGES.slice(0, 6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <header className="border-b border-[#ECE5E1] py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2.5 text-[14px] font-semibold text-[#54505B]">
                <span>Business School by</span>
                <img
                  src="/kf-logo.png"
                  alt="Khalid Farhan"
                  className="h-[24px] w-auto object-contain brightness-0"
                />
              </div>

              <h1 className="display-l mt-5 text-[44px] sm:text-[56px] lg:text-[62px] text-[#1B1624]">
                BECOME AN INTERNET ENTREPRENEUR
              </h1>
              <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
                Hands-on courses, no theory. 8 programmes and 57 lessons inside today, 2 to 3 new ones every year, and a 50+ page business idea report every month.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#join-form"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  Join for 5,000 BDT a year →
                </a>
                <a
                  href="#stories"
                  className="text-[15px] font-semibold text-[#1B1624] underline decoration-[#ECE5E1] underline-offset-4 hover:text-[#FD976D] hover:decoration-[#FD976D] transition-colors"
                >
                  See member results ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <a
                href="https://www.youtube.com/watch?v=NIviYF-99P8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[24px] border border-[#ECE5E1] bg-black shadow-sm"
              >
                <img
                  src="/businessschool/podcasts/my-story.webp"
                  alt="How I Became A Millionaire By Age 27 (Step by Step): Khalid Farhan"
                  className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-bold text-[#1B1624] shadow-md group-hover:bg-[#FD976D] transition-colors">
                  ▶ Watch my story: $0 to $1M
                </span>
              </a>

              <div className="rounded-[20px] border border-[#ECE5E1] bg-white p-5 flex items-start gap-4">
                <img
                  src="/businessschool/khalid.webp"
                  alt="Khalid Farhan"
                  className="h-16 w-16 rounded-[14px] object-cover border border-[#ECE5E1] shrink-0"
                />
                <div className="text-[14px] leading-relaxed text-[#54505B]">
                  <strong className="text-[#1B1624]">I am Khalid Farhan.</strong> I started freelancing at 16, writing articles for $1 each. Today I have 1.9M subscribers on YouTube, an MSc from Trinity College Dublin and my own marketing agency in Ireland.
                </div>
              </div>
            </div>
          </div>
        </header>

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

        {/* 4. THREE WAYS MEMBERS EARN */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[46px] text-[#1B1624] max-w-3xl">
              THREE WAYS MEMBERS EARN, AND THE COURSES FOR EACH
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[#54505B]">
              8 programmes and 57 lessons today. Hands-on, no theory. 2 to 3 new ones every year, and AI courses from January 2027.
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {EARNING_PATHS.map((path) => (
                <div
                  key={path.title}
                  className="ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-7 sm:p-8 flex flex-col justify-between transition-all hover:border-[#FD976D]"
                >
                  <div>
                    <h3 className="text-[16px] font-bold uppercase tracking-[0.04em] text-[#1B1624]">
                      {path.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#54505B]">
                      {path.desc}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 border-t border-[#ECE5E1] pt-5">
                    {path.courses.map((course) => (
                      <div key={course.name} className="flex items-center gap-3.5">
                        <img
                          src={course.img}
                          alt={course.name}
                          className="h-12 w-16 rounded-[10px] object-cover border border-[#ECE5E1] shrink-0"
                        />
                        <div>
                          <div className="text-[15px] font-bold text-[#1B1624]">{course.name}</div>
                          <div className="text-[13px] text-[#76737C]">{course.meta}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. MEMBERS WHO DID IT */}
        <section id="stories" className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[46px] text-[#1B1624]">
              MEMBERS WHO DID IT
            </h2>
            <p className="mt-3 text-[17px] text-[#54505B]">
              Three members came on my podcast to tell their story. Pick one and press play.
            </p>

            {/* Tabs */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4" role="tablist">
              {MEMBER_STORIES.map((item, idx) => {
                const active = activeStory === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveStory(idx)}
                    className={`flex items-center gap-3.5 rounded-[18px] border p-4 text-left transition-all cursor-pointer ${
                      active
                        ? "border-[#FD976D] bg-white shadow-sm"
                        : "border-[#ECE5E1] bg-white/70 hover:bg-white hover:border-[#FD976D]/60"
                    }`}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-14 w-14 rounded-full object-cover border border-[#ECE5E1] shrink-0"
                    />
                    <div>
                      <div className="text-[16px] font-bold text-[#1B1624]">{item.name}</div>
                      <div className="text-[13px] text-[#76737C]">{item.role}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Story Panel */}
            <div className="mt-6 rounded-[24px] border border-[#ECE5E1] bg-white p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <a
                  href={story.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ali-pill-btn inline-flex items-center gap-2 rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-5 py-2.5 text-[14px] font-semibold"
                >
                  ▶ {story.playLabel}
                </a>
                <blockquote className="text-[20px] sm:text-[22px] font-bold leading-snug text-[#1B1624]">
                  {story.quoteBn}
                </blockquote>
                <p className="text-[16px] italic text-[#54505B]">{story.quoteEn}</p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t lg:border-t-0 lg:border-l border-[#ECE5E1] pt-6 lg:pt-0 lg:pl-8">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C]">
                    BEFORE
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#54505B]">{story.before}</p>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#FD976D]">
                    AFTER
                  </div>
                  <ul className="mt-2 space-y-2 text-[14px] text-[#1B1624]">
                    {story.after.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 1,000+ MORE SUCCESS STORIES */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[46px] text-white">
              AND 1,000+ MORE SUCCESS STORIES
            </h2>
            <p className="mt-3 max-w-2xl text-[17px] text-white/75">
              From 30,000+ members since 2018: freelancing income, new jobs, clients and their own businesses. These are their own posts. Tap any to read it in full.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleTestimonials.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxImg(src)}
                  className="overflow-hidden rounded-[18px] border border-white/15 bg-white text-left transition-transform hover:-translate-y-1 cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Business School member result ${idx + 1}`}
                    className="w-full h-auto block object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              {!showAllResults && (
                <button
                  type="button"
                  onClick={() => setShowAllResults(true)}
                  className="ali-pill-btn rounded-full border border-white/25 bg-white/10 hover:bg-[#FD976D] hover:text-[#1B1624] hover:border-[#FD976D] text-white px-7 py-3 text-[14px] font-semibold transition-all cursor-pointer"
                >
                  Show 18 more results
                </button>
              )}
              <a
                href="https://www.facebook.com/chandlerbingforlife/posts/pfbid0UmZyfkbpEyjKqtNXYPiJyQyeLAuK3ANp245mosBmTyXoKZgDHxiNCHwSD2C3entml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-semibold text-white underline decoration-white/40 underline-offset-4 hover:text-[#FD976D]"
              >
                Read the reviews on Facebook →
              </a>
            </div>
          </div>
        </section>

        {/* 7. CASH MEMO + JOIN FORM */}
        <section id="join-form" className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-center text-[32px] sm:text-[46px] text-[#1B1624]">
              EVERYTHING, FOR 5,000 BDT A YEAR
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-center text-[15px] font-medium text-[#B83E25]">
              Business School is not a magic pill. It shows you the path, and you still have to walk it and work hard to learn and, hopefully, earn. We have more successful members than anyone in the country, and we have failures too.
            </p>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Cash Memo */}
              <div className="lg:col-span-7 rounded-[28px] border border-[#ECE5E1] bg-white p-7 sm:p-10 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#ECE5E1] pb-4">
                  <span className="heading-lg text-[24px] text-[#1B1624]">BUSINESS SCHOOL</span>
                  <span className="text-[14px] font-semibold text-[#54505B]">ক্যাশ মেমো</span>
                </div>

                <div className="divide-y divide-dashed divide-[#ECE5E1]">
                  {RECEIPT_ROWS.map((row) => (
                    <div key={row.num} className="py-4 flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span className="text-[13px] font-bold text-[#76737C] mt-0.5">
                          {row.num}
                        </span>
                        <div>
                          <div className="text-[16px] font-bold text-[#1B1624]">{row.title}</div>
                          <div className="text-[14px] text-[#54505B]">{row.sub}</div>
                        </div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#1B1624] shrink-0">
                        ✓ Included
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t-2 border-[#1B1624] pt-5 flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#76737C]">
                      TOTAL FOR 12 MONTHS
                    </div>
                    <div className="text-[14px] text-[#54505B]">That is about 14 BDT a day.</div>
                  </div>
                  <div className="ledger-num text-[38px] text-[#1B1624]">
                    {region === "bd" ? "5,000 BDT" : "$50 USD"}
                  </div>
                </div>
              </div>

              {/* Join Form */}
              <aside className="lg:col-span-5 rounded-[28px] border border-[#ECE5E1] bg-white p-7 sm:p-8 shadow-sm">
                <h3 className="heading-lg text-[26px] text-[#1B1624]">JOIN BUSINESS SCHOOL</h3>
                <p className="mt-1 text-[14px] text-[#54505B]">Full access from day one.</p>

                <div className="mt-5 rounded-[16px] border border-[#1B1624] p-4 flex items-baseline justify-between gap-3">
                  <div>
                    <div className="text-[15px] font-bold text-[#1B1624]">Yearly</div>
                    <div className="text-[12px] text-[#54505B]">
                      Every course, challenge and idea report for 12 months.
                    </div>
                  </div>
                  <div className="text-[18px] font-bold text-[#1B1624] shrink-0">
                    {region === "bd" ? "5,000 BDT" : "$50"}{" "}
                    <span className="text-[12px] font-normal text-[#54505B]">/year</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setRegion("bd");
                      setSubmitted(false);
                    }}
                    className={`rounded-[12px] border px-3 py-2.5 text-[12px] font-semibold transition-colors cursor-pointer ${
                      region === "bd"
                        ? "border-[#1B1624] bg-[#1B1624] text-white"
                        : "border-[#ECE5E1] bg-white text-[#54505B] hover:border-[#FD976D]"
                    }`}
                  >
                    Bangladesh (bKash, Nagad, Rocket, card)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRegion("intl");
                      setSubmitted(false);
                    }}
                    className={`rounded-[12px] border px-3 py-2.5 text-[12px] font-semibold transition-colors cursor-pointer ${
                      region === "intl"
                        ? "border-[#1B1624] bg-[#1B1624] text-white"
                        : "border-[#ECE5E1] bg-white text-[#54505B] hover:border-[#FD976D]"
                    }`}
                  >
                    Outside Bangladesh (International card)
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1B1624] mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1B1624] mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1B1624] mb-1">
                      Phone number (optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                    />
                  </div>

                  <div>
                    {!showCoupon ? (
                      <button
                        type="button"
                        onClick={() => setShowCoupon(true)}
                        className="text-[13px] font-semibold text-[#54505B] underline hover:text-[#FD976D] cursor-pointer"
                      >
                        Have a coupon code?
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Coupon code"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                          className="flex-1 rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-3 py-2 text-[14px] focus:border-[#FD976D] focus:outline-none"
                        />
                        <button
                          type="button"
                          className="rounded-[12px] border border-[#ECE5E1] bg-[#F3EDE9] px-4 py-2 text-[13px] font-semibold text-[#1B1624] cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    {region === "bd" ? "Pay 5,000 BDT and join" : "Pay $50 and join"}
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3.5 text-[13px] text-[#1B1624]">
                    Thank you, {fullName}! Your Business School registration request has been received.
                  </div>
                )}

                <div className="mt-5 space-y-1.5 text-center text-[12px] text-[#76737C]">
                  <p>Your login arrives by email the moment you pay.</p>
                  <p>
                    {region === "bd"
                      ? "Secure payment by SSLCommerz. I email you before each year ends."
                      : "Secure payment by Stripe."}
                  </p>
                  <p>
                    Questions before you join? Email{" "}
                    <a
                      href="mailto:masud@khalidfarhan.com"
                      className="underline hover:text-[#FD976D]"
                    >
                      masud@khalidfarhan.com
                    </a>
                  </p>
                  <p className="pt-1">
                    <a
                      href="https://course.khalidfarhan.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1B1624] underline hover:text-[#FD976D]"
                    >
                      Already a member? Log in
                    </a>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 8. BUSINESS IDEA REPORTS */}
        <section id="ideas" className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[46px] text-white max-w-3xl">
              A NEW BUSINESS IDEA, FULLY RESEARCHED, EVERY MONTH
            </h2>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-white/15 bg-white">
              <img
                src="/businessschool/ideas-dashboard.webp"
                alt="Business School monthly business idea reports dashboard"
                className="w-full h-auto block object-cover"
              />
            </div>

            <h3 className="mt-12 text-[22px] sm:text-[26px] font-bold text-white">
              Inside one report: Pet Supplies Business for Bangladesh
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {REPORT_PAGES.map((page) => (
                <div key={page.src} className="flex flex-col">
                  <div className="overflow-hidden rounded-[16px] border border-white/15 bg-white">
                    <img
                      src={page.src}
                      alt={page.caption}
                      className="w-full h-auto block object-cover"
                    />
                  </div>
                  <p className="mt-3 text-[14px] text-white/80">{page.caption}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#join-form"
                className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
              >
                Join for 5,000 BDT a year
              </a>
            </div>
          </div>
        </section>

        {/* 9. QUESTIONS, ANSWERED */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-8">
              QUESTIONS, ANSWERED
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

        {/* 10. BOTTOM CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[36px] border border-[#ECE5E1] bg-white py-14 sm:py-20 px-6 sm:px-12 text-center hover:border-[#FD976D] transition-colors">
              <h2 className="heading-xl text-[32px] sm:text-[46px] text-[#1B1624] max-w-3xl mx-auto">
                JOIN 30,000+ PEOPLE LEARNING TO BUILD A BUSINESS ONLINE
              </h2>
              <p className="mt-4 text-[17px] text-[#54505B]">
                Start with 5,000 BDT this year. Everything opens the moment you pay.
              </p>
              <div className="mt-8">
                <a
                  href="#join-form"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  Join for 5,000 BDT a year
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Testimonial Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-[20px] bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              className="mb-2 ml-auto block rounded-full bg-[#1B1624] px-3.5 py-1 text-[12px] font-semibold text-white cursor-pointer"
            >
              Close
            </button>
            <img src={lightboxImg} alt="Member testimonial" className="w-full h-auto rounded-[12px]" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

