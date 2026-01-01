import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/sitefooter";
import ProjectDetailsContent from "@/components/Projects/ProjectDetailsContent";

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Project Details" />

      <ProjectDetailsContent />
    </>
  );
}
