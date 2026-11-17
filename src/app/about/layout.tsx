import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Keynes Consultant — premium KRA tax advisors on Taifa Road, Nairobi.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
