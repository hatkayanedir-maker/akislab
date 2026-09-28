const services = [
  {
    number: "01",
    title: "Performans Reklamları",
    desc: "Sadece trafik değil, işletmeniz için gerçek müşteri talepleri oluşturmayı hedefleyen performans kampanyaları.",
    items: [
      "Meta Ads",
      "Google Ads",
      "Remarketing",
      "Conversion Tracking",
      "Campaign Optimization",
    ],
  },
  {
    number: "02",
    title: "CRM Sistemleri",
    desc: "Potansiyel müşterilerin satış sürecinde kaybolmasını önleyen merkezi müşteri takip sistemleri.",
    items: [
      "Lead Management",
      "Pipeline Setup",
      "Customer Tracking",
      "Sales Reporting",
    ],
  },
  {
    number: "03",
    title: "WhatsApp Otomasyonu",
    desc: "Müşteri taleplerine daha hızlı cevap veren ve satış ekibinin manuel iş yükünü azaltan otomasyonlar.",
    items: [
      "Automatic Replies",
      "Lead Qualification",
      "Appointment Reminders",
      "Follow-up Messages",
    ],
  },
  {
    number: "04",
    title: "AI & İş Süreçleri Otomasyonu",
    desc: "Tekrarlanan operasyonları otomatikleştirerek ekibinizin zamanını daha değerli işlere ayırmasını sağlayan sistemler.",
    items: [
      "AI Assistants",
      "Workflow Automation",
      "Data Integration",
      "Automated Reporting",
    ],
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Büyüme sisteminizin tüm parçalarını kuruyoruz.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-[#f9f7f4] border border-[#e5e0d8] rounded-2xl p-7 hover:border-[#c8c0b5] hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-bold text-[#e85d26] tracking-wider">
                  {service.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-[#5a5450] leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Feature list */}
              <div className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-[#5a5450] bg-white border border-[#e5e0d8] rounded-md px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
