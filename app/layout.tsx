import "@/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://trenkit.com"),
  title: "Trenkit - Mobile Apps & Games Development",
  description:
    "We create innovative mobile applications and video games that empower your idea. Professional development services for iOS, Android, and cross-platform.",
  keywords:
    "mobile apps, mobile games, Android development, iOS development, video games",
  authors: [{ name: "Trenkit" }],
  creator: "Trenkit",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trenkit.com",
    siteName: "Trenkit",
    title: "Trenkit - Mobile Apps & Games Development",
    description:
      "We create innovative mobile applications and video games that empower your idea.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trenkit",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00AEE9" />
      </head>
      <body>{children}</body>
    </html>
  );
}
