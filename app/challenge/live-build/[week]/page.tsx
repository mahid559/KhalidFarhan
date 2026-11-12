import React from "react";
import type { Metadata } from "next";
import CrawledRoutePage, { getRouteMetadata } from "@/components/CrawledRoutePage";
import { CHALLENGE_WEEKS } from "@/lib/pages-data";

export function generateStaticParams() {
  return CHALLENGE_WEEKS.map((week) => ({ week }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ week: string }>;
}): Promise<Metadata> {
  const { week } = await params;
  return getRouteMetadata(`/challenge/live-build/${week}`);
}

export default async function ChallengeWeekPage({
  params,
}: {
  params: Promise<{ week: string }>;
}) {
  const { week } = await params;
  return <CrawledRoutePage route={`/challenge/live-build/${week}`} />;
}

