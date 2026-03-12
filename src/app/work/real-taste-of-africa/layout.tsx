import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Taste of Africa | 10Q Designs",
  description: "Digital Directory for Texas Culinary Businesses",
};

export default function RealTasteOfAfricaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
