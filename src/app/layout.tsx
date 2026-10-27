import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/mobile.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jannelsuba-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jannel Crespo Suba — Developer",
  description:
    "Information Systems student and developer building secure, scalable full-stack applications with AI-assisted development. Dean's Lister at Exact Colleges of Asia.",
  keywords: [
    "Jannel Suba",
    "Jannel Crespo Suba",
    "developer",
    "information systems",
    "Next.js",
    "React",
    "Supabase",
    "Firebase",
    "AI-assisted development",
    "web developer Philippines",
    "portfolio",
  ],
  authors: [{ name: "Jannel Crespo Suba" }],
  creator: "Jannel Crespo Suba",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jannel Crespo Suba — Developer",
    description:
      "Building secure digital systems from curiosity, creativity, and obsession.",
    url: siteUrl,
    siteName: "Jannel Crespo Suba — Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full bg-[#08080a] font-sans text-[#e8e8ec]">
        {children}
      </body>
    </html>
  );
}
