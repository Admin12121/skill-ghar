"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialsStyle3 = () => {
  // Dynamic testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "From the first consultation to final reveal, Edifico made our They truly to our ideas and brought life with incredible.",
      name: "Ramu Biharilal",
      title: "Manager",
      image: {
        src: "/images/clients/client-1.jpg",
        alt: "Ramu Biharilal",
      },
    },
    {
      id: 2,
      quote:
        "Awosome services from first consultation to the final reveal, Edifico made us amazed. They truly listened attention to detail",
      name: "Richard Domenic",
      title: "Entrprenuer",
      image: {
        src: "/images/clients/client-2.jpg",
        alt: "Richard Domenic",
      },
    },
    {
      id: 3,
      quote:
        "They truly listened to our ideas and brought them to life with incredible attention to detail. From the first consultation to the exciting",
      name: "Kim Jerry",
      title: "Founder",
      image: {
        src: "/images/clients/client-3.jpg",
        alt: "Kim Jerry",
      },
    },
  ];

  // Dynamic section data
  const sectionData = {
    subtitle: "TESTIMONIALS",
    title: "Reliable, Professional, and Truly Cared About Every Detail",
    rating: 4.9,
    customerCount: "3K+",
    homeIcon: {
      src: "/images/icons/home-icon.svg",
      alt: "Home icon",
    },
    starIcon: {
      src: "/images/icons/star.svg",
      alt: "Star icon",
    },
    quoteIcon: {
      src: "/images/icons/quote-large.svg",
      alt: "Quote icon",
    },
  };

  return (
    <>
      <div className="container ptb-120">
        <div className="row align-items-end mb-45">
          <div className="col-xxl-6 col-lg-7 col-md-8 mb-sm-20">
            <h6 className="section-subtitle style-two d-inline-block fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-25">
              <Image
                src={sectionData.homeIcon.src}
                alt={sectionData.homeIcon.alt}
                width={12}
                height={13}
              />
              {sectionData.subtitle}
            </h6>

            <h2 className="section-title style-one fw-normal text-title mb-0">
              {sectionData.title.split(" ").map((word, index, array) => (
                <React.Fragment key={index}>
                  {index === 1 ? (
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

        <div className="row align-items-center">
          <div className="col-xxl-2 col-lg-3 order-xxl-1 order-lg-1 order-2 pe-xxl-0">
            <div className="rating-box style-two d-flex flex-column align-items-center justify-content-center text-center rounded-circle">
              <h2 className="fw-black font-secondary position-relative mb-0">
                {sectionData.rating}
              </h2>
              <div>
                <ul className="rating list-unstyled">
                  {[...Array(5)].map((_, index) => (
                    <li key={index}>
                      <Image
                        src={sectionData.starIcon.src}
                        alt={sectionData.starIcon.alt}
                        width={19}
                        height={18}
                      />
                    </li>
                  ))}
                </ul>
                <p className="fs-xxl-18 fw-medium mb-0">
                  <span className="text_primary fw-bold">
                    {sectionData.customerCount}
                  </span>{" "}
                  Satisfied Customers
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-10 col-lg-9 order-xxl-2 order-lg-2 order-1 pe-xl-2">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoHeight={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Pagination]}
              className="testimonial-slider-one style-three position-relative z-1 pt-1"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card style-three d-flex flex-wrap align-items-center">
                    <div className="testimonial-content d-flex flex-wrap">
                      <span className="quote-icon bg_secondary d-flex flex-wrap align-items-center justify-content-center rounded-circle">
                        <Image
                          src={sectionData.quoteIcon.src}
                          alt={sectionData.quoteIcon.alt}
                          width={38}
                          height={34}
                        />
                      </span>
                      <p className="fw-medium text-title">
                        <q>{testimonial.quote}</q>
                      </p>
                      <h6 className="fs-20 font-primary fw-semibold position-relative text-title mb-0">
                        {testimonial.name}
                        <span className="fs-15 fw-normal d-block text-para mt-1 pt-1">
                          {testimonial.title}
                        </span>
                      </h6>
                    </div>
                    <div className="testimonial-img round-30">
                      <Image
                        src={testimonial.image.src}
                        alt={testimonial.image.alt}
                        width={570}
                        height={673}
                        className="round-30"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsStyle3;
