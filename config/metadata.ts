import type { Metadata } from "next";

const siteConfig = {
  name: "Skill Griha",
  title: "Skill Griha - पुरानो घर नया स्वरुप | Expert Home Renovation & Construction",
  description:
    "Transform your home with Skill Griha - Nepal's trusted construction and renovation experts. Specializing in home renovation, modular kitchens, waterproofing, roofing, bathroom remodeling, and electrical & plumbing services. Quality workmanship, affordable prices.",
  keywords: [
    "home renovation Nepal",
    "construction services",
    "modular kitchen installation",
    "waterproofing services",
    "roofing solutions",
    "bathroom remodeling",
    "electrical plumbing services",
    "building construction",
    "renovation experts",
    "Skill Griha"
  ],
  url: "https://skillgriha.com",
  ogImage: "/images/og.jpg",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61586108699236",
    instagram: "https://www.instagram.com/skill_griha/",
    tiktok: "https://www.tiktok.com/@skillgriha1",
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
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
        alt: `${siteConfig.name} - Home Renovation & Construction Services`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@skill_griha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export const createPageMetadata = (
  title: string,
  description: string,
  path: string = "",
  keywords?: string[]
): Metadata => {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
      creator: "@skill_griha",
    },
    robots: {
      index: true,
      follow: true,
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
  const url = `${siteConfig.url}/services/${slug}`;
  const serviceKeywords = [
    title,
    `${title} services`,
    `${title} Nepal`,
    ...siteConfig.keywords,
  ];

  return {
    title: `${title} Services`,
    description,
    keywords: serviceKeywords,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: `${title} Services | ${siteConfig.name}`,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} Services - ${siteConfig.name}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} Services | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
      creator: "@skill_griha",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  };
};

export const createProjectMetadata = (
  title: string,
  description: string,
  slug: string
): Metadata => {
  const url = `${siteConfig.url}/projects/${slug}`;
  const projectKeywords = [
    title,
    "construction project",
    "renovation project",
    ...siteConfig.keywords,
  ];

  return {
    title,
    description,
    keywords: projectKeywords,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
      creator: "@skill_griha",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  };
};

export default siteConfig;
