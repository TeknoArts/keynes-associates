import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Book a consultation with Keynes Consultant. We listen first, then quote.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
