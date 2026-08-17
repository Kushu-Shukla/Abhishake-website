import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Shukla | Customer Experience & AI-Driven Operations Leader",
  description:
    "Abhishek Shukla — 18+ years transforming operations through AI, automation & human-centered leadership. Author of THE BRIDGE YOU BECOME. Thinkers360 Top Thought Leader.",
  keywords: [
    "Abhishek Shukla",
    "Customer Experience",
    "AI Operations",
    "Lean Six Sigma",
    "CX Leader",
    "THE BRIDGE YOU BECOME",
    "AI-Driven Operations",
    "Thinkers360",
  ],
  authors: [{ name: "Abhishek Shukla" }],
  creator: "Abhishek Shukla",
  metadataBase: new URL("https://abhishekshukla.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekshukla.com",
    title: "Abhishek Shukla | Customer Experience & AI-Driven Operations Leader",
    description:
      "Transforming operations through AI, automation, and human-centered leadership. Building bridges between technology and human potential.",
    siteName: "Abhishek Shukla Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Shukla | CX & AI Operations Leader",
    description:
      "Transforming operations through AI, automation, and human-centered leadership.",
    creator: "@abhishekshukla",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhishek Shukla",
              jobTitle: "Customer Experience & AI-Driven Operations Leader",
              url: "https://abhishekshukla.com",
              sameAs: [
                "https://www.linkedin.com/in/abhishekshukla",
                "https://twitter.com/abhishekshukla",
                "https://instagram.com/abhishekshukla",
                "https://youtube.com/@abhishekshukla",
              ],
              description:
                "18+ years of experience in customer experience management, AI-driven process optimization, and operational excellence.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
