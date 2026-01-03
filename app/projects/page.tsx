import PageBanner from "@/components/global/PageBanner";
import ProjectsContent from "@/components/Projects/ProjectsContent";
import { getProjectsList } from "@/lib/projects";
import { createPageMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(
  "Projects",
  "View our portfolio of completed construction and renovation projects showcasing our expertise and quality workmanship.",
  "/projects"
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
