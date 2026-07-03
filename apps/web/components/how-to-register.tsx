"use client";

import { useRef, useEffect } from "react";
import { CheckSquare, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HowToRegisterSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "01",
      title: "Pilih Cabang Lomba",
      desc: "Baca ketentuan singkat di overview dan rincian lengkap aturan teknis di tab detail untuk masing-masing cabang lomba.",
      color: "bg-brutal-blue text-white"
    },
    {
      num: "02",
      title: "Klik Tombol Daftar",
      desc: "Tombol daftar akan mengarahkan kamu langsung ke halaman formulir pendaftaran Google Form resmi yang disediakan panitia.",
      color: "bg-brutal-purple text-white"
    },
    {
      num: "03",
      title: "Isi Google Form",
      desc: "Lengkapi data universitas, nama tim, berkas identitas anggota tim, dan file/tautan karya sesuai dengan persyaratan cabang.",
      color: "bg-brutal-pink text-white"
    },
    {
      num: "04",
      title: "Konfirmasi Panitia",
      desc: "Setelah data terkirim, perwakilan panitia akan memverifikasi pendaftaran dan mengundang tim ke grup koordinasi resmi.",
      color: "bg-brutal-yellow text-brutal-black"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Bulletproof fromTo animations
      gsap.fromTo(".register-header", 
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".register-header",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".register-step-card", 
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".register-cards-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-brutal-bg border-b-4 border-brutal-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="register-header text-left space-y-6 mb-16 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brutal-black">
            Cara Mendaftar
          </h2>
          <div className="w-24 h-4 bg-brutal-lime border-2 border-brutal-black" />
        </div>

        {/* Steps Grid */}
        <div className="register-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="register-step-card bg-white border-4 border-brutal-black shadow-brutal p-6 flex flex-col justify-between text-left hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all"
            >
              <div className="space-y-6">
                {/* Number Badge */}
                <div className={`w-12 h-12 flex items-center justify-center border-3 border-brutal-black font-black text-xl shadow-brutal-sm rotate-[-4deg] ${step.color}`}>
                  {step.num}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-brutal-black">
                    {step.title}
                  </h3>
                  <p className="text-sm font-bold text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="mt-8 pt-4 border-t-2 border-dashed border-neutral-300 flex items-center gap-2 text-xs font-bold text-neutral-400">
                <CheckSquare className="w-4 h-4" />
                <span>LANGKAH {step.num}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
