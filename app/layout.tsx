import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photography Websites by Kalana Square",
  description: "Modern, fully managed websites for Sri Lankan photographers. Portfolio, pricing, WhatsApp enquiries, hosting and updates from one monthly plan.",
  other: { "codex-preview": "development" },
  openGraph: {
    title: "Photography Websites by Kalana Square",
    description: "A modern website. Managed for you.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Websites by Kalana Square",
    description: "A modern website. Managed for you.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
