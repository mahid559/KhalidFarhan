import React from "react";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";

export const metadata = getRouteMetadata("/affiliates/forgot-password");

export default function Page() {
  return <CrawledRoutePage route="/affiliates/forgot-password" />;
}
