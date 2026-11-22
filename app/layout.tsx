import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trackly — Track. Organize. Get Hired.",
  description:
    "Keep all your job applications, interviews, and career progress in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` ${inter.variable} ${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
