"use client";

import { Star, ArrowUp } from "lucide-react";

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brutal-black text-white py-16 border-t-4 border-brutal-black font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b-2 border-neutral-800 pb-12 text-left">
          
          {/* Logo & Credits */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-black tracking-tighter uppercase text-white">
                PORSENI AMLI 2026
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-black border border-white bg-brutal-lime text-brutal-black rotate-2">
                UPI HOST
              </span>
            </div>
            
            <p className="font-semibold text-neutral-400 text-sm max-w-md leading-relaxed">
              Diselenggarakan oleh FPMIPA Universitas Pendidikan Indonesia (UPI) sebagai tuan rumah Pekan Olahraga dan Seni Mahasiswa MIPA se-Indonesia 2026 secara daring.
            </p>


          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-extrabold uppercase text-brutal-yellow text-sm tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 font-bold text-sm text-neutral-300">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-white transition-colors">
                  Tentang Kegiatan
                </a>
              </li>
              <li>
                <a href="#lomba" onClick={(e) => handleScroll(e, "#lomba")} className="hover:text-white transition-colors">
                  Cabang Lomba
                </a>
              </li>
              <li>
                <a href="#timeline" onClick={(e) => handleScroll(e, "#timeline")} className="hover:text-white transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleScroll(e, "#faq")} className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://cv-monecruz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brutal-yellow text-neutral-400 transition-colors"
                >
                  Developer ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Metadata info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-extrabold uppercase text-brutal-pink text-sm tracking-wider">
              Detail Kegiatan
            </h4>
            <div className="space-y-3 font-semibold text-neutral-300 text-xs sm:text-sm">
              <div className="flex gap-2">
                <span className="text-brutal-blue font-bold">●</span>
                <span>FPMIPA Universitas Pendidikan Indonesia</span>
              </div>
              <div className="flex gap-2">
                <span className="text-brutal-lime font-bold">●</span>
                <span>Kompetisi Daring / Online</span>
              </div>
              <div className="flex gap-2">
                <span className="text-brutal-pink font-bold">●</span>
                <span>Agustus 2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-neutral-500 font-bold text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-0 text-left">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-neutral-500 text-neutral-500" />
              <span>&copy; 2026 PORSENI AMLI. All rights reserved.</span>
            </div>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span>
              Created by{" "}
              <a
                href="https://cv-monecruz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brutal-yellow hover:text-white transition-colors underline decoration-dashed underline-offset-4"
              >
                Developer
              </a>
            </span>
          </div>

          <button
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-700 hover:border-white text-neutral-400 hover:text-white transition-all focus:outline-none"
            aria-label="Kembali ke atas"
          >
            <span>Kembali Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
