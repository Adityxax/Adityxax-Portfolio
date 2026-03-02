import type { Metadata } from "next";
import ParticlesBackground from "@/components/ParticlesBackground";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        bg-gradient-to-b from-[#2b0005] via-[#140003] to-black 
        text-white overflow-x-hidden`}>
          
        {/* GLOBAL PARTICLES BACKGROUND */}
        <ParticlesBackground />

        {/* SITE CONTENT */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}