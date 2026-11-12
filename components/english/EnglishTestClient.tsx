"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EnglishTestClient() {
  const searchParams = useSearchParams();
  const initialGoal = searchParams.get("goal") === "ielts" ? "ielts" : "daily";
  const [goal, setGoal] = useState<"daily" | "ielts">(initialGoal);
  const [age, setAge] = useState("18 বা তার বেশি");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setGoal(searchParams.get("goal") === "ielts" ? "ielts" : "daily");
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624] flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 px-4">
        <div className="mx-auto max-w-[640px]">
          <div className="rounded-[28px] border border-[#ECE5E1] bg-white p-8 sm:p-10 shadow-sm">
            <h1 className="heading-xl text-[32px] sm:text-[42px] text-[#1B1624]">
              আপনার ইংরেজি এখন কোন লেভেলে?
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#54505B]">
              5 মিনিটের টেস্ট। প্রশ্ন আপনার উত্তর দেখে সহজ বা কঠিন হবে। শেষে 1 মিনিট কথা বলবেন।
            </p>
            <p className="mt-3 text-[14px] font-semibold text-[#1B1624]">
              900 BDT/month or 10,000 BDT/Lifetime
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-[14px] font-semibold text-[#1B1624] mb-2.5">
                  কেন ইংরেজি শিখছেন?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    aria-pressed={goal === "daily"}
                    onClick={() => {
                      setGoal("daily");
                      setStarted(false);
                    }}
                    className={`rounded-[14px] border px-4 py-3.5 text-left text-[14px] font-semibold transition-colors cursor-pointer ${
                      goal === "daily"
                        ? "border-[#FD976D] bg-[#FD976D]/15 text-[#1B1624]"
                        : "border-[#ECE5E1] bg-[#F9F6F3] text-[#54505B] hover:border-[#FD976D]/60"
                    }`}
                  >
                    কাজ, ক্যারিয়ার আর প্রতিদিনের ইংরেজি
                  </button>
                  <button
                    type="button"
                    aria-pressed={goal === "ielts"}
                    onClick={() => {
                      setGoal("ielts");
                      setStarted(false);
                    }}
                    className={`rounded-[14px] border px-4 py-3.5 text-left text-[14px] font-semibold transition-colors cursor-pointer ${
                      goal === "ielts"
                        ? "border-[#FD976D] bg-[#FD976D]/15 text-[#1B1624]"
                        : "border-[#ECE5E1] bg-[#F9F6F3] text-[#54505B] hover:border-[#FD976D]/60"
                    }`}
                  >
                    উচ্চশিক্ষা আর IELTS
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="english-age"
                  className="block text-[14px] font-semibold text-[#1B1624] mb-2"
                >
                  আপনার বয়স
                </label>
                <select
                  id="english-age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-3 text-[15px] text-[#1B1624] focus:border-[#FD976D] focus:outline-none"
                >
                  <option value="18 বা তার বেশি">18 বা তার বেশি</option>
                  <option value="13 থেকে 17">13 থেকে 17</option>
                  <option value="13-এর কম">13-এর কম</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setStarted(true)}
                className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                টেস্ট শুরু করুন
              </button>

              {started && (
                <div className="rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-4 text-[14px] text-[#1B1624]">
                  টেস্ট সেটআপ সম্পূর্ণ: {goal === "ielts" ? "উচ্চশিক্ষা আর IELTS" : "কাজ, ক্যারিয়ার আর প্রতিদিনের ইংরেজি"} ({age})।
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

