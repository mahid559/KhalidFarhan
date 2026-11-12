import React from "react";
import type { Metadata } from "next";
import FreeAuditClient from "@/components/agency/FreeAuditClient";

export const metadata: Metadata = {
  title: "Free Marketing Audit — Khalid Farhan | Khalid Farhan",
  description:
    "Request a free marketing audit. We review your site, ad accounts, competitors, and search visibility within 1 business day.",
};

export default function FreeMarketingAuditPage() {
  return <FreeAuditClient />;
}
