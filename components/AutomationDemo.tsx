"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    time: "09:41",
    type: "lead",
    title: "Yeni Lead",
    name: "Ahmet",
    detail: "Özel ölçü mutfak teklifi istiyor.",
    icon: "📋",
    delay: 0,
  },
  {
    time: "09:41",
    type: "crm",
    title: "CRM",
    name: null,
    detail: "Yeni müşteri otomatik oluşturuldu.",
    icon: "🗂",
    delay: 800,
  },
  {
    time: "09:42",
    type: "whatsapp",
    title: "WhatsApp",
    name: null,
    detail: '"Merhaba Ahmet Bey, talebinizi aldık ve 1 saat içinde size dönüş yapacağız."',
    icon: "💬",
    delay: 1600,
  },
  {
    time: "+1 Gün",
    type: "followup",
    title: "Otomatik Takip",
    name: null,
    detail: "Teklif sonrası takip mesajı gönderildi.",
    icon: "🔔",
    delay: 2400,
  },
];

export default function AutomationDemo() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          steps.forEach((step, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, i]);
            }, step.delay);
          });
          setTimeout(() => setShowResult(true), 3200);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="otomasyon"
      className="py-20 sm:py-28 bg-[#141210] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Bir müşteri reklamınıza tıkladığında ne olur?
          </h2>
          <p className="text-sm text-[#8a8278]">
            Sistemi anlık olarak izleyin. Her adım otomatik, her müşteri takip altında.
          </p>
        </div>

        <div
          ref={ref}
          className="max-w-md mx-auto lg:mx-0"
          aria-live="polite"
        >
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col">
                {/* Step card */}
                <div
                  className={`flex gap-4 p-4 rounded-xl border transition-all duration-500 ${
                    visibleSteps.includes(i)
                      ? "opacity-100 translate-y-0 border-[#2a2520] bg-[#1e1a17]"
                      : "opacity-0 translate-y-4 border-transparent"
                  }`}
                  style={{
                    transitionDelay: `${step.delay}ms`,
                  }}
                >
                  <div className="flex flex-col items-center gap-1 pt-0.5">
                    <span className="text-xl leading-none">{step.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-[#6a6460] font-mono">
                        {step.time}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          step.type === "lead"
                            ? "bg-[#e85d26]/20 text-[#e85d26]"
                            : step.type === "whatsapp"
                              ? "bg-[#25d366]/20 text-[#25d366]"
                              : step.type === "crm"
                                ? "bg-[#3b82f6]/20 text-[#3b82f6]"
                                : "bg-[#8b5cf6]/20 text-[#a78bfa]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {step.name && (
                      <div className="text-sm font-medium text-white mb-0.5">
                        {step.name}
                      </div>
                    )}
                    <p className="text-sm text-[#8a8278] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="flex justify-start ml-6 my-1">
                    <div
                      className={`w-px h-4 transition-all duration-300 ${
                        visibleSteps.includes(i)
                          ? "bg-[#3a3530]"
                          : "bg-transparent"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Result */}
            <div
              className={`mt-4 flex items-center gap-3 p-4 rounded-xl border transition-all duration-700 ${
                showResult
                  ? "opacity-100 translate-y-0 border-[#e85d26]/40 bg-[#e85d26]/10"
                  : "opacity-0 translate-y-4 border-transparent"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-[#e85d26] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Satış Fırsatı
                </div>
                <div className="text-xs text-[#8a8278]">
                  Reklam bütçesi ölçülebilir sonuç üretti.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
