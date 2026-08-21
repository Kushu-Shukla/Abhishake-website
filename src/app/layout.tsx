import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Shukla CX & AI Leader | Author",
  description:
    "Abhishek Shukla is a CX & AI Project Leader and Author with 7+ years of experience transforming operations through Generative AI, automation, and human-centered leadership. Author of THE BRIDGE YOU BECOME.",
  keywords: [
    "Abhishek Shukla CX & AI",
    "Abhishek Shukla",
    "CX & AI Leader",
    "CX & AI Project Leader",
    "Customer Experience",
    "AI Operations",
    "Abhishek Shukla Author",
    "THE BRIDGE YOU BECOME",
    "AI-Driven Operations",
    "Lean Six Sigma",
  ],
  authors: [{ name: "Abhishek Shukla" }],
  creator: "Abhishek Shukla",
  metadataBase: new URL("https://www.iabhishekshukla.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.iabhishekshukla.com",
    title: "Abhishek Shukla CX & AI Leader | Author",
    description:
      "Abhishek Shukla is a CX & AI Project Leader and Author with 7+ years of experience transforming operations through Generative AI, automation, and human-centered leadership.",
    siteName: "Abhishek Shukla Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Shukla CX & AI Leader | Author",
    description:
      "Abhishek Shukla is a CX & AI Project Leader and Author transforming operations through Generative AI, automation, and human-centered leadership.",
    creator: "@Abhishek1610200",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import Chatbot from "@/components/Chatbot";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhishek Shukla",
              jobTitle: "CX & AI Project Leader | Author",
              url: "https://www.iabhishekshukla.com",
              sameAs: [
                "https://www.linkedin.com/in/abhishek-shukla-cx",
                "https://x.com/Abhishek1610200",
                "https://www.instagram.com/cxai.leader?igsh=ZzUzMDNod3l3cTRq",
                "https://www.youtube.com/@CXAILeader",
              ],
              description:
                "Abhishek Shukla is a CX & AI Project Leader with 7+ years of experience in customer experience management, AI-driven process optimization, and operational excellence.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
