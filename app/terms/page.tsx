import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/terms");

export default function Page() {
  return <CrawledRoutePage route="/terms" />;
}
