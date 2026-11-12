"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function YapcorderLoginClient() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-[440px] rounded-[28px] border border-[#ECE5E1] bg-white p-8 sm:p-10 shadow-sm">
          <h1 className="heading-xl text-[32px] text-[#1B1624]">Sign in to Yapcorder</h1>
          <p className="mt-2 text-[14px] text-[#54505B]">
            Enter your email and we will send you a sign-in link.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSent(true);
            }}
            className="mt-6 space-y-4"
          >
            <div>
              <label className="block text-[13px] font-semibold text-[#1B1624] mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] focus:border-[#FD976D] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold cursor-pointer"
            >
              Send sign-in link
            </button>
          </form>

          {sent && (
            <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3 text-[13px] text-[#1B1624]">
              Sign-in link requested for {email}.
            </div>
          )}

          <div className="mt-6 text-[14px]">
            <Link href="/yapcorder" className="font-semibold text-[#1B1624] underline hover:text-[#FD976D]">
              ← Back to Yapcorder
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

