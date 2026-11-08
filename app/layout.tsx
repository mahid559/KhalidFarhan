import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Khalid Farhan — Marketing Agency & Founder | Dublin, Ireland",
  description:
    "Dublin-based founder-led marketing agency built on a personal brand. SEO, GEO, paid media, and full-stack growth for ambitious businesses worldwide.",
  icons: {
    icon: "/assets/kf-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F9F6F3] text-[#1B1624] selection:bg-[#5DCDF1]/30 selection:text-[#1B1624]">
        {children}
      </body>
    </html>
  );
}
