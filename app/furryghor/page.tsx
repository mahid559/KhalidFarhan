import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FurryGhor — Bangladesh's First Pet Hotel | Khalid Farhan",
  description:
    "Bangladesh's first dedicated pet hotel and daycare with branches in Banani and Dhanmondi, Dhaka.",
};

const STANDARDS = [
  {
    title: "Trained Caregivers",
    desc: "Dedicated staff trained in feline and canine handling, hygiene, and daily health checks.",
  },
  {
    title: "Climate-Controlled Rooms",
    desc: "Clean, ventilated, air-conditioned suites designed separately for cats and dogs.",
  },
  {
    title: "Daily Photo & Video Updates",
    desc: "Regular updates sent directly to pet parents so you always know how they are doing.",
  },
];

export default function FurryGhorPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h1 className="display-l text-[46px] sm:text-[58px] lg:text-[66px] text-white">
                Bangladesh&apos;s First Pet Hotel
              </h1>
              <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-white/80">
                Safe, clean, climate-controlled boarding and daycare for cats and dogs across Dhaka.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://furryghor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  Book a Stay →
                </a>
                <a
                  href="#branches"
                  className="ali-pill-btn inline-flex items-center border border-white/25 bg-white/10 hover:bg-white hover:text-[#1B1624] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all"
                >
                  See Our Branches
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="overflow-hidden rounded-[24px] border border-white/15">
                <img
                  src="/furryghor/facility.jpeg"
                  alt="FurryGhor facility"
                  className="w-full h-[260px] object-cover block"
                />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/furryghor/logo.png"
                  alt="FurryGhor logo"
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. BANNER */}
        <section className="border-b border-[#ECE5E1]">
          <img
            src="/furryghor/dog-bd.jpeg"
            alt="Happy dog at FurryGhor Dhaka"
            className="w-full h-[320px] sm:h-[440px] object-cover block"
          />
        </section>

        {/* 3. STORY */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624]">
                A problem every pet owner in Dhaka knew too well.
              </h2>
              <p className="text-[16px] leading-relaxed text-[#54505B]">
                Every trip out of Dhaka meant asking neighbours for favours or worrying about your pet&apos;s safety. FurryGhor was built to give pet parents a dedicated, hygienic, professional home away from home.
              </p>
            </div>
            <div className="lg:col-span-6">
              <img
                src="/furryghor/interior.jpeg"
                alt="FurryGhor interior"
                className="w-full h-[280px] rounded-[24px] object-cover border border-[#ECE5E1]"
              />
            </div>
          </div>
        </section>

        {/* 4. SERVICES */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              Every kind of care your pet might need.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-[24px] border border-[#ECE5E1] bg-white overflow-hidden">
                <img
                  src="/furryghor/cat-hostel.jpeg"
                  alt="Cat Hostel at FurryGhor"
                  className="w-full h-[240px] object-cover"
                />
                <div className="p-7">
                  <h3 className="text-[22px] font-bold text-[#1B1624]">Cat Hostel &amp; Boarding</h3>
                  <p className="mt-2 text-[15px] text-[#54505B]">
                    Quiet, vertical-friendly private cat suites away from dogs.
                  </p>
                </div>
              </div>
              <div className="rounded-[24px] border border-[#ECE5E1] bg-white overflow-hidden">
                <img
                  src="/furryghor/dog-hotel.jpeg"
                  alt="Dog Hotel at FurryGhor"
                  className="w-full h-[240px] object-cover"
                />
                <div className="p-7">
                  <h3 className="text-[22px] font-bold text-[#1B1624]">Dog Hotel &amp; Daycare</h3>
                  <p className="mt-2 text-[15px] text-[#54505B]">
                    Supervised play, scheduled walks, and comfortable overnight boarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. STANDARDS */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              The standard isn&apos;t standard anywhere else in Dhaka.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STANDARDS.map((s) => (
                <div
                  key={s.title}
                  className="ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-8"
                >
                  <h3 className="text-[20px] font-bold text-[#1B1624]">{s.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[#54505B]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. BRANCHES */}
        <section id="branches" className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-white mb-10">
              Two branches across Dhaka.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-[24px] border border-white/15 bg-white/5 p-8">
                <h3 className="text-[22px] font-bold text-[#FD976D]">Banani Branch</h3>
                <p className="mt-2 text-[15px] text-white/80">
                  Serving Gulshan, Banani, Baridhara, and North Dhaka pet parents.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/15 bg-white/5 p-8">
                <h3 className="text-[22px] font-bold text-[#FD976D]">Dhanmondi Branch</h3>
                <p className="mt-2 text-[15px] text-white/80">
                  Serving Dhanmondi, Lalmatia, Mohammadpur, and Central Dhaka.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. BOTTOM CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[36px] border border-[#ECE5E1] bg-white p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="heading-xl text-[30px] sm:text-[42px] text-[#1B1624]">
                  Your pet deserves more than a favour.
                </h2>
                <a
                  href="https://furryghor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ali-pill-btn mt-6 inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold"
                >
                  Visit furryghor.com →
                </a>
              </div>
              <img
                src="/furryghor/logo.png"
                alt="FurryGhor"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
