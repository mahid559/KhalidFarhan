"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const INITIAL_STANDINGS = [
  { name: "Aoife", wins: 11 },
  { name: "Tom", wins: 6 },
  { name: "Priya", wins: 4 },
  { name: "Ciarán", wins: 1 },
];

const IMPORT_METHODS = [
  { title: "Rough win totals", desc: "Enter everyone's current win count and start from there." },
  { title: "Past games", desc: "Log games you still remember with dates and winners." },
  { title: "A spreadsheet", desc: "Paste rows straight from Google Sheets or Excel." },
  { title: "Lines from Notes", desc: "Copy-paste your Apple Notes tally." },
  { title: "A notebook photo", desc: "Import tally marks from your physical scorepad." },
  { title: "BG Stats", desc: "Bring over your existing Board Game Stats history." },
];

const BADGES = [
  "First Settlement",
  "City Builder",
  "Longest Road",
  "Rolled a Seven",
  "Largest Army",
  "Seasoned Settler",
  "Season Champion",
];

const FAQS = [
  {
    q: "Is it really free?",
    a: "Yes. Longest Road is free to download and use with your Catan group.",
  },
  {
    q: "Is there an Android version?",
    a: "Currently Longest Road is an iOS app on the App Store, and anyone in your tribe can view the shared standings link in any browser.",
  },
  {
    q: "Who can log a game?",
    a: "Any member of your tribe can log a win in seconds.",
  },
  {
    q: "I logged the wrong winner. Can I fix it?",
    a: "Yes. You can edit or delete any logged game from your tribe history.",
  },
  {
    q: "Can I get my data out?",
    a: "Yes. You can export your tribe's complete game log anytime.",
  },
];

