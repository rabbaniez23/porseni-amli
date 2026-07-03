"use client";

import { ArrowRight, Star, Sparkles, Award, Play } from "lucide-react";

export function HeroSection() {
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
    { text: "Tari Tradisional", color: "bg-brutal-pink text-brutal-black", rotate: "-rotate-6 md:-rotate-3", icon: <Award className="w-4 h-4" /> },
    { text: "Vocal Group", color: "bg-brutal-yellow text-brutal-black", rotate: "rotate-6 md:rotate-2", icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <section id="home" className="relative pt-10 pb-20 border-b-4 border-brutal-black bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:32px_32px] bg-opacity-[0.04] overflow-hidden">
      {/* Abstract Brutalist Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-brutal-pink border-4 border-brutal-black rounded-full opacity-20 -z-10 animate-bounce duration-[4000ms]" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brutal-yellow border-4 border-brutal-black opacity-10 -z-10 rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none text-brutal-black relative">
                PORSENI
                <span className="block text-brutal-blue drop-shadow-[3px_3px_0_#111111] mt-2">
                  AMLI 2026
                </span>
              </h1>
              <h2 className="text-xs sm:text-sm lg:text-base font-black text-brutal-pink uppercase mt-[6px] block">
                Satu Panggung, Satu Semangat MIPA.
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg font-medium border-3 border-brutal-black bg-white p-6 shadow-brutal leading-relaxed max-w-2xl">
              Pekan Olahraga dan Seni Mahasiswa MIPA yang mempertemukan kreativitas, budaya, strategi, dan ekspresi mahasiswa MIPA se-Indonesia. Tahun ini, PORSENI AMLI menghadirkan kompetisi daring terbaik untuk mengukir sejarah kolaborasi nasional.
            </p>

            {/* Badge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              <div className="p-3 border-2 border-brutal-black bg-white shadow-brutal-sm font-bold text-center">
                <span className="block text-xs text-neutral-500 uppercase">Format</span>
                <span className="text-sm sm:text-base">Daring / Online</span>
              </div>
              <div className="p-3 border-2 border-brutal-black bg-white shadow-brutal-sm font-bold text-center">
                <span className="block text-xs text-neutral-500 uppercase">Pelaksanaan</span>
                <span className="text-sm sm:text-base">Agustus 2026</span>
              </div>
              <div className="p-3 border-2 border-brutal-black bg-white shadow-brutal-sm font-bold text-center">
                <span className="block text-xs text-neutral-500 uppercase">Cabang</span>
                <span className="text-sm sm:text-base">4 Bidang Lomba</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={(e) => handleScroll(e, "#lomba")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brutal-lime text-brutal-black font-extrabold text-lg border-3 border-brutal-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              >
                Lihat Cabang Lomba
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
            <div className="border-4 border-brutal-black bg-white p-4 shadow-brutal rotate-[-2deg] max-w-sm w-full relative z-10">
              <div className="relative border-2 border-brutal-black overflow-hidden h-64 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop"
                  alt="AMLI Art & Science"
                  className="w-full h-full object-cover"
                />
                {/* Sticker badge overlay */}
                <div className="absolute bottom-2 left-2 bg-brutal-yellow text-brutal-black border-2 border-brutal-black px-3 py-1 font-black text-[10px] uppercase shadow-brutal-sm">
                  AMLI 2026 • ONLINE
                </div>
              </div>
              <div className="mt-4 font-black text-xs uppercase text-neutral-800 flex justify-between items-center">
                <span>COMPETITION ARTWORK</span>
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
                  className={`${positions[idx]} ${sticker.color} ${sticker.rotate} p-3 border-2 border-brutal-black shadow-brutal flex items-center gap-1.5 font-black text-xs cursor-default hover:scale-105 transition-all`}
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
