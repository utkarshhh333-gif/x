import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsh - Web Systems & AI Integration",
  description:
    "Premium websites, AI automation, and AI integration for modern businesses.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Utkarsh - Web Systems & AI Integration",
    description:
      "Premium websites, AI automation, and AI integration for modern businesses.",
    type: "website",
    url: "/",
    siteName: "Utkarsh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh - Web Systems & AI Integration",
    description:
      "Premium websites, AI automation, and AI integration for modern businesses.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0A0A0A",
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
