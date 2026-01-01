import React from "react";
import Image from "next/image";
import Link from "next/link";
import { House } from "lucide-react";

const WhyChooseUs = () => {
  // Dynamic data for features
  const features = [
    {
      id: 1,
      icon: "/images/icons/house-thing.svg",
      title: "Decades Of Hands-On Building Experience",
    },
    {
      id: 2,
      icon: "/images/icons/mailbox.svg",
      title: "On-Time, On-Budget Guarantee",
    },
    {
      id: 3,
      icon: "/images/icons/antennas.svg",
      title: "Superior Craftmanship & Materials",
    },
    {
      id: 4,
      icon: "/images/icons/skyline.svg",
      title: "Fully Licensed, Insured & Safety Compliant",
    },
  ];

  // Dynamic data for CEO message
  const ceoMessage = {
    image: "/images/about/ceo.jpg",
    quote:
      "Edifico delivered on every promise. The crew was professional, the timeline custom home turned out exactly envisioned.",
    name: "Natalie R.",
    title: "Denver, CEO",
  };

  // Dynamic data for images
  const images = {
    main: {
      src: "/images/about/wh-img-1.jpg",
    },
    thumb: {
      src: "/images/about/wh-thumb-1.jpg",
    },
  };

  return (
    <>
      <div className="wh-area style-two bg-gray ptb-120 round-45 mx-xxl-5 mx-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-7 pe-xxl-0">
              <div className="wh-content mb-md-30">
                <h6 className="section-subtitle p-0 style-two text-center fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-16 flex flex-row gap-2">
                  <House className="size-4"/>
                  WHY CHOOSE US
                </h6>

                <h2 className="section-title style-one fw-normal text-title mb-20">
                  Experienced{" "}
                  <span className="fw-black">
                    Builders Committed To Quality and Customer
                  </span>{" "}
                  Satisfaction Always
                </h2>

                <p className="pe-xxl-5 me-xxl-5 mb-1">
                  Edifico means partnering with team that values customer
                  satisfaction above all else. We bring years of experience and
                  a proven
                </p>

                <div className="row pe-xxl-5 gx-xxl-5 mb-35">
                  {features.map((feature) => (
                    <div key={feature.id} className="col-md-6">
                      <div className="feature-item">
                        <span className="feature-icon position-absolute bg_secondary d-flex flex-column align-items-center justify-content-center rounded-circle">
                          <Image
                            src={feature.icon}
                            alt="Icon"
                            width={30}
                            height={30}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>
                        <h6 className="fs-16 fw-semibold mb-0">
                          {feature.title}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about-us"
                  className="btn style-one d-inline-flex flex-wrap align-items-center p-0 mt-1"
                >
                  <span className="btn-text d-inline-block fw-semibold position-relative transition">
                    More About Us
                  </span>
                  <span className="btn-icon position-relative d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                    <i className="ri-arrow-right-up-line"></i>
                  </span>
                </Link>

                <div className="ceo-message-wrap d-flex flex-wrap align-items-center">
                  <div className="ceo-avatar">
                    <Image
                      src={ceoMessage.image}
                      alt={ceoMessage.name}
                      width={100}
                      height={100}
                      className="round-10"
                    />
                  </div>
                  <div className="ceo-message">
                    <p className="text-title">{ceoMessage.quote}</p>
                    <h6 className="position-relative fs-16 font-primary fw-bold text-title">
                      {ceoMessage.name}
                      <span className="fw-normal text-para ms-2">
                        {ceoMessage.title}
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-5">
              <div className="wh-img-wrap position-relative">
                <Image
                  src={images.main.src}
                  alt="Why Choose Us"
                  width={570}
                  height={597}
                  className="wh-img tilt-img round-10"
                />

                <Image
                  src={images.thumb.src}
                  alt="Why Choose Us"
                  width={262}
                  height={213}
                  className="wh-thumb position-absolute top-0 end-0 round-10 move-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
