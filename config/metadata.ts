import type { Metadata } from "next";

const siteConfig = {
  name: "Skill Griha",
  title: "Skill Griha - Building Construction & Renovation Company",
  description:
    "Professional building construction and renovation services. We specialize in home renovation, modular kitchens, waterproofing, roofing, washroom remodeling, and electrical & plumbing services.",
  url: "https://skillgriha.com",
  ogImage: "/images/og.webp",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61572493181532",
    instagram: "https://www.instagram.com/skill_griha/",
    tiktok: "https://www.tiktok.com/@skillgriha1",
  },
};

export const defaultMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const createPageMetadata = (
  title: string,
  description: string,
  path: string = ""
): Metadata => {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
};

export const createServiceMetadata = (
  title: string,
  description: string,
  slug: string
): Metadata => {
  const fullTitle = `${title} Services | ${siteConfig.name}`;
  const url = `${siteConfig.url}/services/${slug}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
};

export default siteConfig;
