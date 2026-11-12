"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  "SEO",
  "Generative Engine Optimisation (GEO)",
  "Google Ads",
  "Meta Ads",
  "Email Marketing",
  "Web Development",
  "Analytics & Tracking",
  "Content Marketing",
  "Not sure — advise me",
];

export default function FreeAuditClient() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [budget, setBudget] = useState("");
  const [visitors, setVisitors] = useState("");
  const [goals, setGoals] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !website.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main className="py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
                AGENCY / FREE AUDIT
              </p>
              <h1 className="display-l mt-3 text-[44px] sm:text-[54px] text-[#1B1624]">
                LET&apos;S TALK ABOUT YOUR GROWTH.
              </h1>
              <p className="mt-4 text-[17px] leading-[1.65] text-[#54505B]">
                Fill in the form and we&apos;ll review your current marketing, identify the biggest opportunities, and come back to you with a clear plan — at no cost.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-[#ECE5E1]">
              <div>
                <div className="text-[16px] font-bold text-[#1B1624]">Deep audit</div>
                <p className="text-[14px] text-[#54505B]">
                  We review your actual site, ad accounts, competitors, and search visibility.
                </p>
              </div>
              <div>
                <div className="text-[16px] font-bold text-[#1B1624]">No sales pressure</div>
                <p className="text-[14px] text-[#54505B]">
                  You get a clear written plan first. No call unless you ask for one.
                </p>
              </div>
              <div>
                <div className="text-[16px] font-bold text-[#1B1624]">Fast response</div>
                <p className="text-[14px] text-[#54505B]">We respond within 1 business day.</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-[#ECE5E1] bg-white p-7 sm:p-10 shadow-sm space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Full name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Company</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-1.5">Website *</label>
                <input
                  type="text"
                  required
                  placeholder="https://yourcompany.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">
                  Services interested in
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const active = selectedServices.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleService(s)}
                        className={`rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors cursor-pointer ${
                          active
                            ? "border-[#1B1624] bg-[#1B1624] text-white"
                            : "border-[#ECE5E1] bg-[#F9F6F3] text-[#54505B] hover:border-[#FD976D]"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">Monthly budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                  >
                    <option value="">Select range</option>
                    <option value="Under €1,000">Under €1,000</option>
                    <option value="€1,000 – €3,000">€1,000 – €3,000</option>
                    <option value="€3,000 – €7,500">€3,000 – €7,500</option>
                    <option value="€7,500 – €15,000">€7,500 – €15,000</option>
                    <option value="€15,000+">€15,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">
                    Monthly website visitors
                  </label>
                  <select
                    value={visitors}
                    onChange={(e) => setVisitors(e.target.value)}
                    className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[14px]"
                  >
                    <option value="">Select range</option>
                    <option value="Under 1,000">Under 1,000</option>
                    <option value="1,000 – 5,000">1,000 – 5,000</option>
                    <option value="5,000 – 20,000">5,000 – 20,000</option>
                    <option value="20,000 – 100,000">20,000 – 100,000</option>
                    <option value="100,000+">100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-1.5">
                  Tell us about your goals
                </label>
                <textarea
                  rows={3}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold cursor-pointer"
              >
                Request Free Audit
              </button>

              {submitted && (
                <div className="rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3.5 text-[14px] text-[#1B1624]">
                  Thank you, {name}! Your free marketing audit request for {website} has been received.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

