import PageBanner from "@/components/global/PageBanner";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import { getServicesList } from "@/lib/services";
import { createPageMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(
  "Contact Us",
  "Get in touch with Skill Griha. We're here to answer your questions and help you with your construction and renovation projects.",
  "/contact-us"
);

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
