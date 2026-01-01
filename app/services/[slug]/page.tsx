import PageBanner from "@/components/global/PageBanner";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import { getServiceBySlug, getAllServiceSlugs, getServicesList } from "@/lib/services";
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
    
    return {
      title: service.title,
      description: service.excerpt,
    };
  } catch (error) {
    return {
      title: "Service Not Found",
    };
  }
}