import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/challenge/pricing");

export default function Page() {
  return <CrawledRoutePage route="/challenge/pricing" />;
}
