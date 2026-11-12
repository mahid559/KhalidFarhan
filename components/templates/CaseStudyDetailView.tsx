import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Block, CrawledPage, PageSection } from "@/lib/pages-data";

function HeroSection({ section }: { section: PageSection }) {
  const paragraphs = section.blocks.filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
  const h1 = section.blocks.find((b) => b.type === "h1") as Extract<Block, { type: "h1" }> | undefined;
  const texts = section.blocks.filter((b) => b.type === "text") as Extract<Block, { type: "text" }>[];
  const links = section.blocks.filter((b) => b.type === "link") as Extract<Block, { type: "link" }>[];

  // Parse metadata pairs from texts: ["INDUSTRY", "Hospitality", "TIMEFRAME", "9 months", "WHAT WE DID"]
  const metaRows: { label: string; value?: string }[] = [];
  for (let i = 0; i < texts.length; i++) {
    const t = texts[i].text;
    if (t === "INDUSTRY" || t === "TIMEFRAME") {
      metaRows.push({ label: t, value: texts[i + 1]?.text || "" });
      i++;
    } else if (t === "WHAT WE DID") {
      metaRows.push({ label: t });
    }
  }

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Eyebrow, H1, Summary */}
          <div className="lg:col-span-7 space-y-5">
            {paragraphs[0] && (
              <p className="text-sm font-bold text-[#FD976D]">{paragraphs[0].text}</p>
            )}
            {h1 && (
              <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-[#1B1624] tracking-tight">
                {h1.text}
              </h1>
            )}
            {paragraphs.slice(1).map((p, idx) => (
              <p key={idx} className="text-base sm:text-lg text-[#54505B] leading-relaxed max-w-2xl">
                {p.text}
              </p>
            ))}
          </div>

          {/* Right Column: Metadata Rows matching original right-side info table */}
          <div className="lg:col-span-5 bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 divide-y divide-[#ECE5E1]">
            {metaRows.map((row, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#76737C] shrink-0 pt-1">
                  {row.label}
                </span>
                {row.value ? (
                  <span className="text-sm sm:text-base font-bold text-[#1B1624] sm:text-right">
                    {row.value}
                  </span>
                ) : (
                  <div className="flex flex-wrap sm:justify-end gap-2">
                    {links.map((l, lIdx) => (
                      <Link
                        key={lIdx}
                        href={l.href}
                        className="ali-pill-btn bg-[#F9F6F3] hover:bg-[#FD976D] text-[#1B1624] border border-[#ECE5E1] hover:border-[#FD976D] text-xs px-3.5 py-1.5"
                      >
                        {l.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsStripSection({ section }: { section: PageSection }) {
  const texts = section.blocks.filter((b) => b.type === "text") as Extract<Block, { type: "text" }>[];
  const metrics: { value: string; label: string }[] = [];
  for (let i = 0; i < texts.length; i += 2) {
    metrics.push({
      value: texts[i]?.text || "",
      label: texts[i + 1]?.text || "",
    });
  }

  return (
    <section className="py-10 sm:py-12 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ECE5E1] rounded-[24px] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#ECE5E1] shadow-2xs">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-6 sm:p-8 space-y-1">
              <div className="ledger-num text-4xl sm:text-5xl text-[#1B1624]">{m.value}</div>
              <div className="text-sm text-[#54505B] font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection({ section }: { section: PageSection }) {
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const table = section.blocks.find((b) => b.type === "table") as Extract<Block, { type: "table" }> | undefined;
  const texts = section.blocks.filter((b) => b.type === "text") as Extract<Block, { type: "text" }>[];
  const ul = section.blocks.find((b) => b.type === "ul") as Extract<Block, { type: "ul" }> | undefined;

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Before / After Table */}
          {table && (
            <div className="lg:col-span-6 bg-white border border-[#ECE5E1] rounded-[24px] overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <tbody>
                  {table.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={
                        rIdx === 0
                          ? "bg-[#F3EDE9] font-bold text-xs uppercase tracking-wider text-[#76737C] border-b border-[#ECE5E1]"
                          : "border-b border-[#ECE5E1]/70 last:border-0"
                      }
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-5 py-4 ${
                            cIdx === row.length - 1 && rIdx > 0 ? "font-bold text-[#1B1624]" : "text-[#54505B]"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Right: Visual Highlights & Rankings Card */}
          {(texts.length > 0 || ul) && (
            <div className={table ? "lg:col-span-6 space-y-6" : "lg:col-span-12 space-y-6"}>
              {texts.length > 0 && (
                <div className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#76737C]">
                      {texts[0]?.text}
                    </span>
                    {texts[1] && <span className="ledger-num text-3xl text-[#FD976D]">{texts[1].text}</span>}
                  </div>
                  {texts.length > 2 && (
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#76737C] pt-2 border-t border-[#ECE5E1]/60">
                      {texts.slice(2).map((t, idx) => (
                        <span key={idx}>{t.text}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {ul && (
                <div className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 space-y-3">
                  <ul className="divide-y divide-[#ECE5E1]/60">
                    {ul.items.map((item, idx) => (
                      <li key={idx} className="py-3 first:pt-0 last:pb-0 text-sm text-[#1B1624] font-medium">
                        {item.text.replace(/\n+/g, " · ")}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StorySection({ section }: { section: PageSection }) {
  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {section.blocks.map((b, idx) => {
          if (b.type === "h2") {
            return (
              <h2 key={idx} className="heading-lg text-2xl sm:text-3xl text-[#1B1624] pt-4 first:pt-0">
                {b.text}
              </h2>
            );
          }
          if (b.type === "p") {
            return (
              <p key={idx} className="text-base sm:text-lg text-[#54505B] leading-relaxed">
                {b.text}
              </p>
            );
          }
          if (b.type === "ol" || b.type === "ul") {
            const Tag = b.type === "ol" ? "ol" : "ul";
            return (
              <Tag
                key={idx}
                className={`space-y-3 pl-6 text-base text-[#54505B] leading-relaxed ${
                  b.type === "ol" ? "list-decimal" : "list-disc"
                }`}
              >
                {b.items.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </Tag>
            );
          }
          if (b.type === "blockquote") {
            return (
              <blockquote
                key={idx}
                className="bg-white border-l-4 border-[#FD976D] rounded-r-2xl p-6 text-base sm:text-lg text-[#1B1624] italic leading-relaxed shadow-2xs"
              >
                {b.text}
              </blockquote>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

function RelatedSection({ section }: { section: PageSection }) {
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const links = section.blocks.filter((b) => b.type === "link") as Extract<Block, { type: "link" }>[];
  const cardLinks = links.filter((l) => l.href.startsWith("/work/case-studies/"));
  const ctaLinks = links.filter((l) => !l.href.startsWith("/work/case-studies/"));

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}
          {ctaLinks.map((l, idx) => (
            <Link
              key={idx}
              href={l.href}
              className="ali-pill-btn bg-white hover:bg-[#F3EDE9] text-[#1B1624] border border-[#ECE5E1] text-sm px-5 py-2.5"
            >
              {l.text}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardLinks.map((l, idx) => {
            const lines = l.text.split("\n").map((s) => s.trim()).filter(Boolean);
            return (
              <Link
                key={idx}
                href={l.href}
                className="group ali-card ali-article-card bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#1B1624] leading-snug">{lines[0]}</h3>
                  {lines.slice(1).map((line, rIdx) => (
                    <p key={rIdx} className="text-sm text-[#54505B] group-hover:text-[#1B1624]/85">
                      {line}
                    </p>
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#1B1624]">Read case study →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BottomCtaSection({ section }: { section: PageSection }) {
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const link = section.blocks.find((b) => b.type === "link") as Extract<Block, { type: "link" }> | undefined;

  return (
    <section className="py-16 sm:py-20 bg-[#F9F6F3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ECE5E1] rounded-[36px] p-10 sm:p-14 text-center space-y-6 shadow-xs hover:border-[#FD976D] transition-colors">
          {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}
          {link && (
            <div>
              <Link
                href={link.href}
                className="ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] text-sm px-7 py-3.5"
              >
                {link.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyDetailView({ page }: { page: CrawledPage }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow">
        {page.sections.map((section, idx) => {
          const cls = section.className || "";
          if (cls.includes("csp-hero") || idx === 0) return <HeroSection key={section.index} section={section} />;
          if (cls.includes("csp-metrics")) return <MetricsStripSection key={section.index} section={section} />;
          if (cls.includes("csp-work")) return <BeforeAfterSection key={section.index} section={section} />;
          if (cls.includes("csp-story")) return <StorySection key={section.index} section={section} />;
          if (cls.includes("csp-related")) return <RelatedSection key={section.index} section={section} />;
          return <BottomCtaSection key={section.index} section={section} />;
        })}
      </main>
      <Footer />
    </div>
  );
}

