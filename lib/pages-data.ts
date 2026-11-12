import fs from "fs";
import path from "path";

export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "text"; text: string }
  | { type: "button"; text: string }
  | { type: "ul"; items: { text: string; href: string | null; imgs?: { src: string; alt: string }[] }[] }
  | { type: "ol"; items: { text: string; href: string | null; imgs?: { src: string; alt: string }[] }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; summary: string; body: string }
  | { type: "img"; src: string; alt: string }
  | { type: "iframe"; src: string; title: string }
  | { type: "video"; src: string }
  | { type: "link"; text: string; href: string; imgs: { src: string; alt: string }[] }
  | {
      type: "form";
      inputs: {
        tag: string;
        type: string;
        name: string;
        placeholder: string;
        required: boolean;
        options: string[];
      }[];
      submitText: string;
    };

export interface PageSection {
  index: number;
  className: string;
  blocks: Block[];
}

export interface CrawledPage {
  route: string;
  title: string;
  metaDesc: string;
  h1: string;
  sections: PageSection[];
}

const PAGES_DIR = path.join(process.cwd(), "data", "pages");

export function routeToFilename(route: string): string {
  const clean = route.replace(/^\/+|\/+$/g, "");
  if (!clean) return "__home__.json";
  return `${clean.replace(/\//g, "__")}.json`;
}

export function getPageData(route: string): CrawledPage | null {
  const filePath = path.join(PAGES_DIR, routeToFilename(route));
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as CrawledPage;
}

export function getAllPageRoutes(): string[] {
  if (!fs.existsSync(PAGES_DIR)) return [];
  return fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith(".json") && f !== "__home__.json")
    .map((f) => "/" + f.replace(/\.json$/, "").replace(/__/g, "/"));
}

export const SERVICE_SLUGS = [
  "seo",
  "geo",
  "ai-search-optimisation",
  "local-seo",
  "technical-seo-audits",
  "google-ads",
  "meta-ads",
  "linkedin-ads",
  "tiktok-ads",
  "youtube-ads",
  "email-marketing",
  "marketing-automation",
  "web-development",
  "landing-page-design",
  "conversion-rate-optimisation",
  "analytics-and-tracking",
  "content-marketing",
  "copywriting",
  "youtube-channel-management",
] as const;

export const LOCATION_SERVICE_SLUGS = [
  "seo",
  "local-seo",
  "technical-seo-audits",
  "google-ads",
  "meta-ads",
  "email-marketing",
  "web-development",
  "conversion-rate-optimisation",
  "analytics-and-tracking",
  "content-marketing",
] as const;

export const LOCATION_SLUGS = [
  "dublin",
  "cork",
  "galway",
  "limerick",
  "waterford",
  "kilkenny",
  "ireland",
] as const;

export const CASE_STUDY_SLUGS = [
  "accountancy-firm-ireland-seo",
  "beauty-ecommerce-meta-ads",
  "cork-bnb-seo",
  "damp-proofing-contractor-google-ads",
  "dog-daycare-meta-ads",
  "dublin-music-school-seo",
  "electrical-contractor-dublin-local-seo",
  "family-law-firm-seo",
  "flight-school-ireland-ads",
  "furniture-manufacturer-google-ads",
  "galway-roofer-local-seo",
  "german-fintech-google-ads",
  "global-web-hosting-content",
  "irish-caravan-park-seo",
  "medical-centre-dublin-website",
  "memorial-card-printer-ecommerce",
  "paving-contractor-website-local-seo",
  "remittance-app-meta-ads",
  "removals-company-ireland-seo",
  "restaurant-group-meta-ads",
  "serviced-offices-dublin-local-seo",
  "telecom-operator-bangladesh-video",
  "wine-shop-dublin-google-ads",
  "workforce-saas-linkedin-ads",
] as const;

export const INSIGHT_SLUGS = [
  "ai-overview-seo",
  "b2b-digital-marketing-ireland",
  "building-personal-brand-ireland",
  "chatgpt-for-marketing",
  "content-marketing-roi",
  "conversion-rate-optimisation-basics",
  "core-web-vitals-guide-2026",
  "digital-marketing-agency-vs-freelancer",
  "digital-marketing-budget-ireland",
  "email-marketing-2026",
  "google-ads-mistakes-ireland",
  "google-ads-smart-campaigns-vs-manual",
  "google-analytics-4-guide",
  "how-to-record-a-podcast-remotely",
  "instagram-marketing-ireland",
  "linkedin-content-strategy",
  "local-seo-google-business-profile",
  "meta-ads-ios-tracking",
  "perplexity-seo-guide",
  "record-podcast-bad-internet",
  "riverside-alternative",
  "schema-markup-guide",
  "seo-agency-ireland-how-to-choose",
  "seo-for-small-business-ireland",
  "seo-timeline-expectations",
  "shopify-seo-guide",
  "technical-seo-checklist-2026",
  "what-is-generative-engine-optimisation",
] as const;

export const CATEGORY_SLUGS = [
  "business-growth",
  "digital-marketing",
  "entrepreneurship",
  "geo-ai-search",
  "google-ads",
  "life-in-ireland",
  "meta-ads",
  "seo-content",
] as const;

export const INDUSTRY_SLUGS = [
  "aviation",
  "construction",
  "ecommerce",
  "financial-services",
  "hospitality",
  "legal",
  "music-education",
  "pet-care",
  "professional-services",
  "restaurants",
  "saas-tech",
  "tourism",
] as const;

export const PLAYLIST_SLUGS = [
  "2026-challenge-free",
  "digital-marketing-fundamentals",
  "entrepreneurship-ireland",
  "geo-ai-search",
  "google-ads-masterclass",
  "seo-tutorials",
] as const;

export const CHALLENGE_WEEKS = ["week-1", "week-2", "week-3", "week-4"] as const;
