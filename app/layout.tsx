import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADLX — Corporate & Commercial Legal Advisory in Saudi Arabia",
  description:
    "ADLX provides strategic corporate and commercial legal counsel for businesses operating, investing and growing in Saudi Arabia. Clarity in law. Confidence in business.",
  keywords: [
    "corporate law firm Saudi Arabia",
    "commercial legal advisory KSA",
    "company incorporation Saudi Arabia",
    "corporate governance legal counsel",
  ],
  openGraph: {
    title: "ADLX — Clarity in Law. Confidence in Business.",
    description:
      "Strategic corporate and commercial legal counsel for businesses operating, investing and growing in Saudi Arabia.",
    locale: "en_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans antialiased bg-ivory text-ink">
        {children}
      </body>
    </html>
  );
}
