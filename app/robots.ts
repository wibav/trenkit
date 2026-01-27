import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://trenkit.com/sitemap.xml",
    host: "https://trenkit.com",
  };
}
