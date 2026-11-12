import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/team");

export default function Page() {
  return <CrawledRoutePage route="/team" />;
}
