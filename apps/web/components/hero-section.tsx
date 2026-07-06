"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Star, Sparkles, Award, Play } from "lucide-react";

interface HeroSectionProps {
  isPageLoading: boolean;
}

export function HeroSection({ isPageLoading }: HeroSectionProps) {
  const [part1Text, setPart1Text] = useState("");
  const [part2Text, setPart2Text] = useState("");

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stickers = [
    { text: "Science Short Movie", color: "bg-brutal-blue text-white", rotate: "-rotate-2", icon: <Play className="w-4 h-4 fill-white" /> },
    { text: "Mobile Legend", color: "bg-brutal-purple text-white", rotate: "rotate-3", icon: <Star className="w-4 h-4 fill-white" /> },
    { text: "Tari Tradisional", color: "bg-brutal-pink text-white", rotate: "-rotate-6 md:-rotate-3", icon: <Award className="w-4 h-4" /> },
    { text: "Vocal Group", color: "bg-brutal-yellow text-brutal-black", rotate: "rotate-6 md:rotate-2", icon: <Sparkles className="w-4 h-4" /> },
  ];

  // Pure React Typewriter Effect (synchronized with loading screen completion)
  useEffect(() => {
    if (isPageLoading) {
      setPart1Text("");
      setPart2Text("");
      return;
    }

    const target1 = "PORSENI";
    const target2 = "AMLI 2026";
    let i = 0;
    let typePart2: NodeJS.Timeout;

    const typePart1 = setInterval(() => {
      if (i < target1.length) {
        setPart1Text(target1.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typePart1);
        
        let j = 0;
        typePart2 = setInterval(() => {
          if (j < target2.length) {
            setPart2Text(target2.substring(0, j + 1));
            j++;
          } else {
            clearInterval(typePart2);
          }
        }, 70);
      }
    }, 70);

    return () => {
      clearInterval(typePart1);
      if (typePart2) clearInterval(typePart2);
    };
  }, [isPageLoading]);

  return (
    <section
      id="home"
      className="relative pt-10 pb-20 border-b-4 border-brutal-black bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:32px_32px] bg-opacity-[0.04] overflow-hidden"
    >
      {/* Abstract Brutalist Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-brutal-pink border-4 border-brutal-black rounded-full opacity-20 -z-10 animate-bounce duration-[4000ms]" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brutal-yellow border-4 border-brutal-black opacity-10 -z-10 rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="hero-title text-5xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-brutal-black relative min-h-[120px] sm:min-h-[140px] lg:min-h-[180px] select-none">
                <span className="hero-part1">{part1Text}</span>
                <span className="hero-part2 text-brutal-blue block drop-shadow-[3px_3px_0_#111111] mt-2">
                  {part2Text}
                </span>
              </h1>
              <h2 className="hero-subtitle text-sm sm:text-sm lg:text-base font-black text-brutal-pink uppercase mt-[6px] block">
                Satu Panggung, Satu Semangat MIPA.
              </h2>
            </div>

            {/* Description */}
            <p className="hero-desc text-lg font-medium border-3 border-brutal-black bg-white p-6 shadow-brutal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pekan Olahraga dan Seni Mahasiswa MIPA yang mempertemukan kreativitas, budaya, strategi, dan ekspresi mahasiswa MIPA se-Indonesia. Tahun ini, PORSENI AMLI menghadirkan kompetisi daring terbaik untuk mengukir sejarah kolaborasi nasional.
            </p>

            {/* Badge Grid */}
            <div className="hero-badge-grid grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto lg:mx-0">
              <div className="p-2 sm:p-3 border-2 border-brutal-black bg-white shadow-brutal-sm font-bold text-center">
                <span className="block text-[9px] sm:text-xs text-neutral-500 uppercase">Format</span>
                <span className="text-[10px] sm:text-sm md:text-base">Daring / Online</span>
              </div>
              <div className="p-2 sm:p-3 border-2 border-brutal-black bg-white shadow-brutal-sm font-bold text-center">
                <span className="block text-[9px] sm:text-xs text-neutral-500 uppercase">Pelaksanaan</span>
                <span className="text-[10px] sm:text-sm md:text-base">Agustus 2026</span>
              </div>
              <div className="p-2 sm:p-3 border-2 border-brutal-black bg-white shadow-brutal-sm font-bold text-center">
                <span className="block text-[9px] sm:text-xs text-neutral-500 uppercase">Cabang</span>
                <span className="text-[10px] sm:text-sm md:text-base">4 Bidang Lomba</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-ctas flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <button
                onClick={(e) => handleScroll(e, "#lomba")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brutal-lime text-brutal-black font-extrabold text-lg border-3 border-brutal-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              >
                Lihat Lomba
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => handleScroll(e, "#lomba")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-brutal-black font-extrabold text-lg border-3 border-brutal-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>

          {/* Sticker Visuals / Right Side */}
          <div className="lg:col-span-5 relative h-[450px] flex items-center justify-center">
            {/* Neo-Brutalist Art Frame */}
            <div className="hero-art-frame border-4 border-brutal-black bg-white p-4 shadow-brutal rotate-[-2deg] max-w-sm w-full relative z-10 hover:rotate-0 transition-transform duration-300">
              <div className="relative border-2 border-brutal-black overflow-hidden h-64 bg-neutral-100">
                <img
                  src="/assets/Tarian%20Indonesia.jpg"
                  alt="Tari Tradisional PORSENI"
                  className="w-full h-full object-cover"
                />
                {/* Sticker badge overlay */}
                <div className="absolute bottom-2 left-2 bg-brutal-yellow text-brutal-black border-2 border-brutal-black px-3 py-1 font-black text-[10px] uppercase shadow-brutal-sm">
                  AMLI 2026 • ONLINE
                </div>
              </div>
              <div className="mt-4 font-black text-xs uppercase text-neutral-800 flex justify-between items-center">
                <span>TARI TRADISIONAL ARTWORK</span>
                <span className="text-brutal-pink">#01</span>
              </div>
            </div>

            {/* Floating Stickers */}
            {stickers.map((sticker, idx) => {
              const positions = [
                "absolute top-2 left-2 z-20",
                "absolute top-6 right-2 z-20",
                "absolute bottom-6 left-2 z-20",
                "absolute bottom-2 right-2 z-20"
              ];
              return (
                <div
                  key={idx}
                  className={`hero-sticker ${positions[idx]} ${sticker.color} ${sticker.rotate} p-3 border-2 border-brutal-black shadow-brutal flex items-center gap-1.5 font-black text-xs cursor-default hover:scale-105 transition-all`}
                >
                  {sticker.icon}
                  {sticker.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* running text marquee */}
      <div className="mt-16 bg-brutal-black text-white border-y-4 border-brutal-black py-4 overflow-hidden relative font-heading font-black text-xl sm:text-2xl uppercase tracking-widest">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          <span>SCIENCE • ESPORTS • CULTURE • MUSIC • MIPA • AMLI • ONLINE COMPETITION • </span>
          <span>SCIENCE • ESPORTS • CULTURE • MUSIC • MIPA • AMLI • ONLINE COMPETITION • </span>
          <span>SCIENCE • ESPORTS • CULTURE • MUSIC • MIPA • AMLI • ONLINE COMPETITION • </span>
          <span>SCIENCE • ESPORTS • CULTURE • MUSIC • MIPA • AMLI • ONLINE COMPETITION • </span>
        </div>
      </div>
    </section>
  );
}
