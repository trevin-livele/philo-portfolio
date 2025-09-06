import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PortfolioLayout from "@/components/PortfolioLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M&E.tech - Smart Monitoring & Evaluation",
  description: "Professional portfolio showcasing expertise in monitoring, evaluation, data analytics, and machine learning for development programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PortfolioLayout>
          {children}
        </PortfolioLayout>
      </body>
    </html>
  );
}
