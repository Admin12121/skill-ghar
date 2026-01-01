"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  // Dynamic brand data
  const brands = [
    { id: 1, src: "/images/brand/brand-logo-1.svg", alt: "Brand Logo 1" },
    { id: 2, src: "/images/brand/brand-logo-2.svg", alt: "Brand Logo 2" },
    { id: 3, src: "/images/brand/brand-logo-3.svg", alt: "Brand Logo 3" },
    { id: 4, src: "/images/brand/brand-logo-4.svg", alt: "Brand Logo 4" },
    { id: 5, src: "/images/brand/brand-logo-5.svg", alt: "Brand Logo 5" },
    { id: 6, src: "/images/brand/brand-logo-6.svg", alt: "Brand Logo 6" },
    { id: 7, src: "/images/brand/brand-logo-7.svg", alt: "Brand Logo 7" },
    { id: 8, src: "/images/brand/brand-logo-1.svg", alt: "Brand Logo 1" },
    { id: 9, src: "/images/brand/brand-logo-2.svg", alt: "Brand Logo 2" },
    { id: 10, src: "/images/brand/brand-logo-3.svg", alt: "Brand Logo 3" },
    { id: 11, src: "/images/brand/brand-logo-4.svg", alt: "Brand Logo 4" },
    { id: 12, src: "/images/brand/brand-logo-5.svg", alt: "Brand Logo 5" },
    { id: 13, src: "/images/brand/brand-logo-6.svg", alt: "Brand Logo 6" },
  ];

  return (
    <>
      <Swiper
        spaceBetween={45}
        speed={15000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        autoHeight={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          992: {
            slidesPerView: 4.5,
          },
          1200: {
            slidesPerView: 5.2,
          },
          1400: {
            slidesPerView: 6.5,
          },
        }}
        modules={[Autoplay]}
        className="brand-slider ptb-120"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="brand-logo">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={150}
                height={60}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                className="d-block mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Brands;
