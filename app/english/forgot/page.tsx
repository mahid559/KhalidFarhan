import React from "react";
import type { Metadata } from "next";
import EnglishForgotClient from "@/components/english/EnglishForgotClient";

export const metadata: Metadata = {
  title: "পাসওয়ার্ড রিসেট — EnglishAi | Khalid Farhan",
  description: "অ্যাকাউন্টের ইমেইল দিন। রিসেট লিংক পাঠানো হবে।",
};

export default function EnglishForgotPage() {
  return <EnglishForgotClient />;
}
