import React from "react";
import type { Metadata } from "next";
import MasterclassClient from "@/components/masterclass/MasterclassClient";

export const metadata: Metadata = {
  title: "Make Your First $1k Online — Agency Masterclass | Khalid Farhan",
  description:
    "Live class on Friday, 27 November, 8 PM Bangladesh time. Learn step by step how to find clients, close deals, get paid, and deliver fast with AI.",
};

export default function MasterclassPage() {
  return <MasterclassClient />;
}
