"use client";

import { Award, Landmark, Calendar, Target, Quote } from "lucide-react";

export function AboutSection() {
  const details = [
    { label: "Host Penyelenggara", val: "FPMIPA Universitas Pendidikan Indonesia", icon: <Landmark className="w-5 h-5 text-brutal-blue" /> },
    { label: "Format Kompetisi", val: "100% Daring / Online", icon: <Target className="w-5 h-5 text-brutal-pink" /> },
    { label: "Waktu Pelaksanaan", val: "Agustus 2026", icon: <Calendar className="w-5 h-5 text-brutal-purple" /> },
    { label: "Fokus Utama", val: "Kreativitas, Sportivitas & Semangat MIPA", icon: <Award className="w-5 h-5 text-brutal-lime" /> },
  ];

  return (
    <section id="about" className="py-20 bg-brutal-bg border-b-4 border-brutal-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Description & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brutal-black">
                Tentang PORSENI AMLI 2026
              </h2>
              <div className="w-24 h-4 bg-brutal-blue border-2 border-brutal-black" />
              <p className="text-lg font-bold leading-relaxed border-3 border-brutal-black bg-white p-6 shadow-brutal text-neutral-800">
                PORSENI AMLI 2026 adalah ruang kolaborasi mahasiswa MIPA untuk menampilkan kemampuan terbaik dalam bidang seni, budaya, media kreatif, dan e-sports. Sebagai tuan rumah, FPMIPA Universitas Pendidikan Indonesia menghadirkan format lomba daring yang inklusif, dinamis, dan mudah diikuti oleh universitas anggota Asosiasi MIPA LPTK Indonesia (AMLI).
              </p>
            </div>

            {/* Quote Block */}
            <div className="bg-brutal-yellow text-brutal-black p-6 border-3 border-brutal-black shadow-brutal flex gap-4 items-start relative rotate-[-1deg]">
              <div className="p-2 bg-white border-2 border-brutal-black shadow-brutal-sm shrink-0">
                <Quote className="w-8 h-8 fill-brutal-black" />
              </div>
              <blockquote className="font-extrabold text-lg sm:text-xl text-left italic">
                &ldquo;Bukan sekadar kompetisi, PORSENI AMLI adalah panggung ekspresi mahasiswa MIPA.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white border-3 border-brutal-black shadow-brutal p-8 space-y-6 text-left relative">
              {/* Star Badge */}
              <div className="absolute top-[-20px] right-4 bg-brutal-lime border-2 border-brutal-black px-4 py-1 font-bold text-xs rotate-3 shadow-brutal-sm">
                INFO EVENT
              </div>

              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-brutal-black border-b-2 border-dashed border-neutral-300 pb-2">
                Rincian Kegiatan
              </h3>

              <div className="space-y-4">
                {details.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-3 border-2 border-brutal-black bg-brutal-bg hover:translate-x-1 transition-transform">
                    <div className="p-2 bg-white border border-brutal-black shadow-brutal-sm shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-neutral-500 uppercase tracking-wider">{item.label}</span>
                      <span className="text-sm sm:text-base font-extrabold text-brutal-black">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
