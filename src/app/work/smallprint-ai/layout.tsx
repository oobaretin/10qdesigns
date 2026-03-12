import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmallPrint AI | 10Q Designs",
  description: "AI-Powered Legal Document Analysis",
};

export default function SmallPrintAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
