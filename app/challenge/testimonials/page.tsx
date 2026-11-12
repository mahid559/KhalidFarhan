import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/challenge/testimonials");

export default function Page() {
  return <CrawledRoutePage route="/challenge/testimonials" />;
}
