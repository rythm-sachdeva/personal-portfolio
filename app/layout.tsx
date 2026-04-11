import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rythm Sachdeva",
  description: "Personal portfolio of Rythm Sachdeva, showcasing projects, blog posts, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-white`}
      >
        <Navbar/>
       <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
