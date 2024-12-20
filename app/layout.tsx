import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import {Anek_Telugu} from "next/font/google"

const AnekTelugu = Anek_Telugu({subsets: ["latin"],variable:"--font-caption"});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "MALIK Adjémian - FullStack Developer",
  description: "Aspiring fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(GeistSans.variable, GeistMono.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
