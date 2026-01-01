import React from "react";
import Image from "next/image";
import BookAMeetingForm from "./BookAMeetingForm";

const TeamDetailsContent = () => {
  return (
    <>
      <div className="container pt-120">
        <div className="row mb-30">
          <div className="col-xl-8 pe-xxl-1">
            <div className="single-team-box bg-gray round-10 mb-30">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="team-img round-10 mb-sm-20">
                    <Image
                      src="/images/team/single-team-1.jpg"
                      alt="team"
                      width={570}
                      height={675}
                      className="round-10"
                    />
                  </div>
                </div>
                <div className="col-md-5 ps-xxl-4">
                  <div className="single-team-details d-flex flex-column justify-content-between">
                    <div className="team-member-info">
                      <h3 className="fs-24 fw-bold mb-1">Michael Harper</h3>
                      <span>Project Manager</span>
                      <ul className="single-team-infolist list-unstyled">
                        <li>
                          <span className="fw-semibold text-title">
                            Position:
                          </span>{" "}
                          Rental Property Expert
                        </li>
                        <li>
                          <span className="fw-semibold text-title">
                            Experience:
                          </span>{" "}
                          15+ Years
                        </li>
                        <li>
                          <span className="fw-semibold text-title">
                            Location :
                          </span>{" "}
                          New Jersy, New York
                        </li>
                        <li>
                          <span className="fw-semibold text-title">
                            Practice Area :
                          </span>{" "}
                          Property Seller
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a
                        href="tel:56647768859"
                        className="btn style-one d-inline-flex flex-wrap align-items-center p-0 mb-30"
                      >
                        <span className="btn-text d-inline-block fw-semibold position-relative transition">
                          Contact Michael
                        </span>
                      </a>
                      <ul className="social-profile style-three list-unstyled mb-0">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://x.com/?lang=en"
                            target="_blank"
                            className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                          >
                            <i className="ri-twitter-x-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                          >
                            <i className="ri-linkedin-fill"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 ps-xxl-4">
            <div className="sidebar mt-lg-50">
              <div className="sidebar-widget bg-1 style-two round-10">
                <h3 className="fs-20 fw-bold mb-20">Address</h3>
                <ul className="contact-list list-unstyled mb-0">
                  <li className="position-relative">
                    <Image
                      src="/images/icons/pin-orange-2.svg"
                      alt="Iocn"
                      width={15}
                      height={15}
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span className="text-title fw-medium me-1">Address:</span>{" "}
                     608 Imperial St, Los Angeles, CA 90021, USA
                  </li>
                  <li className="position-relative">
                    <Image
                      src="/images/icons/phone-2.svg"
                      alt="Iocn"
                      width={15}
                      height={15}
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span className="text-title fw-medium me-1">Phone:</span>
                    <a
                      href="tel:56647768859"
                      className="text-para hover-text-primary"
                    >
                      +56 647 768 859
                    </a>
                  </li>
                  <li className="position-relative">
                    <Image
                      src="/images/icons/email-2.svg"
                      alt="Iocn"
                      width={15}
                      height={15}
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span className="text-title fw-medium me-1">Email:</span>
                    <a
                      href="mailto:hello@michaelharper.com"
                      className="text-para hover-text-primary"
                    >
                      hello@michaelharper.com
                    </a>
                  </li>
                  <li className="position-relative">
                    <Image
                      src="/images/icons/fax-2.svg"
                      alt="Iocn"
                      width={15}
                      height={15}
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span className="text-title fw-medium me-1">Fax:</span>
                    7585869996
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget bg-2 style-two round-10">
                <h3 className="fs-20 fw-bold mb-20">Experience</h3>
                <ul className="experience-list list-unstyled mb-0">
                  <li className="position-relative fw-medium">
                    <Image
                      src="/images/icons/right-arrow-pink.svg"
                      alt="Icon"
                      width={16}
                      height={12}
                    />
                    Real Estate Sales & Leasing
                  </li>
                  <li className="position-relative fw-medium">
                    <Image
                      src="/images/icons/right-arrow-pink.svg"
                      alt="Icon"
                      width={16}
                      height={12}
                    />
                    Civil & Structural Engineering
                  </li>
                  <li className="position-relative fw-medium">
                    <Image
                      src="/images/icons/right-arrow-pink.svg"
                      alt="Icon"
                      width={16}
                      height={12}
                    />
                    Construction Management
                  </li>
                  <li className="position-relative fw-medium">
                    <Image
                      src="/images/icons/right-arrow-pink.svg"
                      alt="Icon"
                      width={16}
                      height={12}
                    />
                    Architecture & Design (CAD, Revit, BIM)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8">
            <div className="team-desc">
              <div className="single-para mb-30">
                <h3 className="fs-24 fw-bold">About Me</h3>
                <p>
                  The founder and master builder behind Edifico Home Build Craft.
                  With over two decades of experience in custom home
                  construction, Nathan combines technical expertise with a true
                  passion for craftsmanship leadership ensures that every
                  project meets the highest standards of quality,{" "}
                </p>
                <p>
                  While his hands-on approach keeps client needs at the heart of
                  every build. From initial consultation to the final
                  walkthrough, Nathan is dedicated to building not just
                  houses—but homes that last for generations.
                </p>
                <p>
                  While his hands-on approach keeps client needs at the heart of
                  every build. From initial consultation to the final
                  walkthrough, Nathan is dedicated to building not just
                  houses—but homes that last for generations.
                </p>
              </div>

              <h6 className="fs-18 fw-semibold text-title mb-20">
                Areas of expertise
              </h6>
              <ul className="feature-list list-unstyled d-flex flex-wrap mb-0 pe-xl-5 me-xl-5">
                <li className="position-relative text-title fw-medium">
                  Commercial property manager
                </li>
                <li className="position-relative text-title fw-medium">
                  Land development specialist
                </li>
                <li className="position-relative text-title fw-medium">
                  Leasing Consultant
                </li>
                <li className="position-relative text-title fw-medium">
                  Real estate broker
                </li>
                <li className="position-relative text-title fw-medium">
                  Investment property advisor
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="sidebar mt-lg-50">
              <div className="sidebar-widget bg-gray round-10">
                <h3 className="fs-20 fw-bold text-title mb-20">
                  Book A Meeting
                </h3>

                {/* BookAMeetingForm */}
                <BookAMeetingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsContent;
