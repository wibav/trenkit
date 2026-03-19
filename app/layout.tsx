import "@/styles/globals.scss";
import type { Metadata } from "next";

const siteUrl = "https://trenkit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trenkit — Mobile Apps & Games Development Studio",
    template: "%s | Trenkit",
  },
  description:
    "Trenkit is a development studio that builds high-performance mobile applications and video games. We turn your ideas into world-class digital experiences for iOS, Android, and Web.",
  keywords: [
    "mobile app development",
    "game development",
    "React Native apps",
    "Unity games",
    "iOS development",
    "Android development",
    "Next.js web apps",
    "indie game studio",
    "mobile game studio",
    "app development studio",
  ],
  authors: [{ name: "Trenkit", url: siteUrl }],
  creator: "Trenkit",
  publisher: "Trenkit",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Trenkit",
    title: "Trenkit — Mobile Apps & Games Development Studio",
    description:
      "High-performance mobile applications and video games built with cutting-edge technology. iOS, Android, Web & Unity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trenkit — Apps & Games Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trenkit — Mobile Apps & Games Development Studio",
    description:
      "High-performance mobile applications and video games built with cutting-edge technology.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
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
        <meta name="theme-color" content="#00e5ff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
