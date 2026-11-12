import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/challenge/curriculum");

export default function Page() {
  return <CrawledRoutePage route="/challenge/curriculum" />;
}
