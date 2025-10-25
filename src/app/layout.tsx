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
  openGraph: {
    title: "Srikar Sistla - Photographer, Developer, Analyst",
    description: "Multidisciplinary professional specializing in photography, software development, and business analysis.",
    type: "website",
    locale: "en_US",
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