import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/resources/free-geo-checklist");

export default function Page() {
  return <CrawledRoutePage route="/resources/free-geo-checklist" />;
}
