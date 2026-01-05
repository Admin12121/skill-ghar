"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Dynamic team members data
const teamMembersData = [
  {
    id: 1,
    name: "Jit Gajmer",
    position: "Project Manager",
    imageUrl: "/images/team/jit-gajmer.webp",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      {
        platform: "twitter",
        url: "https://x.com/",
        icon: "ri-twitter-x-line",
      },
    ],
  },
  {
    id: 2,
    name: "Ramesh Khadka",
    position: "Department Chief Inspection",
    imageUrl: "/images/team/ramesh-khadka.webp",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      {
        platform: "twitter",
        url: "https://x.com/",
        icon: "ri-twitter-x-line",
      },
    ],
  },
  {
    id: 3,
    name: "Surendra BK",
    position: "Sale and Department",
    imageUrl: "/images/team/surendra.webp",
    profileUrl: "/team/details",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        icon: "ri-facebook-fill",
      },
      { platform: "twitter", url: "https://x.com/", icon: "ri-twitter-x-line" },
    ],
  },
];

const MeetTheTeams = () => {
  return (
    <>
      <div className="team-area style-one position-relative ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-10 text-center px-xxl-5">
              <h6 className="section-subtitle style-one d-inline-block fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20">
                <Image
                  src="/images/icons/star-3.svg"
                  alt="Icon"
                  width={17}
                  height={16}
                />
                MEET THE TEAM
              </h6>
              <h2 className="section-title style-one text-title px-xxl-5 mb-40">
                Trusted{" "}
                <span className="fw-black">Professionals Who Treat Your</span>{" "}
                Home Like Their Own
              </h2>
            </div>
          </div>

          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="team-slider-one"
          >
            {teamMembersData.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="team-card style-one">
                  <div className="team-img round-10 position-relative overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={`${member.name} - ${member.position}`}
                      width={570}
                      height={675}
                      className="round-10"
                    />
                  </div>
                  <div className="team-info d-flex flex-wrap justify-content-between">
                    <div>
                      <h3 className="fw-bold mb-1">
                        <Link
                          href={member.profileUrl}
                          className="text-title link-hover-primary transition"
                        >
                          {member.name}
                        </Link>
                      </h3>
                      <span>{member.position}</span>
                    </div>
                    <ul className="social-profile style-two list-unstyled mb-0">
                      {member.socialLinks.map((social, index) => (
                        <li key={index}>
                          <a
                            href={social.url}
                            className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={social.icon}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MeetTheTeams;
