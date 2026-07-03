"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { InfoStrip } from "@/components/info-strip";
import { AboutSection } from "@/components/about-section";
import { CompetitionOverview } from "@/components/competition-overview";
import { CompetitionDetail } from "@/components/competition-detail";
import { TimelineSection } from "@/components/timeline-section";
import { HowToRegisterSection } from "@/components/how-to-register";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Recalculate ScrollTrigger positions after page becomes visible
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 600); // 500ms transition duration + 100ms safety
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}>
        <Navbar />
        <main className="flex-grow">
          <HeroSection isPageLoading={isLoading} />
          <InfoStrip />
          <AboutSection />
          <CompetitionOverview />
          <CompetitionDetail />
          <TimelineSection />
          <HowToRegisterSection />
          <FAQAccordion />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
