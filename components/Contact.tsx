"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/config";

const services = [
  { value: "meta-ads", label: "Meta Ads" },
  { value: "google-ads", label: "Google Ads" },
  { value: "crm", label: "CRM" },
  { value: "whatsapp", label: "WhatsApp Otomasyonu" },
  { value: "ai", label: "AI Otomasyonu" },
  { value: "all", label: "Hepsi" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    website: "",
    phone: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabel =
      services.find((s) => s.value === form.service)?.label || form.service;

    const message = `Merhaba AkışLab,

İşletmem için bilgi almak istiyorum.

Ad Soyad: ${form.name}
İşletme Adı: ${form.business}
Web Sitesi / Instagram: ${form.website || "Belirtilmedi"}
Telefon: ${form.phone}
İlgilenilen Hizmet: ${serviceLabel}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="iletisim" className="py-20 sm:py-28 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: CTA copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
              Müşteri kazanım sisteminizde nerede fırsat kaçırdığınızı birlikte
              bulalım.
            </h2>
            <p className="text-base text-[#5a5450] leading-relaxed mb-8">
              Web sitenizi, reklamlarınızı ve mevcut satış sürecinizi
              inceleyelim. Geliştirebileceğiniz noktaları kısa bir ön analizle
              paylaşalım.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Mevcut reklam hesabınız analiz edilir",
                "Müşteri kazanım sürecindeki açıklar tespit edilir",
                "Size özel bir sistem önerisi sunulur",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#e85d26]/10 border border-[#e85d26]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#e85d26] text-xs">✓</span>
                  </div>
                  <p className="text-sm text-[#3a3530]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-[#e5e0d8] rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-[#1a1a1a] mb-6">
              Ücretsiz Analiz İstiyorum
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-[#5a5450] mb-1.5"
                >
                  Ad Soyad <span className="text-[#e85d26]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#e5e0d8] bg-[#f9f7f4] text-sm text-[#1a1a1a] placeholder-[#b0a898] focus:outline-none focus:border-[#e85d26] focus:ring-1 focus:ring-[#e85d26] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block text-xs font-medium text-[#5a5450] mb-1.5"
                >
                  İşletme Adı <span className="text-[#e85d26]">*</span>
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  value={form.business}
                  onChange={handleChange}
                  placeholder="İşletmenizin adı"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#e5e0d8] bg-[#f9f7f4] text-sm text-[#1a1a1a] placeholder-[#b0a898] focus:outline-none focus:border-[#e85d26] focus:ring-1 focus:ring-[#e85d26] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-xs font-medium text-[#5a5450] mb-1.5"
                >
                  Web Sitesi / Instagram
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="www.siteniz.com veya @instagram"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#e5e0d8] bg-[#f9f7f4] text-sm text-[#1a1a1a] placeholder-[#b0a898] focus:outline-none focus:border-[#e85d26] focus:ring-1 focus:ring-[#e85d26] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-[#5a5450] mb-1.5"
                >
                  Telefon <span className="text-[#e85d26]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+90 555 000 00 00"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#e5e0d8] bg-[#f9f7f4] text-sm text-[#1a1a1a] placeholder-[#b0a898] focus:outline-none focus:border-[#e85d26] focus:ring-1 focus:ring-[#e85d26] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-medium text-[#5a5450] mb-1.5"
                >
                  İlgilendiğiniz Hizmet <span className="text-[#e85d26]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#e5e0d8] bg-[#f9f7f4] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#e85d26] focus:ring-1 focus:ring-[#e85d26] transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Seçin...
                  </option>
                  {services.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#e85d26] text-white font-semibold py-3.5 rounded-xl hover:bg-[#d14e1f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] focus-visible:ring-offset-2 mt-2 text-sm"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp ile Analiz İste
              </button>

              <p className="text-xs text-[#8a8278] text-center">
                Formu doldurduğunuzda WhatsApp açılacak. Mesajı göndererek
                süreci başlatabilirsiniz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
