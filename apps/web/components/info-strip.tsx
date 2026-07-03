"use client";

import { Film, Gamepad, Award, ShieldAlert } from "lucide-react";

export function InfoStrip() {
  const infoItems = [
    { text: "4 Cabang Lomba", sub: "Science, Art, E-Sports & Voice", color: "bg-brutal-lime text-brutal-black", icon: <Film className="w-6 h-6" /> },
    { text: "Online Competition", sub: "Daring dari Universitas Asal", color: "bg-brutal-blue text-white", icon: <Gamepad className="w-6 h-6" /> },
    { text: "1 Tim per Kampus", sub: "Kuota Maksimal Perwakilan", color: "bg-brutal-pink text-white", icon: <Award className="w-6 h-6" /> },
    { text: "Daftar Sekarang", sub: "Proses Pendaftaran Cepat", color: "bg-brutal-yellow text-brutal-black", icon: <ShieldAlert className="w-6 h-6" /> },
  ];

  return (
    <section className="py-12 bg-brutal-bg border-b-4 border-brutal-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} p-6 border-3 border-brutal-black shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all flex items-start gap-4`}
            >
              <div className="p-3 bg-white text-brutal-black border-2 border-brutal-black shadow-brutal-sm shrink-0">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight leading-tight">
                  {item.text}
                </h3>
                <p className="text-xs sm:text-sm font-semibold opacity-90 mt-1">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
