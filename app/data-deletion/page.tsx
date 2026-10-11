import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Veri Silme Talebi – AkışLab",
  description:
    "AkışLab sistemlerindeki kişisel verilerinizin silinmesi için başvuru sayfası.",
  alternates: { canonical: "/data-deletion" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Veri Silme Talebi – AkışLab",
    description:
      "AkışLab sistemlerindeki kişisel verilerinizin silinmesi için başvuru sayfası.",
    url: `${SITE_URL}/data-deletion`,
    siteName: "AkışLab",
    locale: "tr_TR",
    type: "website",
  },
};

const LAST_UPDATED = "11 Ekim 2026";

export default function DataDeletionPage() {
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
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-3">Veri Silme Talebi</h1>
          <p className="text-sm text-[#8a8278]">Son güncellenme: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-8 text-sm text-[#3a3530] leading-relaxed">
          <p className="text-base text-[#1a1a1a]">
            AkışLab olarak, kişisel verileriniz üzerindeki haklarınıza saygı duyuyoruz.
            Bu sayfa; sistemlerimizde işlenen verilerinizin silinmesini talep etmek
            isteyenler için hazırlanmıştır.
          </p>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3 border-b border-[#e5e0d8] pb-2">
              Kimler Talepte Bulunabilir?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                AkışLab&apos;ın WhatsApp Business hattıyla iletişim kurmuş bireyler veya
                işletmeler
              </li>
              <li>
                AkışLab CRM sistemine kayıtlı lead veya müşteri niteliğindeki kişi ya da
                işletmeler
              </li>
              <li>AkışLab web sitesi üzerinden iletişim formu doldurmuş kişiler</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3 border-b border-[#e5e0d8] pb-2">
              Neler Silinir?
            </h2>
            <p>
              Geçerli bir talep doğrultusunda aşağıdaki veriler sistemlerimizden silinir
              veya anonimleştirilir:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>WhatsApp mesaj kayıtları ve ilgili metadata</li>
              <li>CRM ve lead kayıtları</li>
              <li>İletişim formu verileri</li>
              <li>Kişi veya işletmeye ait tüm tanımlanabilir veriler</li>
            </ul>
            <p className="mt-3 text-xs text-[#8a8278]">
              <strong>Not:</strong> Yasal saklama yükümlülükleri, aktif sözleşme ilişkisi
              veya uyuşmazlık çözüm süreçleri kapsamında zorunlu tutulan veriler bu
              yükümlülükler ortadan kalkana kadar saklanmaya devam edebilir.
            </p>
          </section>

          {/* How to request */}
          <section className="bg-[#fff8f4] border border-[#f0e0d0] rounded-xl p-6">
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-4">
              Nasıl Talepte Bulunulur?
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-1 text-sm">
                  E-posta ile Başvuru
                </h3>
                <p>
                  Aşağıdaki e-posta adresine{" "}
                  <strong>&quot;Veri Silme Talebi&quot;</strong> konu başlığıyla yazın:
                </p>
                <a
                  href="mailto:info@akislab.com?subject=Veri%20Silme%20Talebi"
                  className="inline-block mt-2 text-[#e85d26] font-medium hover:underline"
                >
                  info@akislab.com
                </a>
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-2 text-sm">
                  Talebinizde Belirtmeniz Gerekenler
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Adınız ve soyadınız (veya işletme adınız)</li>
                  <li>
                    Sistemimizde kayıtlı olduğunu düşündüğünüz e-posta adresi veya
                    telefon numarası
                  </li>
                  <li>
                    Hangi verilerinizin silinmesini istediğiniz (tümü veya belirli bir
                    kategori)
                  </li>
                  <li>İletişim bilgileriniz (yanıt için)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3 border-b border-[#e5e0d8] pb-2">
              Süreç ve Yanıt Süresi
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Talebiniz alındıktan sonra kimlik doğrulama amacıyla size geri dönüş
                yapılır.
              </li>
              <li>
                Talebin değerlendirilmesi ve işleme alınması{" "}
                <strong>30 gün</strong> içinde tamamlanır.
              </li>
              <li>Silme işlemi tamamlandığında size bildirim gönderilir.</li>
              <li>
                Talebinizin kısmen veya tamamen yerine getirilememesi durumunda gerekçesi
                yazılı olarak iletilir.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3 border-b border-[#e5e0d8] pb-2">
              Meta / Facebook Entegrasyonu Hakkında
            </h2>
            <p>
              AkışLab, WhatsApp Business Platform API&apos;si aracılığıyla Meta altyapısını
              kullanmaktadır. Meta&apos;nın kendi platformlarındaki verilerinizi yönetmek için
              Meta&apos;nın{" "}
              <a
                href="https://www.facebook.com/help/contact/540977946302970"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e85d26] hover:underline"
              >
                veri silme araçlarını
              </a>{" "}
              kullanmanız gerekmektedir. AkışLab&apos;a yapılan silme talepleri yalnızca
              AkışLab sistemlerindeki verileri kapsar; Meta altyapısındaki kayıtları kapsamaz.
            </p>
          </section>

          <div className="border-t border-[#e5e0d8] pt-6 text-xs text-[#8a8278]">
            <p>
              Daha fazla bilgi için{" "}
              <Link href="/privacy" className="text-[#e85d26] hover:underline">
                Gizlilik Politikamızı
              </Link>{" "}
              inceleyebilirsiniz.
            </p>
          </div>
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
