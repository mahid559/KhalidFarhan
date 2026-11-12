import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/cookie-policy");

export default function Page() {
  return <CrawledRoutePage route="/cookie-policy" />;
}
