import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PressBar from "@/components/PressBar";
import AboutStory from "@/components/AboutStory";
import HowCanIHelp from "@/components/HowCanIHelp";
import ResultsSection from "@/components/ResultsSection";
import VideoSection from "@/components/VideoSection";
import ArticlesSection from "@/components/ArticlesSection";
import NewsletterSection from "@/components/NewsletterSection";
import ConversationCta from "@/components/ConversationCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Section: Header + Hero in contained rounded card frame matching Ali Abdaal reference */}
      <div className="w-full bg-white pt-2 sm:pt-4 px-2 sm:px-4 lg:px-6">
        <div className="max-w-[1440px] mx-auto bg-[#F9F6F3] rounded-[20px] overflow-hidden shadow-2xs border border-[#ECE5E1]/40">
          <Navbar />
          <Hero />
        </div>
      </div>

      <main className="flex-grow">
        {/* Section 2: Our clients */}
        <PressBar />

        {/* Section 3: Me and my team can help you get more customers */}
        <AboutStory />

        {/* Section 4: What we do */}
        <HowCanIHelp />

        {/* Section 5: Results that speak for themselves */}
        <ResultsSection />

        {/* Section 6: On my YouTube channel */}
        <VideoSection />

        {/* Section 7: Latest articles */}
        <ArticlesSection />

        {/* Section 8: Marketing insights, straight from the field */}
        <NewsletterSection />

        {/* Section 9: Let's start a conversation */}
        <ConversationCta />
      </main>
      <Footer />
    </div>
  );
}
