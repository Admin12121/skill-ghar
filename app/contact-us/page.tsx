import PageBanner from "@/components/global/PageBanner";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import { getServicesList } from "@/lib/services";
import { createPageMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(
  "Contact Us",
  "Get in touch with Skill Griha for a free consultation. Call +977 9812788387 or visit our office in Kathmandu. We're ready to help with your construction and renovation needs. Fast response, professional service.",
  "/contact-us",
  ["contact skill griha", "construction inquiry", "renovation quote", "free consultation", "building contractor contact", "renovation company Nepal", "construction help"]
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
