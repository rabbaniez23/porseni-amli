"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Cabang Lomba", href: "#lomba" },
    { label: "Timeline", href: "#timeline" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brutal-bg border-b-4 border-brutal-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Badge */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="text-xl sm:text-2xl font-extrabold tracking-tighter hover:text-brutal-blue transition-colors"
            >
              PORSENI AMLI 2026
            </a>
            <span className="hidden md:inline-block px-3 py-1 text-xs font-bold border-2 border-brutal-black bg-brutal-lime rotate-1 hover:rotate-0 transition-transform shadow-brutal-sm">
              Hosted by FPMIPA UPI
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-bold">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-brutal-black hover:text-brutal-pink transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[3px] after:bg-brutal-black hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#lomba"
              onClick={(e) => handleScroll(e, "#lomba")}
              className="inline-block px-6 py-2.5 bg-brutal-blue text-white font-extrabold border-2 border-brutal-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              Daftar Sekarang
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block px-3 py-2 text-lg border-2 border-brutal-black bg-white shadow-brutal-sm hover:bg-brutal-yellow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#lomba"
              onClick={(e) => handleScroll(e, "#lomba")}
              className="block w-full text-center px-4 py-3 bg-brutal-blue text-white border-2 border-brutal-black shadow-brutal hover:shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] transition-all"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
