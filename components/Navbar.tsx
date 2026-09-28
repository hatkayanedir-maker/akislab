"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/config";

const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#nasil-calisir", label: "Nasıl Çalışır?" },
  { href: "#otomasyon", label: "Otomasyon" },
  { href: "#kimler-icin", label: "Kimler İçin?" },
  { href: "#sss", label: "SSS" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f9f7f4]/95 backdrop-blur-sm border-b border-[#e5e0d8]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Ana navigasyon"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] rounded"
          aria-label="AkışLab ana sayfa"
        >
          <span className="font-bold text-xl tracking-tight text-[#1a1a1a]">
            akış
          </span>
          <span className="font-bold text-xl tracking-tight text-[#e85d26]">
            lab
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-[#8a8278] hover:text-[#1a1a1a] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] rounded px-1"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + Mobile menu toggle */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#e85d26] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#d14e1f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] focus-visible:ring-offset-2"
          >
            Ücretsiz Analiz Al
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <span
              className={`w-5 h-0.5 bg-[#1a1a1a] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-[#1a1a1a] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-[#1a1a1a] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-b border-[#e5e0d8]" : "max-h-0"
        } bg-[#f9f7f4]/98 backdrop-blur-sm`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-3 py-2.5 text-[#1a1a1a] text-base rounded-lg hover:bg-[#e5e0d8]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26]"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-3 pt-3 border-t border-[#e5e0d8]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#e85d26] text-white text-sm font-medium px-4 py-3 rounded-lg hover:bg-[#d14e1f] transition-colors"
            >
              Ücretsiz Analiz Al
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
