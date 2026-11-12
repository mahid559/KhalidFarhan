"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EnglishForgotClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624] flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 px-4">
        <div className="mx-auto max-w-[640px]">
          <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-8 sm:p-10 shadow-sm">
            <h1 className="heading-xl text-[32px] sm:text-[40px] text-[#1B1624]">
              পাসওয়ার্ড রিসেট
            </h1>
            <p className="mt-3 text-[16px] text-[#54505B]">
              অ্যাকাউন্টের ইমেইল দিন। রিসেট লিংক পাঠানো হবে।
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
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

              <button
                type="submit"
                className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                লিংক পাঠান
              </button>
            </form>

            {submitted && (
              <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3.5 text-[14px] text-[#1B1624]">
                যদি {email} দিয়ে অ্যাকাউন্ট থাকে, তাহলে রিসেট লিংক পাঠানো হয়েছে।
              </div>
            )}

            <div className="mt-6 text-[14px]">
              <Link
                href="/english/login"
                className="font-semibold text-[#1B1624] underline hover:text-[#FD976D]"
              >
                লগইনে ফিরুন
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