export default function LongestRoadClient() {
  const [standings, setStandings] = useState(INITIAL_STANDINGS);
  const [selectedWinner, setSelectedWinner] = useState<string>("Aoife");
  const [savedNotice, setSavedNotice] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSaveGame = () => {
    setStandings((prev) =>
      prev
        .map((p) => (p.name === selectedWinner ? { ...p, wins: p.wins + 1 } : p))
        .sort((a, b) => b.wins - a.wins)
    );
    setSavedNotice(`Game 23 logged for ${selectedWinner}!`);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO + INTERACTIVE TRIBE WIDGET */}
        <section className="border-b border-[#ECE5E1] py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <img
                  src="/longest-road/icon.png"
                  alt="Longest Road app icon"
                  className="h-16 w-16 rounded-[16px] border border-[#ECE5E1] shadow-sm"
                />
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#FD976D]">
                  IOS APP FOR CATAN GROUPS
                </span>
              </div>

              <h1 className="display-l mt-5 text-[46px] sm:text-[60px] lg:text-[68px] text-[#1B1624]">
                Longest Road
              </h1>
              <p className="mt-4 text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
                Keep track of every Catan night with your tribe — standings, head-to-head rivalries, badges, and full season history in one shared link.
              </p>

              <div className="mt-8">
                <a
                  href="https://apps.apple.com/app/id6825272474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  Get it on the App Store →
                </a>
              </div>
            </div>

            {/* Interactive Tribe Widget */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-7 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#ECE5E1] pb-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C]">
                      EXAMPLE TRIBE
                    </div>
                    <h2 className="text-[20px] font-bold text-[#1B1624]">Friday Settlers</h2>
                  </div>
                  <span className="rounded-full bg-[#F3EDE9] px-3 py-1 text-[12px] font-semibold text-[#54505B]">
                    Season 1
                  </span>
                </div>

                <div className="mt-4 divide-y divide-[#ECE5E1]">
                  {standings.map((p, i) => (
                    <div key={p.name} className="py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="ledger-num text-[18px] text-[#76737C] w-5">
                          #{i + 1}
                        </span>
                        <span className="font-bold text-[#1B1624]">{p.name}</span>
                      </div>
                      <span className="font-semibold text-[#54505B]">{p.wins} wins</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-[#ECE5E1]">
                  <div className="text-[13px] font-bold text-[#1B1624] mb-3">
                    Who won game 23?
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {INITIAL_STANDINGS.map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setSelectedWinner(p.name)}
                        className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors cursor-pointer ${
                          selectedWinner === p.name
                            ? "bg-[#1B1624] text-white"
                            : "bg-[#F3EDE9] text-[#54505B] hover:bg-[#FD976D]/30"
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={handleSaveGame}
                      className="ml-auto rounded-full bg-[#FD976D] hover:bg-[#FC8555] px-5 py-1.5 text-[13px] font-semibold text-[#1B1624] cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                  {savedNotice && (
                    <p className="mt-3 text-[13px] font-medium text-[#1B1624]">{savedNotice}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. IMPORT */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              Before game 1
            </p>
            <h2 className="heading-xl mt-2 text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              Played for years? Keep the record.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {IMPORT_METHODS.map((m) => (
                <div
                  key={m.title}
                  className="rounded-[20px] border border-[#ECE5E1] bg-white p-6"
                >
                  <h3 className="text-[18px] font-bold text-[#1B1624]">{m.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#54505B]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. GAME 1: STANDINGS */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
              Game 1
            </p>
            <h2 className="heading-xl mt-2 text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              One link. The same standings on every phone.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src="/longest-road/01-standings.webp"
                alt="Longest Road live standings"
                className="w-full h-auto rounded-[24px] border border-[#ECE5E1] bg-white"
              />
              <img
                src="/longest-road/02-log-game.webp"
                alt="Longest Road log game screen"
                className="w-full h-auto rounded-[24px] border border-[#ECE5E1] bg-white"
              />
            </div>
          </div>
        </section>

        {/* 4. GAME 10 & 15 & 22 */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
                  Game 10
                </p>
                <h2 className="heading-lg mt-2 text-[30px] sm:text-[40px] text-[#1B1624]">
                  Who beats who, and how often.
                </h2>
                <p className="mt-4 text-[16px] text-[#54505B]">
                  Head-to-head records settle every table argument (like Tom 6 – 4 Priya).
                </p>
              </div>
              <div className="lg:col-span-7">
                <img
                  src="/longest-road/04-rivals.webp"
                  alt="Longest Road rivals screen"
                  className="w-full h-auto rounded-[24px] border border-[#ECE5E1]"
                />
              </div>
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
                Game 15
              </p>
              <h2 className="heading-lg mt-2 text-[30px] sm:text-[40px] text-[#1B1624] mb-6">
                Wins earn badges. Losing runs earn the robber.
              </h2>
              <div className="flex flex-wrap gap-3">
                {BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#ECE5E1] bg-white px-5 py-2.5 text-[14px] font-bold text-[#1B1624]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
                  Game 22
                </p>
                <h2 className="heading-lg mt-2 text-[30px] sm:text-[40px] text-[#1B1624]">
                  Every game, kept for good.
                </h2>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <img
                  src="/longest-road/05-games.webp"
                  alt="Longest Road game log"
                  className="w-full h-auto rounded-[24px] border border-[#ECE5E1]"
                />
                <img
                  src="/longest-road/03-player.webp"
                  alt="Longest Road player profile"
                  className="w-full h-auto rounded-[24px] border border-[#ECE5E1]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[820px] mx-auto px-4 sm:px-6">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-8">
              Questions
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

        {/* 6. BOTTOM CTA */}
        <section className="bg-[#1B1624] text-white py-16 sm:py-24 text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/70">
              End of the season
            </p>
            <h2 className="heading-xl mt-3 text-[34px] sm:text-[48px] text-white">
              Someone gets crowned. Then it starts again.
            </h2>
            <div className="mt-8">
              <a
                href="https://apps.apple.com/app/id6825272474"
                target="_blank"
                rel="noopener noreferrer"
                className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
              >
                Get it on the App Store →
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-6 text-[13px] text-white/70">
              <Link href="/contact" className="underline hover:text-[#FD976D]">
                Support
              </Link>
              <Link href="/privacy-policy" className="underline hover:text-[#FD976D]">
                Privacy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

