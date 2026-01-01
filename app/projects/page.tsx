import PageBanner from "@/components/Common/PageBanner";
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
