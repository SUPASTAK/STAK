import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Stack",
  description: "A Supastak Next.js application starter.",
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
