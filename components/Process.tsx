const steps = [
  {
    number: "01",
    title: "Analiz",
    desc: "Mevcut reklamlarınızı, web sitenizi ve müşteri kazanım sürecinizi inceliyoruz.",
  },
  {
    number: "02",
    title: "Sistem Tasarımı",
    desc: "Reklamdan satışa kadar müşteri yolculuğunu oluşturuyoruz.",
  },
  {
    number: "03",
    title: "Kurulum",
    desc: "Reklam, CRM, WhatsApp ve gerekli otomasyonları birbirine bağlıyoruz.",
  },
  {
    number: "04",
    title: "Ölçüm & Optimizasyon",
    desc: "Sonuçları takip ediyor ve sistemi sürekli geliştiriyoruz.",
  },
];

export default function Process() {
  return (
    <section id="nasil-calisir" className="py-20 sm:py-28 bg-white border-t border-[#e5e0d8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Önce reklam değil, sistemi inceliyoruz.
          </h2>
          <p className="text-base text-[#5a5450]">
            Her işletme için özelleştirilmiş bir yaklaşım. Hazır şablonlar değil, gerçek çözümler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-1/2 w-full h-px bg-[#e5e0d8] z-0"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 bg-[#f9f7f4] border border-[#e5e0d8] rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e0d8] flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-[#e85d26]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5a5450] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
