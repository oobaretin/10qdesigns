import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory & Sales Management Portal | 10Q Designs",
  description: "Business Operations & Sales Management",
};

export default function InventoryPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
