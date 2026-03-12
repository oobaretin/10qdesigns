import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makola Marketplace | 10Q Designs",
  description: "Grocery Utility & Shopping Lists for Houston",
};

export default function MakolaMarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
