import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/affiliates/signup");

export default function Page() {
  return <CrawledRoutePage route="/affiliates/signup" />;
}
