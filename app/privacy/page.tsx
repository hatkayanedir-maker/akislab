import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Gizlilik Politikası – AkışLab",
  description:
    "AkışLab'ın kişisel verilerin korunmasına ilişkin gizlilik politikası.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gizlilik Politikası – AkışLab",
    description:
      "AkışLab'ın kişisel verilerin korunmasına ilişkin gizlilik politikası.",
    url: `${SITE_URL}/privacy`,
    siteName: "AkışLab",
    locale: "tr_TR",
    type: "website",
  },
};

const LAST_UPDATED = "11 Ekim 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="border-b border-[#e5e0d8] bg-[#f9f7f4]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] rounded"
            aria-label="AkışLab ana sayfa"
          >
            <span className="font-bold text-xl tracking-tight text-[#1a1a1a]">akış</span>
            <span className="font-bold text-xl tracking-tight text-[#e85d26]">lab</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-[#8a8278] hover:text-[#1a1a1a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d26] rounded"
          >
            ← Ana Sayfa
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-3">
            Gizlilik Politikası
          </h1>
          <p className="text-sm text-[#8a8278]">Son güncellenme: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-8 text-[#1a1a1a] leading-relaxed">
          <Section title="1. Veri Sorumlusu">
            <p>
              Bu gizlilik politikası; <strong>AkışLab</strong> tarafından işletilen dijital
              otomasyon, CRM ve WhatsApp iletişim sistemlerine ilişkin kişisel veri işleme
              faaliyetlerini açıklamaktadır.
            </p>
            <p>Veri sorumlusu sıfatıyla iletişim bilgileri:</p>
            <ul>
              <li>
                <strong>E-posta:</strong>{" "}
                <a href="mailto:info@akislab.com" className="text-[#e85d26] hover:underline">
                  info@akislab.com
                </a>
              </li>
              <li>
                <strong>Web sitesi:</strong>{" "}
                <Link href="/" className="text-[#e85d26] hover:underline">
                  akislab.com
                </Link>
              </li>
            </ul>
          </Section>

          <Section title="2. İşlenen Veriler">
            <p>
              AkışLab&apos;ın sunduğu hizmetler kapsamında aşağıdaki kategorilerde veriler
              işlenebilir:
            </p>
            <ul>
              <li>
                <strong>İşletme iletişim bilgileri:</strong> Telefon numarası, işletme adı,
                adres, e-posta adresi gibi müşteri/lead niteliğindeki işletme bilgileri.
              </li>
              <li>
                <strong>WhatsApp mesajları:</strong> İşletmenizin WhatsApp Business hattına
                gönderilen gelen mesajların içeriği ve metadata bilgileri (gönderici numarası,
                zaman damgası, mesaj kimliği).
              </li>
              <li>
                <strong>Webhook verileri:</strong> Meta / WhatsApp Business Platform üzerinden
                gönderilen webhook bildirimleri kapsamında alınan mesaj ve durum bilgileri.
              </li>
              <li>
                <strong>CRM ve lead verileri:</strong> Potansiyel müşteri (lead) takibi
                amacıyla oluşturulan kayıtlar; işletme adı, sektör, telefon numarası ve
                kampanya durumu.
              </li>
              <li>
                <strong>İletişim formu verileri:</strong> Web sitesi üzerinden gönderilen
                demo talepleri veya iletişim formu yanıtları kapsamında sağlanan isim,
                e-posta ve mesaj bilgileri.
              </li>
            </ul>
          </Section>

          <Section title="3. Meta / WhatsApp Business Platform Kullanımı">
            <p>
              AkışLab, işletmelere yönelik CRM ve otomasyon hizmetleri sunmak amacıyla
              Meta&apos;nın WhatsApp Business Platform API&apos;sini kullanmaktadır.
            </p>
            <p>Bu entegrasyon çerçevesinde:</p>
            <ul>
              <li>
                WhatsApp Business hattınıza gelen mesajlar, Meta&apos;nın altyapısı üzerinden
                güvenli webhook bildirimleri ile sistemimize iletilmektedir.
              </li>
              <li>
                Mesaj içerikleri ve gönderici bilgileri yalnızca CRM eşleştirme, yanıt
                sınıflandırma ve kampanya yönetimi amacıyla işlenmektedir.
              </li>
              <li>
                Veriler Meta Platform Koşulları (<em>Meta Platform Terms</em>) ve WhatsApp
                Business Politikaları ile uyumlu biçimde işlenmektedir.
              </li>
            </ul>
          </Section>

          <Section title="4. Veri İşleme Amaçları">
            <p>Toplanan veriler aşağıdaki amaçlarla işlenmektedir:</p>
            <ul>
              <li>CRM sistemi kapsamında lead ve müşteri takibinin yürütülmesi</li>
              <li>
                WhatsApp Business mesajlarının alınması, sınıflandırılması ve yanıt
                süreçlerinin yönetilmesi
              </li>
              <li>Kampanya ve satış süreçlerinin otomasyonu</li>
              <li>Hizmet kalitesinin iyileştirilmesi ve teknik sorunların giderilmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </Section>

          <Section title="5. Veri Güvenliği">
            <p>
              Kişisel verilerinizin güvenliğini sağlamak amacıyla endüstri standardı teknik
              ve idari önlemler uygulanmaktadır:
            </p>
            <ul>
              <li>Tüm veri iletimi TLS/HTTPS şifreleme ile korunmaktadır.</li>
              <li>
                Webhook bildirimleri HMAC-SHA256 imza doğrulaması ile doğrulanmakta; imzasız
                veya hatalı imzalı istekler reddedilmektedir.
              </li>
              <li>
                Telefon numaraları ve mesaj içerikleri sunucu loglarına yazılmamaktadır;
                yalnızca hata sınıfı ve hata kodu gibi teknik metadata kayıt altına
                alınmaktadır.
              </li>
              <li>
                Veritabanı erişimi kimlik doğrulaması ve yetkilendirme kontrolleriyle
                sınırlandırılmıştır.
              </li>
              <li>
                Erişim bilgileri (API anahtarları, gizli anahtarlar) şifreli ortam değişkenleri
                olarak saklanmaktadır.
              </li>
            </ul>
          </Section>

          <Section title="6. Veri Saklama Süreleri">
            <p>
              Veriler, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatın izin
              verdiği azami süreler dahilinde saklanmaktadır:
            </p>
            <ul>
              <li>
                <strong>WhatsApp webhook kayıtları:</strong> CRM eşleştirme ve denetim
                amacıyla hizmet ilişkisi devam ettiği sürece saklanır.
              </li>
              <li>
                <strong>Lead ve CRM verileri:</strong> Aktif kampanya ve satış süreçleri
                boyunca ve bu süreçlerin sona ermesinden itibaren yasal saklama yükümlülükleri
                çerçevesinde muhafaza edilir.
              </li>
              <li>
                <strong>İletişim formu verileri:</strong> Talep sonuçlandırıldıktan sonra
                makul bir süre içinde silinir veya anonimleştirilir.
              </li>
            </ul>
            <p>
              Veri silme talebinde bulunmak için{" "}
              <Link href="/data-deletion" className="text-[#e85d26] hover:underline">
                veri silme sayfamızı
              </Link>{" "}
              ziyaret edin.
            </p>
          </Section>

          <Section title="7. Üçüncü Taraf Hizmet Sağlayıcılar">
            <p>
              Hizmetlerimizin sunulması amacıyla aşağıdaki üçüncü taraf altyapı
              sağlayıcılarından yararlanılmaktadır:
            </p>
            <ul>
              <li>
                <strong>Meta Platforms, Inc.</strong> — WhatsApp Business Platform API;
                mesajlaşma altyapısı ve webhook teslimatı.
              </li>
              <li>
                <strong>Supabase</strong> — Veritabanı ve kimlik doğrulama altyapısı.
              </li>
              <li>
                <strong>Cloudflare</strong> — Web uygulama barındırma ve içerik dağıtımı.
              </li>
            </ul>
            <p>
              Bu sağlayıcılar kendi gizlilik politikalarına ve güvenlik standartlarına
              tabidir. Veriler yalnızca hizmetin ifası için gerekli ölçüde bu altyapılarla
              paylaşılmaktadır.
            </p>
          </Section>

          <Section title="8. Yasal Yükümlülükler">
            <p>
              Kişisel veriler; yetkili kamu kurum ve kuruluşlarının yasal talepleri, mahkeme
              kararları veya yürürlükteki mevzuat kapsamındaki zorunluluklar nedeniyle üçüncü
              taraflarla paylaşılabilir. Bu durumda veri paylaşımı yalnızca yasal
              yükümlülüğün zorunlu kıldığı çerçeveyle sınırlı tutulur.
            </p>
          </Section>

          <Section title="9. Kullanıcı Hakları (KVKK)">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aşağıdaki
              haklara sahipsiniz:
            </p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>
                Kanun&apos;da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini
                isteme
              </li>
              <li>
                İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi
                suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
              </li>
              <li>Kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme</li>
            </ul>
            <p>
              Bu haklarınızı kullanmak için{" "}
              <a
                href="mailto:info@akislab.com"
                className="text-[#e85d26] hover:underline"
              >
                info@akislab.com
              </a>{" "}
              adresine başvurabilirsiniz.
            </p>
          </Section>

          <Section title="10. Veri Silme Talebi">
            <p>
              Verilerinizin sistemlerimizden silinmesini talep etmek için{" "}
              <Link href="/data-deletion" className="text-[#e85d26] hover:underline">
                veri silme sayfamızı
              </Link>{" "}
              ziyaret edebilir veya doğrudan{" "}
              <a
                href="mailto:info@akislab.com"
                className="text-[#e85d26] hover:underline"
              >
                info@akislab.com
              </a>{" "}
              adresiyle iletişime geçebilirsiniz.
            </p>
          </Section>

          <Section title="11. Gizlilik Politikasındaki Değişiklikler">
            <p>
              Bu politika, hizmetlerimiz veya yasal yükümlülüklerimiz değiştiğinde
              güncellenebilir. Önemli değişiklikler web sitemizde duyurulur. Politikanın
              güncel sürümüne her zaman bu sayfa üzerinden erişilebilir.
            </p>
          </Section>

          <Section title="12. İletişim">
            <ul>
              <li>
                <strong>E-posta:</strong>{" "}
                <a
                  href="mailto:info@akislab.com"
                  className="text-[#e85d26] hover:underline"
                >
                  info@akislab.com
                </a>
              </li>
              <li>
                <strong>Web sitesi:</strong>{" "}
                <Link href="/" className="text-[#e85d26] hover:underline">
                  akislab.com
                </Link>
              </li>
            </ul>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#141210] text-white mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-0.5">
            <span className="font-bold text-base tracking-tight text-white">akış</span>
            <span className="font-bold text-base tracking-tight text-[#e85d26]">lab</span>
          </div>
          <div className="flex gap-5 text-[#8a8278]">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/data-deletion" className="hover:text-white transition-colors">
              Veri Silme
            </Link>
            <a href="mailto:info@akislab.com" className="hover:text-white transition-colors">
              İletişim
            </a>
          </div>
          <p className="text-xs text-[#6a6460]">© 2026 AkışLab.</p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-base font-semibold text-[#1a1a1a] mb-3 border-b border-[#e5e0d8] pb-2">
        {title}
      </h2>
      <div className="space-y-3 text-sm text-[#3a3530] [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
