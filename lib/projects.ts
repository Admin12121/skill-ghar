import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(
  process.cwd(),
  "features/site/content/projects"
);

export interface ProjectData {
  slug: string;
  title: string;
  heroImage: string;
  status: string;
  excerpt: string;
  location: string;
  completionDate: string;
  projectValue: string;
  overview: string;
  content: string;
  gallery?: string[];
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
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ProjectListItem {
  id: number;
  slug: string;
  title: string;
  status: string;
  backgroundImage: string;
  excerpt: string;
}

export async function getProjectBySlug(slug: string): Promise<ProjectData> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    heroImage: data.heroImage,
    status: data.status,
    excerpt: data.excerpt,
    location: data.location,
    completionDate: data.completionDate,
    projectValue: data.projectValue,
    overview: data.overview,
    content: contentHtml,
    gallery: data.gallery || [],
    features: data.features || [],
    testimonial: data.testimonial,
    faqs: data.faqs || [],
  };
}

export function getAllProjectSlugs(): Array<{ slug: string }> {
  const files = fs.readdirSync(projectsDirectory);
  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export function getProjectsList(): ProjectListItem[] {
  const files = fs.readdirSync(projectsDirectory);

  const projects = files.map((file, index) => {
    const fullPath = path.join(projectsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: index + 1,
      slug: file.replace(".mdx", ""),
      title: data.title,
      status: data.status,
      backgroundImage: data.heroImage,
      excerpt: data.excerpt,
    };
  });

  return projects;
}
