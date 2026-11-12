import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageRenderer from "@/components/PageRenderer";
import { getPageData } from "@/lib/pages-data";

export function getRouteMetadata(route: string): Metadata {
  const data = getPageData(route);
  if (!data) return {};
  return {
    title: data.title || undefined,
    description: data.metaDesc || undefined,
  };
}

export default function CrawledRoutePage({ route }: { route: string }) {
  const data = getPageData(route);
  if (!data) notFound();
  return <PageRenderer page={data} />;
}

