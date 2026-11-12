import React from "react";
import type { Metadata } from "next";
import ShobdoClient from "@/components/projects/ShobdoClient";

export const metadata: Metadata = {
  title: "Shobdo — Bangla Voice Typing for Mac and Windows | Khalid Farhan",
  description:
    "Hold a key, speak in Bangla or English, let go. Free Bangla voice typing for Mac and Windows.",
};

export default function ShobdoPage() {
  return <ShobdoClient />;
}
