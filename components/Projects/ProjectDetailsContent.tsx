"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProjectDetailsContent = () => {
  // Accordion
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const accordionItems = [
    {
      title: "Can I consult you before buying land or property?",
      content:
        "Yes. We offer a pre-purchase consultation where we review title and zoning, check flood/soil risks, estimate build/renovation costs, and outline permit timelines and ROI. You’ll receive a short report with risks, options, and a budget range so you can decide confidently.",
    },
    {
      title: "Are your services available outside the city?",
      content:
        "Yes. We work across most districts and can handle projects outside the city. Remote feasibility checks are available, and on-site visits beyond a 30 km radius may include a travel fee. Availability and timelines depend on local permitting—tell us the location and we’ll confirm.",
    },
    {
      title: "Do you manage properties for landlords or investors?",
      content:
        "Yes. We provide end-to-end property management: marketing and tenant screening, lease drafting, rent collection, maintenance coordination, periodic inspections, and monthly statements. Fees vary by property type and city; portfolio pricing is available.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="container ptb-120">
        <div className="row">
          <div className="col-12">
            <div className="project-desc position-relative z-1 pt-90">
              <div className="row">
                <div className="col-xl-10 offset-xl-1">
                  <h1 className="section-title style-one text-title font-secondary fw-bold mb-30">
                    Commercial & Residential Building
                  </h1>

                  <ul className="single-project-metainfo d-flex flex-wrap justify-content-md-between list-unstyled mb-45">
                    <li>
                      <span className="fw-medium d-block">Status</span>
                      <span className="text-title fw-semibold d-block">
                        Completed
                      </span>
                    </li>
                    <li>
                      <span className="fw-medium d-block">Project Type</span>
                      <span className="text-title fw-semibold d-block">
                        Building
                      </span>
                    </li>
                    <li>
                      <span className="fw-medium d-block">Project Area</span>
                      <span className="text-title fw-semibold d-block">
                        26,346.74 Sq. Ft.
                      </span>
                    </li>
                    <li>
                      <span className="fw-medium d-block">
                        Commencement Date
                      </span>
                      <span className="text-title fw-semibold d-block">
                        28 May, 2024
                      </span>
                    </li>
                    <li>
                      <span className="fw-medium d-block">Price Range</span>
                      <span className="text-title fw-semibold d-block">
                        $600k – $1.9M
                      </span>
                    </li>
                  </ul>

                  <div className="service-desc">
                    <div className="single-img round-10 mb-35">
                      <Image
                        src="/images/project/single-project-1.jpg"
                        alt="project"
                        width={1140}
                        height={555}
                        className="round-10"
                      />
                    </div>
                    <div className="single-para">
                      <h6>Project Description</h6>
                      <p>
                        Edifico Real Estate & Construction Group, every project
                        tells a story of vision, precision, and impact. From
                        luxury residential towers to expansive commercial hubs
                        and infrastructure developments, our portfolio reflects
                        a deep commitment to quality, innovation, and client
                        satisfaction. Each build is carefully planned and
                        expertly executed to meet the highest standards
                      </p>
                      <ul className="feature-item-list style-two d-flex flex-wrap list-unstyled pe-xxl-5 me-xxl-5">
                        <li className="position-relative text-title fw-medium">
                          Conceptualisation And Ideation
                        </li>
                        <li className="position-relative text-title fw-medium">
                          Material Selection And Sustainability
                        </li>
                        <li className="position-relative text-title fw-medium">
                          Detailed Design Development
                        </li>
                        <li className="position-relative text-title fw-medium">
                          Building Code Compliance and Safety
                        </li>
                        <li className="position-relative text-title fw-medium">
                          Sustainability Environmental Considerations
                        </li>
                        <li className="position-relative text-title fw-medium">
                          Final Construction Documents
                        </li>
                      </ul>
                    </div>

                    <div className="single-para">
                      <div className="row">
                        <div className="col-md-6 pe-xxl-0">
                          <div className="single-img round-10 mb-35">
                            <Image
                              src="/images/project/single-project-2.jpg"
                              alt="project"
                              width={570}
                              height={272}
                              className="round-10"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ps-xxl-4">
                          <div className="project-highlight-box round-10 mb-35">
                            <h6 className="mb-3">
                              Post-Construction Evaluation
                            </h6>
                            <p>
                              Our dedication to quality and customer
                              satisfaction is evident in every project we
                              undertake. We invite you to explore our portfolio
                              and see how Edifico can{" "}
                            </p>
                            <p>
                              Transform your vision into reality, creating
                              spaces that inspire and endure. we are committed
                              to craftingthat reflect.
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>
                        In addition to residential and commercial projects, our
                        portfolio also includes community developments that
                        focus on enhancing local engagement. One notable project
                        is a vibrant community center designed to host events
                        and activities, fostering a sense of belonging among
                        residents. Our team worked diligently to ensure the
                        facility was both functional and inviting, incorporating
                        outdoor spaces for recreation.
                      </p>
                    </div>

                    {/* Popular Questions */}
                    <div className="single-para">
                      <h6 className="mb-4">Popular Questions</h6>
                      <div className="accordion style-one mb-50">
                        {accordionItems.map((item, index) => (
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
                                      openIndex === index ? "plus" : ""
                                    }`}
                                  ></i>
                                  <i
                                    className={`ri-arrow-up-s-fill ${
                                      openIndex === index ? "minus" : "d-none"
                                    }`}
                                  ></i>
                                </span>
                                {item.title}
                              </div>
                            </div>
                            <div
                              className={`accordion-collapse collapse ${
                                openIndex === index ? "show" : ""
                              }`}
                            >
                              <div className="accordion-body">
                                <p className="fs-xx-14">{item.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="project-pagination d-flex flex-wrap align-items-center justify-content-between mt-4">
                    <button
                      type="button"
                      className="prev-project text-para hover-text-primary transition position-relative border-0 p-0 bg-transparent"
                    >
                      <Image
                        src="/images/icons/left-arrow.svg"
                        alt="Icon"
                        width={24}
                        height={16}
                        className="position-relative me-3"
                      />
                      Prev Project
                    </button>
                    <button
                      type="button"
                      className="next-project text-para hover-text-primary transition position-relative text-end border-0 p-0 bg-transparent"
                    >
                      Next Project
                      <Image
                        src="/images/icons/right-arrow-5.svg"
                        alt="Icon"
                        width={24}
                        height={16}
                        className="position-relative ms-3"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
