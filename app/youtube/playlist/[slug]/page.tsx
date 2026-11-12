import React from "react";
import type { Metadata } from "next";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";
import { PLAYLIST_SLUGS } from "@/lib/pages-data";

export function generateStaticParams() {
  return PLAYLIST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getRouteMetadata(`/youtube/playlist/${slug}`);
}

export default async function YoutubePlaylistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CrawledRoutePage route={`/youtube/playlist/${slug}`} />;
}

