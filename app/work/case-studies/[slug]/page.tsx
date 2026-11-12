import React from "react";
import type { Metadata } from "next";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";
import { CASE_STUDY_SLUGS } from "@/lib/pages-data";

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getRouteMetadata(`/work/case-studies/${slug}`);
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CrawledRoutePage route={`/work/case-studies/${slug}`} />;
}

