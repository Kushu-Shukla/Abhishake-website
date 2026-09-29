import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Shukla | CX & AI Leader | Consultant",
  description: "Abhishek Shukla is a CX & AI Leader, consultant and project leader helping organizations improve customer experience, operations and workplace productivity through AI, data and practical leadership.",
  keywords: [
    "Abhishek Shukla",
    "CX AI Leader",
    "Customer Experience Consultant",
    "AI Consultant",
    "AI Workplace Consultant",
    "CX Consultant",
    "Operations Consultant",
    "AI Transformation",
    "Customer Experience AI",
    "AI Leadership",
    "Business Process Improvement",
    "Workplace AI",
  ],
  authors: [{ name: "Abhishek Shukla" }],
  creator: "Abhishek Shukla",
  metadataBase: new URL("https://iAbhishekShukla.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iAbhishekShukla.com",
    title: "Abhishek Shukla | CX & AI Leader | Consultant",
    description: "Abhishek Shukla is a CX & AI Leader, consultant and project leader helping organizations improve customer experience, operations and workplace productivity through AI, data and practical leadership.",
    siteName: "Abhishek Shukla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Shukla | CX & AI Leader | Consultant",
    description: "Abhishek Shukla is a CX & AI Leader, consultant and project leader helping organizations improve customer experience, operations and workplace productivity through AI, data and practical leadership.",
    creator: "@Abhishek1610200",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-brand-navy transition-colors duration-300">
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
