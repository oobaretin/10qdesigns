import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhiteScreen Tools | 10Q Designs",
  description: "Web Utility / Hardware Testing Suite — OLED maintenance, screen calibration, PWA.",
};

export default function WhiteScreenToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
