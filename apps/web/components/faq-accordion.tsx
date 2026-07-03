"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: "Apakah semua lomba dilaksanakan online?",
      a: "Ya, berdasarkan konsep kegiatan, seluruh cabang lomba dilaksanakan secara daring / online."
    },
    {
      q: "Apakah satu universitas boleh mengirim lebih dari satu tim?",
      a: "Pada ketentuan umum cabang lomba, setiap universitas mengirimkan satu tim untuk masing-masing cabang yang diikuti."
    },
    {
      q: "Apakah video harus dikumpulkan sebelum hari pelaksanaan?",
      a: "Ya. Untuk cabang berbasis penampilan atau karya video, file dikirimkan sebelum hari H sesuai timeline panitia."
    },
    {
      q: "Di mana saya bisa mendapatkan panduan teknis lengkap?",
      a: "Panduan teknis akan diberikan oleh panitia melalui kanal resmi dan/atau saat technical meeting."
    },
    {
      q: "Apakah keputusan juri dan panitia dapat diganggu gugat?",
      a: "Tidak. Keputusan juri, panitia, dan wasit bersifat final."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Bulletproof fromTo animations
      gsap.fromTo(".faq-header", 
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-header",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".faq-item", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="faq" className="py-20 bg-brutal-bg border-b-4 border-brutal-black font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="faq-header text-center space-y-6 mb-16">
          <div className="inline-flex p-3 bg-brutal-yellow border-2 border-brutal-black shadow-brutal-sm rotate-3 mb-2">
            <HelpCircle className="w-8 h-8 text-brutal-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brutal-black">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg font-bold text-neutral-600 max-w-xl mx-auto font-sans">
            Temukan jawaban cepat atas pertanyaan umum seputar pendaftaran dan pelaksanaan PORSENI AMLI 2026.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item border-3 border-brutal-black bg-white shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-6 text-left font-black text-sm sm:text-base md:text-lg text-brutal-black uppercase hover:bg-neutral-50 focus:outline-none transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`p-1.5 border-2 border-brutal-black bg-brutal-lime text-brutal-black shadow-brutal-sm transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t-2 border-dashed border-neutral-200 text-left font-semibold text-neutral-700 text-sm sm:text-base leading-relaxed bg-brutal-bg/40 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
