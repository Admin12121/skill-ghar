"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const TestimonialsItems = () => {
  // Dynamic testimonials data
  const testimonialsData = [
    {
      id: 1,
      name: "Chloe Bennett",
      position: "Relations Manager",
      rating: 4.5,
      quote:
        "From the first consultation to final reveal, Edifico made our They truly our ideas and brought with incredible.",
    },
    {
      id: 2,
      name: "Ramu biharilal",
      position: "Founder",
      rating: 4.5,
      quote:
        "Working with Edifico felt like working with family. They genuinely cared about our vision and built us a home that feels",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "CEO",
      rating: 5,
      quote:
        "Edifico exceeded all our expectations. Their attention to detail and professionalism is unmatched in the industry.",
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "Marketing Director",
      rating: 4,
      quote:
        "The team at Edifico transformed our commercial space into something truly remarkable. Highly recommend their.",
    },
    {
      id: 5,
      name: "David Chen",
      position: "Property Developer",
      rating: 5,
      quote:
        "Innovative solutions and exceptional craftsmanship. Edifico delivered a project that exceeded our vision.",
    },
    {
      id: 6,
      name: "Emma Thompson",
      position: "Interior Designer",
      rating: 4.5,
      quote:
        "Collaborating with Edifico was a seamless experience. They brought creative solutions to every challenge we faced.",
    },
    {
      id: 7,
      name: "Olivia Martinez",
      position: "Homeowner",
      rating: 5,
      quote:
        "Transparent pricing and clear timelines. The final result was beyond what we imagined.",
    },
    {
      id: 8,
      name: "Noor Ahmed",
      position: "Project Manager",
      rating: 4.5,
      quote:
        "The site team was punctual and professional; coordination was smooth from start to finish.",
    },
    {
      id: 9,
      name: "Priya Kapoor",
      position: "Architect",
      rating: 4.5,
      quote:
        "Edifico respected the design intent and elevated it with thoughtful execution.",
    },
    {
      id: 10,
      name: "Lucas Brown",
      position: "Facilities Lead",
      rating: 4,
      quote:
        "A reliable partner for our office renovation—on schedule and within budget.",
    },
    {
      id: 11,
      name: "Aisha Khan",
      position: "Entrepreneur",
      rating: 5,
      quote:
        "Craftsmanship is top-tier. The attention to detail shows in every corner.",
    },
    {
      id: 12,
      name: "Daniel Park",
      position: "Real Estate Investor",
      rating: 4.5,
      quote:
        "They handled permits and vendors seamlessly, making the process stress-free.",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 6 testimonials per page (matching original layout)

  // Calculate pagination values
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimonialsData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Reference for scrolling to top
  const containerRef = useRef<HTMLDivElement>(null);

  // Render star rating based on rating value
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="ri-star-fill"></i>);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="ri-star-half-fill"></i>);
    }

    // Add empty stars to complete 5-star rating
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line"></i>);
    }

    return stars;
  };

  // Pagination handlers
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  return (
    <>
      <div className="container ptb-120" ref={containerRef}>
        <div className="row">
          {currentItems.map((testimonial) => (
            <div className="col-md-6" key={testimonial.id}>
              <div className="testimonial-card style-one bg-gray round-10 mb-30">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <span className="quote-icon bg_secondary d-flex flex-wrap align-items-center justify-content-center rounded-circle mb-0">
                    <Image
                      src="/images/icons/quote-large.svg"
                      alt="Icon"
                      width={38}
                      height={34}
                    />
                  </span>
                  <div
                    className="rating d-flex align-items-center"
                    style={{ gap: "2px" }}
                  >
                    {renderRating(testimonial.rating)}
                  </div>
                </div>
                <p className="fw-medium text-title">
                  <q>{testimonial.quote}</q>
                </p>
                <h6 className="fs-20 font-primary fw-semibold position-relative text-title mb-1">
                  {testimonial.name}
                </h6>
                <span className="fs-15 fw-normal d-block text-para">
                  {testimonial.position}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Pagination - Only show if more than one page */}
        {totalPages > 1 && (
          <ul className="page-nav pagination justify-content-center mb-0 mt-lg-4">
            <li className="page-item">
              <button
                type="button"
                className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
                onClick={goToPreviousPage}
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

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <li className="page-item" key={pageNumber}>
                  <button
                    type="button"
                    className={`page-link d-flex flex-column align-items-center justify-content-center rounded-circle ${
                      currentPage === pageNumber ? "active" : ""
                    }`}
                    onClick={() => paginate(pageNumber)}
                  >
                    {pageNumber.toString().padStart(2, "0")}
                  </button>
                </li>
              )
            )}

            <li className="page-item">
              <button
                type="button"
                className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
                onClick={goToNextPage}
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
    </>
  );
};

export default TestimonialsItems;
