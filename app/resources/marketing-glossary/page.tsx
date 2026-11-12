import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/resources/marketing-glossary");

export default function Page() {
  return <CrawledRoutePage route="/resources/marketing-glossary" />;
}
