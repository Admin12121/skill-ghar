import React from "react";
import Image from "next/image";

const OurAwardsInTheWorldWide = () => {
  // Dynamic awards data
  const awards = [
    {
      id: 1,
      year: "2020",
      title: "Top Commercial Design",
      badge: "/images/badges/badge-1.svg",
    },
    {
      id: 2,
      year: "2016",
      title: "Property Manager of Year",
      badge: "/images/badges/badge-2.svg",
    },
    {
      id: 3,
      year: "2020",
      title: "Best Real Estate Consultant",
      badge: "/images/badges/badge-3.svg",
    },
    {
      id: 4,
      year: "2025",
      title: "Real Estate Superbrand",
      badge: "/images/badges/badge-4.svg",
    },
    {
      id: 5,
      year: "2023",
      title: "Best Residential Design",
      badge: "/images/badges/badge-5.svg",
    },
  ];

  return (
    <>
      <div className="container pt-120 pb-90">
        <div className="row">
          <div className="col-xxl-6 offset-xl-3 col-xl-8 offset-xl-2 col-md-10 offset-md-1 text-center">
            <h6 className="section-subtitle style-two d-inline-block fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-25">
              <Image
                src="/images/icons/star-3.svg"
                alt="Icon"
                width={17}
                height={16}
              />
              OUR AWARDS IN THE WORLD
            </h6>
            <h2 className="section-title style-one text-center text-title mb-40">
              Award-Winning{" "}
              <span className="fw-black">Craftsmanship Trusted By</span>{" "}
              Homeowners
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {awards.map((award) => (
            <div className="col-xl-4 col-md-6" key={award.id}>
              <div className="award-card style-one d-flex flex-wrap align-items-center mb-30 transition">
                <div className="award-badge bg_secondary d-flex flex-column align-items-center justify-content-center rounded-circle">
                  <Image
                    src={award.badge}
                    alt={award.title}
                    width={40}
                    height={40}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div className="award-title">
                  <span className="fs-15 fw-semibold d-block mb-1 text_primary">
                    {award.year}
                  </span>
                  <h5 className="fs-20 fw-semibold text-title mb-0">
                    {award.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurAwardsInTheWorldWide;
