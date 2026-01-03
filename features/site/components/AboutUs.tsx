import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
const AboutUs = () => {
  const features = [
    {
      id: 1,
      icon: "/images/about/feature-icon-1.png",
      title: "Experienced and professional team",
      description: "Our team has years of expertise in home renovation and construction work.",
    },
    {
      id: 2,
      icon: "/images/about/feature-icon-2.png",
      title: "Premium finishing and attention to detail",
      description: "We focus on quality finishing that makes your home look beautiful.",
    },
    {
      id: 3,
      icon: "/images/about/feature-icon-3.png",
      title: "Clear pricing without hidden costs",
      description: "Transparent pricing so you know exactly what you're paying for.",
    },
    {
      id: 4,
      icon: "/images/about/feature-icon-4.png",
      title: "Work completed on time",
      description:
        "We respect your time and complete work as scheduled while maintaining quality.",
    },
  ];

  // Dynamic data for images
  const images = {
    main: {
      src: "/images/about/about-img-3.png",
      alt: "About us image",
    },
    shape: {
      src: "/images/about/shape-1.png",
      alt: "Decorative shape",
    },
    homeIcon: {
      src: "/images/icons/home-icon.svg",
      alt: "Home icon",
    },
  };

  const content = {
    subtitle: "ABOUT US",
    title: "We help people improve repair and redesign their homes in a simple way",
    description:
      "We believe a home should be comfortable, cozy, safe, and beautiful — and our job is to help you create that kind of space. We work with homeowners who want quality work, clear communication, and a team they can trust.",
    buttonText: "More About Us",
    buttonLink: "/about",
  };

  return (
    <div className="position-relative z-1 ptb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-lg-5">
            <div className="about-img-wrap position-relative z-1 mb-md-30">
              <Image
                src={images.main.src}
                alt={images.main.alt}
                width={526}
                height={640}
                className="d-block tilt-img mx-auto"
              />
              <Image
                src={images.shape.src}
                alt={images.shape.alt}
                width={445}
                height={230}
                className="about-shape position-absolute top-0 z-n1"
              />
            </div>
          </div>

          <div className="col-xxl-6 offset-xxl-1 col-lg-7 ps-xxl-3 ps-xl-4">
            <div className="about-content position-relative">
              <h6 className="section-subtitle style-two fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20 flex flex-row gap-2 p-0">
                <Home className="size-4" />
                {content.subtitle}
              </h6>
              <h2 className="section-title style-one fw-normal text-title mb-30">
                {content.title.split(" ").map((word, index, array) => (
                  <span key={index}>
                    {index === 2 ? (
                      <span className="fw-black">{word}</span>
                    ) : (
                      word
                    )}
                    {index < array.length - 1 ? " " : ""}
                  </span>
                ))}
              </h2>

              <div className="row gx-xxl-45">
                {features.map((feature) => (
                  <div key={feature.id} className="col-sm-6 mb-30">
                    <div className="feature-item position-relative flex flex-col gap-2">
                      <span className="flex flex-row gap-2">
                        <Image
                          src={feature.icon}
                          alt={`${feature.title} icon`}
                          width={30}
                          height={30}
                          className="feature-icon object-contain"
                        />
                        <h3 className="fs-16 fw-semibold">{feature.title}</h3>
                      </span>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={content.buttonLink}
                className="btn style-one d-inline-flex flex-wrap align-items-center p-0"
              >
                <span className="btn-text d-inline-block fw-semibold position-relative transition">
                  {content.buttonText}
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
  );
};

export default AboutUs;
