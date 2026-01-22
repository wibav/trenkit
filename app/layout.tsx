import "@/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://trenkit.com"),
  title: "Trenkit - Apps y Juegos Móviles",
  description:
    "Creamos aplicaciones móviles y videojuegos innovadores que impulsan tu idea. Servicios de desarrollo para iOS, Android y cross-platform.",
  keywords:
    "apps móviles, juegos móviles, desarrollo Android, desarrollo iOS, videojuegos",
  authors: [{ name: "Trenkit" }],
  creator: "Trenkit",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://trenkit.com",
    siteName: "Trenkit",
    title: "Trenkit - Apps y Juegos Móviles",
    description:
      "Creamos aplicaciones móviles y videojuegos innovadores que impulsan tu idea.",
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
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A66C2" />
      </head>
      <body>{children}</body>
    </html>
  );
}
