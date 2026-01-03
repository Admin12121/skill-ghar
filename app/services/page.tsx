import PageBanner from "@/components/global/PageBanner";
import ServicesItems from "@/components/Services/ServicesItems";
import { createPageMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Professional building construction and renovation services including home renovation, modular kitchens, waterproofing, roofing, washroom remodeling, and electrical & plumbing services.",
  "/services"
);

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Services" />

      <ServicesItems />
    </>
  );
}
