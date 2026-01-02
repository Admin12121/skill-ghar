import PageBanner from "@/components/global/PageBanner";
import Footer from "@/components/sitefooter";
import ProjectDetailsContent from "@/components/Projects/ProjectDetailsContent";

export default function Page() {
  return (
    <main>
      <PageBanner pageTitle="Project Details" />

      <ProjectDetailsContent />
    </main>
  );
}
