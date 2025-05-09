import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambulan 24 Jam Magelang | Layanan Ambulans Darurat",
  description: "Layanan ambulan 24 jam di Magelang dan sekitarnya. Siap melayani keadaan darurat dengan respons cepat. Hubungi kami sekarang untuk bantuan medis darurat.",
  keywords: "ambulan magelang, ambulan 24 jam magelang, layanan ambulans magelang, ambulance emergency magelang, ambulan rumah sakit magelang, ambulan darurat magelang",
  openGraph: {
    title: "Ambulan 24 Jam Magelang | Layanan Ambulans Darurat",
    description: "Layanan ambulan 24 jam di Magelang dan sekitarnya. Siap melayani keadaan darurat dengan respons cepat.",
    url: "https://www.ambulan24jammagelang.my.id",
    siteName: "Ambulan Siaga Magelang",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://www.ambulan24jammagelang.my.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ambulan 24 Jam Magelang",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://www.ambulan24jammagelang.my.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="ID-JT" />
        <meta name="geo.placename" content="Magelang" />
        <meta name="geo.position" content="-7.4797;110.2177" />
        <meta name="ICBM" content="-7.4797, 110.2177" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
