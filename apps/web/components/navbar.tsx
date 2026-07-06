"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, Gamepad, Play, Circle } from "lucide-react";
import { gsap } from "gsap";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Cabang Lomba", href: "#lomba" },
    { label: "Timeline", href: "#timeline" },
    { label: "FAQ", href: "#faq" },
    { label: "Developer", href: "https://cv-monecruz.vercel.app/", external: true },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveItem(href);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Magnetic Button Effect using GSAP
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(button, {
        x: x * 0.45,
        y: y * 0.45,
        rotate: x * 0.05, // Subtle rotate adds jelly feel
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-brutal-bg border-b-4 border-brutal-black font-sans">
      {/* Decorative top border grid */}
      <div className="h-1.5 w-full bg-[repeating-linear-gradient(45deg,#111111,#111111_10px,#FACC15_10px,#FACC15_20px)] border-b-2 border-brutal-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Multiplayer Status indicator */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter hover:text-brutal-blue transition-colors flex items-center gap-2 select-none"
            >
              <img
                src="/assets/logo-upi.png"
                alt="Logo UPI"
                className="w-8 h-8 object-contain"
              />
              PORSENI AMLI 2026
            </a>
            
            {/* Blinking Live indicator */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 border-2 border-brutal-black bg-white shadow-brutal-sm font-mono text-[9px] font-black select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-neutral-700">ONLINE</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-black text-sm select-none">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border-2 border-transparent text-brutal-black hover:border-brutal-black hover:bg-neutral-100 transition-all flex items-center gap-1.5"
                  >
                    {item.label}
                  </a>
                );
              }
              const isActive = activeItem === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`px-3 py-1.5 border-2 border-transparent transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "border-brutal-black bg-brutal-yellow text-brutal-black shadow-brutal-sm"
                      : "text-brutal-black hover:border-brutal-black hover:bg-neutral-100"
                  }`}
                >
                  {isActive && <span className="text-brutal-pink">▶</span>}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Section: Game Status & CTA */}
          <div className="hidden md:flex items-center gap-4 select-none">
            {/* Retro CTA Button (Magnetic via GSAP) */}
            <a
              ref={buttonRef}
              href="#lomba"
              onClick={(e) => handleScroll(e, "#lomba")}
              className="flex items-center gap-2 px-5 py-2.5 bg-brutal-blue text-white font-black text-sm border-2 border-brutal-black shadow-[4px_4px_0px_#111111] hover:shadow-[2px_2px_0px_#111111] active:shadow-none transition-shadow duration-150 inline-block cursor-pointer"
            >
              <Gamepad className="w-4 h-4 fill-white" />
              PLAY NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-brutal-black bg-brutal-yellow text-brutal-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all focus:outline-none"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-brutal-black bg-brutal-bg font-bold animate-in fade-in slide-in-from-top duration-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2.5 text-lg border-2 border-brutal-black bg-white text-brutal-black shadow-brutal-sm transition-all hover:bg-neutral-50"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-neutral-300">○</span>
                      {item.label}
                    </span>
                  </a>
                );
              }
              const isActive = activeItem === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`block px-3 py-2.5 text-lg border-2 border-brutal-black shadow-brutal-sm transition-all ${
                    isActive ? "bg-brutal-yellow text-brutal-black" : "bg-white text-brutal-black"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive ? <span className="text-brutal-pink">▶</span> : <span className="text-neutral-300">○</span>}
                    {item.label}
                  </span>
                </a>
              );
            })}
            <a
              href="#lomba"
              onClick={(e) => handleScroll(e, "#lomba")}
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-brutal-blue text-white border-2 border-brutal-black shadow-[4px_4px_0px_#111111] hover:shadow-[2px_2px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all font-black text-sm"
            >
              <Gamepad className="w-5 h-5 fill-white" />
              PLAY NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
