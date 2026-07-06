"use client";

import { useState } from "react";
import { registrationLinks } from "./competition-overview";
import { Film, Gamepad, Award, Music, ShieldAlert, Award as Trophy, ArrowUpRight } from "lucide-react";

export function CompetitionDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const tabs = [
    {
      id: "science-short-movie",
      label: "Science Movie",
      icon: <Film className="w-5 h-5" />,
      color: "bg-brutal-blue text-white",
      activeColor: "bg-brutal-blue text-white border-b-white",
      inactiveColor: "bg-white text-brutal-black hover:bg-neutral-100",
      content: {
        title: "Science Short Movie",
        subtitle: "Sains bertemu sinema. Ceritakan konsep MIPA dengan visual fiksi atau semi-dokumenter yang kreatif, edukatif, dan menarik.",
        info: [
          { label: "Jumlah Peserta", val: "3–7 orang per tim produksi" },
          { label: "Durasi Video", val: "5–10 menit (termasuk opening & credit title)" },
          { label: "Tema Utama", val: "Inovasi dan Aplikasi Sains dalam Mengatasi Tantangan Masa Depan" },
          { label: "Format File", val: "MP4 atau MOV (Landscape 16:9, min 1080p Full HD)" },
          { label: "Metode Kirim", val: "Diunggah ke Google Drive masing-masing dan mengirimkan link-nya" },
        ],
        topics: [
          "Matematika dalam kehidupan sehari-hari (pola, probabilitas, geometri di sekitar kita)",
          "Fenomena alam dari perspektif sains (cuaca ekstrem, gempa bumi, siklus air)",
          "Biologi makhluk hidup di sekitar kampus (ekosistem urban, keanekaragaman hayati lokal)",
          "Fisika di balik teknologi populer (smartphone, drone, panel surya, MRI)",
          "Kimia dalam makanan dan lingkungan (fermentasi, polutan, pewarna alami)",
          "Sains komputer dan algoritma dalam kehidupan nyata (AI, enkripsi, rekomendasi digital)",
          "Inovasi dan solusi saintifik untuk tantangan lokal atau global"
        ],
        rules: [
          "Karya merupakan film pendek bergenre fiksi (drama, komedi, sci-fi, dll.) atau semi-dokumenter. Tidak diperkenankan membuat video full-animation.",
          "Cerita wajib memasukkan minimal satu konsep atau prinsip MIPA (Matematika, Ilmu Pengetahuan Alam, atau Komputer) yang menjadi kunci alur cerita (plot device).",
          "Pada 10 (sepuluh) detik pertama wajib menampilkan informasi: Judul film, Nama tim produksi, Nama dan asal universitas.",
          "Karya wajib menyertakan takarir (subtitle) berbahasa Indonesia yang baik dan benar di sepanjang durasi film.",
          "Audio dan dialog harus jelas, dengan mixing suara (musik latar, efek suara, dialog) yang seimbang.",
          "Karya harus orisinal, belum pernah dipublikasikan secara komersial, belum pernah menang kompetisi serupa, dan bebas SARA, pornografi, kekerasan berlebihan, atau pelanggaran hak cipta."
        ],
        criteria: [
          { label: "Sinematografi & Visual", val: "30%" },
          { label: "Narasi & Storytelling", val: "30%" },
          { label: "Editing & Sound Design", val: "20%" },
          { label: "Orisinalitas & Kreativitas", val: "15%" },
          { label: "Akurasi Konten Sains", val: "5%" }
        ],
        link: registrationLinks.scienceShortMovie
      }
    },
    {
      id: "mobile-legend",
      label: "Mobile Legend",
      icon: <Gamepad className="w-5 h-5" />,
      color: "bg-brutal-purple text-white",
      activeColor: "bg-brutal-purple text-white border-b-white",
      inactiveColor: "bg-white text-brutal-black hover:bg-neutral-100",
      content: {
        title: "Mobile Legend Bang Bang",
        subtitle: "Adu strategi, komunikasi, dan kecepatan berpikir dalam arena e-sports mahasiswa MIPA.",
        info: [
          { label: "Jumlah Peserta", val: "5 Pemain Inti + 2 Cadangan" },
          { label: "Kuota Kampus", val: "Maksimal 1 tim per universitas" },
          { label: "Sistem Turnamen", val: "Single Elimination (BO3)" },
          { label: "Grand Final", val: "Best of 5 (BO5)" },
          { label: "Perangkat", val: "Smartphone / Tablet Pribadi" },
        ],
        topics: [
          "Pertandingan dilaksanakan via room custom MLBB",
          "Mode room: Classic Draft Pick (penyisihan), Tournament Draft Pick (semifinal & final)",
          "Server: Asia / Indonesia (koneksi tanggung jawab masing-masing)",
          "Dilarang menggunakan emulator"
        ],
        rules: [
          "Peserta wajib masuk ke dalam zoom meeting yang disediakan panitia dengan mengaktifkan kamera selama tanding.",
          "Panitia membagikan Room ID & Password sebelum pertandingan.",
          "Jadwal pertandingan disampaikan H-3. Keterlambatan lebih dari 10 menit dinyatakan WO.",
          "Keputusan wasit/panitia bersifat mutlak dan final."
        ],
        criteria: [
          { label: "Kemenangan Match", val: "Babak Awal & Semifinal BO3" },
          { label: "Kemenangan Final", val: "Grand Final BO5" },
          { label: "Objektif Utama", val: "Menghancurkan Base / Crystal lawan pertama kali" }
        ],
        rules2: [
          "Dilarang menggunakan cheat, 3rd party app, atau memanfaatkan bug exploit.",
          "Dilarang keras melakukan pergantian pemain di luar daftar cadangan resmi.",
          "Disconnect disengaja dan tindakan tidak sportif (trashtalk berlebihan) akan dikenakan sanksi diskualifikasi."
        ],
        link: registrationLinks.mobileLegend
      }
    },
    {
      id: "tari-tradisional",
      label: "Tari Tradisional",
      icon: <Award className="w-5 h-5" />,
      color: "bg-brutal-pink text-white",
      activeColor: "bg-brutal-pink text-white border-b-white",
      inactiveColor: "bg-white text-brutal-black hover:bg-neutral-100",
      content: {
        title: "Tari Tradisional",
        subtitle: "Panggung budaya Nusantara untuk mahasiswa MIPA yang ingin menampilkan identitas daerah melalui gerak tari.",
        info: [
          { label: "Jumlah Peserta", val: "3–6 penari per tim" },
          { label: "Kuota Kampus", val: "Maksimal 1 tim per universitas" },
          { label: "Durasi Video", val: "Minimal 4 menit dan maksimal 8 menit" },
          { label: "Format File", val: "MP4 (Landscape 16:9, resolusi minimal 1080p)" },
          { label: "Penilaian", val: "Ditayangkan dan dinilai secara daring" },
        ],
        topics: [
          "Tarian harus merupakan Tari Tradisional Indonesia (bukan kreasi modern/kontemporer)",
          "Asal daerah tari harus dapat diverifikasi dengan jelas",
          "Wajib menyertakan deskripsi singkat karya yang memuat: Nama tari & asal daerah, serta Makna & pakem gerak dasar tarian"
        ],
        rules: [
          "Video diambil menggunakan satu kamera statis (fixed camera) dari arah depan-tengah panggung (front-center view). Wajib One-Take Shot tanpa pemotongan adegan atau transisi.",
          "Peserta menggunakan kostum tradisional yang sesuai dengan tarian yang dibawakan serta tetap menjaga kesopanan.",
          "Lokasi atau latar belakang video diupayakan netral atau bernuansa budaya.",
          "Diperbolehkan menggunakan musik rekaman (backing track). File audio asli dapat ditempelkan (dubbing) langsung pada video agar suara jernih."
        ],
        criteria: [
          { label: "Teknik & keakuratan Gerak", val: "20%" },
          { label: "Ekspresi & Penghayatan", val: "30%" },
          { label: "Kekompakan Gerak", val: "30%" },
          { label: "Kostum & Tata Rias", val: "15%" },
          { label: "Kualitas Video & presentasi", val: "5%" }
        ],
        link: registrationLinks.tariTradisional
      }
    },
    {
      id: "vocal-group",
      label: "Vocal Group",
      icon: <Music className="w-5 h-5" />,
      color: "bg-brutal-yellow text-brutal-black",
      activeColor: "bg-brutal-yellow text-brutal-black border-b-brutal-yellow",
      inactiveColor: "bg-white text-brutal-black hover:bg-neutral-100",
      content: {
        title: "Vocal Group",
        subtitle: "Harmoni suara, kreativitas aransemen, dan penghayatan lagu nasional/populer dalam satu penampilan.",
        info: [
          { label: "Jumlah Peserta", val: "5–12 orang per tim (termasuk pemusik/pengiring)" },
          { label: "Kuota Kampus", val: "Maksimal 1 tim per universitas" },
          { label: "Durasi Video", val: "Maksimal 7 menit dengan 10 detik pertama menampilkan nama tim dan asal kampus" },
          { label: "Format File", val: "MP4 atau MOV (Landscape 16:9, resolusi 720p atau 1080p Full HD)" },
          { label: "Penilaian", val: "Ditayangkan dan dinilai secara daring" },
        ],
        topics: [
          "Peserta membawakan salah satu lagu pilihan berikut:",
          "Zamrud Khatulistiwa - Chrisye",
          "Bendera - Cokelat",
          "Rumah Kita - God Bless",
          "Indonesia Jaya - Harvey Malaiholo",
          "Aransemen bebas dengan pembagian suara minimal 2 suara (misal: Sopran-Alto / Tenor-Bass). Boleh live instrumen atau minus-one."
        ],
        rules: [
          "Video wajib direkam dalam satu kali pengambilan gambar secara langsung (one-take live recording). Tidak diperkenankan melakukan audio mixing.",
          "Kamera dalam posisi diam (statis) dan memperlihatkan seluruh anggota grup dengan jelas.",
          "Audio harus terdengar jelas, seimbang (balance antar suara), dan tidak pecah.",
          "Peserta merupakan mahasiswa aktif FMIPA/FPMIPA universitas anggota AMLI. Anggota tidak boleh terdaftar di dua kelompok berbeda."
        ],
        criteria: [
          { label: "Materi Vokal & Teknik", val: "35%" },
          { label: "Aransemen & Harmonisasi", val: "35%" },
          { label: "Interpretasi Artistik", val: "25%" },
          { label: "Kualitas Audiovisual", val: "5%" }
        ],
        link: registrationLinks.vocalGroup
      }
    }
  ];

  const handleTabChange = (idx: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(idx);
      setIsAnimating(false);
    }, 150); // Fast fade transition duration
  };

  return (
    <section className="py-20 bg-brutal-bg border-b-4 border-brutal-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          data-aos="fade-up"
          className="detail-header text-left space-y-6 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brutal-black">
            Detail Ketentuan Lomba
          </h2>
          <div className="w-24 h-4 bg-brutal-yellow border-2 border-brutal-black" />
        </div>

        {/* Tab Headers */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="detail-tabs-bar flex flex-wrap border-b-4 border-brutal-black -mb-[4px] relative z-10"
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                id={`${tab.id}-detail`}
                onClick={() => handleTabChange(idx)}
                className={`flex items-center gap-2 px-6 py-4 font-black uppercase text-sm border-t-4 border-x-4 border-brutal-black mr-2 transition-all outline-none ${
                  isActive
                    ? tab.activeColor + " translate-y-[4px]"
                    : tab.inactiveColor
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        {(() => {
          const content = tabs[activeTab]?.content;
          if (!content) return null;
          return (
            <div
              className={`tab-content-panel bg-white border-4 border-brutal-black shadow-brutal p-8 md:p-12 text-left transition-all duration-300 transform ${
                isAnimating ? "opacity-0 translate-y-2 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Content Area */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-brutal-black">
                      {content.title}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-neutral-600 leading-relaxed">
                      {content.subtitle}
                    </p>
                  </div>

                  {/* Ketentuan Umum / List */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-extrabold uppercase tracking-tight text-brutal-black flex items-center gap-2">
                      <span className="w-3 h-3 bg-brutal-black" />
                      Ketentuan Umum & Teknis
                    </h4>
                    <ul className="space-y-3 pl-4 list-disc font-semibold text-neutral-700 text-sm sm:text-base">
                      {content.rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Topics / Scope */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-extrabold uppercase tracking-tight text-brutal-black flex items-center gap-2">
                      <span className="w-3 h-3 bg-brutal-black" />
                      Lingkup Acuan / Lagu
                    </h4>
                    <div className="p-5 border-2 border-dashed border-brutal-black bg-brutal-bg font-bold text-sm sm:text-base space-y-2">
                      {content.topics.map((topic, idx) => (
                        <div key={idx} className="flex gap-2 items-start">
                          <span className="text-brutal-pink">✦</span>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special rules (Mobile Legends specific) */}
                  {content.rules2 && (
                    <div className="space-y-4 p-5 border-3 border-brutal-black bg-red-100 text-brutal-black">
                      <h4 className="text-lg font-extrabold uppercase tracking-tight flex items-center gap-2 text-red-600">
                        <ShieldAlert className="w-5 h-5 shrink-0" />
                        Larangan Keras (Diskualifikasi)
                      </h4>
                      <ul className="space-y-2 pl-4 list-disc font-bold text-sm">
                        {content.rules2.map((rule, idx) => (
                          <li key={idx}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Information Area */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Quick Details Box */}
                  <div className="bg-brutal-bg border-3 border-brutal-black p-6 shadow-brutal-sm text-left">
                    <h4 className="text-lg font-extrabold uppercase tracking-tight text-brutal-black border-b-2 border-brutal-black pb-2 mb-4">
                      Rangkuman Lomba
                    </h4>
                    <div className="space-y-4">
                      {content.info.map((inf, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="block text-xs font-bold text-neutral-500 uppercase tracking-wider">{inf.label}</span>
                          <span className="font-extrabold text-sm sm:text-base text-brutal-black block">{inf.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Criteria Score Box */}
                  <div className="bg-white border-3 border-brutal-black p-6 shadow-brutal-sm text-left">
                    <h4 className="text-lg font-extrabold uppercase tracking-tight text-brutal-black flex items-center gap-2 border-b-2 border-dashed border-neutral-300 pb-2 mb-4">
                      <Trophy className="w-5 h-5 text-brutal-yellow" />
                      Kriteria Penilaian
                    </h4>
                    <div className="space-y-3 font-bold text-sm">
                      {content.criteria.map((cri, idx) => (
                        <div key={idx} className="flex justify-between items-center py-1.5 border-b border-neutral-100 last:border-0">
                          <span>{cri.label}</span>
                          <span className="px-3 py-1 bg-brutal-lime border border-brutal-black font-black text-xs">
                            {cri.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Big CTA */}
                  <a
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-brutal-yellow text-brutal-black font-black text-lg border-3 border-brutal-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all uppercase"
                  >
                    Daftar {content.title}
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                </div>

              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
