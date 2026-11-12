import React from "react";
import type { Metadata } from "next";
import FoundersDenClient from "@/components/projects/FoundersDenClient";

export const metadata: Metadata = {
  title: "Founder's Den — Fund & Acquisitions | Khalid Farhan",
  description:
    "Talent is everywhere. We support today's builders and founders with our fund.",
};

export default function FoundersDenPage() {
  return <FoundersDenClient />;
}
