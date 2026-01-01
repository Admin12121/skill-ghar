"use client";

import React, { useState } from "react";
import Image from "next/image";

const FeaturesTabs = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // Dynamic tabs data
  const tabs = [
    {
      id: 1,
      title: "Precision Craftsmanship",
      description:
        "Every detail matters. From the foundation to the finishing touches, our team ensures your home is built with unmatched accuracy and care, combining traditional artistry with modern methods.",
      features: [
        "Exact measurements for structural integrity",
        "Hand-crafted wood and stone finishes",
        "Architectural details designed to stand out",
        "Experienced craftsmen dedicated to perfection",
      ],
      image: "/images/about/feature-img-2.jpg",
    },
    {
      id: 2,
      title: "Personalized Build Experience",
      description:
        "We believe your home should reflect your lifestyle. That’s why we work closely with you at every stage, tailoring designs and materials to create a truly one-of-a-kind space.",
      features: [
        "Custom design consultations at every step",
        "Choice of premium materials and finishes",
        "Flexible layouts to match your lifestyle",
        "Dedicated project manager for smooth delivery",
      ],
      image: "/images/about/feature-img-1.jpg",
    },
    {
      id: 3,
      title: "Timeless Modern Techniques",
      description:
        "Our construction blends timeless elegance with innovative methods. We integrate modern technology into classic design, ensuring your home remains relevant for generations.",
      features: [
        "Integration of smart home technology",
        "Modern insulation and energy efficiency",
        "Advanced tools for flawless execution",
        "Designs that balance tradition and innovation",
      ],
      image: "/images/about/feature-img-4.jpg",
    },
    {
      id: 4,
      title: "Sustainable Building Practices",
      description:
        "We are committed to building responsibly. Our eco-conscious methods reduce environmental impact while creating healthier, more efficient living spaces for you and your family.",
      features: [
        "Eco-friendly and recycled materials",
        "Energy-efficient construction methods",
        "Low-waste, sustainable processes",
        "Green building standards for a better future",
      ],
      image: "/images/about/feature-img-5.jpg",
    },
  ];

  // Dynamic section data
  const sectionData = {
    subtitle: "FEATURES",
    title: "Precision Craftsmanship In Every Detail Of Your Custom Home",
    homeIcon: {
      src: "/images/icons/home-icon.svg",
      alt: "Home icon",
    },
    experience: {
      years: 25,
      text: "YEARS OF EXPERIENCE",
      icon: "/images/about/fav-icon.png",
    },
  };

  return (
    <>
      <div className="feature-area style-three position-relative z-2 pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-10 text-center">
              <h6 className="section-subtitle style-two d-inline-block fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20">
                <Image
                  src={sectionData.homeIcon.src}
                  alt={sectionData.homeIcon.alt}
                  width={12}
                  height={13}
                />
                {sectionData.subtitle}
              </h6>
              <h2 className="section-title style-one fw-normal text-title px-xxl-5 mb-40">
                {sectionData.title.split(" ").map((word, index, array) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <span className="fw-black">{word}</span>
                    ) : (
                      word
                    )}
                    {index < array.length - 1 ? " " : ""}
                  </React.Fragment>
                ))}
              </h2>
            </div>
          </div>

          <ul className="nav nav-tabs list-unstyled feature-tablist d-flex flex-wrap align-items-center justify-content-between mb-40">
            {tabs.map((tab, index) => (
              <li key={index} className="nav-item border-0">
                <button
                  type="button"
                  onClick={() => handleTabClick(index)}
                  className={`nav-link border-0 ${
                    activeTab === index ? "active" : ""
                  }`}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="feature-tab-content">
            <div>
              <div className="row">
                <div className="col-xxl-5 col-lg-6 pe-xxl-0">
                  <div className="feature-content mb-md-30">
                    <p className="mb-35">{tabs[activeTab].description}</p>
                    <ul className="feature-timeline list-unstyled mb-0 w-75 pe-xxl-5">
                      {tabs[activeTab].features.map((feature, index) => (
                        <li
                          key={index}
                          className="position-relative fs-xxl-18 fw-medium text-title"
                        >
                          <span className="d-flex flex-column align-items-center justify-content-center rounded-circle text_primary bg-white fs-15 fw-semibold text_primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-7 col-lg-6 ps-xxl-5">
                  <div className="feature-img-wrap position-relative z-1">
                    <Image
                      src={tabs[activeTab].image}
                      alt="Feature"
                      width={570}
                      height={654}
                      className="round-20"
                    />
                    <div className="exp-box bg-white round-10 move-bottom position-absolute d-flex flex-column align-items-center justify-content-center start-0 z-1">
                      <span className="fav-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_secondary">
                        <Image
                          src={sectionData.experience.icon}
                          alt="Experience icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <h6 className="fs-13 fw-semibold text-para ls-1 text-center mb-0">
                        <span className="font-secondary fw-black text-title d-block ls-0">
                          {sectionData.experience.years}
                        </span>
                        {sectionData.experience.text}
                      </h6>
                    </div>
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

export default FeaturesTabs;
