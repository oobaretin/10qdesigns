import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niki's African Hair Braiding | 10Q Designs",
  description: "Professional Business Web Presence",
};

export default function NikisHairBraidingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
