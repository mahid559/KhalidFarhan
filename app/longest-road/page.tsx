import React from "react";
import type { Metadata } from "next";
import LongestRoadClient from "@/components/projects/LongestRoadClient";

export const metadata: Metadata = {
  title: "Longest Road — Catan Tribe Tracker for iOS | Khalid Farhan",
  description:
    "Track Catan nights, standings, rivalries, badges, and seasons with your tribe.",
};

export default function LongestRoadPage() {
  return <LongestRoadClient />;
}
