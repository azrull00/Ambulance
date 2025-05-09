import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from './components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambulan 24 Jam Magelang & Jawa Tengah | Layanan Ambulans Darurat",
  description: "Layanan ambulan 24 jam di Magelang dan Jawa Tengah. Melayani keadaan darurat dengan respons cepat di seluruh wilayah Jawa Tengah. Siap siaga 24/7 untuk bantuan medis darurat.",
  keywords: "ambulan magelang, ambulan 24 jam magelang, ambulan jawa tengah, ambulan 24 jam jawa tengah, layanan ambulans magelang, ambulance emergency magelang, ambulan rumah sakit magelang, ambulan darurat magelang, ambulan darurat jawa tengah, ambulan rumah sakit jawa tengah, layanan ambulans jawa tengah, ambulance emergency jawa tengah",
  openGraph: {
    title: "Ambulan 24 Jam Magelang & Jawa Tengah | Layanan Ambulans Darurat",
    description: "Layanan ambulan 24 jam di Magelang dan Jawa Tengah. Melayani keadaan darurat dengan respons cepat di seluruh wilayah Jawa Tengah.",
    url: "https://www.ambulan24jammagelang.my.id",
    siteName: "Ambulan 24 Jam Magelang & Jawa Tengah",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://www.ambulan24jammagelang.my.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ambulan 24 Jam Magelang dan Jawa Tengah",
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
        <meta name="geo.placename" content="Magelang, Jawa Tengah" />
        <meta name="geo.position" content="-7.4797;110.2177" />
        <meta name="ICBM" content="-7.4797, 110.2177" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="coverage" content="Magelang, Jawa Tengah, Indonesia" />
        <meta name="target" content="Indonesia" />
        <meta name="area" content="Jawa Tengah" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
