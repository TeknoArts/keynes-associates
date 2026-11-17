import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge",
  description:
    "Practical KRA tax guides for Kenyan founders, SMEs, and professionals — from Keynes Consultant.",
};

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
