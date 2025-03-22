import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nebula UI",
  description:
    "A modern UI library built with Next.js and designed for flexibility and performance.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialised`}>{children}</body>
    </html>
  );
}
