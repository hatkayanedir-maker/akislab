import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SITE_URL, GA_MEASUREMENT_ID } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AkışLab | Dijital Reklam, CRM & WhatsApp Otomasyonu",
  description:
    "AkışLab; Meta Ads, Google Ads, CRM ve WhatsApp otomasyonlarını bir araya getirerek işletmeler için ölçülebilir müşteri kazanım sistemleri kurar.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AkışLab | Dijital Reklam, CRM & WhatsApp Otomasyonu",
    description:
      "Reklamdan satışa uzanan müşteri kazanım sistemleri. Meta Ads, Google Ads, CRM ve WhatsApp otomasyonu.",
    url: SITE_URL,
    siteName: "AkışLab",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AkışLab | Dijital Reklam, CRM & WhatsApp Otomasyonu",
    description:
      "Reklamdan satışa uzanan müşteri kazanım sistemleri. Meta Ads, Google Ads, CRM ve WhatsApp otomasyonu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AkışLab",
              url: SITE_URL,
              description:
                "Reklamdan satışa uzanan müşteri kazanım sistemleri. Meta Ads, Google Ads, CRM ve WhatsApp otomasyonu.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Turkish",
              },
              sameAs: [
                "https://instagram.com/akislab",
                "https://linkedin.com/company/akislab",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
