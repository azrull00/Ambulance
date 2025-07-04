import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from './components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambulan 24 Jam Magelang Terdekat | Layanan Ambulans Darurat",
  description: "Layanan ambulan 24 jam terdekat di Magelang dan sekitarnya. Melayani keadaan darurat dengan respons cepat di Magelang, Yogyakarta, Semarang, dan Solo. Siap siaga 24/7 untuk bantuan medis darurat.",
  keywords: "ambulan magelang terdekat, ambulan 24 jam magelang, ambulan jawa tengah, ambulan 24 jam jawa tengah, layanan ambulans magelang, ambulance emergency magelang, ambulan rumah sakit magelang, ambulan darurat magelang, ambulan darurat jawa tengah, ambulan rumah sakit jawa tengah, layanan ambulans jawa tengah, ambulance emergency jawa tengah,ambulan terdekat , ambulan yogyakarta, ambulan semarang, ambulan solo ,ambulan darurat terdekat ,  ambulan darurat sekitar",
  openGraph: {
    title: "Ambulan 24 Jam Magelang Terdekat | Layanan Ambulans Darurat",
    description: "Layanan ambulan 24 jam terdekat di Magelang dan sekitarnya. Melayani keadaan darurat dengan respons cepat di Magelang, Yogyakarta, Semarang, dan Solo.",
    url: "https://www.ambulan24jammagelang.my.id",    
    siteName: "Ambulan 24 Jam Magelang",
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
  // verification: {
  //   google: "your-google-verification-code", // Add your Google Search Console verification code
  // },
  alternates: {
    canonical: "https://www.ambulan24jammagelang.my.id",
  },
  metadataBase: new URL('https://www.ambulan24jammagelang.my.id'),
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
        <meta name="coverage" content="Magelang, Yogyakarta, Semarang, Solo, Jawa Tengah, Indonesia" />
        <meta name="target" content="Indonesia" />
        <meta name="area" content="Jawa Tengah, Yogyakarta" />
        <meta name="keywords" content="ambulan magelang terdekat, ambulan 24 jam magelang, ambulan jawa tengah" />
        <meta name="author" content="Ambulan 24 Jam Magelang" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="language" content="Indonesian" />
        <link rel="alternate" href="https://www.ambulan24jammagelang.my.id" hrefLang="id-ID" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
