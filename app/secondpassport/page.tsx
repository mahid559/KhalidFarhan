import React from "react";
import type { Metadata } from "next";
import SecondPassportClient from "@/components/projects/SecondPassportClient";

export const metadata: Metadata = {
  title: "SecondPassport — Study Abroad Shortlist | Khalid Farhan",
  description:
    "Your second passport is a degree abroad. Get a researched university shortlist for ৳900 in 7 business days.",
};

export default function SecondPassportPage() {
  return <SecondPassportClient />;
}
