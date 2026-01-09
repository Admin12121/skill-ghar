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
      imageSrc: "/images/services/home-renovation.jpg",
      title: "Home Renovation & Remodeling",
      description:
        "We redesign and upgrade homes to improve comfort, style, and usability, whether it is one room or the whole house.",
      linkHref: "/services/home-renovation",
    },
    {
      id: 2,
      imageSrc: "/images/services/modular-kitchen.jpg",
      title: "Modular Kitchen Installation",
      description:
        "We create smart, stylish, and practical modular kitchens with quality materials and thoughtful layouts.",
      linkHref: "/services/modular-kitchen",
    },
    {
      id: 3,
      imageSrc: "/images/services/water-proofing.jpg",
      title: "Waterproofing Solutions",
      description:
        "We protect your home from leakage and dampness with reliable waterproofing for bathrooms, roofs, walls, and more.",
      linkHref: "/services/water-proofing",
    },
    {
      id: 4,
      imageSrc: "/images/services/roofing.jpg",
      title: "Roofing Installation",
      description:
        "We install strong and durable roofing including toughened glass, UPVC, fibre, and polycarbonate options with neat finishing.",
      linkHref: "/services/roofing",
    },
    {
      id: 5,
      imageSrc: "/images/services/washroom-remoduling.jpg",
      title: "Bathroom & Washroom Remodeling",
      description:
        "We upgrade bathrooms into clean, modern, and comfortable spaces with proper fittings, layout, and waterproofing.",
      linkHref: "/services/washroom-remoduling",
    },
    {
      id: 6,
      imageSrc: "/images/services/electric-and-plumbing.jpg",
      title: "Electrical & Plumbing Services",
      description:
        "We provide safe and reliable electrical and plumbing support for installations, repairs, and maintenance to keep your home running smoothly.",
      linkHref: "/services/electric-and-plumbing",
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
