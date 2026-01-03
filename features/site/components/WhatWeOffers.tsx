import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface ServiceCard {
  id: number;
  counter: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

function truncateDescription(text: string, maxLength: number = 80): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

async function getServicesForCards(): Promise<ServiceCard[]> {
  const servicesDirectory = path.join(
    process.cwd(),
    "features/site/content/services"
  );

  const fileNames = fs.readdirSync(servicesDirectory);
  const services: ServiceCard[] = [];

  fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .forEach((fileName, index) => {
      const fullPath = path.join(servicesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const slug = fileName.replace(/\.mdx$/, "");

      // Cycle through icons to ensure variety
      const icons = [
        "/images/services/service-icon-1.png",
        "/images/services/service-icon-2.png",
        "/images/services/service-icon-3.png",
        "/images/services/service-icon-4.png",
      ];
      const iconIndex = index % icons.length;

      services.push({
        id: index + 1,
        counter: String(index + 1).padStart(2, "0"),
        title: data.title,
        description: truncateDescription(data.excerpt, 80),
        icon: icons[iconIndex],
        link: `/services/${slug}`,
      });
    });

  return services;
}

export default async function WhatWeOffers() {
  const serviceData = await getServicesForCards();

  return (
    <div className="service-area style-one position-relative z-2 pt-120 pb-90 mx-xxl-4 round-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 text-center px-xxl-5">
              <h6 className="section-subtitle style-one fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20 flex flex-row gap-2 justify-center items-center ">
                <Home className="size-4" />
                WHAT WE OFFER
              </h6>
              <h2 className="section-title style-one text-title px-xxl-5 mb-40">
                Professional{" "}
                <span className="fw-black">Home Renovation & Improvement Services</span>{" "}
                We Provide
              </h2>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row justify-content-center">
            {serviceData.map((service) => (
              <div key={service.id} className="col-xxl-3 col-xl-4 col-md-6">
                <div className="service-card style-one bg-white round-10 mb-30 transition">
                  <span className="service-counter fw-semibold d-block transition">
                    {service.counter}
                  </span>
                  <h3 className="fw-semibold">
                    <Link
                      href={service.link}
                      className="text-title link-hover-primary transition"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={170}
                    height={170}
                    className="service-icon d-block"
                  />
                  <div className="service-para d-flex flex-wrap align-items-center justify-content-between">
                    <p className="mb-0">{service.description}</p>
                    <Link
                      href={service.link}
                      className="service-link d-flex flex-column align-items-center justify-content-center rounded-circle"
                    >
                      <Image
                        src="/images/icons/up-right-arrow-orange.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                        className="transition"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-xl-4">
            Discover top-tier renovation services{" "}
            <Link href="/services" className="link style-one fw-semibold">
              View All Services{" "}
              <Image
                src="/images/icons/right-arrow-long.svg"
                alt="Icon"
                width={21}
                height={16}
              />
            </Link>
          </p>
        </div>
      </div>
  );
}
