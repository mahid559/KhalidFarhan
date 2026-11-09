"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceLink {
  label: string;
  href: string;
}

interface PillarTab {
  id: string;
  title: string;
  line: string;
  hoverColor: string; // The exact required hover color
  badgeColor: string;
  links: ServiceLink[];
}

const TABS: PillarTab[] = [
  {
    id: "get-found",
    title: "Get found",
    line: "When someone searches for what you sell, on Google or in ChatGPT, they should find you first.",
    hoverColor: "#FD976D", // Card 1: Orange
    badgeColor: "#FD976D",
    links: [
      { label: "SEO", href: "/services/seo" },
      { label: "Generative Engine Optimisation", href: "/services/geo" },
      { label: "AI Search Optimisation", href: "/services/ai-search-optimisation" },
    ],
  },
  {
    id: "get-leads",
    title: "Get leads from ads",
    line: "Google, Meta and LinkedIn campaigns where every euro is tracked to a lead or a sale.",
    hoverColor: "#C9B1FB", // Card 2: Purple
    badgeColor: "#C9B1FB",
    links: [
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "LinkedIn Ads", href: "/services/linkedin-ads" },
    ],
  },
  {
    id: "turn-visitors",
    title: "Turn visitors into customers",
    line: "A fast website, pages that convert, emails that follow up, and tracking that shows what is working.",
    hoverColor: "#FDD46B", // Card 3: Yellow
    badgeColor: "#FDD46B",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
      { label: "Email Marketing", href: "/services/email-marketing" },
      { label: "Analytics & Tracking", href: "/services/analytics-and-tracking" },
    ],
  },
];

export default function HowCanIHelp() {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = TABS[activeTab];

  return (
    <section className="wwd" aria-label="What we do">
      <div className="site-container wwd-grid">
        {/* Left Column: Interactive Tab Index */}
        <ol className="wwd-index">
          {TABS.map((tab, idx) => {
            const isActive = idx === activeTab;
            return (
              <li key={tab.id}>
                <button
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setActiveTab(idx)}
                  onFocus={() => setActiveTab(idx)}
                  className={`wwd-tab ${isActive ? "is-active" : ""}`}
                  aria-expanded={isActive}
                  aria-controls="wwd-panel"
                  style={
                    {
                      "--tab-accent": tab.hoverColor,
                    } as React.CSSProperties
                  }
                >
                  <span className="wwd-tab-title">{tab.title}</span>
                  <span className="wwd-tab-line">{tab.line}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Right Column: Panel with SVG Artwork and Service Links */}
        <div
          className="wwd-panel"
          id="wwd-panel"
          style={
            {
              "--panel-accent": activePillar.hoverColor,
            } as React.CSSProperties
          }
        >
          {/* Animated SVG Artwork */}
          <div className="wwd-art" key={activeTab}>
            {activeTab === 0 && (
              <svg viewBox="0 0 320 200" className="wwd-svg" aria-hidden="true">
                <rect x="16" y="16" width="288" height="36" rx="18" fill="none" stroke="#A9BDDD" strokeWidth="2" />
                <circle cx="38" cy="34" r="8" fill="none" stroke="#A9BDDD" strokeWidth="2" />
                <line x1="44" y1="40" x2="50" y2="46" stroke="#A9BDDD" strokeWidth="2" strokeLinecap="round" />
                <rect x="62" y="31" width="2" height="7" fill="#FFFFFF" className="animate-pulse" />
                
                <g className="d-row">
                  <rect x="16" y="72" width="288" height="36" rx="4" fill={activePillar.hoverColor} />
                  <rect x="30" y="84" width="120" height="6" rx="3" fill="#FFFFFF" />
                  <rect x="30" y="96" width="72" height="4" rx="2" fill="#FFFFFF" opacity="0.6" />
                </g>
                <g className="d-row">
                  <rect x="30" y="128" width="96" height="6" rx="3" fill="#A9BDDD" />
                  <rect x="30" y="140" width="60" height="4" rx="2" fill="#A9BDDD" opacity="0.6" />
                </g>
                <g className="d-row">
                  <rect x="30" y="166" width="110" height="6" rx="3" fill="#A9BDDD" />
                  <rect x="30" y="178" width="52" height="4" rx="2" fill="#A9BDDD" opacity="0.6" />
                </g>
              </svg>
            )}

            {activeTab === 1 && (
              <svg viewBox="0 0 320 200" className="wwd-svg" aria-hidden="true">
                <line x1="24" y1="176" x2="304" y2="176" stroke="#A9BDDD" strokeWidth="2" strokeLinecap="round" />
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <rect
                    key={idx}
                    x={40 + 44 * idx}
                    width="26"
                    y={176 - (28 + 24 * idx)}
                    height={28 + 24 * idx}
                    rx="3"
                    fill={idx === 5 ? activePillar.hoverColor : "#5B7CB8"}
                  />
                ))}
                <polyline
                  points="53,142 97,122 141,112 185,84 229,62 273,30"
                  fill="none"
                  stroke="#E9B85C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="273" cy="30" r="6" fill="#E9B85C" />
              </svg>
            )}

            {activeTab === 2 && (
              <svg viewBox="0 0 320 200" className="wwd-svg" aria-hidden="true">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
                  <circle
                    key={idx}
                    cx={30 + (idx % 4) * 26}
                    cy={46 + 30 * Math.floor(idx / 4)}
                    r="7"
                    fill="#A9BDDD"
                    opacity="0.8"
                  />
                ))}
                <path d="M150 40 L150 110 L226 150 L226 80 Z" fill="none" stroke="#A9BDDD" strokeWidth="2" strokeLinejoin="round" />
                <path d="M150 110 L150 170 L226 150" fill="none" stroke="#A9BDDD" strokeWidth="2" strokeLinejoin="round" opacity="0.55" />
                <circle
                  cx="258"
                  cy="120"
                  r="22"
                  fill={activePillar.hoverColor}
                />
                <path d="M248 120 L255 127 L269 113" fill="none" stroke="#1B1624" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>

          {/* Service Links List */}
          <ul
            className="wwd-links"
            aria-label={`${activePillar.title} services`}
            key={`links-${activeTab}`}
          >
            {activePillar.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="wwd-link-item">
                  <span>{link.label}</span>
                  <span className="wwd-go">
                    <ArrowUpRight className="w-[18px] h-[18px] stroke-[1.75]" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile View: Sequential Stack */}
        <div className="wwd-stack">
          {TABS.map((tab) => (
            <div
              key={tab.id}
              className="wwd-stack-item"
              style={
                {
                  "--stack-accent": tab.hoverColor,
                } as React.CSSProperties
              }
            >
              <h3>{tab.title}</h3>
              <p>{tab.line}</p>
              <ul className="wwd-links" aria-label={`${tab.title} services`}>
                {tab.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="wwd-link-item">
                      <span>{link.label}</span>
                      <span className="wwd-go">
                        <ArrowUpRight className="w-[18px] h-[18px] stroke-[1.75]" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
