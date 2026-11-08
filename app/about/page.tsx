import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, BookOpen, Award } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export const metadata = {
  title: "About Khalid Farhan | Founder & Marketing Agency",
  description: "Built for results, not vanity. The story of Khalid Farhan and his Dublin-based marketing agency.",
};

const valueIcons = [ShieldCheck, Target, BookOpen, Award];

export default function AboutPage() {
  const { profile } = SITE_DATA;

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#ECE5E1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#76737C]">
              About Khalid & Agency
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B1624] tracking-tight">
              Built for results. Not for vanity.
            </h1>
            <p className="text-lg sm:text-xl text-[#54505B] leading-relaxed">
              A marketing agency that started as a one-person consultancy in Dublin, grew to 400+ clients in 10+ countries over 12 years. Working closely to help you win.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {profile.stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#ECE5E1] rounded-[22px] p-6 text-center space-y-1 shadow-2xs"
              >
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1B1624]">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#54505B]">
                  {s.label}
                </div>
                <div className="text-[11px] text-[#76737C]">
                  {s.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Story Narrative Box */}
          <div className="bg-white border border-[#ECE5E1] rounded-[32px] p-8 sm:p-14 shadow-xs space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-80 rounded-[28px] overflow-hidden border border-[#ECE5E1] bg-[#F9F6F3]">
                  <Image
                    src="/assets/khalid-portrait.jpg"
                    alt="Khalid Farhan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1624]">
                  The story: From Bangladesh to Dublin, and back to building things.
                </h2>
                <p className="text-base text-[#54505B] leading-relaxed">
                  Khalid Farhan moved from Bangladesh to Ireland and spent years working in and around digital marketing, first as a freelancer, then building campaigns for clients across hospitality, professional services, e-commerce, and more.
                </p>
                <p className="text-base text-[#54505B] leading-relaxed">
                  The agency grew organically: no outside funding, no agency conglomerate, just results that made clients refer other clients. Over 12 years we have worked with 400+ businesses across Ireland, the UK, Bangladesh, and 10+ countries.
                </p>
                <div className="pt-2">
                  <div className="text-sm font-bold text-[#1B1624]">
                    Khalid Farhan
                  </div>
                  <div className="text-xs text-[#76737C]">
                    Founder & CEO · Digital Marketer, Entrepreneur & Content Creator
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#1B1624]">
                What We Believe: Our Values
              </h2>
              <p className="text-sm text-[#76737C]">
                Honesty over hype. Revenue over vanity metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profile.values.map((v, i) => {
                const Icon = valueIcons[i] || ShieldCheck;
                return (
                  <div
                    key={i}
                    className="bg-white border border-[#ECE5E1] rounded-[24px] p-8 space-y-4 hover:border-[#FD976D]/60 transition-all shadow-2xs"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F3EDE9] flex items-center justify-center text-[#1B1624]">
                      <Icon className="w-6 h-6 text-[#FD976D]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1B1624]">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#54505B] leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-[#1B1624] text-white rounded-[28px] p-8 sm:p-12 text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Ready to grow your business?
            </h2>
            <p className="text-[#ECE5E1] max-w-xl mx-auto text-sm sm:text-base">
              Work directly with an experienced marketing team invested in your commercial outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/agency/free-marketing-audit"
                className="ali-pill-btn bg-white hover:bg-[#F9F6F3] text-[#1B1624] text-sm px-6 py-3 font-bold"
              >
                <span>Get a Free Marketing Audit</span>
                <ArrowRight className="w-4 h-4 text-[#FD976D]" />
              </Link>
              <Link
                href="/services"
                className="ali-pill-btn bg-white/10 hover:bg-white/20 text-white text-sm px-6 py-3 font-semibold"
              >
                <span>Explore All 19 Services</span>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

