import "@/styles/globals.scss";
import type { Metadata } from "next";

const siteUrl = "https://trenkit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trenkit Studio | Experiencias Digitales",
    template: "%s | Trenkit Studio",
  },
  description:
    "Creamos experiencias digitales con apps, juegos y plataformas web. Diseño de alto impacto y tecnología de vanguardia.",
  keywords: [
    "desarrollo de apps",
    "desarrollo de videojuegos",
    "Unity",
    "React",
    "React Native",
    "Next.js",
    "diseño UX/UI",
    "estudio digital",
  ],
  authors: [{ name: "Trenkit Studio" }],
  creator: "Trenkit Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Trenkit Studio",
    title: "Trenkit Studio | Experiencias Digitales",
    description:
      "Creamos experiencias digitales con apps, juegos y plataformas web.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trenkit Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trenkit Studio | Experiencias Digitales",
    description:
      "Apps, juegos y plataformas web con diseño de alto impacto.",
    images: ["/og-image.png"],
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
        <meta name="theme-color" content="#0B0F18" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Trenkit Studio",
              url: siteUrl,
              logo: `${siteUrl}/icon.svg`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Trenkit Studio",
              url: siteUrl,
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
