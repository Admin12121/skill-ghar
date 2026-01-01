import PageBanner from "@/components/global/PageBanner";
import Footer from "@/components/sitefooter";
import ServicesItems from "@/components/Services/ServicesItems";

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Services" />

      <ServicesItems />
    </>
  );
}
