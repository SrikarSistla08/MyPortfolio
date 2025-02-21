import type { Metadata } from "next";
import { Geist, Geist_Mono, Advent_Pro, Italiana } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italiana = Italiana({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-italiana',
});

const adventPro = Advent_Pro({
  subsets: ['latin'],
  variable: '--font-advent-pro',
});

export const metadata: Metadata = {
  title: "Srikar Sistla",
  description: "This is my portfolio and my space to see fun stuff!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${adventPro.variable} ${italiana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
