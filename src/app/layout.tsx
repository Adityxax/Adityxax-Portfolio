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
  title: "Aditya Xax Portfolio",
  description: "Personal portfolio and ML project showcase",
  icons: {
    icon: "/icon.svg",
  },
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
        bg-[#0d0002] text-white overflow-x-hidden`}>
          
        {/* GLOBAL STATIC BACKGROUND */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#1a0003] via-[#0d0002] to-black" />

        {/* SITE CONTENT */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}