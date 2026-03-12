import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10Q Designs | Full-Stack Engineer & AI Architect",
  description:
    "Professional portfolio of Osagie Obaretin, specializing in Next.js, AI integrations, and high-performance SaaS solutions. Based in Houston, TX.",
  keywords: [
    "Full-Stack Developer",
    "Prompt Engineer",
    "Next.js",
    "SaaS Development",
    "Houston Web Developer",
    "AI Wrapper",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Osagie Obaretin", url: "https://10qdesigns.com" }],
  openGraph: {
    title: "10Q Designs",
    description:
      "Full-stack engineer & AI architect. Next.js, AI integrations, and high-performance SaaS solutions. Houston, TX.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "10Q Designs",
    description:
      "Full-stack engineer & AI architect. Next.js, AI integrations, and high-performance SaaS solutions. Houston, TX.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-zinc-950 antialiased`}
      >
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
