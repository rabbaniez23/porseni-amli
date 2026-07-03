"use client";

import { Film, Gamepad, Award, Music, ArrowUpRight, HelpCircle } from "lucide-react";

export const registrationLinks = {
  scienceShortMovie: "https://forms.gle/ISI_LINK_GOOGLE_FORM_SCIENCE_SHORT_MOVIE",
  mobileLegend: "https://forms.gle/ISI_LINK_GOOGLE_FORM_MOBILE_LEGEND",
  tariTradisional: "https://forms.gle/ISI_LINK_GOOGLE_FORM_TARI_TRADISIONAL",
  vocalGroup: "https://forms.gle/ISI_LINK_GOOGLE_FORM_VOCAL_GROUP",
};

export function CompetitionOverview() {
  const competitions = [
    {
      id: "science-short-movie",
      title: "Science Short Movie",
      tag: "Seni Media",
      desc: "Bercerita tentang fenomena atau konsep MIPA melalui film pendek kreatif berdurasi 3–5 menit.",
      color: "bg-brutal-blue text-white",
      tagColor: "bg-brutal-yellow text-brutal-black",
      icon: <Film className="w-8 h-8 text-brutal-yellow" />,
      info: [
        { label: "Peserta", val: "1–5 orang per tim" },
        { label: "Format", val: "Video MP4, dikirim sebelum hari H" },
        { label: "Tema", val: "Fenomena/konsep MIPA dalam kehidupan" },
      ],
      link: registrationLinks.scienceShortMovie,
    },
    {
      id: "mobile-legend",
      title: "Mobile Legend",
      tag: "E-Sports",
      desc: "Kompetisi strategi tim berbasis mobile gaming yang menguji kerja sama, komunikasi, dan pengambilan keputusan cepat.",
      color: "bg-brutal-purple text-white",
      tagColor: "bg-brutal-lime text-brutal-black",
      icon: <Gamepad className="w-8 h-8 text-brutal-lime" />,
      info: [
        { label: "Peserta", val: "5 pemain inti + 2 cadangan" },
        { label: "Format", val: "Single Elimination" },
        { label: "Match", val: "BO3, Grand Final BO5" },
      ],
      link: registrationLinks.mobileLegend,
    },
    {
      id: "tari-tradisional",
      title: "Tari Tradisional",
      tag: "Seni Gerak",
      desc: "Merayakan kekayaan budaya Nusantara melalui gerak tari daerah yang autentik dan ekspresif.",
      color: "bg-brutal-pink text-white",
      tagColor: "bg-brutal-bg text-brutal-black",
      icon: <Award className="w-8 h-8 text-brutal-bg" />,
      info: [
        { label: "Peserta", val: "3–6 penari per tim" },
        { label: "Format", val: "Video MP4, ditayangkan daring" },
        { label: "Ketentuan", val: "Tari tradisional Indonesia" },
      ],
      link: registrationLinks.tariTradisional,
    },
    {
      id: "vocal-group",
      title: "Vocal Group",
      tag: "Seni Suara",
      desc: "Menampilkan harmoni vokal dalam lagu nasional yang sarat makna kebangsaan.",
      color: "bg-brutal-yellow text-brutal-black",
      tagColor: "bg-brutal-black text-white",
      icon: <Music className="w-8 h-8 text-brutal-black" />,
      info: [
        { label: "Peserta", val: "3–6 orang per tim" },
        { label: "Format", val: "Rekaman video" },
        { label: "Repertoar", val: "Lagu wajib & pilihan" },
      ],
      link: registrationLinks.vocalGroup,
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="lomba" className="py-20 bg-brutal-bg border-b-4 border-brutal-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brutal-black">
            Pilih Cabang Lomba
          </h2>
          <div className="w-24 h-4 bg-brutal-pink border-2 border-brutal-black" />
          <p className="text-lg font-bold text-neutral-800 leading-relaxed border-3 border-brutal-black bg-white p-6 shadow-brutal">
            Empat cabang lomba hadir untuk mewadahi minat, bakat, dan kreativitas mahasiswa MIPA. Pilih cabang lomba yang sesuai, baca ketentuan singkatnya, lalu segera daftarkan tim terbaikmu.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((comp, idx) => (
            <div
              key={idx}
              className={`${comp.color} border-4 border-brutal-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg hover:rotate-1 transition-all p-8 flex flex-col justify-between text-left`}
            >
              {/* Card Top */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`px-4 py-1.5 border-2 border-brutal-black font-black text-xs uppercase tracking-wider ${comp.tagColor} rotate-[-1deg]`}>
                    {comp.tag}
                  </div>
                  <div className="p-2 bg-white border-2 border-brutal-black shadow-brutal-sm shrink-0">
                    {comp.icon}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase leading-none drop-shadow-[2px_2px_0_#111111]">
                    {comp.title}
                  </h3>
                  <p className="font-bold text-sm sm:text-base opacity-95 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>

                {/* Info Block */}
                <div className="bg-white text-brutal-black border-3 border-brutal-black p-5 space-y-3 shadow-brutal-sm">
                  {comp.info.map((inf, i) => (
                    <div key={i} className="flex justify-between items-center text-xs sm:text-sm font-bold border-b border-dashed border-neutral-300 last:border-0 pb-2 last:pb-0">
                      <span className="text-neutral-500 uppercase">{inf.label}</span>
                      <span className="font-black text-right">{inf.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={comp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-brutal-black font-black border-3 border-brutal-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-center text-sm uppercase"
                >
                  Daftar Sekarang
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => handleScroll(`${comp.id}-detail`)}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-brutal-black text-white font-black border-3 border-brutal-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-center text-sm uppercase"
                >
                  Detail Ketentuan
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
