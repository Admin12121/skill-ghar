import PageBanner from "@/components/global/PageBanner";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import Footer from "@/components/sitefooter";
import { getServicesList } from "@/lib/services";

export default function Page() {
  const services = getServicesList();

  return (
    <main>
      <PageBanner pageTitle="Contact Us" />

      <ContactInfo />

      <ContactForm services={services} />
    </main>
  );
}
