import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/privacy-policy");

export default function Page() {
  return <CrawledRoutePage route="/privacy-policy" />;
}
