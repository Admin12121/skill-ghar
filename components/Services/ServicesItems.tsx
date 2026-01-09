"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchServices } from "@/lib/services-actions";

interface ServiceItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  linkHref: string;
  index?: number;
}

function truncateDescription(text: string, maxLength: number = 120): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

const ServicesItems = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  const serviceAreaRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 


  useEffect(() => {
    const loadServices = async () => {
      try {
        const servicesList = await fetchServices();
        const loadedServices: ServiceItem[] = servicesList.map((service) => ({
          id: service.index ?? 1,
          imageSrc: `/images/services/${service.slug}.jpg`,
          title: service.title,
          description: truncateDescription(service.excerpt || service.title, 120),
          linkHref: `/services/${service.slug}`,
          index: service.index,
        }));
        setServices(loadedServices);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    
    loadServices();
  }, []);

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    if (serviceAreaRef.current) {
      serviceAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const showPagination = totalPages > 1;

  return (
    <main>
      <div className="service-area ptb-120" ref={serviceAreaRef}>
        <div className="container">
          {loading ? (
            <div className="text-center py-5">Loading services...</div>
          ) : (
            <>
              <div className="row justify-content-center">
                {currentServices.map((service) => (
                  <div className="col-xxl-3 col-xl-4 col-md-6" key={service.id}>
                <div className="service-card style-two mb-50">
                  <div
                    className={`service-img rounded-two transition`}
                  >
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={196}
                      height={180}
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                      className="transition"
                    />
                  </div>
                  <h3>
                    <Link
                      href={service.linkHref}
                      className="text-title link-hover-primary transition"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mb-12">{service.description}</p>
                  <Link
                    href={service.linkHref}
                    className="link style-one fw-semibold"
                  >
                    Read More{" "}
                    <Image
                      src="/images/icons/right-arrow-small.svg"
                      alt="Icon"
                      width={15}
                      height={12}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {showPagination && (
            <ul className="page-nav pagination justify-content-center mb-0 mt-lg-4">
              <li className="page-item">
                <button
                  type="button"
                  className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
                  onClick={() =>
                    handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                  }
                  disabled={currentPage === 1}
                >
                  <Image
                    src="/images/icons/left-long-arrow-gray.svg"
                    alt="Icon"
                    width={16}
                    height={12}
                  />
                </button>
              </li>

              {pageNumbers.map((number) => (
                <li className="page-item" key={number}>
                  <button
                    type="button"
                    className={`page-link d-flex flex-column align-items-center justify-content-center rounded-circle ${
                      currentPage === number ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(number)}
                  >
                    {number.toString().padStart(2, "0")}
                  </button>
                </li>
              ))}

              <li className="page-item">
                <button
                  type="button"
                  className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
                  onClick={() =>
                    handlePageChange(
                      currentPage < totalPages ? currentPage + 1 : totalPages
                    )
                  }
                  disabled={currentPage === totalPages}
                >
                  <Image
                    src="/images/icons/right-long-arrow-gray.svg"
                    alt="Icon"
                    width={16}
                    height={12}
                  />
                </button>
              </li>
            </ul>
          )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default ServicesItems;
