import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Block, CrawledPage, PageSection } from "@/lib/pages-data";
import ServiceDetailView from "@/components/templates/ServiceDetailView";
import CaseStudyDetailView from "@/components/templates/CaseStudyDetailView";
import ArticleDetailView from "@/components/templates/ArticleDetailView";
import {
  InteractiveFormBlock,
  InteractiveFaqItem,
  InteractiveChecklist,
  CaseStudyFilterGrid,
} from "@/components/InteractiveBlocks";

type BlockGroup =
  | { kind: "single"; block: Block }
  | { kind: "faqs"; items: { summary: string; body: string }[] }
  | { kind: "imgs"; items: Extract<Block, { type: "img" }>[] }
  | { kind: "links"; items: Extract<Block, { type: "link" }>[] }
  | { kind: "buttons"; items: Extract<Block, { type: "button" }>[] }
  | { kind: "quotes"; items: { quote: string; author: string }[] }
  | { kind: "featureCards"; items: { title: string; body: string[] }[] };

function isBreadcrumbList(items: { text: string; href: string | null }[]): boolean {
  return items.length >= 2 && items[0].text.includes("Home") && items.some((i) => i.href === "/");
}

function isStatsStripSection(section: PageSection): { value: string; label: string }[] | null {
  const blocks = section.blocks;
  if (blocks.length < 4 || blocks.length > 10 || blocks.length % 2 !== 0) return null;
  if (!blocks.every((b) => b.type === "p" || b.type === "text")) return null;
  const pairs: { value: string; label: string }[] = [];
  for (let i = 0; i < blocks.length; i += 2) {
    const val = (blocks[i] as Extract<Block, { type: "p" }>).text;
    const lbl = (blocks[i + 1] as Extract<Block, { type: "p" }>).text;
    if (val.length > 20 || lbl.length > 40) return null;
    pairs.push({ value: val, label: lbl });
  }
  return pairs;
}

