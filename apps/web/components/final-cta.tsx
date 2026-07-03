"use client";

import { registrationLinks } from "./competition-overview";
import { Film, Gamepad, Award, Music, ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  const links = [
    { label: "Daftar Science Movie", url: registrationLinks.scienceShortMovie, icon: <Film className="w-5 h-5" />, color: "bg-brutal-blue text-white" },
    { label: "Daftar Mobile Legend", url: registrationLinks.mobileLegend, icon: <Gamepad className="w-5 h-5" />, color: "bg-brutal-purple text-white" },
    { label: "Daftar Tari Tradisional", url: registrationLinks.tariTradisional, icon: <Award className="w-5 h-5" />, color: "bg-brutal-pink text-white" },
    { label: "Daftar Vocal Group", url: registrationLinks.vocalGroup, icon: <Music className="w-5 h-5" />, color: "bg-brutal-lime text-brutal-black" },
  ];

  return (
    <section className="py-20 bg-brutal-yellow border-b-4 border-brutal-black font-sans relative overflow-hidden">
      {/* Pattern grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_2px,transparent_2px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center space-y-10">
        
        {/* Texts */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-brutal-black drop-shadow-[3px_3px_0_#ffffff]">
            Siap Bawa Nama Kampusmu?
          </h2>
          <p className="text-base sm:text-xl font-extrabold text-neutral-800 leading-relaxed border-3 border-brutal-black bg-white p-6 shadow-brutal">
            Pilih cabang lomba, bentuk tim terbaik, dan tunjukkan semangat MIPA di PORSENI AMLI 2026 bersama FPMIPA Universitas Pendidikan Indonesia!
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} flex items-center justify-between px-6 py-4 border-3 border-brutal-black font-black uppercase text-sm sm:text-base shadow-brutal hover:shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all`}
            >
              <div className="flex items-center gap-3">
                <span className="p-1.5 bg-white text-brutal-black border border-brutal-black">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
