"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 }
    );

    const tiles = sectionRef.current?.querySelectorAll(".rw-tile");
    tiles?.forEach((tile) => observer.observe(tile));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="rw" aria-labelledby="rw-h">
      <div className="site-container">
        {/* Section Header */}
        <div className="rw-head">
          <h2 id="rw-h" className="heading-xl">
            Results that speak for themselves
          </h2>
          <Link className="btn btn-outline-white" href="/work/case-studies">
            All case studies →
          </Link>
        </div>

        {/* Exact 8 Case Study Tiles Grid */}
        <div className="rw-grid">
          {/* Tile 1 (rw-a, span 5): Cork B&B SEO */}
          <Link
            className="rw-tile rw-a rw-color-orange"
            style={{ transitionDelay: "0ms" }}
            href="/work/case-studies/cork-bnb-seo"
          >
            <div className="rw-shot">
              <div className="rw-pad">
                <div className="rw-kv">
                  <span>Organic clicks</span>
                  <strong>+180%</strong>
                </div>
                <svg viewBox="0 0 320 150" className="rw-svg" aria-hidden="true">
                  <line x1="10" x2="310" y1="37.5" y2="37.5" className="rw-grid" />
                  <line x1="10" x2="310" y1="75" y2="75" className="rw-grid" />
                  <line x1="10" x2="310" y1="112.5" y2="112.5" className="rw-grid" />
                  <path
                    d="M10,126.13 L37.27,119.2 L64.54,122.66 L91.81,110.53 L119.09,103.6 L146.36,91.46 L173.63,81.06 L200.9,67.2 L228.18,56.8 L255.45,42.93 L282.72,34.26 L310,22.13 L310,150 L10,150 Z"
                    className="rw-area"
                  />
                  <path
                    d="M10,126.13 L37.27,119.2 L64.54,122.66 L91.81,110.53 L119.09,103.6 L146.36,91.46 L173.63,81.06 L200.9,67.2 L228.18,56.8 L255.45,42.93 L282.72,34.26 L310,22.13"
                    className="rw-line rw-draw"
                  />
                  <circle cx="310" cy="22.13" r="5" className="rw-dot" />
                </svg>
                <div className="rw-axis">
                  <span>Month 1</span>
                  <span>Month 9</span>
                </div>
              </div>
            </div>
            <div className="rw-cap">
              <span className="rw-who">A boutique B&B in Cork</span>
              <span className="rw-what">
                SEO rebuild{" "}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Tile 2 (rw-b, span 4): Galway Roofer Local SEO */}
          <Link
            className="rw-tile rw-b rw-color-purple"
            style={{ transitionDelay: "70ms" }}
            href="/work/case-studies/galway-roofer-local-seo"
          >
            <div className="rw-shot">
              <div className="rw-pad">
                <div className="rw-kv">
                  <span>Rankings, 6 months</span>
                  <strong>#1</strong>
                </div>
                <ul className="rw-ranks">
                  <li>
                    <span className="rw-kw">roofer galway</span>
                    <span className="rw-from">14</span>
                    <span className="rw-arrow" aria-hidden="true">→</span>
                    <span className="rw-to">1</span>
                  </li>
                  <li>
                    <span className="rw-kw">roof repair galway</span>
                    <span className="rw-from">22</span>
                    <span className="rw-arrow" aria-hidden="true">→</span>
                    <span className="rw-to">2</span>
                  </li>
                  <li>
                    <span className="rw-kw">flat roof galway</span>
                    <span className="rw-from">31</span>
                    <span className="rw-arrow" aria-hidden="true">→</span>
                    <span className="rw-to">3</span>
                  </li>
                  <li>
                    <span className="rw-kw">emergency roofer galway</span>
                    <span className="rw-from">9</span>
                    <span className="rw-arrow" aria-hidden="true">→</span>
                    <span className="rw-to">1</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rw-cap">
              <span className="rw-who">A Galway-based roofer</span>
              <span className="rw-what">
                Local SEO{" "}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Tile 3 (rw-c, span 3): Premium Dog Daycare */}
          <Link
            className="rw-tile rw-c rw-color-yellow"
            style={{ transitionDelay: "140ms" }}
            href="/work/case-studies/dog-daycare-meta-ads"
          >
            <div className="rw-shot">
              <div className="rw-map">
                <svg viewBox="0 0 320 180" className="rw-svg" aria-hidden="true">
                  <path d="M0 40 Q80 20 160 60 T320 50" className="rw-road" />
                  <path d="M30 0 Q60 90 20 180" className="rw-road" />
                  <path d="M200 0 Q180 100 260 180" className="rw-road" />
                  <path d="M0 130 Q120 110 320 150" className="rw-road" />
                  <g className="rw-pin rw-pin-1">
                    <path d="M160 60 c-14 0 -22 10 -22 22 c0 16 22 38 22 38 s22 -22 22 -38 c0 -12 -8 -22 -22 -22z" />
                    <circle cx="160" cy="82" r="7" />
                  </g>
                  <g className="rw-pin rw-pin-2">
                    <path d="M90 110 c-10 0 -16 7 -16 16 c0 12 16 28 16 28 s16 -16 16 -28 c0 -9 -6 -16 -16 -16z" />
                  </g>
                  <g className="rw-pin rw-pin-2">
                    <path d="M240 100 c-10 0 -16 7 -16 16 c0 12 16 28 16 28 s16 -16 16 -28 c0 -9 -6 -16 -16 -16z" />
                  </g>
                </svg>
                <div className="rw-mapcard">
                  <strong>Top 3 in Maps</strong>
                  <span>★ 4.9 · 60+ reviews · Open now</span>
                </div>
              </div>
            </div>
            <div className="rw-cap">
              <span className="rw-who">A premium dog daycare</span>
              <span className="rw-what">
                Google Maps + Meta Ads{" "}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Tile 4 (rw-d, span 4): Educational Fintech in Germany */}
          <Link
            className="rw-tile rw-d rw-color-orange"
            style={{ transitionDelay: "210ms" }}
            href="/work/case-studies/german-fintech-google-ads"
          >
            <div className="rw-shot">
              <div className="rw-pad">
                <div className="rw-kv">
                  <span>Cost per lead, 90 days</span>
                  <strong>−40%</strong>
                </div>
                <div className="rw-bars" aria-hidden="true">
                  <span style={{ height: "100%", animationDelay: "0ms" }} />
                  <span style={{ height: "94%", animationDelay: "70ms" }} />
                  <span style={{ height: "88%", animationDelay: "140ms" }} />
                  <span style={{ height: "79%", animationDelay: "210ms" }} />
                  <span style={{ height: "71%", animationDelay: "280ms" }} />
                  <span style={{ height: "66%", animationDelay: "350ms" }} />
                  <span
                    style={{ height: "60%", animationDelay: "420ms" }}
                    className="is-last"
                  />
                </div>
                <div className="rw-chips">
                  <span>Leads <b>+62%</b></span>
                  <span>ROAS <b>3.2x</b></span>
                  <span>Wasted spend <b>−€4.1k</b></span>
                </div>
              </div>
            </div>
            <div className="rw-cap">
              <span className="rw-who">An educational fintech in Germany</span>
              <span className="rw-what">
                Google Ads rebuild{" "}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Tile 5 (rw-e, span 5): Dublin Music School */}
          <Link
            className="rw-tile rw-e rw-color-purple"
            style={{ transitionDelay: "0ms" }}
            href="/work/case-studies/dublin-music-school-seo"
          >
            <div className="rw-shot">
              <div className="rw-browser">
                <div className="rw-browser-bar">
                  <span />
                  <span />
                  <span />
                  <em>musicschool.ie/guitar-lessons-dublin</em>
                </div>
                <div className="rw-browser-body">
                  <div className="rw-page">
                    <div className="rw-page-nav">
                      <span />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="rw-page-hero">
                      <b style={{ width: "72%" }} />
                      <b style={{ width: "54%" }} />
                      <small style={{ width: "60%" }} />
                      <small style={{ width: "46%" }} />
                      <span className="rw-page-cta">Book a free trial lesson</span>
                    </div>
                    <div className="rw-page-cards">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="rw-badge">Waiting list in 9 months</div>
                </div>
              </div>
            </div>
            <div className="rw-cap">
              <span className="rw-who">A music school in Dublin</span>
              <span className="rw-what">
                Landing pages + SEO{" "}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Tile 6 (rw-f, span 3): Roofer Google Reviews */}
          <Link
            className="rw-tile rw-f rw-color-yellow"
            style={{ transitionDelay: "70ms" }}
            href="/work/case-studies/galway-roofer-local-seo"
          >
            <div className="rw-shot">
              <div className="rw-pad rw-center">
                <div className="rw-stars" aria-hidden="true">★★★★★</div>
                <div className="rw-big">
                  60<span>+</span>
                </div>
                <p>Google reviews, up from 12 in six months</p>
              </div>
            </div>
            <div className="rw-cap">
              <span className="rw-who">A Galway-based roofer</span>
              <span className="rw-what">
                Review programme{" "}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Tile 7 (rw-g, span 7): Beauty Brand Email Flows */}
          <Link
            className="rw-tile rw-g rw-color-orange"
            style={{ transitionDelay: "140ms" }}
            href="/work/case-studies/beauty-ecommerce-meta-ads"
          >
            <div className="rw-shot">
              <div className="rw-pad">
                <div className="rw-kv">
                  <span>Abandoned-cart flow</span>
                  <strong>+18% revenue</strong>
                </div>
                <ol className="rw-flow">
                  <li style={{ animationDelay: "0ms" }}>
                    <span className="rw-flow-t">1 hour</span>
                    <span className="rw-flow-s">You left something behind</span>
                    <span className="rw-flow-r">41% open</span>
                  </li>
                  <li style={{ animationDelay: "120ms" }}>
                    <span className="rw-flow-t">24 hours</span>
                    <span className="rw-flow-s">Still thinking it over?</span>
                    <span className="rw-flow-r">33% open</span>
                  </li>
                  <li style={{ animationDelay: "240ms" }}>
                    <span className="rw-flow-t">3 days</span>
                    <span className="rw-flow-s">Last chance, 10% off</span>
                    <span className="rw-flow-r">9.4% bought</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="rw-cap">
              <span className="rw-who">A premium beauty brand</span>
              <span className="rw-what">
                Email flows{" "}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Tile 8 (rw-h, span 5): Beauty Brand ROAS */}
          <Link
            className="rw-tile rw-h rw-color-purple"
            style={{ transitionDelay: "210ms" }}
            href="/work/case-studies/beauty-ecommerce-meta-ads"
          >
            <div className="rw-shot">
              <div className="rw-pad rw-center">
                <div className="rw-roas">
                  <span className="rw-roas-from">1.4x</span>
                  <svg viewBox="0 0 60 24" aria-hidden="true">
                    <path
                      d="M4 12 H50 M40 4 l12 8 -12 8"
                      className="rw-roas-arrow"
                    />
                  </svg>
                  <span className="rw-roas-to">4.2x</span>
                </div>
                <p>Meta ROAS in 4 months, same budget</p>
              </div>
            </div>
            <div className="rw-cap">
              <span className="rw-who">A premium beauty brand</span>
              <span className="rw-what">
                Meta Ads restructure{" "}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
