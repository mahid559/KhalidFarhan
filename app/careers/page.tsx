import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/careers");

export default function Page() {
  return <CrawledRoutePage route="/careers" />;
}
