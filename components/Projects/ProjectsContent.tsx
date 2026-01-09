"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectListItem } from "@/lib/projects";

interface ProjectsContentProps {
  projects: ProjectListItem[];
}

const ProjectsContent = ({ projects }: ProjectsContentProps) => {
  // State management with proper typing
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

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
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <main>
      <div ref={containerRef} className="container ptb-120">
        <div className="row justify-content-center">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <div className="col-xl-4 col-md-6" key={project.slug}>
                <div
                  className="project-card style-four position-relative overflow-hidden z-1 round-10 mb-45 bg-transparent text-white"
                  style={{
                    backgroundImage: `url(${project.backgroundImage})`,
                    backgroundSize: "cover",
                  }}
                >
                  <span className="project-status transition">
                    {project.status}
                  </span>
                  <span className="my-14.75 text-center font-secondary fw-semibold d-block lh-1 transition text-white text-[250px]!">
                    {String(indexOfFirstProject + index + 1).padStart(2, "0")}
                  </span>
                  <div className="project-title d-flex flex-wrap align-items-center justify-content-between">
                    <h3 className="fs-24 fw-semibold mb-0 ">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-title hover-text-primary transition text-white"
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
        {projects.length > projectsPerPage && (
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
    </main>
  );
};

export default ProjectsContent;
