"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Dynamic team members data
const teamMembersData = [
  {
    id: 1,
    name: "Michael Harper",
    position: "Project Manager",
    imageUrl: "/images/team/team-1.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      {
        platform: "twitter",
        url: "https://x.com/",
        icon: "ri-twitter-x-line",
      },
    ],
  },
  {
    id: 2,
    name: "Samantha Cruz",
    position: "Interior Designer",
    imageUrl: "/images/team/team-2.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      {
        platform: "twitter",
        url: "https://x.com/",
        icon: "ri-twitter-x-line",
      },
    ],
  },
  {
    id: 3,
    name: "David Johnson",
    position: "Senior Architect",
    imageUrl: "/images/team/team-3.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 4,
    name: "Emily Carter",
    position: "Civil Engineer",
    imageUrl: "/images/team/team-4.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 5,
    name: "Robert Wilson",
    position: "Construction Supervisor",
    imageUrl: "/images/team/team-5.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 6,
    name: "Olivia Martinez",
    position: "3D Visualizer",
    imageUrl: "/images/team/team-6.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 7,
    name: "James Anderson",
    position: "Site Coordinator",
    imageUrl: "/images/team/team-7.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 8,
    name: "Sophia Lee",
    position: "Structural Engineer",
    imageUrl: "/images/team/team-8.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 9,
    name: "James Anderson",
    position: "Site Coordinator",
    imageUrl: "/images/team/team-7.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 10,
    name: "Emily Carter",
    position: "Civil Engineer",
    imageUrl: "/images/team/team-4.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 11,
    name: "Robert Wilson",
    position: "Construction Supervisor",
    imageUrl: "/images/team/team-5.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
  {
    id: 12,
    name: "Olivia Martinez",
    position: "3D Visualizer",
    imageUrl: "/images/team/team-6.jpg",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
];

const TeamMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Display 8 team members per page

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = teamMembersData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(teamMembersData.length / itemsPerPage);

  // Determine if pagination should be shown
  const showPagination = teamMembersData.length > itemsPerPage;

  // Scroll to top of the team area
  const scrollToTop = () => {
    const teamArea = document.querySelector(".team-area");
    if (teamArea) {
      teamArea.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  return (
    <>
      <div className="team-area style-one position-relative pt-120">
        <div className="container">
          <div className="row justify-content-center">
            {currentItems.map((member) => (
              <div
                className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
                key={member.id}
              >
                <div className="team-card style-one img-hover-zoom mb-45">
                  <div className="team-img round-10 img-zoom position-relative overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={`${member.name} - ${member.position}`}
                      width={570}
                      height={675}
                      className="position-absolute top-0 bottom-0 start-0 end-0 z-1 round-10 transition"
                    />
                    <Image
                      src={member.imageUrl}
                      alt={`${member.name} - ${member.position}`}
                      width={570}
                      height={675}
                      className="round-10 transition"
                    />
                  </div>
                  <div className="team-info d-flex flex-wrap justify-content-between">
                    <div>
                      <h3 className="fw-bold mb-1">
                        <Link
                          href={member.profileUrl}
                          className="text-title link-hover-primary transition"
                        >
                          {member.name}
                        </Link>
                      </h3>
                      <span>{member.position}</span>
                    </div>
                    <ul className="social-profile style-two list-unstyled mb-0">
                      {member.socialLinks.map((social, index) => (
                        <li key={index}>
                          <a
                            href={social.url}
                            className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={social.icon}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - only show if there are more than itemsPerPage */}
          {showPagination && (
            <ul className="page-nav pagination justify-content-center mb-0 mt-lg-4">
              <li className="page-item">
                <button
                  type="button"
                  className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <Image
                    src="/images/icons/left-long-arrow-gray.svg"
                    alt="Previous"
                    width={16}
                    height={12}
                  />
                </button>
              </li>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <li className="page-item" key={pageNumber}>
                    <button
                      type="button"
                      className={`page-link d-flex flex-column align-items-center justify-content-center rounded-circle ${
                        currentPage === pageNumber ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(pageNumber)}
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
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <Image
                    src="/images/icons/right-long-arrow-gray.svg"
                    alt="Next"
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

export default TeamMembers;
