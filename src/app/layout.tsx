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
  title: {
    default: "Metrospace - Space for your work activities",
    template: "%s | Metrospace",
  },
  description: "Platform terpercaya untuk cari tempat kerja remote.",
  keywords: ["Work Space", "Kantor", "Freelance", "Metrospace", "Remote job"],
  openGraph: {
    title: "Faqih Syakir - Portfolio Project",
    description: "My Example work that ready to use",
    url: "https://faqihsyakir.com",
    siteName: "faqihsyakir",
    images: [
      {
        url: "/assets/images/thumbnails/thumbnails-1.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
