"use client";

import FlowDiagram from "./FlowDiagram";
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/config";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  const scrollToSystem = () => {
    document.querySelector("#sistem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#e85d26] bg-[#e85d2610] border border-[#e85d2620] rounded-full px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e85d26] animate-pulse" />
              Growth & Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
              Reklamdan Satışa Uzanan{" "}
              <span className="text-[#e85d26]">Müşteri Akışınızı</span>{" "}
              Kuruyoruz.
            </h1>

            <p className="text-base sm:text-lg text-[#5a5450] leading-relaxed mb-8 max-w-xl">
              Meta ve Google reklamlarından gelen potansiyel müşterileri CRM,
              WhatsApp ve akıllı otomasyonlarla satış fırsatlarına dönüştüren
              sistemler kuruyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#e85d26] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#d14e1f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] focus-visible:ring-offset-2 text-sm"
              >
                Ücretsiz Analiz Al
              </a>
              <button
                onClick={scrollToSystem}
                className="inline-flex items-center justify-center border border-[#e5e0d8] text-[#1a1a1a] font-medium px-6 py-3.5 rounded-xl hover:bg-[#f0ece6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] focus-visible:ring-offset-2 text-sm"
              >
                Nasıl Çalıştığını Gör
              </button>
            </div>

            {/* Trust tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "Reklam",
                "CRM",
                "WhatsApp",
                "Otomasyon",
                "Ölçümleme",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#8a8278] bg-white border border-[#e5e0d8] rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Flow diagram */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs">
              <FlowDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
