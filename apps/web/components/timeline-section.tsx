"use client";

import { Calendar, AlertCircle } from "lucide-react";

export function TimelineSection() {
  const events = [
    {
      date: "Juni 2026",
      title: "Persiapan & Keputusan",
      details: [
        "Rapat WD AMLI & SK Panitia",
        "Penyusunan panduan teknis",
        "Pengumuman & buka pendaftaran"
      ],
      color: "bg-brutal-blue text-white",
      badgeColor: "bg-brutal-yellow text-brutal-black"
    },
    {
      date: "1–14 Juli 2026",
      title: "Pendaftaran Peserta",
      details: [
        "Universitas mendaftarkan tim",
        "Konfirmasi keikutsertaan melalui Google Form"
      ],
      color: "bg-brutal-purple text-white",
      badgeColor: "bg-brutal-lime text-brutal-black"
    },
    {
      date: "16 Juli 2026",
      title: "Technical Meeting",
      details: [
        "Dilaksanakan secara daring",
        "Penjelasan teknis lomba & tanya jawab"
      ],
      color: "bg-brutal-pink text-white",
      badgeColor: "bg-brutal-bg text-brutal-black"
    },
    {
      date: "16–31 Juli 2026",
      title: "Masa Produksi Video",
      details: [
        "Untuk movie, tari, & vocal group",
        "Latihan, rekaman, & editing mandiri"
      ],
      color: "bg-brutal-yellow text-brutal-black",
      badgeColor: "bg-brutal-black text-white"
    },
    {
      date: "3 Agustus 2026",
      title: "Deadline Video",
      details: [
        "Batas akhir submit file video",
        "Keterlambatan tidak ditoleransi"
      ],
      color: "bg-brutal-lime text-brutal-black",
      badgeColor: "bg-brutal-blue text-white"
    },
    {
      date: "10–15 Agustus 2026",
      title: "Pelaksanaan Lomba",
      details: [
        "Pembukaan resmi & turnamen MLBB",
        "Penayangan video & pengumuman juara"
      ],
      color: "bg-brutal-blue text-white",
      badgeColor: "bg-brutal-yellow text-brutal-black"
    },
    {
      date: "16–17 Agustus 2026",
      title: "Apresiasi & Sertifikat",
      details: [
        "Distribusi sertifikat digital peserta",
        "Pemrosesan apresiasi pemenang"
      ],
      color: "bg-brutal-purple text-white",
      badgeColor: "bg-brutal-lime text-brutal-black"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-brutal-bg border-b-4 border-brutal-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          data-aos="fade-up"
          className="timeline-header text-left space-y-6 mb-16 max-w-3xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brutal-black">
            Timeline PORSENI AMLI 2026
          </h2>
          <div className="w-24 h-4 bg-brutal-purple border-2 border-brutal-black" />
          <p className="text-lg font-bold text-neutral-800 leading-relaxed border-3 border-brutal-black bg-white p-6 shadow-brutal">
            Catat tanggal penting agar tim kamu tidak melewatkan pendaftaran, technical meeting, pengumpulan video, dan pelaksanaan lomba.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-items-wrapper relative">
          {/* Vertical line on larger screen - static, light CSS */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1.5 bg-brutal-black -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-1.5 bg-brutal-black md:hidden" />

          <div className="space-y-12">
            {events.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 w-8 h-8 rounded-none bg-brutal-yellow border-3 border-brutal-black -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center rotate-45 shadow-brutal-sm hidden md:flex">
                    <Calendar className="w-4 h-4 -rotate-45 text-brutal-black" />
                  </div>

                  {/* Empty space for alignment on desktop */}
                  <div className="w-full md:w-1/2" />

                  {/* Card Block */}
                  <div className="timeline-card-wrapper w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      data-aos="fade-up"
                      className={`${event.color} border-4 border-brutal-black shadow-brutal p-6 md:p-8 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg hover:-rotate-1 transition-all text-left relative`}
                    >
                      {/* Date Badge */}
                      <span className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wider border-2 border-brutal-black mb-4 rotate-1 ${event.badgeColor}`}>
                        {event.date}
                      </span>
                      
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none">
                        {event.title}
                      </h3>

                      <ul className="space-y-2 list-none font-bold text-sm sm:text-base opacity-95">
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-2 items-start">
                            <span>➔</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note Warning Box */}
        <div
          data-aos="zoom-in"
          className="timeline-warning-note mt-16 bg-red-100 border-3 border-brutal-black p-6 shadow-brutal flex gap-4 items-center max-w-2xl mx-auto rotate-[0.5deg]"
        >
          <AlertCircle className="w-8 h-8 text-red-600 shrink-0" />
          <p className="font-extrabold text-sm sm:text-base text-left text-neutral-800">
            Catatan: Jadwal dapat menyesuaikan keputusan panitia dan hasil technical meeting. Harap pantau terus pembaruan informasi dari panitia.
          </p>
        </div>

      </div>
    </section>
  );
}
