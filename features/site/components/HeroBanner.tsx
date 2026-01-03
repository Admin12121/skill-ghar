"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Check, House, Play } from "lucide-react";
import siteConfig from "@/config/metadata";

interface Feature {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

interface Slide {
  backgroundImage: string;
  features: Feature[];
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

const HeroBanner = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const slides: Slide[] = [
    {
      backgroundImage: "/images/hero/hero-slide-1.jpg",
      features: [
        {
          title: "Custom Home Design & Build",
          description:
            "We're committed to delivering top-quality craftsmanship, personalized service",
          linkText: "See All Projects",
          linkHref: "/projects",
        },
        {
          title: "Turnkey Construction Solutions",
          description:
            "Strong focus on timelines and transparency, we make the homebuilding process smooth",
          linkText: "Our Solutions",
          linkHref: "/services",
        },
        {
          title: "Quality Materials & Workmanship",
          description:
            "Construction techniques to ensure every project is built to last with licensed expertise",
          linkText: "Discover More",
          linkHref: "/services",
        },
      ],
    },
    {
      backgroundImage: "/images/hero/hero-slide-2.jpg",
      features: [
        {
          title: "Innovative Architectural Planning",
          description:
            "Blending creativity and functionality to design spaces that inspire and endure",
          linkText: "View Designs",
          linkHref: "/projects",
        },
        {
          title: "Sustainable Building Practices",
          description:
            "Eco-friendly solutions that reduce environmental impact while maximizing efficiency",
          linkText: "Our Approach",
          linkHref: "/services",
        },
        {
          title: "Expert Project Management",
          description:
            "Dedicated teams ensuring smooth execution from concept to completion",
          linkText: "Learn More",
          linkHref: "/services",
        },
      ],
    },
    {
      backgroundImage: "/images/hero/hero-slide-3.jpg",
      features: [
        {
          title: "Luxury Interior Finishes",
          description:
            "Premium materials and elegant designs tailored to your lifestyle and vision",
          linkText: "Explore Interiors",
          linkHref: "/projects",
        },
        {
          title: "Renovation & Remodeling",
          description:
            "Transforming outdated spaces into modern, functional, and stylish environments",
          linkText: "See Renovations",
          linkHref: "/services",
        },
        {
          title: "End-to-End Client Support",
          description:
            "From consultation to handover, we ensure a seamless and satisfying experience",
          linkText: "Get Started",
          linkHref: "/contact",
        },
      ],
    },
  ];

  const movingTextItems = [
    { text: "PROJECT TIMELINE GUARANTEE" },
    { text: "SATISFACTION-FIRST APPROACH" },
    { text: "LICENSED & INSURED EXPERTS" },
    { text: "PROJECT TIMELINE GUARANTEE" },
    { text: "SATISFACTION-FIRST APPROACH" },
    { text: "LICENSED & INSURED EXPERTS" },
    { text: "PROJECT TIMELINE GUARANTEE" },
    { text: "SATISFACTION-FIRST APPROACH" },
    { text: "LICENSED & INSURED EXPERTS" },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: "ri-facebook-fill",
      url: siteConfig.social.facebook,
    },
    {
      name: "Instagram",
      icon: "ri-instagram-line",
      url: siteConfig.social.instagram,
    },
    {
      name: "TikTok",
      icon: "ri-tiktok-fill",
      url: siteConfig.social.tiktok,
    },
  ];

  return (
      <div className="hero-area style-two position-relative z-1 overflow-hidden">
        <div className="br-one position-absolute top-0 z-n1 hidden xl:block"></div>
        <div className="br-two position-absolute top-0 z-n1 hidden xl:block"></div>
        <div className="br-three position-absolute top-0 z-n1 hidden xl:block"></div>

        <div className="container-fluid">
          <div className="row pb-90 align-items-end">
            <div className="col-lg-8 col-md-8">
              <div className="hero-content mb-15">
                <h6 className="section-subtitle style-two fs-13 ls-1 font-optional fw-normal position-relative text_primary mb-15 flex flex-row gap-2">
                  <House className="size-4"/>
                  BUILDING STRONG FOUNDATIONS FOR YOUR DREAM HOME
                </h6>
                <h1 className="font-secondary fw-normal text-title mb-0">
                  Expert <b className="fw-black">Construction</b>
                  <span className="d-md-block">
                    {" "}
                    <b className="fw-black">Services For Residential</b> &
                  </span>{" "}
                  Custom Home Projects
                </h1>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-15 hidden xl:block">
              <div className="circle-text-wrap position-relative overflow-hidden z-1 ms-lg-auto">
                <Image
                  src="/images/hero/circle-text-2.svg"
                  alt="Circle Text"
                  width={219}
                  height={219}
                  className="rotate position-relative z-1"
                />
                <button
                  type="button"
                  className="play-icon position-absolute d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary z-1 border-0"
                  onClick={() => setShowModal(true)}
                >
                  <Play className="size-6 text-white"/>
                </button>
              </div>
            </div>
          </div>

          <Swiper
            navigation={false}
            autoHeight={true}
            effect={"fade"}
            pagination={pagination}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="hero-slider-one"
          >
            {slides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div
                  className="hero-slide-item bg-f d-flex flex-column justify-content-end position-relative overflow-hidden z-1 round-30"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`,
                  }}
                >
                  <div className="row justify-content-center">
                    {slide.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="col-lg-4 col-md-6 mb-md-20"
                      >
                        <div className="hero-feature-card d-flex flex-wrap">
                          <span className="feature-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary">
                            <Check className="size-4 text-white"/>
                          </span>
                          <div>
                            <h3 className="fs-20 fw-semibold text-white">
                              {feature.title}
                            </h3>
                            <p className="text-alto">{feature.description}</p>
                            <Link
                              href={feature.linkHref}
                              className="link style-three"
                            >
                              {feature.linkText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="move-text-wrapper overflow-hidden mb-120">
          <div className="move-text style-two position-relative z-1">
            <ul className="list-unstyled mb-0">
              {movingTextItems.map((item, index) => (
                <li key={index} className="position-relative font-secondary">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="post-share d-flex flex-wrap align-items-center justify-content-md-end">
          <span className="text-title fw-semibold">Follow Us:</span>
          <ul className="social-profile style-three list-unstyled mb-0">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {showModal && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            onClick={handleBackdropClick}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content bg-transparent border-0">
                <div className="modal-header border-0 p-0">
                  <button
                    type="button"
                    className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body p-0">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/u31qwQUeGuM?si=bQFS7owGBv75M14M"
                      title="Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {showModal && <div className="modal-backdrop fade show"></div>}
      </div>
  );
};

export default HeroBanner;
