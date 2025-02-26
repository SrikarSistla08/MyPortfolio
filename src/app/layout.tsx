import type { Metadata } from "next";
import { Geist, Geist_Mono, Advent_Pro, Italiana, Bai_Jamjuree, Montserrat, Rajdhani} from "next/font/google";
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

const rajdhani = Rajdhani({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-rajdhani',
});

const baiJamjuree = Bai_Jamjuree({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-bai-jamjuree',
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-montserrat',
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
        className={`${geistSans.variable} ${geistMono.variable} ${adventPro.variable} ${italiana.variable} ${baiJamjuree.variable} ${montserrat.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
