"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Define TypeScript interface for our data structure
interface ServiceItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  linkHref: string;
}

const ServicesItems = () => {
  // Dynamic data for services
  const services: ServiceItem[] = [
    {
      id: 1,
      imageSrc: "/images/services/service-1.jpg",
      title: "Custom Home Construction",
      description:
        "From foundation to finish, we build fully personalized homes match in your vision, budget",
      linkHref: "/services/details/",
    },
    {
      id: 2,
      imageSrc: "/images/services/service-2.jpg",
      title: "Foundation & Structural Work",
      description:
        "Expert excavation, concrete pouring, and structural framing to ensure long-lasting",
      linkHref: "/services/details/",
    },
    {
      id: 3,
      imageSrc: "/images/services/service-3.jpg",
      title: "Home Additions & Extensions",
      description:
        "Expand your living space with professionally built rooms arages or second-story",
      linkHref: "/services/details/",
    },
    {
      id: 4,
      imageSrc: "/images/services/service-4.jpg",
      title: "Roofing & Exterior Finishing",
      description:
        "Durable roofing, siding, windows, and exterior details that boost curb appeal",
      linkHref: "/services/details/",
    },
    {
      id: 5,
      imageSrc: "/images/services/service-5.jpg",
      title: "Architectural Design & Planning",
      description:
        "This section can be styled in a clean, modern 3-column layout with subtle hover effects",
      linkHref: "/services/details/",
    },
    {
      id: 6,
      imageSrc: "/images/services/service-6.jpg",
      title: "Renovation & Remodeling",
      description:
        "we provide a full spectrum services that seamlessly of real estate and construction",
      linkHref: "/services/details/",
    },
    {
      id: 7,
      imageSrc: "/images/services/service-7.jpg",
      title: "Property Sales & Brokerage",
      description:
        "The construction side, we offer end-to-end solutions including architectural design",
      linkHref: "/services/details/",
    },
    {
      id: 8,
      imageSrc: "/images/services/service-8.jpg",
      title: "Project Management",
      description:
        "Real estate with confidence, Edifico delivers trusted, timely, and high-quality service",
      linkHref: "/services/details/",
    },
    {
      id: 9,
      imageSrc: "/images/services/service-7.jpg",
      title: "Property Sales & Brokerage",
      description:
        "The construction side, we offer end-to-end solutions including architectural design",
      linkHref: "/services/details/",
    },
    {
      id: 10,
      imageSrc: "/images/services/service-5.jpg",
      title: "Architectural Design & Planning",
      description:
        "This section can be styled in a clean, modern 3-column layout with subtle hover effects",
      linkHref: "/services/details/",
    },
    {
      id: 11,
      imageSrc: "/images/services/service-4.jpg",
      title: "Roofing & Exterior Finishing",
      description:
        "Durable roofing, siding, windows, and exterior details that boost curb appeal",
      linkHref: "/services/details/",
    },
    {
      id: 12,
      imageSrc: "/images/services/service-6.jpg",
      title: "Renovation & Remodeling",
      description:
        "we provide a full spectrum services that seamlessly of real estate and construction",
      linkHref: "/services/details/",
    },
  ];

  // Create a ref for the service area container
  const serviceAreaRef = useRef<HTMLDivElement>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  // Calculate pagination values
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    // Scroll to top of service area when page changes
    if (serviceAreaRef.current) {
      serviceAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to determine image style class based on service ID
  const getImageStyleClass = (id: number): string => {
    switch (id) {
      case 1:
        return "semiround-left";
      case 2:
        return "rounded-corner";
      case 3:
        return "semiround-right";
      case 4:
        return "rounded-circle";
      case 5:
        return "rounded-corner";
      case 6:
        return "rounded-two";
      case 7:
        return "rounded-circle";
      case 8:
        return "rounded-two";
      case 9:
        return "semiround-left";
      case 10:
        return "rounded-corner";
      case 11:
        return "semiround-right";
      case 12:
        return "rounded-circle";
      case 13:
        return "rounded-corner";
      case 14:
        return "rounded-two";
      case 15:
        return "rounded-circle";
      case 16:
        return "rounded-two";
      case 17:
        return "semiround-left";
      case 18:
        return "rounded-corner";
      case 19:
        return "semiround-right";
      case 20:
        return "rounded-circle";
      case 21:
        return "rounded-corner";
      case 22:
        return "rounded-two";
      case 23:
        return "rounded-circle";
      case 24:
        return "rounded-two";
      default:
        return "rounded-corner"; // Default class
    }
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Only show pagination if there are more than 6 items (totalPages > 1)
  const showPagination = totalPages > 1;

  return (
    <>
      <div className="service-area ptb-120" ref={serviceAreaRef}>
        <div className="container">
          <div className="row justify-content-center">
            {currentServices.map((service) => (
              <div className="col-xxl-3 col-xl-4 col-md-6" key={service.id}>
                <div className="service-card style-two mb-50">
                  <div
                    className={`service-img ${getImageStyleClass(
                      service.id
                    )} transition`}
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

          {/* pagination - only show if there are more than 6 items */}
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
        </div>
      </div>
    </>
  );
};

export default ServicesItems;
