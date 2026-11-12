"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Agency / Marketing Services");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main className="py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#76737C]">
                CONTACT
              </p>
              <h1 className="display-l mt-3 text-[48px] sm:text-[62px] text-[#1B1624]">
                LET&apos;S TALK.
              </h1>
              <p className="mt-4 text-[17px] leading-[1.65] text-[#54505B]">
                Whether you want to grow your business, sponsor a video, or just ask a question — send us a message and we will get back to you within one business day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="rounded-[20px] border border-[#ECE5E1] bg-white p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C]">
                  EMAIL
                </div>
                <a
                  href="mailto:khalid@khalidfarhan.com"
                  className="mt-2 block text-[15px] font-bold text-[#1B1624] hover:text-[#FD976D]"
                >
                  khalid@khalidfarhan.com
                </a>
              </div>
              <div className="rounded-[20px] border border-[#ECE5E1] bg-white p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C]">
                  DUBLIN OFFICE
                </div>
                <div className="mt-2 text-[15px] font-bold text-[#1B1624]">Dublin, Ireland</div>
              </div>
              <div className="rounded-[20px] border border-[#ECE5E1] bg-white p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C]">
                  DHAKA OFFICE
                </div>
                <div className="mt-2 text-[15px] font-bold text-[#1B1624]">Dhaka, Bangladesh</div>
              </div>
              <div className="rounded-[20px] border border-[#ECE5E1] bg-white p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C]">
                  FREE MARKETING AUDIT
                </div>
                <p className="mt-1 text-[13px] text-[#54505B]">
                  Want a full review of your marketing first?
                </p>
                <Link
                  href="/agency/free-marketing-audit"
                  className="mt-2 inline-block text-[14px] font-bold text-[#1B1624] underline hover:text-[#FD976D]"
                >
                  Request a Free Audit →
                </Link>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#ECE5E1] bg-[#F3EDE9]/60 p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76737C]">
                  SPONSOR A VIDEO
                </div>
                <div className="mt-1 text-[15px] font-semibold text-[#1B1624]">
                  Reach 1.9M+ YouTube subscribers.
                </div>
              </div>
              <Link
                href="/sponsor"
                className="text-[14px] font-bold text-[#1B1624] underline hover:text-[#FD976D]"
              >
                View Sponsorship Options →
              </Link>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-[#ECE5E1] bg-white p-7 sm:p-10 shadow-sm space-y-5"
            >
              <div>
                <label className="block text-[13px] font-semibold text-[#1B1624] mb-1.5">
                  Your name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1B1624] mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1B1624] mb-1.5">
                  What is this about?
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] focus:border-[#FD976D] focus:outline-none"
                >
                  <option>Agency / Marketing Services</option>
                  <option>Business School</option>
                  <option>Sponsorship</option>
                  <option>Press / Media</option>
                  <option>General</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1B1624] mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold cursor-pointer"
              >
                Send Message
              </button>

              {sent && (
                <div className="rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3.5 text-[14px] text-[#1B1624]">
                  Thank you, {name}! Your message ({topic}) has been received.
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

