import type { Metadata } from "next";
import ParallaxBackground from "@/components/ParallaxBackground";
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
  title: "Aditya Xax Portfolio",
  description: "Personal portfolio and ML project showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} text-white overflow-x-hidden`}>

        {/* GLOBAL PARALLAX BACKGROUND */}
        <ParallaxBackground />

        {/* PAGE CONTENT */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
