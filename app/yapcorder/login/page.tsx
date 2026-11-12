import React from "react";
import type { Metadata } from "next";
import YapcorderLoginClient from "@/components/projects/YapcorderLoginClient";

export const metadata: Metadata = {
  title: "Sign in to Yapcorder | Khalid Farhan",
  description: "Sign in to your Yapcorder studio.",
};

export default function YapcorderLoginPage() {
  return <YapcorderLoginClient />;
}
