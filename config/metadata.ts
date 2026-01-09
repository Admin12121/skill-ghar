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
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${siteConfig.name}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    siteName: siteConfig.name,
    url: siteConfig.url,
    type: "website",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@skill_griha",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    openGraph: {
      siteName: siteConfig.name,
      url,
      type: "website",
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@skill_griha",
      title,
      description,
      images: [siteConfig.ogImage],
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
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    title: `${title} Services`,
    description,
    keywords: serviceKeywords,
    openGraph: {
      siteName: siteConfig.name,
      url,
      type: "website",
      title: `${title} Services`,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@skill_griha",
      title: `${title} Services`,
      description,
      images: [siteConfig.ogImage],
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
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    title,
    description,
    keywords: projectKeywords,
    openGraph: {
      siteName: siteConfig.name,
      url,
      type: "website",
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@skill_griha",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
};

export default siteConfig;