function groupBlocks(blocks: Block[]): BlockGroup[] {
  const groups: BlockGroup[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const prev = groups[groups.length - 1];

    // Group consecutive (h3/h4 + following p) into featureCards when followed by another matching h3/h4
    if (
      (b.type === "h3" || b.type === "h4") &&
      blocks[i + 1]?.type === "p" &&
      ((prev && prev.kind === "featureCards") ||
        blocks.slice(i + 2).some((x) => x.type === b.type))
    ) {
      const body: string[] = [];
      let j = i + 1;
      while (j < blocks.length && blocks[j].type === "p") {
        body.push((blocks[j] as Extract<Block, { type: "p" }>).text);
        j++;
      }
      if (prev && prev.kind === "featureCards") {
        prev.items.push({ title: b.text, body });
      } else {
        groups.push({ kind: "featureCards", items: [{ title: b.text, body }] });
      }
      i = j - 1;
      continue;
    }

    if (b.type === "faq") {
      if (prev && prev.kind === "faqs") prev.items.push({ summary: b.summary, body: b.body });
      else groups.push({ kind: "faqs", items: [{ summary: b.summary, body: b.body }] });
    } else if (b.type === "blockquote") {
      const next = blocks[i + 1];
      const author =
        next && (next.type === "text" || next.type === "p") && next.text.length < 80 ? next.text : "";
      if (author) i++;
      if (prev && prev.kind === "quotes") prev.items.push({ quote: b.text, author });
      else groups.push({ kind: "quotes", items: [{ quote: b.text, author }] });
    } else if (b.type === "img") {
      if (prev && prev.kind === "imgs") prev.items.push(b);
      else groups.push({ kind: "imgs", items: [b] });
    } else if (b.type === "link") {
      if (prev && prev.kind === "links") prev.items.push(b);
      else groups.push({ kind: "links", items: [b] });
    } else if (b.type === "button") {
      if (prev && prev.kind === "buttons") prev.items.push(b);
      else groups.push({ kind: "buttons", items: [b] });
    } else {
      groups.push({ kind: "single", block: b });
    }
  }
  return groups;
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const safeHref = href || "/";
  if (safeHref.startsWith("mailto:") || safeHref.startsWith("tel:")) {
    return (
      <a href={safeHref} className={className}>
        {children}
      </a>
    );
  }
  if (safeHref.startsWith("http://") || safeHref.startsWith("https://")) {
    return (
      <a href={safeHref} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={safeHref} className={className}>
      {children}
    </Link>
  );
}

/**
 * Renders a clean 2-column split section when a section has a form alongside copy/headings/links
 * (e.g., /contact, /agency/free-marketing-audit, /sponsor, /yapcorder, /english, /masterclass).
 */
function SplitFormSection({ section }: { section: PageSection }) {
  const formIdx = section.blocks.findIndex((b) => b.type === "form");
  const formBlock = section.blocks[formIdx] as Extract<Block, { type: "form" }>;
  const otherBlocks = section.blocks.filter((_, idx) => idx !== formIdx);

  return (
    <section className="py-12 sm:py-16 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 space-y-5">
            {otherBlocks.map((b, idx) => {
              if (b.type === "h1") {
                return (
                  <h1 key={idx} className="heading-xl text-4xl sm:text-5xl lg:text-[56px] text-[#1B1624] tracking-tight">
                    {b.text}
                  </h1>
                );
              }
              if (b.type === "h2") {
                return (
                  <h2 key={idx} className="heading-lg text-2xl sm:text-3xl text-[#1B1624] tracking-tight">
                    {b.text}
                  </h2>
                );
              }
              if (b.type === "h3") {
                return (
                  <h3 key={idx} className="text-lg font-bold text-[#1B1624]">
                    {b.text}
                  </h3>
                );
              }
              if (b.type === "p" || b.type === "text") {
                return (
                  <p key={idx} className="text-sm sm:text-base text-[#54505B] leading-relaxed whitespace-pre-line">
                    {b.text}
                  </p>
                );
              }
              if (b.type === "ul" || b.type === "ol") {
                return (
                  <ul key={idx} className="space-y-2 list-disc pl-5 text-sm sm:text-base text-[#54505B]">
                    {b.items.map((it, i) => (
                      <li key={i}>{it.text}</li>
                    ))}
                  </ul>
                );
              }
              if (b.type === "link") {
                return (
                  <div key={idx} className="pt-1">
                    <SmartLink
                      href={b.href}
                      className="text-sm font-semibold text-[#1B1624] underline underline-offset-4 hover:text-[#FD976D]"
                    >
                      {b.text}
                    </SmartLink>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="lg:col-span-6">
            <InteractiveFormBlock inputs={formBlock.inputs} submitText={formBlock.submitText} />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders a clean 2-column Split Hero/Media section when a section has headings/copy AND 1 media block (img, iframe, or video).
 */
function SplitMediaSection({
  section,
  mediaFirst = false,
}: {
  section: PageSection;
  mediaFirst?: boolean;
}) {
  const mediaIdx = section.blocks.findIndex(
    (b) => b.type === "img" || b.type === "iframe" || b.type === "video"
  );
  const mediaBlock = section.blocks[mediaIdx];
  const copyBlocks = section.blocks.filter((_, idx) => idx !== mediaIdx);
  const linkBlocks = copyBlocks.filter((b) => b.type === "link") as Extract<Block, { type: "link" }>[];
  const nonLinkCopy = copyBlocks.filter((b) => b.type !== "link");

  const isSmallAvatar =
    mediaBlock.type === "img" &&
    (mediaBlock.src.includes("khalid") || mediaBlock.src.includes("avatar") || mediaBlock.src.includes("logo"));

  const copyCol = (
    <div className={isSmallAvatar ? "lg:col-span-9 space-y-4" : "lg:col-span-6 space-y-5"}>
      {nonLinkCopy.map((b, idx) => {
        if (b.type === "h1") {
          return (
            <h1 key={idx} className="heading-xl text-4xl sm:text-5xl lg:text-[56px] text-[#1B1624] tracking-tight whitespace-pre-line">
              {b.text}
            </h1>
          );
        }
        if (b.type === "h2") {
          return (
            <h2 key={idx} className="heading-lg text-2xl sm:text-3xl text-[#1B1624] tracking-tight whitespace-pre-line">
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3 key={idx} className="text-xl font-bold text-[#1B1624]">
              {b.text}
            </h3>
          );
        }
        if (b.type === "p" || b.type === "text") {
          return (
            <p key={idx} className="text-sm sm:text-base text-[#54505B] leading-relaxed whitespace-pre-line">
              {b.text}
            </p>
          );
        }
        if (b.type === "ul" || b.type === "ol") {
          return (
            <ul key={idx} className="space-y-2 list-disc pl-5 text-sm sm:text-base text-[#54505B]">
              {b.items.map((it, i) => (
                <li key={i}>{it.text}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
      {linkBlocks.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {linkBlocks.map((l, lIdx) => (
            <SmartLink
              key={lIdx}
              href={l.href}
              className={`ali-pill-btn text-sm px-6 py-3 ${
                lIdx === 0
                  ? "bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624]"
                  : "bg-white hover:bg-[#F3EDE9] text-[#1B1624] border border-[#ECE5E1]"
              }`}
            >
              {l.text}
            </SmartLink>
          ))}
        </div>
      )}
    </div>
  );

  const mediaCol = (
    <div className={isSmallAvatar ? "lg:col-span-3 flex justify-center lg:justify-start" : "lg:col-span-6 flex justify-center"}>
      {mediaBlock.type === "img" && (
        <img
          src={mediaBlock.src}
          alt={mediaBlock.alt}
          className={
            isSmallAvatar
              ? "w-36 h-36 sm:w-40 sm:h-40 rounded-2xl object-cover border border-[#ECE5E1] bg-white"
              : "w-full max-w-[520px] max-h-[440px] h-auto rounded-2xl object-contain border border-[#ECE5E1] bg-white"
          }
          loading="lazy"
        />
      )}
      {mediaBlock.type === "iframe" && (
        <div className="w-full aspect-video rounded-[24px] overflow-hidden border border-[#ECE5E1] bg-white shadow-xs">
          <iframe
            src={mediaBlock.src}
            title={mediaBlock.title || "Embedded video"}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {mediaBlock.type === "video" && (
        <div className="w-full max-w-[540px] rounded-[24px] overflow-hidden border border-[#ECE5E1] bg-white shadow-xs">
          <video
            src={mediaBlock.src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto block"
          />
        </div>
      )}
    </div>
  );

  return (
    <section className="py-12 sm:py-16 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {mediaFirst ? (
            <>
              {mediaCol}
              {copyCol}
            </>
          ) : (
            <>
              {copyCol}
              {mediaCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionView({
  section,
  route,
  isNarrowLayout,
}: {
  section: PageSection;
  route: string;
  isNarrowLayout: boolean;
}) {
  // 1. Horizontal Stats Strip detection (e.g. /about, /youtube, /affiliates)
  const stats = isStatsStripSection(section);
  if (stats) {
    return (
      <section className="py-10 sm:py-12 border-b border-[#ECE5E1] bg-[#F9F6F3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-white border border-[#ECE5E1] rounded-[24px] grid grid-cols-2 ${
              stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } divide-y sm:divide-y-0 sm:divide-x divide-[#ECE5E1] shadow-2xs`}
          >
            {stats.map((st, idx) => (
              <div key={idx} className="p-6 sm:p-8 text-center space-y-1">
                <div className="ledger-num text-3xl sm:text-4xl lg:text-5xl text-[#1B1624]">{st.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-[#54505B]">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2. 2-Column Split for sections containing a form + substantial copy (not standalone tiny login forms)
  const formCount = section.blocks.filter((b) => b.type === "form").length;
  const nonFormTextLen = section.blocks
    .filter((b) => b.type === "p" || b.type === "h1" || b.type === "h2")
    .reduce((acc, b) => acc + ("text" in b ? b.text.length : 0), 0);
  if (formCount === 1 && nonFormTextLen > 80 && !route.includes("login") && !route.includes("signup") && !route.includes("forgot")) {
    return <SplitFormSection section={section} />;
  }

  // 3. 2-Column Split Media for sections with 1 media item (img/iframe/video) + headings/copy (without multiple sub-cards)
  const mediaCount = section.blocks.filter(
    (b) => b.type === "img" || b.type === "iframe" || b.type === "video"
  ).length;
  const linkCount = section.blocks.filter((b) => b.type === "link").length;
  if (
    !isNarrowLayout &&
    mediaCount === 1 &&
    formCount === 0 &&
    linkCount <= 3 &&
    section.blocks.some((b) => b.type === "h1" || b.type === "h2" || b.type === "h3")
  ) {
    return <SplitMediaSection section={section} mediaFirst={section.index % 2 === 0} />;
  }

  const groups = groupBlocks(section.blocks);
  if (groups.length === 0) return null;

  const isChecklistRoute =
    route === "/resources/free-seo-checklist" || route === "/resources/free-geo-checklist";
  const isCaseStudiesHub = route === "/work/case-studies";
  const containerMax = isNarrowLayout ? "max-w-[820px]" : "max-w-[1200px]";
  const twoColGridRoutes = route === "/insights" || route === "/founders-den" || route === "/furryghor" || route === "/work/testimonials";

  // Bottom CTA card detection (matches landing page ConversationCta style)
  const isBottomCta =
    section.index > 1 &&
    section.blocks.length <= 5 &&
    section.blocks.some((b) => b.type === "h2") &&
    section.blocks.some((b) => b.type === "link") &&
    !section.blocks.some((b) => b.type === "form" || b.type === "img" || b.type === "table" || b.type === "ul" || b.type === "ol");

  if (isBottomCta) {
    const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
    const pBlocks = section.blocks.filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
    const links = section.blocks.filter((b) => b.type === "link") as Extract<Block, { type: "link" }>[];
    return (
      <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#ECE5E1] rounded-[36px] py-12 sm:py-16 px-6 sm:px-12 text-center space-y-6 shadow-xs hover:border-[#FD976D] transition-colors">
            {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}
            {pBlocks.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#54505B] max-w-xl mx-auto leading-relaxed">
                {p.text}
              </p>
            ))}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {links.map((l, idx) => (
                <SmartLink
                  key={idx}
                  href={l.href}
                  className={`ali-pill-btn text-sm px-7 py-3.5 ${
                    idx === 0
                      ? "bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624]"
                      : "bg-[#F9F6F3] hover:bg-[#ECE5E1] text-[#1B1624] border border-[#ECE5E1]"
                  }`}
                >
                  {l.text}
                </SmartLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className={`${containerMax} mx-auto px-4 sm:px-6 lg:px-8 space-y-6`}>
        {groups.map((g, gIdx) => {
          if (g.kind === "faqs") {
            return (
              <div key={gIdx} className="space-y-3 pt-2 max-w-4xl">
                {g.items.map((faq, fIdx) => (
                  <InteractiveFaqItem key={fIdx} summary={faq.summary} body={faq.body} />
                ))}
              </div>
            );
          }

          if (g.kind === "featureCards") {
            const colsClass =
              g.items.length === 2 || g.items.length === 4
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
            return (
              <div key={gIdx} className={`grid ${colsClass} gap-5 pt-2`}>
                {g.items.map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-7 space-y-2.5 shadow-2xs"
                  >
                    <h3 className="text-lg font-bold text-[#1B1624] leading-snug">{card.title}</h3>
                    {card.body.map((txt, tIdx) => (
                      <p key={tIdx} className="text-sm text-[#54505B] leading-relaxed">
                        {txt}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            );
          }

          if (g.kind === "quotes") {
            return (
              <div
                key={gIdx}
                className={
                  g.items.length > 1 ? "grid grid-cols-1 md:grid-cols-2 gap-6 pt-2" : "space-y-4 pt-2"
                }
              >
                {g.items.map((q, qIdx) => (
                  <div
                    key={qIdx}
                    className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-7 space-y-3 shadow-2xs"
                  >
                    <blockquote className="text-sm sm:text-base text-[#1B1624] italic leading-relaxed">
                      {q.quote}
                    </blockquote>
                    {q.author && <p className="text-xs font-bold text-[#76737C]">{q.author}</p>}
                  </div>
                ))}
              </div>
            );
          }

          if (g.kind === "imgs") {
            const count = g.items.length;
            if (count === 1) {
              const im = g.items[0];
              const isSmall = im.src.includes("logo") || im.src.includes("avatar");
              return (
                <div key={gIdx} className="py-2">
                  <img
                    src={im.src}
                    alt={im.alt}
                    className={
                      isSmall
                        ? "w-16 h-16 object-contain rounded-xl"
                        : "w-full max-w-[540px] max-h-[420px] h-auto object-contain rounded-2xl border border-[#ECE5E1] bg-white"
                    }
                    loading="lazy"
                  />
                </div>
              );
            }
            const uniqueImgs =
              g.items.length <= 16
                ? g.items.filter(
                    (im, i, arr) => arr.findIndex((x) => x.src === im.src && x.alt === im.alt) === i
                  )
                : g.items;
            const isMany = uniqueImgs.length > 10;
            return (
              <div
                key={gIdx}
                className={
                  isMany
                    ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-2"
                    : "flex flex-wrap items-center gap-6 py-2"
                }
              >
                {uniqueImgs.map((im, iIdx) => (
                  <div
                    key={iIdx}
                    className="bg-white border border-[#ECE5E1] rounded-2xl p-3 flex items-center justify-center"
                  >
                    <img
                      src={im.src}
                      alt={im.alt}
                      className={
                        isMany ? "w-full h-auto max-h-40 object-contain rounded-lg" : "h-9 sm:h-10 w-auto object-contain"
                      }
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            );
          }

          if (g.kind === "buttons") {
            if (isChecklistRoute && g.items.length >= 6) {
              return <InteractiveChecklist key={gIdx} items={g.items.map((b) => b.text)} />;
            }
            return (
              <div key={gIdx} className="flex flex-wrap gap-3 pt-2">
                {g.items.map((b, bIdx) => (
                  <span
                    key={bIdx}
                    className="ali-pill-btn bg-white border border-[#ECE5E1] text-[#1B1624] text-sm px-5 py-2.5"
                  >
                    {b.text}
                  </span>
                ))}
              </div>
            );
          }

          if (g.kind === "links") {
            if (
              isCaseStudiesHub &&
              g.items.some((l) => l.href.startsWith("/work/case-studies/"))
            ) {
              const csLinks = g.items.filter((l) => l.href.startsWith("/work/case-studies/"));
              return <CaseStudyFilterGrid key={gIdx} items={csLinks} />;
            }

            const hasCardStyle =
              g.items.length >= 3 ||
              g.items.some((l) => l.text.includes("\n") || l.text.length > 60 || l.imgs.length > 0);

            if (hasCardStyle) {
              return (
                <div
                  key={gIdx}
                  className={`grid grid-cols-1 ${
                    twoColGridRoutes ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
                  } gap-5 pt-2`}
                >
                  {g.items.map((l, lIdx) => {
                    const lines = l.text
                      .split("\n")
                      .map((s) => s.trim())
                      .filter(Boolean);
                    const heading = lines[0] || l.text;
                    const rest = lines.slice(1);
                    return (
                      <SmartLink
                        key={lIdx}
                        href={l.href}
                        className="group ali-card ali-article-card bg-white border border-[#ECE5E1] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between space-y-3"
                      >
                        {l.imgs.length > 0 && (
                          <div className="space-y-2">
                            {l.imgs.map((im, imIdx) => (
                              <img
                                key={imIdx}
                                src={im.src}
                                alt={im.alt}
                                className="w-full max-h-48 h-auto rounded-xl object-cover"
                                loading="lazy"
                              />
                            ))}
                          </div>
                        )}
                        <div className="space-y-1.5">
                          <h3 className="text-base sm:text-lg font-bold text-[#1B1624] leading-snug">{heading}</h3>
                          {rest.map((line, rIdx) => (
                            <p
                              key={rIdx}
                              className="text-xs sm:text-sm text-[#54505B] group-hover:text-[#1B1624]/85 leading-relaxed"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </SmartLink>
                    );
                  })}
                </div>
              );
            }

            return (
              <div key={gIdx} className="flex flex-wrap items-center gap-3 pt-2">
                {g.items.map((l, lIdx) => {
                  const isPrimary = lIdx === 0;
                  return (
                    <SmartLink
                      key={lIdx}
                      href={l.href}
                      className={`ali-pill-btn text-sm px-6 py-3 ${
                        isPrimary
                          ? "bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624]"
                          : "bg-white hover:bg-[#F3EDE9] text-[#1B1624] border border-[#ECE5E1]"
                      }`}
                    >
                      {l.text}
                    </SmartLink>
                  );
                })}
              </div>
            );
          }

          const b = g.block;
          if (b.type === "h1") {
            return (
              <h1
                key={gIdx}
                className="heading-xl text-4xl sm:text-5xl lg:text-[56px] text-[#1B1624] tracking-tight whitespace-pre-line"
              >
                {b.text}
              </h1>
            );
          }
          if (b.type === "h2") {
            return (
              <h2
                key={gIdx}
                className="heading-lg text-2xl sm:text-3xl lg:text-[36px] text-[#1B1624] tracking-tight pt-2 whitespace-pre-line"
              >
                {b.text}
              </h2>
            );
          }
          if (b.type === "h3") {
            return (
              <h3 key={gIdx} className="text-lg sm:text-xl font-bold text-[#1B1624] leading-snug pt-2">
                {b.text}
              </h3>
            );
          }
          if (b.type === "h4") {
            return (
              <h4 key={gIdx} className="text-base sm:text-lg font-bold text-[#1B1624] leading-snug pt-1">
                {b.text}
              </h4>
            );
          }
          if (b.type === "p") {
            return (
              <p key={gIdx} className="text-sm sm:text-base text-[#54505B] leading-relaxed whitespace-pre-line max-w-3xl">
                {b.text}
              </p>
            );
          }
          if (b.type === "text") {
            return (
              <div key={gIdx} className="text-sm sm:text-base text-[#54505B] leading-relaxed whitespace-pre-line max-w-3xl">
                {b.text}
              </div>
            );
          }
          if (b.type === "ul" || b.type === "ol") {
            if (isBreadcrumbList(b.items)) {
              return (
                <nav
                  key={gIdx}
                  aria-label="Breadcrumb"
                  className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#76737C]"
                >
                  {b.items.map((item, iIdx) => (
                    <span key={iIdx} className="inline-flex items-center gap-2">
                      {item.href ? (
                        <SmartLink href={item.href} className="hover:text-[#1B1624] underline underline-offset-4">
                          {item.text.replace(/\s*\/\s*$/, "")}
                        </SmartLink>
                      ) : (
                        <span className="text-[#1B1624] font-medium">{item.text}</span>
                      )}
                      {iIdx < b.items.length - 1 && <span>/</span>}
                    </span>
                  ))}
                </nav>
              );
            }

            const hasImgs = b.items.some((it) => it.imgs && it.imgs.length > 0);
            if (hasImgs) {
              return (
                <div key={gIdx} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-2">
                  {b.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="bg-white border border-[#ECE5E1] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-center"
                    >
                      {item.imgs?.map((im, imIdx) => (
                        <img
                          key={imIdx}
                          src={im.src}
                          alt={im.alt}
                          className="max-w-full h-auto max-h-40 object-contain rounded-lg"
                          loading="lazy"
                        />
                      ))}
                      {item.text &&
                        (item.href ? (
                          <SmartLink
                            href={item.href}
                            className="text-xs sm:text-sm font-medium text-[#1B1624] underline hover:text-[#FD976D]"
                          >
                            {item.text}
                          </SmartLink>
                        ) : (
                          <span className="text-xs sm:text-sm font-medium text-[#54505B] whitespace-pre-line">
                            {item.text}
                          </span>
                        ))}
                    </div>
                  ))}
                </div>
              );
            }

            const ListTag = b.type === "ol" ? "ol" : "ul";
            return (
              <ListTag
                key={gIdx}
                className={`space-y-2 pl-6 text-sm sm:text-base text-[#54505B] leading-relaxed max-w-3xl ${
                  b.type === "ol" ? "list-decimal" : "list-disc"
                }`}
              >
                {b.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    {item.href ? (
                      <SmartLink href={item.href} className="text-[#1B1624] underline hover:text-[#FD976D]">
                        {item.text}
                      </SmartLink>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ListTag>
            );
          }
          if (b.type === "table") {
            return (
              <div
                key={gIdx}
                className="overflow-x-auto bg-white border border-[#ECE5E1] rounded-[20px] shadow-2xs"
              >
                <table className="w-full text-left border-collapse text-sm">
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
          if (b.type === "iframe") {
            return (
              <div
                key={gIdx}
                className="w-full max-w-3xl aspect-video rounded-[24px] overflow-hidden border border-[#ECE5E1] bg-white shadow-xs"
              >
                <iframe
                  src={b.src}
                  title={b.title || "Embedded video"}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          }
          if (b.type === "video") {
            return (
              <div
                key={gIdx}
                className="w-full max-w-3xl rounded-[24px] overflow-hidden border border-[#ECE5E1] bg-white shadow-xs"
              >
                <video
                  src={b.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto block"
                />
              </div>
            );
          }
          if (b.type === "form") {
            return (
              <div key={gIdx} className="max-w-lg pt-2">
                <InteractiveFormBlock inputs={b.inputs} submitText={b.submitText} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

export default function PageRenderer({ page }: { page: CrawledPage }) {
  if (page.route.startsWith("/services/")) {
    return <ServiceDetailView page={page} />;
  }
  if (page.route.startsWith("/work/case-studies/")) {
    return <CaseStudyDetailView page={page} />;
  }
  if (
    page.route.startsWith("/insights/") &&
    !page.route.startsWith("/insights/category/") &&
    !page.route.startsWith("/insights/author/")
  ) {
    return <ArticleDetailView page={page} />;
  }

  const isNarrowLayout =
    page.route === "/privacy-policy" ||
    page.route === "/cookie-policy" ||
    page.route === "/terms" ||
    page.route === "/challenge/refund-policy";

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow">
        {page.sections.map((section) => (
          <SectionView
            key={section.index}
            section={section}
            route={page.route}
            isNarrowLayout={isNarrowLayout}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
