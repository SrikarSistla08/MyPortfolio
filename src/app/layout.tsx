import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Srikar Sistla - Photographer, Developer, Analyst",
  description: "Multidisciplinary professional specializing in photography, software development, and business analysis. Based in Maryland.",
  keywords: ["photography", "software development", "business analysis", "data science", "web development"],
  authors: [{ name: "Srikar Sistla" }],
  icons: {
    icon: "/S2.svg",
    shortcut: "/S2.svg",
    apple: "/S2.svg",
  },
  openGraph: {
    title: "Srikar Sistla - Photographer, Developer, Analyst",
    description: "Multidisciplinary professional specializing in photography, software development, and business analysis.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/S2.svg",
        width: 1200,
        height: 630,
        alt: "Srikar Sistla Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}