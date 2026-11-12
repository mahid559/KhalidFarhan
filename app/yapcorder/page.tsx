import React from "react";
import type { Metadata } from "next";
import YapcorderClient from "@/components/projects/YapcorderClient";

export const metadata: Metadata = {
  title: "Yapcorder — Record Remote Podcasts in Full Quality | Khalid Farhan",
  description:
    "Local audio and video recording for remote podcasts. 60 minutes free in 1080p, no card, no watermark.",
};

export default function YapcorderPage() {
  return <YapcorderClient />;
}
