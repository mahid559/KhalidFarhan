"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MasterclassPortalLoginClient() {
  const [mode, setMode] = useState<"signin" | "reset">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    if (mode === "signin" && !password.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-[440px] rounded-[24px] border border-[#ECE5E1] bg-white p-8 sm:p-10 shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#76737C]">
          MAKE YOUR FIRST $1K ONLINE · 27 NOV
        </p>

        {mode === "signin" ? (
          <>
            <h1 className="heading-xl mt-2 text-[32px] text-[#1B1624]">SIGN IN</h1>
            <p className="mt-2 text-[14px] text-[#54505B]">
              Use the email and password we sent when you booked.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#54505B] mb-1.5">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#54505B] mb-1.5">
                  PASSWORD
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
                className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Sign in
              </button>
            </form>

            {submitted && (
              <div className="mt-4 rounded-[12px] border border-[#ECE5E1] bg-[#F3EDE9] p-3 text-[13px] text-[#1B1624]">
                Sign-in request submitted for {email}.
              </div>
            )}

            <div className="mt-6 text-[13px] text-[#54505B]">
              Lost your password?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("reset");
                  setSubmitted(false);
                }}
                className="font-semibold text-[#1B1624] underline hover:text-[#FD976D] cursor-pointer"
              >
                Email me a new one
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="heading-xl mt-2 text-[32px] text-[#1B1624]">
              RESET YOUR LOGIN
            </h1>
            <p className="mt-2 text-[14px] text-[#54505B]">
              Enter the email you used when you booked and we will send a new password.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#54505B] mb-1.5">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Send new password
              </button>
            </form>

            {submitted && (
              <div className="mt-4 rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3 text-[13px] text-[#1B1624]">
                If an account exists for {email}, a new password has been sent.
              </div>
            )}

            <div className="mt-6 text-[13px] text-[#54505B]">
              <button
                type="button"
                onClick={() => {
                  setMode("signin");
                  setSubmitted(false);
                }}
                className="font-semibold text-[#1B1624] underline hover:text-[#FD976D] cursor-pointer"
              >
                ← Back to sign in
              </button>
            </div>
          </>
        )}

        <div className="mt-5 border-t border-[#ECE5E1] pt-4 text-[13px]">
          <Link
            href="/masterclass"
            className="font-medium text-[#54505B] hover:text-[#FD976D] transition-colors"
          >
            ← Back to class page
          </Link>
        </div>
      </div>
    </div>
  );
}

