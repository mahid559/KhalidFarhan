import React from "react";
import type { Metadata } from "next";
import ContactClient from "@/components/about/ContactClient";

export const metadata: Metadata = {
  title: "Contact — Khalid Farhan | Khalid Farhan",
  description:
    "Send us a message for marketing services, Business School, sponsorship, or press inquiries. Response within one business day.",
};

export default function ContactPage() {
  return <ContactClient />;
}
