import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Room of Recording — Podcast & Video Studio in Dhaka | Khalid Farhan",
  description:
    "Studio-grade podcasts, talk shows, and video shoots in Gulshan 1, Dhaka — bookable by the hour or full day.",
};

const FORMATS = [
  {
    title: "Video Podcasts",
    desc: "Multi-camera 4K recording with broadcast mics and warm studio lighting.",
  },
  {
    title: "Talk Shows & Interviews",
    desc: "Comfortable guest seating for 2 to 4 people with clean audio separation.",
  },
  {
    title: "YouTube & Creator Shoots",
    desc: "Turnkey setup so you walk in, hit record, and leave with ready-to-edit footage.",
  },
  {
    title: "Course & Training Videos",
    desc: "Crisp lighting and teleprompter-ready framing for online courses and workshops.",
  },
  {
    title: "Brand & Founder Stories",
    desc: "Polished interviews and company announcements without building an in-house studio.",
  },
  {
    title: "Social Clips & Reels",
    desc: "Vertical and horizontal framing options ready for short-form social distribution.",
  },
];

const EQUIPMENT = [
  { title: "4K Multi-Cam Setup", desc: "Cinema cameras framed for wide and individual speaker angles." },
  { title: "Broadcast Microphones", desc: "Shure SM7B / broadcast dynamic mics on studio boom arms." },
  { title: "Acoustic Treatment", desc: "Sound-treated walls and floor for clean vocal isolation." },
  { title: "Softbox Studio Lighting", desc: "Balanced key, fill, and practical background lighting." },
  { title: "On-Site Engineer", desc: "Dedicated technician monitoring levels, focus, and backups." },
  { title: "Fast File Delivery", desc: "Separate audio/video tracks handed over promptly after your shoot." },
];

const CREDITS = [
  { creator: "SIMPLY_SAYEED", guest: "Tamim Iqbal", id: "VQANg20FO4Q" },
  { creator: "SIMPLY_SAYEED", guest: "Tamim Iqbal", id: "7sh98xPvp_Y" },
  { creator: "KHALID FARHAN", guest: "Nafees Salim & Amin Hannan", id: "OS-DU80DTho" },
  { creator: "ESHA RUSHDI", guest: "Chanchal Chowdhury", id: "MHOMGRMACi8" },
];

const WHATSAPP_URL =
  "https://wa.me/8801778250304?text=Hi%2C%20I%20would%20like%20to%20book%20The%20Room%20of%20Recording";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FD976D]">
                THE ROOM OF RECORDING · DHAKA
              </p>
              <h1 className="display-l mt-4 text-[46px] sm:text-[58px] lg:text-[66px] text-white">
                The Room of Recording
              </h1>
              <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-white/80">
                Studio-grade podcasts, talk shows, and video shoots in Dhaka — bookable by the hour or full day.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  Book via WhatsApp →
                </a>
                <a
                  href="#what-you-get"
                  className="ali-pill-btn inline-flex items-center border border-white/25 bg-white/10 hover:bg-white hover:text-[#1B1624] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all"
                >
                  What&apos;s inside
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[28px] border border-white/15 bg-white/5 p-8 sm:p-10 space-y-5">
                <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#FD976D]">
                  GULSHAN 1, DHAKA
                </div>
                <div className="grid grid-cols-2 gap-5 pt-2 border-t border-white/15">
                  <div>
                    <div className="ledger-num text-[32px] text-white">4K</div>
                    <div className="text-[13px] text-white/75">Multi-cam setup</div>
                  </div>
                  <div>
                    <div className="ledger-num text-[32px] text-white">SM7B</div>
                    <div className="text-[13px] text-white/75">Broadcast mics</div>
                  </div>
                  <div>
                    <div className="ledger-num text-[32px] text-white">100%</div>
                    <div className="text-[13px] text-white/75">Sound-treated room</div>
                  </div>
                  <div>
                    <div className="ledger-num text-[32px] text-white">1-HR+</div>
                    <div className="text-[13px] text-white/75">Hourly or full-day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FORMATS */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              Any type of shoot. All we need is your brief.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FORMATS.map((f) => (
                <div
                  key={f.title}
                  className="ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-7 transition-colors hover:border-[#FD976D]"
                >
                  <h3 className="text-[20px] font-bold text-[#1B1624]">{f.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[#54505B]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EQUIPMENT */}
        <section id="what-you-get" className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EQUIPMENT.map((e) => (
                <div
                  key={e.title}
                  className="rounded-[24px] border border-[#ECE5E1] bg-white p-7"
                >
                  <h3 className="text-[19px] font-bold text-[#1B1624]">{e.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#54505B]">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CREDITS */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              Big names. Real shoots. This studio.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CREDITS.map((c) => (
                <a
                  key={c.id}
                  href={`https://www.youtube.com/watch?v=${c.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-[24px] border border-[#ECE5E1] bg-white transition-all hover:border-[#FD976D]"
                >
                  <div className="aspect-video overflow-hidden bg-black">
                    <img
                      src={`https://img.youtube.com/vi/${c.id}/maxresdefault.jpg`}
                      alt={`${c.creator} — ${c.guest}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#FD976D]">
                        {c.creator}
                      </div>
                      <div className="mt-1 text-[18px] font-bold text-[#1B1624]">{c.guest}</div>
                    </div>
                    <span className="text-[14px] font-semibold text-[#1B1624]">Watch ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 5. BOOKING CTA */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FD976D]">
                RENT OUR PODCAST STUDIO IN DHAKA
              </p>
              <h2 className="heading-xl text-[34px] sm:text-[46px] text-white">
                Ready to record? Just WhatsApp us.
              </h2>
              <div className="pt-2 space-y-2 text-[15px] text-white/80">
                <div>Phone / WhatsApp: +880 1778-250304</div>
                <div>Location: Gulshan 1, Dhaka (Close to Gulshan Aarong &amp; Aloki)</div>
                <div>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/theroomofrecording"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#FD976D]"
                  >
                    facebook.com/theroomofrecording
                  </a>
                </div>
              </div>
              <div className="pt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {[
                { num: "01", title: "Message us your date & format", desc: "Tell us your preferred slot and number of guests." },
                { num: "02", title: "Confirm your booking", desc: "Lock in hourly or full-day studio access in Gulshan 1." },
                { num: "03", title: "Walk in and hit record", desc: "Cameras, mics, lighting, and engineer are ready when you arrive." },
              ].map((s) => (
                <div
                  key={s.num}
                  className="rounded-[20px] border border-white/15 bg-white/5 p-6 flex items-start gap-4"
                >
                  <span className="ledger-num text-[28px] leading-none text-[#FD976D]">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-[14px] text-white/75">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
