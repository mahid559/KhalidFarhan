import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Marketing Services — SEO, Ads, GEO, Web Development | Khalid Farhan",
  description:
    "Full-service digital marketing agency in Dublin. SEO, GEO, AI search optimisation, Google Ads, Meta Ads, email marketing, web development, CRO, and analytics.",
};

const GROUPS = [
  {
    heading: "SEARCH",
    items: [
      {
        title: "Search Engine Optimisation",
        desc: "From technical foundations to content strategy, we build sustainable organic growth that compounds over time.",
        href: "/services/seo",
      },
      {
        title: "Generative Engine Optimisation",
        desc: "GEO is the new SEO. We optimise your brand to appear in ChatGPT, Perplexity, Google AI Overviews, and every major AI answer engine.",
        href: "/services/geo",
      },
      {
        title: "AI Search Optimisation",
        desc: "Perplexity, ChatGPT Search, Gemini. We make sure your brand is found on every AI-powered search platform.",
        href: "/services/ai-search-optimisation",
      },
      {
        title: "Local SEO",
        desc: "Google Business Profile, local citations, review management, and geo-targeted content — all in one programme.",
        href: "/services/local-seo",
      },
      {
        title: "Technical SEO Audits",
        desc: "Deep technical audits that uncover crawlability, indexation, speed, and schema issues — with a prioritised fix roadmap.",
        href: "/services/technical-seo-audits",
      },
    ],
  },
  {
    heading: "PAID MEDIA",
    items: [
      {
        title: "Google Ads",
        desc: "Search, Shopping, Performance Max, and YouTube campaigns built for measurable return — not vanity metrics.",
        href: "/services/google-ads",
      },
      {
        title: "Meta Ads",
        desc: "Facebook and Instagram advertising built for real results — new customer acquisition, retargeting, and catalogue campaigns.",
        href: "/services/meta-ads",
      },
      {
        title: "LinkedIn Ads",
        desc: "B2B advertising that puts your brand in front of the exact titles, companies, and industries you want to reach.",
        href: "/services/linkedin-ads",
      },
      {
        title: "TikTok Ads",
        desc: "Native-feeling creative campaigns that reach younger, high-intent audiences at competitive CPMs.",
        href: "/services/tiktok-ads",
      },
      {
        title: "YouTube Ads",
        desc: "The world's second-largest search engine is a massively underutilised advertising channel — we help you capitalise.",
        href: "/services/youtube-ads",
      },
    ],
  },
  {
    heading: "GROWTH & BUILD",
    items: [
      {
        title: "Email Marketing",
        desc: "From welcome sequences to weekly newsletters, we build email programmes that turn subscribers into customers.",
        href: "/services/email-marketing",
      },
      {
        title: "Marketing Automation",
        desc: "Nurture leads, onboard customers, and recover revenue — all on autopilot.",
        href: "/services/marketing-automation",
      },
      {
        title: "Web Development",
        desc: "Performance-first, SEO-ready, conversion-optimised websites — built to rank and built to convert.",
        href: "/services/web-development",
      },
      {
        title: "Landing Page Design",
        desc: "High-converting landing pages designed and tested to maximise the return on your paid and organic traffic.",
        href: "/services/landing-page-design",
      },
      {
        title: "Conversion Rate Optimisation",
        desc: "CRO is the highest-ROI investment you can make — it multiplies the return on every other channel.",
        href: "/services/conversion-rate-optimisation",
      },
      {
        title: "Analytics & Tracking",
        desc: "GA4, GTM, server-side tracking, and custom dashboards — so every marketing decision is data-driven.",
        href: "/services/analytics-and-tracking",
      },
      {
        title: "Content Marketing",
        desc: "Strategy-led content programmes that build authority, drive organic traffic, and generate leads over time.",
        href: "/services/content-marketing",
      },
      {
        title: "Copywriting",
        desc: "Website copy, ad copy, email copy, and landing pages — all written to convert.",
        href: "/services/copywriting",
      },
      {
        title: "YouTube Channel Management",
        desc: "From video SEO to community management — we help brands and creators build audiences that convert.",
        href: "/services/youtube-channel-management",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              SERVICES
            </p>
            <h1 className="display-l mt-4 text-[44px] sm:text-[58px] lg:text-[66px] text-[#1B1624]">
              EVERY CHANNEL. ONE TEAM.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
              From SEO and GEO to Google Ads, Meta Ads, email, and web development — we build and run the marketing programmes that drive real business growth.
            </p>
            <div className="mt-8">
              <Link
                href="/agency/free-marketing-audit"
                className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
              >
                Get a Free Marketing Audit →
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICE GROUPS */}
        {GROUPS.map((group, idx) => (
          <section
            key={group.heading}
            className={`border-b border-[#ECE5E1] py-16 sm:py-24 ${
              idx % 2 === 1 ? "bg-[#F3EDE9]/50" : ""
            }`}
          >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="heading-lg text-[28px] sm:text-[36px] text-[#1B1624] mb-8">
                {group.heading}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-[#FD976D] hover:border-[#FD976D]"
                  >
                    <div>
                      <h3 className="text-[20px] font-bold text-[#1B1624] group-hover:text-[#1B1624]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-[#54505B] group-hover:text-[#1B1624]/90">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 text-[14px] font-semibold text-[#1B1624]">
                      Learn more →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* BOTTOM CTA */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[34px] sm:text-[48px] text-white">
              NOT SURE WHERE TO START?
            </h2>
            <div className="mt-8">
              <Link
                href="/agency/free-marketing-audit"
                className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
              >
                Get a Free Marketing Audit →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
