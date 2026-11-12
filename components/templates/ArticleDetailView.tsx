import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Block, CrawledPage, PageSection } from "@/lib/pages-data";

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href || "/"} className={className}>
      {children}
    </Link>
  );
}

function ArticleHeader({ section }: { section: PageSection }) {
  const category = section.blocks.find((b) => b.type === "p") as Extract<Block, { type: "p" }> | undefined;
  const h1 = section.blocks.find((b) => b.type === "h1") as Extract<Block, { type: "h1" }> | undefined;
  const authorLink = section.blocks.find((b) => b.type === "link") as Extract<Block, { type: "link" }> | undefined;
  const metaTexts = section.blocks.filter((b) => b.type === "text") as Extract<Block, { type: "text" }>[];

  // Typically metaTexts = ["KF", "·", "22 October 2026", "·", "7 min read"]
  const dateAndRead = metaTexts.filter((t) => t.text !== "KF" && t.text !== "·").map((t) => t.text);

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {category && (
          <p className="text-xs font-bold uppercase tracking-wider text-[#FD976D]">{category.text}</p>
        )}
        {h1 && (
          <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-[#1B1624] tracking-tight max-w-4xl">
            {h1.text}
          </h1>
        )}
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#54505B] pt-2">
          <span className="w-8 h-8 rounded-full bg-[#1B1624] text-white text-xs font-bold inline-flex items-center justify-center">
            KF
          </span>
          {authorLink && (
            <Link href={authorLink.href} className="font-semibold text-[#1B1624] hover:text-[#FD976D]">
              {authorLink.text}
            </Link>
          )}
          {dateAndRead.map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-3 text-[#76737C]">
              <span>·</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleBodyWithSidebar({
  bodySection,
  relatedSection,
}: {
  bodySection: PageSection;
  relatedSection?: PageSection;
}) {
  // Separate main article body from trailing TAGS / Author Bio / Sidebar Audit card
  const blocks = bodySection.blocks;
  const tagsIdx = blocks.findIndex((b) => b.type === "p" && b.text === "TAGS");
  const auditIdx = blocks.findIndex((b) => b.type === "p" && b.text === "Free audit");
  const relatedIdx = blocks.findIndex((b) => b.type === "p" && b.text === "Related articles");

  const endOfProseIdx = [tagsIdx, auditIdx, relatedIdx].filter((i) => i >= 0).sort((a, b) => a - b)[0] ?? blocks.length;
  const proseBlocks = blocks.slice(0, endOfProseIdx);

  // Extract tags (between TAGS and author bio / Free audit)
  const trailing = blocks.slice(endOfProseIdx);
  const tagTexts: string[] = [];
  let authorName = "";
  let authorBio = "";
  let auditHeading = "";
  let auditLink: Extract<Block, { type: "link" }> | undefined;
  const inlineRelatedLinks: Extract<Block, { type: "link" }>[] = [];

  for (let i = 0; i < trailing.length; i++) {
    const b = trailing[i];
    if (b.type === "text" && b.text !== "KF") {
      tagTexts.push(b.text);
    } else if (b.type === "p" && b.text === "Khalid Farhan") {
      authorName = b.text;
      if (trailing[i + 1]?.type === "p") {
        authorBio = (trailing[i + 1] as Extract<Block, { type: "p" }>).text;
      }
    } else if (b.type === "p" && b.text === "Free audit") {
      if (trailing[i + 1]?.type === "p") {
        auditHeading = (trailing[i + 1] as Extract<Block, { type: "p" }>).text;
      }
      if (trailing[i + 2]?.type === "link") {
        auditLink = trailing[i + 2] as Extract<Block, { type: "link" }>;
      }
    } else if (b.type === "link" && b.href.startsWith("/insights/") && b.href !== "/insights/author/khalid-farhan") {
      inlineRelatedLinks.push(b);
    }
  }

  const sidebarRelatedLinks =
    inlineRelatedLinks.length > 0
      ? inlineRelatedLinks
      : ((relatedSection?.blocks.filter((b) => b.type === "link") || []) as Extract<Block, { type: "link" }>[]);

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 8 Cols: Article Prose + Tags + Author Bio */}
          <article className="lg:col-span-8 space-y-6">
            {proseBlocks.map((b, idx) => {
              if (b.type === "h2") {
                return (
                  <h2 key={idx} className="heading-lg text-2xl sm:text-3xl text-[#1B1624] pt-6">
                    {b.text}
                  </h2>
                );
              }
              if (b.type === "h3") {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#1B1624] pt-4">
                    {b.text}
                  </h3>
                );
              }
              if (b.type === "h4") {
                return (
                  <h4 key={idx} className="text-lg font-bold text-[#1B1624] pt-2">
                    {b.text}
                  </h4>
                );
              }
              if (b.type === "p") {
                return (
                  <p key={idx} className="text-base sm:text-lg text-[#54505B] leading-relaxed">
                    {b.text}
                  </p>
                );
              }
              if (b.type === "blockquote") {
                return (
                  <blockquote
                    key={idx}
                    className="bg-white border-l-4 border-[#FD976D] rounded-r-2xl p-6 text-base sm:text-lg text-[#1B1624] italic leading-relaxed"
                  >
                    {b.text}
                  </blockquote>
                );
              }
              if (b.type === "ul" || b.type === "ol") {
                const Tag = b.type === "ol" ? "ol" : "ul";
                return (
                  <Tag
                    key={idx}
                    className={`space-y-2.5 pl-6 text-base sm:text-lg text-[#54505B] leading-relaxed ${
                      b.type === "ol" ? "list-decimal" : "list-disc"
                    }`}
                  >
                    {b.items.map((item, i) => (
                      <li key={i}>
                        {item.href ? (
                          <SmartLink href={item.href} className="text-[#1B1624] underline hover:text-[#FD976D]">
                            {item.text}
                          </SmartLink>
                        ) : (
                          item.text
                        )}
                      </li>
                    ))}
                  </Tag>
                );
              }
              if (b.type === "table") {
                return (
                  <div
                    key={idx}
                    className="overflow-x-auto bg-white border border-[#ECE5E1] rounded-[20px] shadow-2xs my-4"
                  >
                    <table className="w-full text-left border-collapse text-sm sm:text-base">
                      <tbody>
                        {b.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={
                              rIdx === 0
                                ? "bg-[#F3EDE9] font-bold text-[#1B1624] border-b border-[#ECE5E1]"
                                : "border-b border-[#ECE5E1]/70 last:border-0 text-[#54505B]"
                            }
                          >
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-3">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (b.type === "img") {
                return (
                  <img
                    key={idx}
                    src={b.src}
                    alt={b.alt}
                    className="w-full h-auto rounded-2xl border border-[#ECE5E1] bg-white"
                    loading="lazy"
                  />
                );
              }
              if (b.type === "link") {
                return (
                  <div key={idx} className="pt-2">
                    <SmartLink
                      href={b.href}
                      className="ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] text-sm px-6 py-3"
                    >
                      {b.text}
                    </SmartLink>
                  </div>
                );
              }
              return null;
            })}

            {tagTexts.length > 0 && (
              <div className="pt-8 border-t border-[#ECE5E1] flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#76737C] mr-2">Tags:</span>
                {tagTexts.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-[#ECE5E1] rounded-full px-3.5 py-1 text-xs font-medium text-[#54505B]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {authorName && (
              <div className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 flex items-start gap-4 mt-8">
                <span className="w-12 h-12 rounded-full bg-[#1B1624] text-white text-sm font-bold inline-flex items-center justify-center shrink-0">
                  KF
                </span>
                <div className="space-y-1">
                  <Link href="/insights/author/khalid-farhan" className="text-base font-bold text-[#1B1624] hover:text-[#FD976D]">
                    {authorName}
                  </Link>
                  {authorBio && <p className="text-sm text-[#54505B] leading-relaxed">{authorBio}</p>}
                </div>
              </div>
            )}
          </article>

          {/* Right 4 Cols: Sticky Sidebar (Free Audit Card + Related Articles) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            <div className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 space-y-4 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-[#FD976D]">Free audit</p>
              <p className="text-lg font-bold text-[#1B1624] leading-snug">
                {auditHeading || "Get a free marketing audit for your business."}
              </p>
              <Link
                href={auditLink?.href || "/agency/free-marketing-audit"}
                className="w-full ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] text-sm py-3"
              >
                {auditLink?.text || "Book Now"}
              </Link>
            </div>

            {sidebarRelatedLinks.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#76737C]">
                  Related articles
                </p>
                <div className="space-y-3">
                  {sidebarRelatedLinks.map((l, idx) => {
                    const lines = l.text.split("\n").map((s) => s.trim()).filter(Boolean);
                    return (
                      <Link
                        key={idx}
                        href={l.href}
                        className="group ali-card ali-article-card block bg-white border border-[#ECE5E1] rounded-[20px] p-5 space-y-1.5"
                      >
                        {lines.length > 1 && (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FD976D] group-hover:text-[#1B1624]">
                            {lines[0]}
                          </span>
                        )}
                        <h3 className="text-base font-bold text-[#1B1624] leading-snug">
                          {lines.length > 1 ? lines.slice(1).join(" ") : lines[0]}
                        </h3>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function ArticleDetailView({ page }: { page: CrawledPage }) {
  const headerSec = page.sections[0];
  const bodySec = page.sections[1];
  const sec3 = page.sections[2];
  const sec4 = page.sections[3];

  const hasSeparateRelated = sec3 && sec3.blocks.some((b) => b.type === "link" && b.href.startsWith("/insights/"));
  const bottomCtaSec = hasSeparateRelated ? sec4 : sec3;
  const ctaH2 = bottomCtaSec?.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const ctaLink = bottomCtaSec?.blocks.find((b) => b.type === "link") as Extract<Block, { type: "link" }> | undefined;

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow">
        {headerSec && <ArticleHeader section={headerSec} />}
        {bodySec && (
          <ArticleBodyWithSidebar
            bodySection={bodySec}
            relatedSection={hasSeparateRelated ? sec3 : undefined}
          />
        )}
        {bottomCtaSec && (
          <section className="py-16 sm:py-20 bg-[#F9F6F3]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border border-[#ECE5E1] rounded-[36px] p-10 sm:p-14 text-center space-y-6 shadow-xs hover:border-[#FD976D] transition-colors">
                {ctaH2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{ctaH2.text}</h2>}
                {ctaLink && (
                  <div>
                    <Link
                      href={ctaLink.href}
                      className="ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] text-sm px-7 py-3.5"
                    >
                      {ctaLink.text}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

