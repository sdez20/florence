import type { Metadata, Viewport } from "next";
import "./globals.css";
import AskFlorence from "./AskFlorence";

export const metadata: Metadata = {
  title: "Florence",
  description:
    "A culturally grounded nutrition AI for women. Personalized guidance built on the food you already cook, informed by five disciplines of women's health.",
};

// Responsive: the same design reflows to a readable full-width layout on phones.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AskFlorence />
      </body>
    </html>
  );
}
