import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define TypeScript interfaces for our data structure
interface FeatureItem {
  text: string;
}

interface CounterItem {
  label: string;
  value: string;
  suffix: string;
  description: string;
}

interface WhoWeAreData {
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: string;
  features: FeatureItem[];
  counters: CounterItem[];
  moreAboutLink: string;
}

const WhoWeAre = () => {
  // Dynamic data for the WhoWeAre section
  const whoWeAreData: WhoWeAreData = {
    backgroundImage: "/images/about/about-bg-1.jpg",
    subtitle: "WHO WE ARE",
    title:
      "We Are A Top 25 Builder And Developer Fully Invested In Our Customers' Success",
    description:
      "Home renovation is the process of improving or modernizing a residential property to enhance its functionality, comfort, and aesthetic It can involve anything",
    features: [
      { text: "Licensed, Insured, And Safety-Focused" },
      { text: "10 Years Of Industry Experience" },
      { text: "Client-Centered Approach" },
      { text: "End-to-End Project Management" },
    ],
    counters: [
      {
        label: "LOCAL EXPERTISE",
        value: "50",
        suffix: "+",
        description: "Total Employees",
      },
      {
        label: "OUR IMPACT",
        value: "18",
        suffix: "M+",
        description: "Square Ft Property",
      },
      {
        label: "OUR IMPACT",
        value: "25",
        suffix: "B+",
        description: "Total Projects Cost",
      },
    ],
    moreAboutLink: "/about-us/",
  };

  return (
    <>
      <div className="about-area style-two overflow-hidden bg-optional round-30">
        <div className="container-fluid style-one">
          <div className="row">
            <div className="ps-0 col-xxl-7 col-lg-6 pe-xxl-5">
              <div
                className="about-bg bg-f"
                style={{
                  backgroundImage: `url(${whoWeAreData.backgroundImage})`,
                }}
              ></div>
            </div>

            <div className="col-xxl-5 col-lg-6 ps-xxl-0 pe-xxl-1">
              <div className="about-content">
                <h6 className="section-subtitle style-two fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-16">
                  <Image
                    src="/images/icons/home-icon.svg"
                    alt="Icon"
                    width={12}
                    height={13}
                  />
                  {whoWeAreData.subtitle}
                </h6>

                <h2 className="section-title style-one fw-normal text-white mb-20">
                  We Are A{" "}
                  <span className="fw-black">{whoWeAreData.title}</span>
                </h2>

                <p className="text-offwhite">{whoWeAreData.description}</p>

                <ul className="feature-list style-one list-unstyled d-flex flex-wrap">
                  {whoWeAreData.features.map((feature, index) => (
                    <li
                      key={index}
                      className="position-relative fw-medium text-white"
                    >
                      <span className="position-absolute start-0 d-flex flex-column align-items-center justify-content-center rounded-circle text-white fw-semibold">
                        <Image
                          src="/images/icons/check.svg"
                          alt="Icon"
                          width={19}
                          height={15}
                        />
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <div className="row justify-content-center mb-30">
                  {whoWeAreData.counters.map((counter, index) => (
                    <div
                      key={index}
                      className="col-xl-4 col-lg-6 col-md-4 col-sm-6"
                    >
                      <div className="counter-card style-two position-relative z-1 round-10 mb-20">
                        <h6 className="fs-12 fw-semibold ls-1">
                          {counter.label}
                        </h6>
                        <h4 className="font-secondary fw-black fs-36 text-white">
                          <span className="counter ls-1 transition">
                            {counter.value}
                          </span>
                          {counter.suffix}
                        </h4>
                        <p className="fw-medium text-alto d-block mb-0">
                          {counter.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={whoWeAreData.moreAboutLink}
                  className="btn style-one d-inline-flex flex-wrap align-items-center p-0"
                >
                  <span className="btn-text d-inline-block fw-semibold position-relative transition">
                    More About Us
                  </span>
                  <span className="btn-icon position-relative d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                    <i className="ri-arrow-right-up-line"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
