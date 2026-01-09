import PageBanner from "@/components/global/PageBanner";
import ProjectsContent from "@/components/Projects/ProjectsContent";
import { getProjectsList } from "@/lib/projects";
import { createPageMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(
  "Our Projects",
  "Explore Skill Griha's portfolio of completed construction and renovation projects. See real transformations including home renovations, modular kitchens, bathroom remodeling, and roofing installations. Quality work that speaks for itself.",
  "/projects",
  ["construction projects Nepal", "renovation portfolio", "completed projects", "home transformation", "before after renovation", "construction work gallery", "building projects"]
);

export default async function Page() {
  const projects = getProjectsList();

  return (
    <main>
      <PageBanner pageTitle="Projects" />

      <ProjectsContent projects={projects} />
    </main>
  );
}
