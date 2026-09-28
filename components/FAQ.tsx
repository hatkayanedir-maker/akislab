"use client";

import { useState } from "react";

const faqs = [
  {
    q: "AkışLab tam olarak ne yapıyor?",
    a: "AkışLab, reklamdan satışa uzanan müşteri kazanım sürecini kurmanıza yardımcı olur. Meta Ads ve Google Ads kampanyalarını yönetir, gelen talepleri CRM'e bağlar, WhatsApp otomasyonları kurar ve tüm bu sürecin ölçümlenmesini sağlar. Yalnızca reklam yönetimi yapan bir ajans değil, müşteri kazanım sistemi kuran bir ortaksınız.",
  },
  {
    q: "Sadece reklam yönetimi hizmeti alabilir miyim?",
    a: "Evet, alabilirsiniz. Ancak çoğu işletme için reklamları daha verimli hale getirmek, CRM ve takip süreçleriyle birlikte çalışmayı gerektirir. Bunun için mevcut durumunuzu birlikte değerlendirdikten sonra size en uygun kapsamı belirliyoruz.",
  },
  {
    q: "CRM sistemim yoksa kurulum yapıyor musunuz?",
    a: "Evet. İşletmenizin ölçeğine ve süreçlerine göre uygun bir CRM sistemi belirleniyor ve kurulumu gerçekleştiriliyor. Mevcut bir CRM sisteminiz varsa onunla entegrasyon da sağlıyoruz.",
  },
  {
    q: "WhatsApp otomasyonu nasıl çalışıyor?",
    a: "WhatsApp Business API veya onaylı platform ortakları aracılığıyla otomatik yanıt, lead yönlendirme ve takip mesajları kuruyoruz. Yeni bir lead geldiğinde otomatik karşılama mesajı gönderilmesi, belirli aralıklarla takip yapılması veya randevu hatırlatması gibi senaryolar oluşturuyoruz.",
  },
  {
    q: "Mevcut reklam hesaplarımla çalışabilir misiniz?",
    a: "Evet. Mevcut Meta Business Manager ve Google Ads hesaplarınız üzerinden çalışıyoruz. Hesaplarınız sizin kontrolünüzde kalır; biz yönetim erişimiyle çalışırız.",
  },
  {
    q: "Hangi sektörlerle çalışıyorsunuz?",
    a: "Ağırlıklı olarak müşteri talebiyle çalışan işletmelerle; mobilya ve dekorasyon, güzellik ve bakım, eğitim ve kurslar, hizmet sektörü gibi alanlarda çalışıyoruz. Farklı bir sektördeyseniz ön analiz görüşmesinde işletmenizin yapısına uygun olup olmadığını değerlendirebiliriz.",
  },
  {
    q: "Hizmete başlamadan önce analiz yapıyor musunuz?",
    a: "Evet. Her proje bir ön analiz ile başlar. Mevcut reklamlarınızı, web sitenizi ve satış sürecinizi inceliyor, iyileştirilebilecek noktaları ve önerilen sistemi sizinle paylaşıyoruz. Bu analiz ücretsizdir.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="py-20 sm:py-28 bg-white border-t border-[#e5e0d8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="max-w-3xl flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                openIndex === i
                  ? "border-[#e85d26]/30 bg-[#fff8f5]"
                  : "border-[#e5e0d8] bg-[#f9f7f4]"
              }`}
            >
              <button
                className="w-full flex items-start justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] focus-visible:ring-inset"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-[#1a1a1a] leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 text-[#8a8278] transition-transform duration-200 mt-0.5 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5">
                  <p className="text-sm text-[#5a5450] leading-relaxed border-t border-[#e5e0d8] pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
