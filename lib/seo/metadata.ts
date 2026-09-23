import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,

    title: siteConfig.title,

    description: siteConfig.description,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Full Stack Developer from Nepal`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@pradipchaudhary", // Replace with your handle if you have one
    creator: "@pradipchaudhary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.twitterImage],
  },
  category: "Technology",
  verification: {
    google:
      "google-site-verification=HiE84E4kBt1bJ-0_dnIXM7FzBGG5xkrRyD58d45O9Hc", // add if available
  },
};
