import React from "react";
import type { Metadata } from "next";
import { getPageData } from "@/lib/pages-data";
import InsightsClient, { type InsightCard } from "@/components/insights/InsightsClient";

export const metadata: Metadata = {
  title: "Blog: Marketing Strategy, SEO, Ads & Growth | Khalid Farhan",
  description:
    "Articles on SEO, Google Ads, Meta Ads, GEO, content marketing, and digital business growth. Written by Khalid Farhan.",
};

function parseArticleLink(text: string, href: string): InsightCard {
  const parts = text
    .split(/\n{2,}/)
    .map((s) => s.trim())
    .filter(Boolean);
  const headLines = (parts[0] || "").split("\n").map((s) => s.trim());
  const category = headLines[0] || "INSIGHTS";
  const title = headLines.slice(1).join(" ") || parts[0] || "";
  const excerpt = parts[1] || "";
  const meta = (parts[2] || "").replace(/\n+/g, " ");
  return { category, title, excerpt, meta, href };
}

export default function InsightsPage() {
  const page = getPageData("/insights");
  const sec2 = page?.sections.find((s) => s.index === 2);
  const sec3 = page?.sections.find((s) => s.index === 3);

  const featured: InsightCard[] = (sec2?.blocks || [])
    .filter((b): b is Extract<typeof b, { type: "link" }> => b.type === "link")
    .map((b) => parseArticleLink(b.text, b.href));

  const articles: InsightCard[] = (sec3?.blocks || [])
    .filter((b): b is Extract<typeof b, { type: "link" }> => b.type === "link")
    .map((b) => parseArticleLink(b.text, b.href));

  return <InsightsClient featured={featured} articles={articles} />;
}
