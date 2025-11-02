import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Fixit",
  description:
    "Fixit makes it easy to find and hire verified local experts for home maintenance, repairs, and installations — safe, simple, and affordable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
