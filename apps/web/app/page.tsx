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
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Initialize AOS for lightweight CSS scroll animations
      AOS.init({
        duration: 400,
        once: true,
        easing: "ease-out",
        disable: "mobile",
      });
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
