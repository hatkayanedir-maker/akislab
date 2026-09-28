const problems = [
  {
    step: "01",
    title: "Lead Geldi",
    desc: "Müşteri reklamdan form doldurdu veya WhatsApp üzerinden iletişime geçti.",
    color: "text-[#e85d26]",
  },
  {
    step: "02",
    title: "Takip Edilmedi",
    desc: "Yoğunluk nedeniyle geç cevaplandı veya tamamen unutuldu.",
    color: "text-[#c0391a]",
  },
  {
    step: "03",
    title: "Satış Kaybedildi",
    desc: "Reklama para harcandı ancak potansiyel müşteri başka işletmeye gitti.",
    color: "text-[#8a2010]",
  },
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#e5e0d8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Reklam vermek tek başına yeterli değil.
          </h2>
          <p className="text-base text-[#5a5450] leading-relaxed">
            Birçok işletme reklamlarla potansiyel müşterilere ulaşıyor ancak
            gelen talepler geç cevaplanıyor, takip edilmiyor veya satış
            sürecinde kayboluyor.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="relative bg-[#f9f7f4] border border-[#e5e0d8] rounded-2xl p-6"
            >
              {/* Arrow between cards (desktop) */}
              {i < problems.length - 1 && (
                <div
                  className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border border-[#e5e0d8] rounded-full flex items-center justify-center text-[#8a8278] text-xs"
                  aria-hidden="true"
                >
                  →
                </div>
              )}
              <div className={`text-xs font-bold tracking-wider mb-3 ${p.color}`}>
                {p.step}
              </div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[#5a5450] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Resolution statement */}
        <div className="border-l-2 border-[#e85d26] pl-5 py-1">
          <p className="text-base font-medium text-[#1a1a1a]">
            AkışLab reklam ile satış arasındaki bu boşluğu kapatır.
          </p>
        </div>
      </div>
    </section>
  );
}
