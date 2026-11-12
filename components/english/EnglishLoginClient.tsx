"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EnglishLoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624] flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 px-4">
        <div className="mx-auto max-w-[640px]">
          <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-8 sm:p-10 shadow-sm">
            <h1 className="heading-xl text-[32px] sm:text-[40px] text-[#1B1624]">
              লগইন করুন
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-[14px] font-semibold text-[#1B1624] mb-1.5">
                  ইমেইল
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#1B1624] mb-1.5">
                  পাসওয়ার্ড
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                লগইন
              </button>
            </form>

            {submitted && (
              <div className="mt-4 rounded-[12px] border border-[#ECE5E1] bg-[#F3EDE9] p-3.5 text-[14px] text-[#1B1624]">
                লগইন রিকোয়েস্ট রিসিভ হয়েছে ({email})।
              </div>
            )}

            <div className="mt-6 flex flex-col gap-2 text-[14px] text-[#54505B]">
              <div>
                <Link
                  href="/english/forgot"
                  className="font-medium text-[#1B1624] underline hover:text-[#FD976D]"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link>
              </div>
              <div>
                নতুন?{" "}
                <Link
                  href="/english/test"
                  className="font-semibold text-[#1B1624] underline hover:text-[#FD976D]"
                >
                  আগে লেভেল টেস্ট দিন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

