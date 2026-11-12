import React from "react";
import type { Metadata } from "next";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";
import { LOCATION_SERVICE_SLUGS, LOCATION_SLUGS } from "@/lib/pages-data";

export function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  for (const service of LOCATION_SERVICE_SLUGS) {
    for (const location of LOCATION_SLUGS) {
      params.push({ service, location });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}): Promise<Metadata> {
  const { service, location } = await params;
  return getRouteMetadata(`/services/${service}/${location}`);
}

export default async function ServiceLocationPage({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}) {
  const { service, location } = await params;
  return <CrawledRoutePage route={`/services/${service}/${location}`} />;
}

