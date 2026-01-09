import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const servicesDirectory = path.join(
  process.cwd(),
  "features/site/content/services"
);

export interface ServiceData {
  slug: string;
  index?: number;
  title: string;
  heroImage: string;
  excerpt: string;
  overview: string;
  content: string;
  features?: Array<{
    icon: string;
    title: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  servicesOffered?: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ServiceListItem {
  slug: string;
  title: string;
  index?: number;
  excerpt?: string;
  heroImage?: string;
}

export async function getServiceBySlug(slug: string): Promise<ServiceData> {
  const fullPath = path.join(servicesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    index: data.index,
    title: data.title,
    heroImage: data.heroImage,
    excerpt: data.excerpt,
    overview: data.overview,
    content: contentHtml,
    features: data.features,
    testimonial: data.testimonial,
    servicesOffered: data.servicesOffered,
    faqs: data.faqs,
  };
}

export function getAllServiceSlugs() {
  const fileNames = fs.readdirSync(servicesDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ""),
    }));
}

export function getServicesList(): ServiceListItem[] {
  const fileNames = fs.readdirSync(servicesDirectory);

  const services = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(servicesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      
      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title,
        index: data.index,
        excerpt: data.excerpt,
        heroImage: data.heroImage,
      };
    });

  return services.sort((a, b) => {
    const aIndex = a.index ?? Infinity;
    const bIndex = b.index ?? Infinity;
    return aIndex - bIndex;
  });
}

export function getServicesForMenu() {
  const fileNames = fs.readdirSync(servicesDirectory);

  const services = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(servicesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const slug = fileName.replace(/\.mdx$/, "");
      
      return {
        label: data.title,
        href: `/services/${slug}`,
        index: data.index,
      };
    });

  return services.sort((a, b) => {
    const aIndex = a.index ?? Infinity;
    const bIndex = b.index ?? Infinity;
    return aIndex - bIndex;
  });
}