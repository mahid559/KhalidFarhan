import React from "react";
import type { Metadata } from "next";
import EnglishLandingClient from "@/components/english/EnglishLandingClient";

export const metadata: Metadata = {
  title: "EnglishAi — Your Personal English Teacher | Khalid Farhan",
  description:
    "Cambridge Curriculum দিয়ে সাজানো, 100% আপনার জন্য পার্সোনালাইজড। আপনার পার্সোনাল টিচার, প্রতিদিন 20 মিনিট।",
};

export default function EnglishPage() {
  return <EnglishLandingClient />;
}
