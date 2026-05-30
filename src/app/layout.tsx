import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jannel Suba — Full-Stack Developer",
  description:
    "Information Systems student and full-stack developer building secure, scalable web applications. BS Information Systems at Exact Colleges of Asia.",
  keywords: [
    "Jannel Suba",
    "full-stack developer",
    "information systems",
    "Next.js",
    "Node.js",
    "MongoDB",
    "web developer Philippines",
    "portfolio",
  ],
  openGraph: {
    title: "Jannel Suba — Full-Stack Developer",
    description:
      "Building secure digital systems from curiosity, creativity, and obsession.",
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
