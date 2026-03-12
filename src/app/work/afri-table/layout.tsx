import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afri-Table | 10Q Designs",
  description: "Premium Hospitality & Web Solutions",
};

export default function AfriTableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
