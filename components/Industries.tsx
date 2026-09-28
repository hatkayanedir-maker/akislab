"use client";

const industries = [
  {
    icon: "🛋",
    title: "Mobilya & Dekorasyon",
    desc: "Teklif taleplerini satış fırsatına dönüştürün.",
  },
  {
    icon: "💆",
    title: "Güzellik & Bakım",
    desc: "Randevu ve müşteri takip süreçlerini otomatikleştirin.",
  },
  {
    icon: "🎓",
    title: "Eğitim & Kurslar",
    desc: "Başvurudan kayıt sürecine kadar adayları takip edin.",
  },
  {
    icon: "🔧",
    title: "Hizmet İşletmeleri",
    desc: "Reklamdan gelen müşteri taleplerini sistematik olarak yönetin.",
  },
];

export default function Industries() {
  return (
    <section id="kimler-icin" className="py-20 sm:py-28 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Özellikle müşteri talebiyle çalışan işletmeler için.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="bg-white border border-[#e5e0d8] rounded-2xl p-6 hover:border-[#c8c0b5] hover:shadow-sm transition-all duration-200"
            >
              <span className="text-2xl mb-4 block">{ind.icon}</span>
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-2">
                {ind.title}
              </h3>
              <p className="text-sm text-[#5a5450] leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#e5e0d8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-2xl">💡</div>
          <div className="flex-1">
            <p className="text-sm text-[#3a3530] leading-relaxed">
              <span className="font-semibold">Farklı bir sektörde misiniz?</span>{" "}
              İşletmenizin müşteri kazanım sürecini birlikte inceleyebiliriz.
            </p>
          </div>
          <a
            href="#iletisim"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 text-sm font-medium text-[#e85d26] hover:text-[#d14e1f] transition-colors whitespace-nowrap"
          >
            İletişime Geçin →
          </a>
        </div>
      </div>
    </section>
  );
}
