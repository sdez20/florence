import type { Metadata, Viewport } from "next";
import "./globals.css";
import AskFlorence from "./AskFlorence";

export const metadata: Metadata = {
  title: "Florence",
  description:
    "A holistic wellness companion for every season of a woman's life. AI-powered, culturally intelligent wellness for women.",
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
