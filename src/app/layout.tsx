import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PreloadImages } from "@/components/preload-images";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francisco J. Rodriguez | Financial & Data Specialist",
  description: "Portfolio personal de Francisco J. Rodriguez, Financial & Data Specialist con experiencia en Python, Excel, SQL y herramientas de IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <PreloadImages />
        {children}
        <Analytics />
      </body>
    </html>
  );
}