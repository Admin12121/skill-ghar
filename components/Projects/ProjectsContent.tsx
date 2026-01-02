"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Define proper TypeScript interfaces for type safety
interface Project {
  id: number;
  title: string;
  status: string;
  type: string;
  location: string;
  budget: string;
  image: string;
  link: string;
}

// Move allProjects outside the component since it's static data
const allProjects: Project[] = [
  {
    id: 1,
    title: "Greenview Apartments",
    status: "Under Construction",
    type: "Residential",
    location: "Florida",
    budget: "$10 - $15K",
    image: "/images/project/project-bg-1.jpg",
    link: "/projects/details/",
  },
  {
    id: 2,
    title: "Premier Office Tower",
    status: "Completed",
    type: "Commercial",
    location: "California",
    budget: "$15 - $25K",
    image: "/images/project/project-bg-2.jpg",
    link: "/projects/details/",
  },
  {
    id: 3,
    title: "Urban Height Residence",
    status: "Under Construction",
    type: "Residential",
    location: "New York",
    budget: "$20 - $35K",
    image: "/images/project/project-bg-3.jpg",
    link: "/projects/details/",
  },
  {
    id: 4,
    title: "Sunset Plaza",
    status: "Completed",
    type: "Commercial",
    location: "Florida",
    budget: "$10 - $15K",
    image: "/images/project/project-bg-4.jpg",
    link: "/projects/details/",
  },
  {
    id: 5,
    title: "Riverside Condos",
    status: "Under Construction",
    type: "Residential",
    location: "California",
    budget: "$15 - $25K",
    image: "/images/project/project-bg-5.jpg",
    link: "/projects/details/",
  },
  {
    id: 6,
    title: "Metropolis Mall",
    status: "Completed",
    type: "Public",
    location: "New York",
    budget: "$20 - $35K",
    image: "/images/project/project-bg-6.jpg",
    link: "/projects/details/",
  },
  {
    id: 7,
    title: "Harborview Villas",
    status: "Under Construction",
    type: "Residential",
    location: "Texas",
    budget: "$12 - $20K",
    image: "/images/project/project-bg-7.jpg",
    link: "/projects/details/",
  },
  {
    id: 8,
    title: "Downtown Tech Park",
    status: "Completed",
    type: "Commercial",
    location: "California",
    budget: "$25 - $40K",
    image: "/images/project/project-bg-8.jpg",
    link: "/projects/details/",
  },
  {
    id: 9,
    title: "Lakeside Community Center",
    status: "Completed",
    type: "Public",
    location: "Florida",
    budget: "$18 - $28K",
    image: "/images/project/project-bg-3.jpg",
    link: "/projects/details/",
  },
];

const ProjectsContent = () => {
  // State management with proper typing
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  // Ref for the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when page changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  // Handle pagination
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Get current projects for display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <>
      <div ref={containerRef} className="container ptb-120">
        <div className="row justify-content-center">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <div className="col-xl-4 col-md-6" key={project.id}>
                <div
                  className="project-card style-four position-relative overflow-hidden z-1 round-10 mb-45"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <span className="project-status transition">
                    {project.status}
                  </span>
                  <span className="project-counter text-center font-secondary fw-semibold d-block lh-1 transition">
                    {String(indexOfFirstProject + index + 1).padStart(2, "0")}
                  </span>
                  <div className="project-title d-flex flex-wrap align-items-center justify-content-between">
                    <h3 className="fs-24 fw-semibold mb-0">
                      <Link
                        href={project.link}
                        className="text-title hover-text-primary transition"
                      >
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p>No projects found matching your criteria</p>
            </div>
          )}
        </div>
        {/* Pagination */}
        {allProjects.length > projectsPerPage && (
          <ul className="page-nav pagination justify-content-center mb-0 mt-lg-4">
            <li className="page-item">
              <button
                type="button"
                className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
                onClick={() => paginate(currentPage - 1)}
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li className="page-item" key={page}>
                <button
                  type="button"
                  className={`page-link d-flex flex-column align-items-center justify-content-center rounded-circle ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => paginate(page)}
                >
                  {String(page).padStart(2, "0")}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                type="button"
                className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
                onClick={() => paginate(currentPage + 1)}
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

export default ProjectsContent;
