import PageBanner from "@/components/global/PageBanner";
import ServicesItems from "@/components/Services/ServicesItems";
import { createPageMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(
  "Our Services",
  "Comprehensive construction and renovation services in Nepal. Expert solutions for home renovation, modular kitchen installation, waterproofing, roofing, bathroom remodeling, and electrical & plumbing work. Affordable prices, quality guaranteed.",
  "/services",
  ["construction services Nepal", "home renovation services", "modular kitchen Nepal", "waterproofing contractor", "roofing services", "bathroom renovation", "electrical plumbing work", "building services"]
);

export default function Page() {
  return (
    <main>
      <PageBanner pageTitle="Services" />

      <ServicesItems />
    </main>
  );
}
