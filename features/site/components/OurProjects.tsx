"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { House } from "lucide-react";
import type { ProjectListItem } from "@/lib/projects";

interface OurProjectsProps {
  projects: ProjectListItem[];
}

const OurProjects = ({ projects }: OurProjectsProps) => {

  return (
    <div className="ptb-120 max-w-dvw! px-4">
      <div className="row justify-content-center">
        <div className="col-xl-6 text-center">
          <h6 className="section-subtitle style-two text-center fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-16 flex flex-row gap-2 justify-center items-center">
            <House className="size-4"/>
            OUR PROJECTS
          </h6>
          <h2 className="section-title style-one fw-normal text-title mb-35">
            Basement To{" "}
            <span className="fw-black">Beautiful – Finished Basement</span>{" "}
            Project
          </h2>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        autoHeight={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          992: {
            slidesPerView: 2.1,
          },
          1200: {
            slidesPerView: 2.2,
          },
          1300: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 2.85,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="project-slider-two"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.slug}>
            <div
              className="project-card style-two position-relative overflow-hidden z-1 round-10"
              style={{
                backgroundImage: `url(${project.backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <span className="project-status transition">
                {project.status}
              </span>
              <span className="project-counter text-center font-secondary fw-semibold d-block lh-1 transition">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-title d-flex flex-wrap align-items-center justify-content-between">
                <h3 className="fs-24 fw-semibold mb-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-title hover-text-primary transition text-white!"
                  >
                    {project.title}
                  </Link>
                </h3>
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-link d-flex flex-column align-items-center justify-content-center rounded-circle transition"
                >
                  <Image
                    src="/images/icons/up-right-arrow-orange.svg"
                    alt="Icon"
                    width={16}
                    height={16}
                    className="transition"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProjects;
