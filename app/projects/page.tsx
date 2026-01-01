import PageBanner from "@/components/global/PageBanner";
import Footer from "@/components/sitefooter";
import ProjectsContent from "@/components/Projects/ProjectsContent";

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Projects" />

      <ProjectsContent />
    </>
  );
}
