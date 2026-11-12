import React from "react";
import type { Metadata } from "next";
import EnglishLoginClient from "@/components/english/EnglishLoginClient";

export const metadata: Metadata = {
  title: "লগইন করুন — EnglishAi | Khalid Farhan",
  description: "EnglishAi অ্যাকাউন্টে লগইন করুন।",
};

export default function EnglishLoginPage() {
  return <EnglishLoginClient />;
}
