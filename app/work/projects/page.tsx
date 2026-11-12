import React from "react";
import type { Metadata } from "next";
import { getPageData } from "@/lib/pages-data";
import ProjectsClient, { type ProjectCard } from "@/components/work/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects — Portfolio | Khalid Farhan",
  description:
    "Portfolio of client work across SEO, Google Ads, Meta Ads, email marketing, and web design. 120+ projects delivered.",
};

export default function ProjectsPage() {
  const page = getPageData("/work/projects");
  const section3 = page?.sections.find((s) => s.index === 3);

  const allTags: string[] = [];
  const projects: ProjectCard[] = [];

  if (section3) {
    const blocks = section3.blocks;
    let i = 0;
    // Collect initial filter tags before the first card (which precedes an h3)
    while (i < blocks.length) {
      if (
        blocks[i].type === "text" &&
        blocks[i + 1]?.type === "text" &&
        blocks[i + 2]?.type === "h3"
      ) {
        break;
      }
      if (blocks[i].type === "text") {
        allTags.push((blocks[i] as { type: "text"; text: string }).text);
      }
      i++;
    }

    while (i < blocks.length) {
      if (
        blocks[i]?.type === "text" &&
        blocks[i + 1]?.type === "text" &&
        blocks[i + 2]?.type === "h3" &&
        blocks[i + 3]?.type === "p"
      ) {
        const industry = (blocks[i] as { type: "text"; text: string }).text;
        const year = (blocks[i + 1] as { type: "text"; text: string }).text;
        const title = (blocks[i + 2] as { type: "h3"; text: string }).text;
        const desc = (blocks[i + 3] as { type: "p"; text: string }).text;
        i += 4;
        const tags: string[] = [];
        while (
          i < blocks.length &&
          blocks[i].type === "text" &&
          !(blocks[i + 1]?.type === "text" && blocks[i + 2]?.type === "h3")
        ) {
          tags.push((blocks[i] as { type: "text"; text: string }).text);
          i++;
        }
        projects.push({ industry, year, title, desc, tags });
      } else {
        i++;
      }
    }
  }

  return <ProjectsClient projects={projects} allTags={allTags} />;
}
