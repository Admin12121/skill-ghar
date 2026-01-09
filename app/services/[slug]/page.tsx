import PageBanner from "@/components/global/PageBanner";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import { getServiceBySlug, getAllServiceSlugs, getServicesList } from "@/lib/services";
import { createServiceMetadata } from "@/config/metadata";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const service = await getServiceBySlug(slug);
    const servicesList = getServicesList();

    return (
      <main>
        <PageBanner pageTitle={service.title} />
        <ServiceDetailsContent data={service} servicesList={servicesList} />
      </main>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const service = await getServiceBySlug(slug);
    
    return createServiceMetadata(
      service.title,
      service.excerpt || `Professional ${service.title.toLowerCase()} services in Nepal by Skill Griha. Expert solutions, quality workmanship, and affordable prices for all your construction and renovation needs.`,
      slug
    );
  } catch (error) {
    return {
      title: "Service Not Found",
    };
  }
}