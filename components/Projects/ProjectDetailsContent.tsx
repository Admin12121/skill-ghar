"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectData, ProjectListItem } from "@/lib/projects";

interface ProjectDetailsContentProps {
  data: ProjectData;
  projectsList: ProjectListItem[];
}

const ProjectDetailsContent = ({ data, projectsList }: ProjectDetailsContentProps) => {
  // Accordion
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Find current and adjacent projects
  const currentIndex = projectsList.findIndex((p) => p.slug === data.slug);
  const prevProject = currentIndex > 0 ? projectsList[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsList.length - 1 ? projectsList[currentIndex + 1] : null;

  return (
    <div className="container ptb-120">
      <div className="row">
        <div className="col-12">
          <div className="project-desc position-relative z-1 pt-90">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <h1 className="section-title style-one text-title font-secondary fw-bold mb-30">
                  {data.title}
                </h1>

                <ul className="single-project-metainfo d-flex flex-wrap justify-content-md-between list-unstyled mb-45">
                  <li>
                    <span className="fw-medium d-block">Status</span>
                    <span className="text-title fw-semibold d-block">
                      {data.status}
                    </span>
                  </li>
                  <li>
                    <span className="fw-medium d-block">Location</span>
                    <span className="text-title fw-semibold d-block">
                      {data.location}
                    </span>
                  </li>
                  <li>
                    <span className="fw-medium d-block">Completion Date</span>
                    <span className="text-title fw-semibold d-block">
                      {data.completionDate}
                    </span>
                  </li>
                  <li>
                    <span className="fw-medium d-block">Project Value</span>
                    <span className="text-title fw-semibold d-block">
                      {data.projectValue}
                    </span>
                  </li>
                </ul>

                <div className="service-desc">
                  <div className="single-img round-10 mb-35">
                    <Image
                      src={data.heroImage}
                      alt={data.title}
                      width={1140}
                      height={555}
                      className="round-10 aspect-video object-cover"
                    />
                  </div>
                  <div className="single-para">
                    <h6>Project Overview</h6>
                    <p>{data.overview}</p>
                  </div>

                  <div className="single-para">
                    <div
                      className="rte-content"
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                  </div>

                  {/* FAQ Section */}
                  {data.faqs && data.faqs.length > 0 && (
                    <div className="single-para">
                      <h6 className="mb-4">Frequently Asked Questions</h6>
                      <div className="accordion style-one mb-50">
                        {data.faqs.map((item, index) => (
                          <div
                            key={index}
                            className={`accordion-item ${
                              openIndex !== index ? "collapsed" : ""
                            }`}
                          >
                            <div className="accordion-header">
                              <div
                                className="accordion-button"
                                onClick={() => toggleAccordion(index)}
                                style={{ cursor: "pointer" }}
                              >
                                <span className="accord-arrow">
                                  <i
                                    className={`ri-arrow-down-s-fill ${
                                      openIndex === index ? "d-none" : ""
                                    }`}
                                  ></i>
                                  <i
                                    className={`ri-arrow-up-s-fill ${
                                      openIndex === index ? "" : "d-none"
                                    }`}
                                  ></i>
                                </span>
                                {item.question}
                              </div>
                            </div>
                            <div
                              className={`accordion-collapse collapse ${
                                openIndex === index ? "show" : ""
                              }`}
                            >
                              <div className="accordion-body">
                                <p className="fs-xx-14">{item.answer}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Navigation */}
                  <div className="project-pagination d-flex flex-wrap align-items-center justify-content-between mt-4">
                    {prevProject ? (
                      <Link
                        href={`/projects/${prevProject.slug}`}
                        className="prev-project text-para hover-text-primary transition position-relative border-0 p-0 bg-transparent text-decoration-none"
                      >
                        <Image
                          src="/images/icons/left-arrow.svg"
                          alt="Icon"
                          width={24}
                          height={16}
                          className="position-relative me-3"
                        />
                        Prev Project
                      </Link>
                    ) : (
                      <div />
                    )}
                    {nextProject ? (
                      <Link
                        href={`/projects/${nextProject.slug}`}
                        className="next-project text-para hover-text-primary transition position-relative text-end border-0 p-0 bg-transparent text-decoration-none"
                      >
                        Next Project
                        <Image
                          src="/images/icons/right-arrow-5.svg"
                          alt="Icon"
                          width={24}
                          height={16}
                          className="position-relative ms-3"
                        />
                      </Link>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
