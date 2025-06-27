import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jon Olsen - Portfolio",
  description: "Supplemental material to professional resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative text-white`}
      >
        {/* Static portal root for the particle canvas */}
        <div id="particles-root" className="fixed inset-0 -z-10 pointer-events-none" />
        
        {/* React portal particle layer */}
        <ParticlesBackground />

        {/* App content */}
        {children}
      </body>
    </html>
  );
}
