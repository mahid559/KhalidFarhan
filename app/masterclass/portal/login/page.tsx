import React from "react";
import type { Metadata } from "next";
import MasterclassPortalLoginClient from "@/components/masterclass/MasterclassPortalLoginClient";

export const metadata: Metadata = {
  title: "Sign In — Agency Masterclass Portal | Khalid Farhan",
  description: "Sign in to watch Make Your First $1k Online.",
};

export default function MasterclassPortalLoginPage() {
  return <MasterclassPortalLoginClient />;
}
