# DESIGN SYSTEM — Khalid Farhan Local Landing Page

This document is the single source of truth for visual styling across all pages, extracted directly from the existing local landing page (`app/layout.tsx`, `app/globals.css`, `app/sections.css`, and `components/`).

## 1. Colors
- **Canvas Background**: `#F9F6F3` (`--bg-canvas`)
- **Card Surface**: `#FFFFFF` (`--bg-card`)
- **Subtle Surface**: `#F3EDE9` (`--bg-subtle`)
- **Border Color**: `#ECE5E1` (`--border-color`)
- **Text Primary**: `#1B1624` (`--text-primary`)
- **Text Secondary**: `#54505B` (`--text-secondary`)
- **Text Muted**: `#76737C` (`--text-muted`)
- **Brand Accents**:
  - Orange (Primary CTA & Card Hover): `#FD976D` (hover `#FC8555`)
  - Blue (Brand Doodle Underline): `#5DCDF1`
  - Yellow: `#FDD46B`
  - Purple: `#C9B1FB`
  - Green: `#79D287`

## 2. Typography (Measured in Chrome on `http://localhost:3000/` at 1440px)
- **Display / Section Headings (`Anton`, weight `400`, uppercase, `letter-spacing: -0.01em`)**:
  - `h1` (`.display-l`): `62px`, `line-height: 57.04px` (`0.92`), `letter-spacing: -0.62px`, `#1B1624`
  - `h2` (`.heading-xl` / `.heading-lg`): `46px–51.2px` (mostly `48px`), `line-height: 45.08px–50.18px`, `letter-spacing: -0.46px` to `-0.512px`, `#1B1624`
  - `.ledger-num` / `.metric-number`: `Anton`, weight `400`
- **Body, Subheadings, Cards & Buttons (`Fraunces`)**:
  - Base `body`: `16px`, `line-height: 24px`, `#1B1624`
  - Lead paragraphs (`p`): `18px`, weight `400`, `line-height: 28px–29.25px`, `#54505B`
  - Card body paragraphs: `15.68px–16px`, `line-height: 23.52px–24px`
  - Subheadings (`h3`, `h4`): `Fraunces`, weight `500–700`, `16px–36px`
  - Buttons (`.ali-pill-btn`, `button`): `Fraunces`, weight `600`, `14px`

## 3. Containers & Section Rhythm (Measured at 1440px)
- **Header & Hero Max-Width**: `max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12` (header height `96px`, hero padding `32px` top / `96px` bottom)
- **Standard Content Sections**: `max-w-7xl` (`1280px`, `px-8`) or `.site-container` (`1200px`, `px-6`)
- **Section Vertical Paddings**: `80px–120px` (`py-16 sm:py-24`), separated by `0.8px–1px solid #ECE5E1` on `#F9F6F3`

## 4. Cards, Buttons & Hover Animations (Measured at 1440px)
- **Standard Card (`.ali-card`)**:
  - Default: `bg-white`, `border: 0.8px solid #ECE5E1`, `rounded-[20px]` (cards) to `rounded-[28px]` / `rounded-[32px]` (video/portrait), `p-6 sm:p-10` (stat cards `384×174px` with `40px` padding, `gap-8`)
  - Hover (`.ali-article-card`, `.ali-video-card`, `.rw-tile`, `.hover-orange`): `background-color: #FD976D`, `border-color: #FD976D`, `320ms cubic-bezier(0.16, 1, 0.3, 1)`, subtle lift (`hover:-translate-y-1.5`), inner text `#1B1624`
- **Pill Buttons (`.ali-pill-btn`)**:
  - `rounded-full`, `font-semibold`, `14px`, `hover:-translate-y-0.5`
  - Primary Coral: `bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624]` (`padding: 14px 28px`, header CTA `10px 24px`)
  - Dark Contrast: `bg-[#1B1624] hover:bg-[#2D2638] text-white` (`padding: 14px 28px`)
  - Outline White: `bg-white hover:bg-[#1B1624] text-[#1B1624] hover:text-white border border-[#ECE5E1]` (`padding: 12px 26px`)
- **Bottom CTA Banner (`ConversationCta`)**:
  - `bg-white text-[#1B1624] border border-[#ECE5E1] rounded-[36px] py-16 sm:py-20 px-6 sm:px-12 text-center hover:border-[#FD976D]`

