import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground"; // ✅ Add this

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
        {/* ✅ Persistent background mounted behind all pages */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <ParticlesBackground />
        </div>

        {/* ✅ Page content */}
        {children}
      </body>
    </html>
  );
}
