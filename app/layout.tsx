import type { Metadata, Viewport } from "next";
import "./globals.css";
import AskFlorence from "./AskFlorence";

export const metadata: Metadata = {
  title: "Florence",
  description:
    "A holistic wellness companion for every season of a woman's life. AI-powered, culturally intelligent wellness for women.",
};

// Phones render the same desktop design scaled to fit the screen — one site,
// one deployment, no separate mobile version to maintain.
export const viewport: Viewport = {
  width: 1280,
  // Clear Next's default initial-scale=1 so phones fit the 1280 design to the
  // screen width (zoom to fit) instead of showing it 1:1 with horizontal scroll.
  initialScale: undefined,
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
