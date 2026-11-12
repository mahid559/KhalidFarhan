import React, { Suspense } from "react";
import type { Metadata } from "next";
import EnglishTestClient from "@/components/english/EnglishTestClient";

export const metadata: Metadata = {
  title: "আপনার ইংরেজি এখন কোন লেভেলে? — EnglishAi | Khalid Farhan",
  description: "5 মিনিটের টেস্ট। প্রশ্ন আপনার উত্তর দেখে সহজ বা কঠিন হবে। শেষে 1 মিনিট কথা বলবেন।",
};

export default function EnglishTestPage() {
  return (
    <Suspense fallback={null}>
      <EnglishTestClient />
    </Suspense>
  );
}
