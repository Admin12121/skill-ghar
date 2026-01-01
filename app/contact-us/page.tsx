import PageBanner from "@/components/global/PageBanner";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import Footer from "@/components/sitefooter";

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Contact Us" />

      <ContactInfo />

      <ContactForm />
    </>
  );
}
