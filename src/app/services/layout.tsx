import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Company registration, KRA PIN, iTax audits, bookkeeping, and tax file checks — consultation first, quote after.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
