"use client";

import { useEffect, useRef, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openModal = () => setShowModal(true);

  const closeModal = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
      v.removeAttribute("src");
      v.load();
    }
    setShowModal(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  useEffect(() => {
    if (!showModal) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [showModal]);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const slides: Slide[] = [
    {
      backgroundImage: "/images/hero/hero-slide-1.webp",
      features: [
        {
          title: "Experienced Team",
          description:
            "Professional team with years of expertise in home renovation and construction work",
          linkText: "Why Choose Us",
          linkHref: "/about",
        },
        {
          title: "Premium Finishing",
          description:
            "Attention to detail and high-quality finishing that makes your home look beautiful",
          linkText: "Our Services",
          linkHref: "/services",
        },
        {
          title: "Clear Pricing",
          description:
            "Transparent pricing without hidden costs so you know exactly what you're paying for",
          linkText: "Contact Us",
          linkHref: "/contact-us",
        },
      ],
    },
    {
      backgroundImage: "/images/hero/hero-slide-2.webp",
      features: [
        {
          title: "Home Renovation",
          description:
            "We redesign and upgrade homes to improve comfort, style, and usability",
          linkText: "View Details",
          linkHref: "/services/home-renovation",
        },
        {
          title: "Modular Kitchen",
          description:
            "Smart, stylish, and practical kitchens with quality materials and layouts",
          linkText: "View Details",
          linkHref: "/services/modular-kitchen",
        },
        {
          title: "Waterproofing",
          description:
            "Protect your home from leakage and dampness with reliable solutions",
          linkText: "View Details",
          linkHref: "/services/water-proofing",
        },
      ],
    },
    {
      backgroundImage: "/images/hero/hero-slide-3.webp",
      features: [
        {
          title: "Roofing",
          description:
            "Strong and durable roofing with Glass, UPVC, Fibre & Polycarbonate options",
          linkText: "View Details",
          linkHref: "/services/roofing",
        },
        {
          title: "Bathroom Remodeling",
          description:
            "Transform bathrooms into clean, modern, and comfortable spaces",
          linkText: "View Details",
          linkHref: "/services/washroom-remoduling",
        },
        {
          title: "Electrical & Plumbing",
          description:
            "Safe, neat, and professional installation and repair services",
          linkText: "View Details",
          linkHref: "/services/electric-and-plumbing",
        },
      ],
    },
  ];

  const movingTextItems = [
    { text: "PREMIUM QUALITY WORK" },
    { text: "CLEAR COMMUNICATION" },
    { text: "TRUSTED SERVICE" },
    { text: "WORK COMPLETED ON TIME" },
    { text: "PREMIUM QUALITY WORK" },
    { text: "CLEAR COMMUNICATION" },
    { text: "TRUSTED SERVICE" },
    { text: "WORK COMPLETED ON TIME" },
    { text: "PREMIUM QUALITY WORK" },
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
                <House className="size-4" />
                SKILL GRIHA — HOME RENOVATION EXPERT
              </h6>
              <h1 className="font-secondary fw-normal text-title mb-0">
                <b className="fw-black">पुरानो घर नयाँ स्वरूप</b>
                <span className="d-md-block">
                  {" "}
                  We help you <b className="fw-black">improve, redesign,</b>
                </span>{" "}
                and upgrade your home
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
                onClick={openModal}
                aria-label="Play promotion video"
              >
                <Play className="size-6 text-white" />
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
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                <div className="row justify-content-center">
                  {slide.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="col-lg-4 col-md-6 mb-md-20"
                    >
                      <div className="hero-feature-card d-flex flex-wrap">
                        <span className="feature-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary">
                          <Check className="size-4 text-white" />
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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop (click to close) */}
          <button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
            onClick={closeModal}
          />

          {/* Modal content (prevent closing when clicking inside) */}
          <div
            className="relative z-10 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -top-12 right-0 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
              <video
                ref={videoRef}
                className="h-full w-full object-contain"
                src="/video/promotion.mp4"
                preload="none"
                playsInline
                autoPlay
                loop
                controls={false}
                onClick={togglePlay}
              />
            </div>

            <p className="mt-3 text-center text-sm text-white/70">
              Click the video to pause/play • Click outside or press ESC to
              close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
