"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { House } from "lucide-react";

interface TestimonialItem {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
}

interface RatingData {
  value: string;
  satisfiedCustomers: string;
}

const TestimonialsStyle2 = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote:
        "From the first consultation to the final reveal, Edifico made our exciting. They truly listened to our ideas and brought them to life with incredible attention to detail.",
      authorName: "Ramu Biharilal",
      authorRole: "Manager",
    },
    {
      id: 2,
      quote:
        "They truly listened to our ideas and brought them to life with incredible attention to detail.From the first consultation to the final reveal, Edifico made our exciting.",
      authorName: "Jhon Richards",
      authorRole: "Entreprenuer",
    },
    {
      id: 3,
      quote:
        "Awosome services from first consultation to the final reveal, Edifico made us amazed. They truly listened to our ideas and brought them live with incredible attention to detail.",
      authorName: "Emily Watson",
      authorRole: "Teacher",
    },
  ];

  const ratingData: RatingData = {
    value: "4.9",
    satisfiedCustomers: "3K+",
  };

  return (
    <div className="container ptb-120">
        <div className="row">
          <div className="col-xxl-4 col-lg-5 pe-xxl-0 mb-md-30">
            <h6 className="section-subtitle style-two fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-16 flex flex-row gap-2">
                  <House className="size-4"/>
              TESTIMONIALS
            </h6>

            <h2 className="section-title style-one fw-normal text-title mb-35">
              Reliable,{" "}
              <span className="fw-black">
                Professional, And Truly Cared About
              </span>{" "}
              Every Detail
            </h2>

            <div className="rating-box style-one d-flex flex-wrap align-items-center round-10 me-xxl-4">
              <h2 className="fw-black position-relative mb-0">
                {ratingData.value}
              </h2>
              <div>
                <ul className="rating list-unstyled mb-1">
                  <li>
                    <Image
                      src="/images/icons/star.svg"
                      alt="Icon"
                      width={19}
                      height={18}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/icons/star.svg"
                      alt="Icon"
                      width={19}
                      height={18}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/icons/star.svg"
                      alt="Icon"
                      width={19}
                      height={18}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/icons/star.svg"
                      alt="Icon"
                      width={19}
                      height={18}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/icons/star.svg"
                      alt="Icon"
                      width={19}
                      height={18}
                    />
                  </li>
                </ul>
                <p className="fs-xxl-18 fw-medium mb-0">
                  <span className="text_primary fw-bold">
                    {ratingData.satisfiedCustomers}
                  </span>{" "}
                  Satisfied Customers
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-8 col-lg-7 pe-xl-2">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              autoHeight={true}
              modules={[Navigation, Autoplay]}
              className="testimonial-slider-one style-one swiper position-relative z-1 pt-1"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card style-two">
                    <span className="quote-icon bg_secondary d-flex flex-wrap align-items-center justify-content-center rounded-circle">
                      <Image
                        src="/images/icons/quote-large.svg"
                        alt="Icon"
                        width={38}
                        height={44}
                      />
                    </span>
                    <p className="fw-medium text-title">
                      <q>{testimonial.quote}</q>
                    </p>
                    <h6 className="fs-20 font-primary fw-semibold position-relative text-title mb-0">
                      {testimonial.authorName}
                      <span className="fs-15 fw-normal text-para ms-2">
                        {testimonial.authorRole}
                      </span>
                    </h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
  );
};

export default TestimonialsStyle2;
