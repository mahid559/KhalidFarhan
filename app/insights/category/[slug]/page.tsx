import React from "react";
import type { Metadata } from "next";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";
import { CATEGORY_SLUGS } from "@/lib/pages-data";

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getRouteMetadata(`/insights/category/${slug}`);
}

export default async function InsightCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CrawledRoutePage route={`/insights/category/${slug}`} />;
}

