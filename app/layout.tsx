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

const SEO_TITLE = "AkışLab | Dijital Reklam ve Satış Otomasyonu";
const SEO_DESCRIPTION =
  "Meta ve Google reklamlarından gelen potansiyel müşterileri CRM, WhatsApp ve akıllı otomasyonlarla satış fırsatlarına dönüştüren sistemler kuruyoruz.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: "/",
    siteName: "AkışLab",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AkışLab - Dijital Reklam ve Satış Otomasyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
