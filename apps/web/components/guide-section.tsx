"use client";

import { FileText, Download, Image as ImageIcon, ExternalLink, BookOpen, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function GuideSection() {
  const guidePoints = [
    {
      title: "Ketentuan Umum Delegasi",
      desc: "Status mahasiswa aktif FMIPA/FPMIPA dari perguruan tinggi anggota AMLI se-Indonesia yang dibuktikan dengan surat tugas delegasi fakultas."
    },
    {
      title: "Aturan Teknis Lomba",
      desc: "Ketentuan perekaman video satu kali pengambilan gambar (one-take live recording), durasi karya, serta regulasi pertandingan Mobile Legends."
    },
    {
      title: "Kriteria Penilaian & Bobot",
      desc: "Penjelasan lengkap mengenai aspek penilaian (teknik, kreativitas, visual, keselarasan) beserta persentase pembobotan dari juri nasional."
    }
  ];

  return (
    <section id="panduan" className="py-20 bg-brutal-bg border-b-4 border-brutal-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          data-aos="fade-up"
          className="guide-header text-left space-y-6 mb-16 max-w-3xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brutal-black">
            Panduan & Poster Resmi
          </h2>
          <div className="w-24 h-4 bg-brutal-pink border-2 border-brutal-black" />
          <p className="text-lg font-bold text-neutral-800 leading-relaxed border-3 border-brutal-black bg-white p-6 shadow-brutal">
            Dapatkan informasi lengkap mengenai syarat pendaftaran, rincian teknis setiap cabang lomba, hingga kriteria penilaian dengan mengunduh dokumen resmi di bawah ini.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Poster Visual Preview */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6" data-aos="fade-right">
            {/* Neo-Brutalist Poster Frame */}
            <a
              href="/assets/poster.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-sm border-4 border-brutal-black bg-white p-4 shadow-brutal hover:rotate-1 hover:shadow-brutal-lg transition-all duration-300 block relative"
              title="Klik untuk memperbesar poster"
            >
              {/* Overlay Badge */}
              <div className="absolute top-6 right-6 bg-brutal-lime border-2 border-brutal-black px-3 py-1 font-black text-[10px] uppercase shadow-brutal-sm z-20 group-hover:scale-105 transition-transform">
                Klik untuk memperbesar <ExternalLink className="w-3 h-3 inline ml-1" />
              </div>
              
              <div className="relative border-2 border-brutal-black overflow-hidden aspect-[3/4] bg-neutral-100">
                <Image
                  src="/assets/poster.jpeg"
                  alt="Poster Resmi PORSENI AMLI 2026"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 font-black text-xs uppercase text-neutral-800 flex justify-between items-center">
                <span>Poster Resmi PORSENI AMLI 2026</span>
                <span className="text-brutal-pink">#POSTER</span>
              </div>
            </a>

            {/* Poster Download Button */}
            <a
              href="/assets/poster.jpeg"
              download="Poster PORSENI AMLI 2026.jpeg"
              className="flex items-center justify-center gap-2 w-full max-w-sm px-6 py-4 bg-white text-brutal-black font-extrabold text-base border-3 border-brutal-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all uppercase"
            >
              Unduh Poster (JPEG)
              <Download className="w-5 h-5" />
            </a>
          </div>

          {/* Right Column: PDF Guide Info */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-left">
            {/* Detail Card */}
            <div className="bg-white border-4 border-brutal-black shadow-brutal p-8 space-y-6 text-left relative">
              {/* Star Badge */}
              <div className="absolute top-[-20px] right-6 bg-brutal-yellow border-2 border-brutal-black px-4 py-1 font-black text-xs rotate-2 shadow-brutal-sm">
                DOKUMEN UTAMA
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-brutal-black border-b-2 border-dashed border-neutral-300 pb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-brutal-blue" />
                Buku Panduan Umum
              </h3>

              <p className="text-base sm:text-lg font-bold text-neutral-600 leading-relaxed">
                Buku Panduan Umum PORSENI AMLI 2026 merupakan dokumen acuan utama bagi seluruh universitas peserta. Pastikan pimpinan delegasi dan seluruh peserta membaca dan memahami poin-poin di dalamnya sebelum mendaftar.
              </p>

              {/* Guide Points */}
              <div className="space-y-4 pt-2">
                {guidePoints.map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 border-2 border-brutal-black bg-brutal-bg hover:translate-x-1 transition-transform">
                    <div className="p-1 bg-brutal-lime border border-brutal-black shadow-brutal-sm shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-brutal-black" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-brutal-black uppercase tracking-tight mb-1">
                        {point.title}
                      </h4>
                      <p className="text-sm font-semibold text-neutral-600 leading-normal">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Big CTA Button for PDF */}
              <div className="pt-4">
                <a
                  href="/assets/Panduan Umum PORSENI AMLI 2026.pdf"
                  download="Panduan Umum PORSENI AMLI 2026.pdf"
                  className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-brutal-blue text-white font-black text-lg border-3 border-brutal-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all uppercase tracking-wide"
                >
                  Unduh Panduan Umum (PDF)
                  <FileText className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
