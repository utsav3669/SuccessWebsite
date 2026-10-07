import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { companyInfo } from "@/data/company";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Success Educational Consultancy | Empowering Education for a Global Future",
    template: "%s | Success Educational Consultancy",
  },
  description: "Empowering Education for a Global Future",
  applicationName: "Success Educational Consultancy",
  appleWebApp: {
    title: "SEC",
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  keywords: [
    "Success Educational Consultancy",
    "SEC",
    "SEC Kathmandu",
    "Study in Hungary from Nepal",
    "Study in Europe consultancy",
    "Putalisadak consultancy",
    "Educational Consultancy Kathmandu",
    "Study abroad Nepal",
    "Hungary student visa Nepal",
  ],
  authors: [{ name: "Success Educational Consultancy" }],
  metadataBase: new URL("https://successnepal.edu.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Success Educational Consultancy | Empowering Education for a Global Future",
    description: "Empowering Education for a Global Future",
    url: "https://successnepal.edu.np",
    siteName: "Success Educational Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/sec-logo.png",
        width: 591,
        height: 545,
        alt: "Success Educational Consultancy Logo",
      },
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: companyInfo.name,
    alternateName: companyInfo.shortName,
    url: "https://successnepal.edu.np",
    logo: "https://successnepal.edu.np/logo.png",
    description: companyInfo.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Putilisadak-29",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    telephone: companyInfo.phones[0],
    email: companyInfo.email,
  };

  return (
    <html lang="en" className={`${satoshi.variable} font-satoshi`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-sec-dark flex flex-col font-satoshi antialiased selection:bg-sec-navy selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
