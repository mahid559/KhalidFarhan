import React from "react";
import type { Metadata } from "next";
import { getPageData } from "@/lib/pages-data";
import CaseStudiesClient, { type CaseStudyItem } from "@/components/work/CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies — Client Results | Khalid Farhan",
  description:
    "24 case studies from Khalid Farhan's marketing agency: SEO, Google Ads, Meta Ads, websites and email, with the numbers before and after.",
};

function inferCategory(href: string): CaseStudyItem["category"] {
  if (href.includes("ads") || href.includes("video")) return "Ads";
  if (href.includes("website") || href.includes("ecommerce") || href.includes("content")) {
    return "Websites and growth";
  }
  return "Search";
}

export default function CaseStudiesPage() {
  const page = getPageData("/work/case-studies");
  const section2 = page?.sections.find((s) => s.index === 2);

  const industries: string[] = [];
  const items: CaseStudyItem[] = [];

  if (section2) {
    let readingIndustries = false;
    for (const block of section2.blocks) {
      if (block.type === "text") {
        if (block.text === "All industries") readingIndustries = true;
        if (readingIndustries) industries.push(block.text);
      } else if (block.type === "link") {
        const parts = block.text
          .split(/\n{2,}/)
          .map((s) => s.trim())
          .filter(Boolean);
        const topLines = (parts[0] || "").split("\n").map((s) => s.trim());
        const metricLines = (parts[1] || "").split("\n").map((s) => s.trim());
        items.push({
          industry: topLines[0] || "",
          location: topLines[1] || "",
          metric: metricLines[0] || "",
          metricLabel: metricLines[1] || "",
          headline: parts[2] || "",
          clientType: parts[3] || "",
          href: block.href,
          category: inferCategory(block.href),
        });
      }
    }
  }

  return (
    <CaseStudiesClient
      items={items}
      industries={industries.length > 0 ? industries : ["All industries"]}
    />
  );
}
