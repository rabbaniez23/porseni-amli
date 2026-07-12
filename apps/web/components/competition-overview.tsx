"use client";

import { Film, Gamepad, Award, Music, ArrowUpRight, HelpCircle } from "lucide-react";

export const registrationLinks = {
  scienceShortMovie: "https://forms.gle/2TkuRZ9eL3STvXZz8",
  mobileLegend: "https://forms.gle/FEL8aJH95djt2DUA9",
  tariTradisional: "https://forms.gle/MVHqm8Dy3ScaM8gTA",
  vocalGroup: "https://forms.gle/NvMTpG2Wbqqm8XA28",
};

export function CompetitionOverview() {
  const competitions = [
    {
      id: "science-short-movie",
      title: "Science Short Movie",
      tag: "Seni Media",
      desc: "Menyampaikan pesan/konsep MIPA secara kreatif lewat film pendek fiksi atau semi-dokumenter bertema Inovasi & Aplikasi Sains.",
      color: "bg-brutal-blue text-white",
      tagColor: "bg-brutal-yellow text-brutal-black",
      icon: <Film className="w-5 h-5 sm:w-8 sm:h-8 text-brutal-yellow" />,
      info: [
        { label: "Peserta", val: "3–7 orang per tim" },
        { label: "Format", val: "Video MP4/MOV, min 1080p (5–10 menit)" },
        { label: "Tema", val: "Inovasi & Aplikasi Sains Masa Depan" },
      ],
      link: registrationLinks.scienceShortMovie,
      delay: "0"
    },
    {
      id: "mobile-legend",
      title: "Mobile Legend",
      tag: "E-Sports",
      desc: "Kompetisi strategi tim berbasis mobile gaming yang menguji kerja sama, komunikasi, dan pengambilan keputusan cepat.",
      color: "bg-brutal-purple text-white",
      tagColor: "bg-brutal-lime text-brutal-black",
      icon: <Gamepad className="w-5 h-5 sm:w-8 sm:h-8 text-brutal-lime" />,
      info: [
        { label: "Peserta", val: "5 pemain inti + 2 cadangan" },
        { label: "Format", val: "Single Elimination" },
        { label: "Match", val: "BO3, Grand Final BO5" },
      ],
      link: registrationLinks.mobileLegend,
      delay: "150"
    },
    {
      id: "tari-tradisional",
      title: "Tari Tradisional",
      tag: "Seni Gerak",
      desc: "Merayakan kekayaan budaya Nusantara melalui gerak tari daerah yang autentik dan ekspresif.",
      color: "bg-brutal-pink text-white",
      tagColor: "bg-brutal-bg text-brutal-black",
      icon: <Award className="w-5 h-5 sm:w-8 sm:h-8 text-brutal-bg" />,
      info: [
        { label: "Peserta", val: "3–6 penari per tim" },
        { label: "Format", val: "Video MP4, min 1080p (One-Take, 4–8 menit)" },
        { label: "Ketentuan", val: "Tari tradisional Indonesia asli" },
      ],
      link: registrationLinks.tariTradisional,
      delay: "300"
    },
    {
      id: "vocal-group",
      title: "Vocal Group",
      tag: "Seni Suara",
      desc: "Menampilkan harmoni vokal dalam lagu pilihan nasional/populer yang aransemennya dibawakan secara kreatif.",
      color: "bg-brutal-yellow text-brutal-black",
      tagColor: "bg-brutal-black text-white",
      icon: <Music className="w-5 h-5 sm:w-8 sm:h-8 text-brutal-black" />,
      info: [
        { label: "Peserta", val: "5–12 orang (inc. pengiring)" },
        { label: "Format", val: "Video MP4/MOV, maks 7 menit (One-Take)" },
        { label: "Repertoar", val: "Lagu pilihan PORSENI AMLI" },
      ],
      link: registrationLinks.vocalGroup,
      delay: "450"
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="lomba" className="py-20 bg-brutal-bg border-b-4 border-brutal-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="overview-header text-left max-w-3xl space-y-6 mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brutal-black">
            Pilih Cabang Lomba
          </h2>
          <div className="w-24 h-4 bg-brutal-pink border-2 border-brutal-black" />
          <p className="text-lg font-bold text-neutral-800 leading-relaxed border-3 border-brutal-black bg-white p-6 shadow-brutal">
            Empat cabang lomba hadir untuk mewadahi minat, bakat, dan kreativitas mahasiswa MIPA. Pilih cabang lomba yang sesuai, baca ketentuan singkatnya, lalu segera daftarkan tim terbaikmu.
          </p>
        </div>

        {/* Card Grid */}
        <div className="overview-card-grid grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {competitions.map((comp, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={comp.delay}
              className={`overview-card ${comp.color} border-4 border-brutal-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg hover:rotate-1 transition-all p-3 sm:p-6 md:p-8 flex flex-col justify-between text-left`}
            >
              {/* Card Top */}
              <div className="space-y-3 sm:space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <div className={`px-2 py-1 sm:px-4 sm:py-1.5 border-2 border-brutal-black font-black text-[9px] sm:text-xs uppercase tracking-wider ${comp.tagColor} rotate-[-1deg]`}>
                    {comp.tag}
                  </div>
                  <div className="p-1 sm:p-2 bg-white border-2 border-brutal-black shadow-brutal-sm shrink-0">
                    {comp.icon}
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight uppercase leading-none drop-shadow-[2px_2px_0_#111111]">
                    {comp.title}
                  </h3>
                  <p className="font-bold text-[10px] sm:text-sm md:text-base opacity-95 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>

                {/* Info Block */}
                <div className="bg-white text-brutal-black border-3 border-brutal-black p-2 sm:p-4 md:p-5 space-y-1.5 sm:space-y-3 shadow-brutal-sm">
                  {comp.info.map((inf, i) => (
                    <div key={i} className="flex justify-between items-center text-[9px] sm:text-xs md:text-sm font-bold border-b border-dashed border-neutral-300 last:border-0 pb-1.5 last:pb-0">
                      <span className="text-neutral-500 uppercase">{inf.label}</span>
                      <span className="font-black text-right">{inf.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-8">
                <a
                  href={comp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-5 sm:py-3.5 bg-white text-brutal-black font-black border-3 border-brutal-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-center text-[9px] sm:text-sm uppercase"
                >
                  Daftar
                  <ArrowUpRight className="w-3 h-3 sm:w-4 h-4" />
                </a>
                <button
                  onClick={() => handleScroll(`${comp.id}-detail`)}
                  className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-5 sm:py-3.5 bg-brutal-black text-white font-black border-3 border-brutal-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-center text-[9px] sm:text-sm uppercase"
                >
                  Detail
                  <HelpCircle className="w-3 h-3 sm:w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
