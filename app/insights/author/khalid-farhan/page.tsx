import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/insights/author/khalid-farhan");

export default function Page() {
  return <CrawledRoutePage route="/insights/author/khalid-farhan" />;
}
