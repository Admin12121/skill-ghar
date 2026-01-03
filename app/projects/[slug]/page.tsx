import PageBanner from "@/components/global/PageBanner";
import ProjectDetailsContent from "@/components/Projects/ProjectDetailsContent";
import { getProjectBySlug, getAllProjectSlugs, getProjectsList } from "@/lib/projects";
import { createPageMetadata } from "@/config/metadata";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const project = await getProjectBySlug(slug);
    const projectsList = getProjectsList();

    return (
      <main>
        <PageBanner pageTitle={project.title} />
        <ProjectDetailsContent data={project} projectsList={projectsList} />
      </main>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const project = await getProjectBySlug(slug);
    
    return createPageMetadata(
      project.title,
      project.excerpt || project.title,
      `/projects/${slug}`
    );
  } catch (error) {
    return {
      title: "Project Not Found",
    };
  }
}
