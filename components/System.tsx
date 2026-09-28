"use client";

import { useState } from "react";

const stages = [
  {
    label: "Reklam",
    desc: "Meta ve Google üzerinden doğru potansiyel müşterilere ulaşın.",
    detail:
      "Hedef kitle analizi, reklam kreatif optimizasyonu ve kampanya yönetimi ile doğru müşteri profillerine ulaşın.",
  },
  {
    label: "Landing Page",
    desc: "Ziyaretçiyi teklif veya iletişim talebine dönüştürün.",
    detail:
      "Açılış sayfası optimizasyonu, form tasarımı ve A/B testleriyle dönüşüm oranlarını artırın.",
  },
  {
    label: "WhatsApp",
    desc: "Gelen taleplere hızlı şekilde dönüş yapın.",
    detail:
      "Otomatik karşılama mesajları ve akıllı yönlendirme ile müşteri taleplerine anında yanıt verin.",
  },
  {
    label: "CRM",
    desc: "Tüm potansiyel müşterileri tek yerde takip edin.",
    detail:
      "Merkezi müşteri veritabanı, pipeline yönetimi ve satış süreci takibi ile hiçbir lead kaybetmeyin.",
  },
  {
    label: "Otomatik Takip",
    desc: "Cevap vermeyen veya karar vermeyen müşterileri sistematik olarak takip edin.",
    detail:
      "Zamanlı hatırlatma mesajları, teklif takibi ve çok adımlı otomasyon senaryoları ile satış sürecini otomatikleştirin.",
  },
  {
    label: "Satış",
    desc: "Hangi reklamın ve kanalın satış oluşturduğunu ölçün.",
    detail:
      "Kaynak bazlı dönüşüm takibi, kanal performansı ve ROI raporlaması ile reklam bütçenizi optimize edin.",
  },
];

export default function System() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section id="sistem" className="py-20 sm:py-28 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Tek tek araçlar değil. Birbirine bağlı bir sistem.
          </h2>
          <p className="text-base text-[#5a5450]">
            Her adım bir sonrakiyle entegre çalışır. Reklam bütçeniz karanlıkta
            harcandığında ne olduğunu görmek yerine, tüm süreci izleyin.
          </p>
        </div>

        {/* Flow stages */}
        <div className="flex flex-col sm:flex-row items-stretch gap-0">
          {stages.map((stage, i) => (
            <div
              key={stage.label}
              className="flex flex-col sm:flex-row items-center flex-1"
            >
              {/* Stage button */}
              <button
                className={`relative w-full sm:w-auto flex-1 text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] group ${
                  activeStage === i
                    ? "bg-white border-[#e85d26] shadow-sm"
                    : "bg-white/50 border-[#e5e0d8] hover:border-[#c8c0b5] hover:bg-white"
                }`}
                onClick={() =>
                  setActiveStage(activeStage === i ? null : i)
                }
                aria-expanded={activeStage === i}
                aria-controls={`stage-desc-${i}`}
              >
                <div className="text-xs font-bold text-[#e85d26] mb-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className={`text-sm font-semibold mb-1 ${activeStage === i ? "text-[#1a1a1a]" : "text-[#3a3530]"}`}
                >
                  {stage.label}
                </div>
                <p
                  id={`stage-desc-${i}`}
                  className={`text-xs text-[#8a8278] leading-relaxed transition-all duration-200 ${
                    activeStage === i
                      ? "text-[#5a5450] max-h-32"
                      : "max-h-10 overflow-hidden"
                  }`}
                >
                  {activeStage === i ? stage.detail : stage.desc}
                </p>
              </button>

              {/* Connector */}
              {i < stages.length - 1 && (
                <div
                  className="flex items-center justify-center sm:mx-1 my-1 sm:my-0"
                  aria-hidden="true"
                >
                  {/* Vertical on mobile, horizontal on desktop */}
                  <span className="sm:hidden w-px h-4 bg-[#e5e0d8]" />
                  <span className="hidden sm:block text-[#c8c0b5] text-lg leading-none">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#8a8278] text-center">
          Her aşamaya tıklayarak daha fazla bilgi alın
        </p>
      </div>
    </section>
  );
}
