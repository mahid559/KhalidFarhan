import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Block, CrawledPage, PageSection } from "@/lib/pages-data";
import { InteractiveFaqItem, InteractiveFormBlock } from "@/components/InteractiveBlocks";

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

function HeroSection({ section }: { section: PageSection }) {
  const blocks = section.blocks;
  const breadcrumbBlock = blocks.find((b) => b.type === "ol") as Extract<Block, { type: "ol" }> | undefined;
  const h1Block = blocks.find((b) => b.type === "h1") as Extract<Block, { type: "h1" }> | undefined;
  const formIdx = blocks.findIndex((b) => b.type === "form");
  const h2Block = blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const formBlock = formIdx >= 0 ? (blocks[formIdx] as Extract<Block, { type: "form" }>) : undefined;

  const paragraphsBeforeForm = blocks
    .slice(0, formIdx >= 0 ? formIdx : blocks.length)
    .filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
  const h2Idx = blocks.findIndex((b) => b.type === "h2");
  const leftParagraphs = (h2Idx >= 0 ? blocks.slice(0, h2Idx) : paragraphsBeforeForm).filter(
    (b) => b.type === "p"
  ) as Extract<Block, { type: "p" }>[];
  const formIntroParagraphs =
    h2Idx >= 0 && formIdx > h2Idx
      ? (blocks.slice(h2Idx + 1, formIdx).filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[])
      : [];
  const formFooterParagraphs =
    formIdx >= 0
      ? (blocks.slice(formIdx + 1).filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[])
      : [];

  const fitList = blocks.find((b) => b.type === "ul") as Extract<Block, { type: "ul" }> | undefined;
  const heroLinks = blocks.filter((b) => b.type === "link") as Extract<Block, { type: "link" }>[];
  const rawImgs = blocks.filter((b) => b.type === "img") as Extract<Block, { type: "img" }>[];
  const uniqueLogos = rawImgs.filter(
    (im, idx, arr) => arr.findIndex((x) => x.src === im.src) === idx
  );

  const h1Lines = (h1Block?.text || "").split("\n").map((s) => s.trim()).filter(Boolean);
  const eyebrow = h1Lines.length > 1 ? h1Lines[0] : "";
  const mainHeadline = h1Lines.length > 1 ? h1Lines.slice(1).join(" ") : h1Block?.text || "";

  return (
    <section className="py-10 sm:py-16 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Breadcrumb, H1, Copy, 2x2 Fit List, Links */}
          <div className="lg:col-span-7 space-y-6">
            {breadcrumbBlock && (
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#76737C]">
                {breadcrumbBlock.items.map((item, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2">
                    {item.href ? (
                      <Link href={item.href} className="hover:text-[#1B1624] underline underline-offset-4">
                        {item.text.replace(/\s*\/\s*$/, "")}
                      </Link>
                    ) : (
                      <span className="text-[#1B1624] font-medium">{item.text}</span>
                    )}
                    {idx < breadcrumbBlock.items.length - 1 && <span>/</span>}
                  </span>
                ))}
              </nav>
            )}

            <div className="space-y-3">
              {eyebrow && (
                <p className="text-sm font-bold text-[#FD976D] tracking-wide">{eyebrow}</p>
              )}
              <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-[#1B1624] tracking-tight">
                {mainHeadline}
              </h1>
            </div>

            {leftParagraphs[0] && (
              <p className="text-base sm:text-lg text-[#54505B] leading-relaxed max-w-2xl">
                {leftParagraphs[0].text}
              </p>
            )}

            {(leftParagraphs[1] || fitList) && (
              <div className="space-y-3 pt-2">
                {leftParagraphs[1] && (
                  <p className="text-sm font-bold text-[#1B1624]">{leftParagraphs[1].text}</p>
                )}
                {fitList && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#54505B]">
                    {fitList.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FD976D] font-bold">✓</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {heroLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {heroLinks.map((l, idx) => (
                  <SmartLink
                    key={idx}
                    href={l.href}
                    className={
                      idx === 0
                        ? "ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] text-sm px-6 py-3"
                        : "text-sm font-semibold text-[#1B1624] underline underline-offset-4 hover:text-[#FD976D]"
                    }
                  >
                    {l.text}
                  </SmartLink>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Audit Form Card */}
          {formBlock && (
            <div id="audit-form" className="lg:col-span-5">
              <div className="bg-white border border-[#ECE5E1] rounded-[28px] p-6 sm:p-8 shadow-sm space-y-4">
                {h2Block && (
                  <h2 className="heading-lg text-2xl sm:text-3xl text-[#1B1624]">{h2Block.text}</h2>
                )}
                {formIntroParagraphs.map((p, idx) => (
                  <p key={idx} className="text-sm text-[#54505B] leading-relaxed">
                    {p.text}
                  </p>
                ))}
                <InteractiveFormBlock inputs={formBlock.inputs} submitText={formBlock.submitText} borderless />
                {formFooterParagraphs.map((p, idx) => (
                  <p key={idx} className="text-xs text-[#76737C] text-center leading-relaxed">
                    {p.text}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Press Logos Strip */}
        {uniqueLogos.length > 0 && (
          <div className="pt-8 border-t border-[#ECE5E1]/70 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {uniqueLogos.map((im, idx) => (
              <img
                key={idx}
                src={im.src}
                alt={im.alt}
                className="h-6 sm:h-7 w-auto max-w-[130px] object-contain"
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CaseStudyProofSection({ section }: { section: PageSection }) {
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const pBlocks = section.blocks.filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
  const links = section.blocks.filter((b) => b.type === "link") as Extract<Block, { type: "link" }>[];
  const quotes = section.blocks.filter((b) => b.type === "blockquote") as Extract<Block, { type: "blockquote" }>[];
  const quoteAuthors = section.blocks.filter((b) => b.type === "text") as Extract<Block, { type: "text" }>[];

  const caseLinks = links.filter((l) => l.href.startsWith("/work/case-studies/"));
  const ctaLinks = links.filter((l) => !l.href.startsWith("/work/case-studies/"));

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 max-w-3xl">
          {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}
          {pBlocks.map((p, idx) => (
            <p key={idx} className="text-base text-[#54505B]">
              {p.text}
            </p>
          ))}
        </div>

        {caseLinks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseLinks.map((l, idx) => {
              const lines = l.text.split("\n").map((s) => s.trim()).filter(Boolean);
              return (
                <Link
                  key={idx}
                  href={l.href}
                  className="group ali-card ali-article-card bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#1B1624] leading-snug">{lines[0]}</h3>
                    {lines.slice(1).map((line, i) => (
                      <p key={i} className="text-sm text-[#54505B] group-hover:text-[#1B1624]/85">
                        {line}
                      </p>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#1B1624]">Read case study →</span>
                </Link>
              );
            })}
          </div>
        )}

        {quotes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes.map((q, idx) => (
              <div key={idx} className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 space-y-3">
                <blockquote className="text-base text-[#1B1624] italic leading-relaxed">
                  {q.text}
                </blockquote>
                {quoteAuthors[idx] && (
                  <p className="text-xs font-semibold text-[#76737C]">{quoteAuthors[idx].text}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {ctaLinks.length > 0 && (
          <div>
            {ctaLinks.map((l, idx) => (
              <SmartLink
                key={idx}
                href={l.href}
                className="ali-pill-btn bg-white hover:bg-[#F3EDE9] text-[#1B1624] border border-[#ECE5E1] text-sm px-6 py-3"
              >
                {l.text}
              </SmartLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DeliverablesSection({ section }: { section: PageSection }) {
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const pBlocks = section.blocks.filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
  const textBlocks = section.blocks.filter((b) => b.type === "text") as Extract<Block, { type: "text" }>[];
  const ulBlocks = section.blocks.filter((b) => b.type === "ul") as Extract<Block, { type: "ul" }>[];

  // Pair up title/desc text blocks when structured as pairs
  const pairs: { title: string; body: string }[] = [];
  for (let i = 0; i < textBlocks.length; i += 2) {
    pairs.push({
      title: textBlocks[i]?.text || "",
      body: textBlocks[i + 1]?.text || "",
    });
  }

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 max-w-3xl">
          {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}
          {pBlocks.map((p, idx) => (
            <p key={idx} className="text-base text-[#54505B] leading-relaxed">
              {p.text}
            </p>
          ))}
        </div>

        {pairs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pairs.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-7 space-y-2 shadow-2xs">
                <h3 className="text-lg font-bold text-[#1B1624]">{item.title}</h3>
                {item.body && <p className="text-sm text-[#54505B] leading-relaxed">{item.body}</p>}
              </div>
            ))}
          </div>
        )}

        {ulBlocks.map((ul, idx) => (
          <ul key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ul.items.map((item, i) => (
              <li key={i} className="bg-white border border-[#ECE5E1] rounded-[20px] p-5 text-sm sm:text-base text-[#54505B]">
                {item.text}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

function ProcessSection({ section }: { section: PageSection }) {
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const h3 = section.blocks.find((b) => b.type === "h3") as Extract<Block, { type: "h3" }> | undefined;
  const ol = section.blocks.find((b) => b.type === "ol") as Extract<Block, { type: "ol" }> | undefined;

  // Group (text step number + h4 + p) after h3
  const h3Idx = section.blocks.findIndex((b) => b.type === "h3");
  const afterH3 = h3Idx >= 0 ? section.blocks.slice(h3Idx + 1) : [];
  const steps: { num: string; title: string; desc: string }[] = [];
  for (let i = 0; i < afterH3.length; i++) {
    const cur = afterH3[i];
    if (cur.type === "text" && afterH3[i + 1]?.type === "h4") {
      steps.push({
        num: cur.text,
        title: (afterH3[i + 1] as Extract<Block, { type: "h4" }>).text,
        desc: afterH3[i + 2]?.type === "p" ? (afterH3[i + 2] as Extract<Block, { type: "p" }>).text : "",
      });
    }
  }

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-6">
          {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}
          {ol && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ol.items.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 space-y-2 shadow-2xs">
                  <div className="text-xs font-bold text-[#FD976D] uppercase tracking-wider">
                    0{idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-[#1B1624] leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {(h3 || steps.length > 0) && (
          <div className="space-y-6">
            {h3 && <h3 className="text-2xl font-bold text-[#1B1624]">{h3.text}</h3>}
            {steps.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {steps.map((st, idx) => (
                  <div key={idx} className="bg-white border border-[#ECE5E1] rounded-[24px] p-6 space-y-2">
                    <span className="ledger-num text-2xl text-[#FD976D]">{st.num}</span>
                    <h4 className="text-lg font-bold text-[#1B1624]">{st.title}</h4>
                    {st.desc && <p className="text-sm text-[#54505B] leading-relaxed">{st.desc}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function FounderAccessSection({ section }: { section: PageSection }) {
  const img = section.blocks.find((b) => b.type === "img") as Extract<Block, { type: "img" }> | undefined;
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const paragraphs = section.blocks.filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
  const ul = section.blocks.find((b) => b.type === "ul") as Extract<Block, { type: "ul" }> | undefined;
  const links = section.blocks.filter((b) => b.type === "link") as Extract<Block, { type: "link" }>[];

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ECE5E1] rounded-[32px] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {img && (
            <div className="lg:col-span-4 flex justify-center">
              <img
                src={img.src === "/team/khalid.jpg" ? "/businessschool/khalid.webp" : img.src}
                alt={img.alt}
                className="w-56 sm:w-64 h-auto rounded-[24px] object-cover border border-[#ECE5E1]"
              />
            </div>
          )}
          <div className={img ? "lg:col-span-8 space-y-4" : "lg:col-span-12 space-y-4"}>
            {h2 && <h2 className="heading-lg text-2xl sm:text-3xl text-[#1B1624]">{h2.text}</h2>}
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-base text-[#54505B] leading-relaxed">
                {p.text}
              </p>
            ))}
            {ul && (
              <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base text-[#54505B]">
                {ul.items.map((item, idx) => (
                  <li key={idx}>{item.text}</li>
                ))}
              </ul>
            )}
            {links.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {links.map((l, idx) => (
                  <SmartLink
                    key={idx}
                    href={l.href}
                    className={
                      idx === 0
                        ? "ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] text-sm px-6 py-3"
                        : "text-sm font-semibold text-[#1B1624] underline underline-offset-4 hover:text-[#FD976D]"
                    }
                  >
                    {l.text}
                  </SmartLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ section }: { section: PageSection }) {
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const paragraphs = section.blocks.filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
  const faqs: { q: string; a: string }[] = [];

  for (let i = 0; i < section.blocks.length; i++) {
    const b = section.blocks[i];
    if (b.type === "faq") {
      faqs.push({ q: b.summary, a: b.body });
    } else if (b.type === "button") {
      const next = section.blocks[i + 1];
      const answer = next && (next.type === "text" || next.type === "p") ? next.text : "";
      faqs.push({ q: b.text, a: answer });
    }
  }

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}
        {paragraphs.map((p, idx) => (
          <p key={idx} className="text-base text-[#54505B]">
            {p.text}
          </p>
        ))}
        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => (
            <InteractiveFaqItem key={idx} summary={faq.q} body={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationsAndRelatedSection({ section }: { section: PageSection }) {
  const blocks = section.blocks;
  // Split into groups under each H2
  const groups: { heading: string; links: Extract<Block, { type: "link" }>[] }[] = [];
  for (const b of blocks) {
    if (b.type === "h2") {
      groups.push({ heading: b.text, links: [] });
    } else if (b.type === "link" && groups.length > 0) {
      groups[groups.length - 1].links.push(b);
    }
  }

  return (
    <section className="py-14 sm:py-20 border-b border-[#ECE5E1] bg-[#F9F6F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {groups.map((grp, idx) => {
          const isCityPills = grp.links.every((l) => !l.text.includes("\n") && l.text.length < 35);
          return (
            <div key={idx} className="space-y-5">
              <h2 className="heading-lg text-2xl sm:text-3xl text-[#1B1624]">{grp.heading}</h2>
              {isCityPills ? (
                <div className="flex flex-wrap gap-3">
                  {grp.links.map((l, lIdx) => (
                    <Link
                      key={lIdx}
                      href={l.href}
                      className="ali-pill-btn bg-white hover:bg-[#FD976D] text-[#1B1624] border border-[#ECE5E1] hover:border-[#FD976D] text-sm px-5 py-2.5"
                    >
                      {l.text}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {grp.links.map((l, lIdx) => {
                    const lines = l.text.split("\n").map((s) => s.trim()).filter(Boolean);
                    return (
                      <Link
                        key={lIdx}
                        href={l.href}
                        className="group ali-card ali-article-card bg-white border border-[#ECE5E1] rounded-[24px] p-6 flex flex-col justify-between space-y-3"
                      >
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-[#1B1624]">{lines[0]}</h3>
                          {lines.slice(1).map((line, rIdx) => (
                            <p key={rIdx} className="text-sm text-[#54505B] group-hover:text-[#1B1624]/85">
                              {line}
                            </p>
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-[#1B1624]">Explore service →</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BottomCtaSection({ section }: { section: PageSection }) {
  const h2 = section.blocks.find((b) => b.type === "h2") as Extract<Block, { type: "h2" }> | undefined;
  const links = section.blocks.filter((b) => b.type === "link") as Extract<Block, { type: "link" }>[];

  return (
    <section className="py-16 sm:py-20 bg-[#F9F6F3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ECE5E1] rounded-[36px] p-10 sm:p-14 text-center space-y-8 shadow-xs hover:border-[#FD976D] transition-colors">
          {h2 && <h2 className="heading-lg text-3xl sm:text-4xl text-[#1B1624]">{h2.text}</h2>}
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((l, idx) => (
              <SmartLink
                key={idx}
                href={l.href}
                className={
                  idx === 0
                    ? "ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] text-sm px-7 py-3.5"
                    : "ali-pill-btn bg-[#F9F6F3] hover:bg-[#ECE5E1] text-[#1B1624] border border-[#ECE5E1] text-sm px-7 py-3.5"
                }
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

export default function ServiceDetailView({ page }: { page: CrawledPage }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow">
        {page.sections.map((section, idx) => {
          const cls = section.className || "";
          if (cls.includes("svh") || idx === 0) {
            return <HeroSection key={section.index} section={section} />;
          }
          if (cls.includes("sp-wrap")) {
            return <CaseStudyProofSection key={section.index} section={section} />;
          }
          if (cls.includes("svd")) {
            return <DeliverablesSection key={section.index} section={section} />;
          }
          if (cls.includes("svw")) {
            return <ProcessSection key={section.index} section={section} />;
          }
          if (cls.includes("fc-wrap")) {
            return <FounderAccessSection key={section.index} section={section} />;
          }
          if (cls.includes("svf")) {
            return <FaqSection key={section.index} section={section} />;
          }
          if (cls.includes("sva")) {
            return <LocationsAndRelatedSection key={section.index} section={section} />;
          }
          return <BottomCtaSection key={section.index} section={section} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
