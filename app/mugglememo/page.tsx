import React from "react";
import type { Metadata } from "next";
import MuggleMemoClient from "@/components/mugglememo/MuggleMemoClient";

export const metadata: Metadata = {
  title: "Muggle Memo — Khalid Farhan",
  description:
    "Every Friday I send one email about the most useful thing I found that week. Business ideas, AI, marketing and productivity. 100 BDT a year.",
};

export default function MuggleMemoPage() {
  return <MuggleMemoClient />;
}
