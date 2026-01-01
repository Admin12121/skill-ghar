"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookAVisitForm from "./BookAVisitForm";
import { CircleArrowRight } from "lucide-react";

interface ServiceData {
  title: string;
  heroImage: string;
  excerpt: string;
  overview: string;
  content: string;
  features: Array<{
    icon: string;
    title: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  servicesOffered: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

interface ServiceListItem {
  slug: string;
  title: string;
}

interface ServiceDetailsContentProps {
  data: ServiceData;
  servicesList: ServiceListItem[];
}

const ServiceDetailsContent = ({ data, servicesList }: ServiceDetailsContentProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="container ptb-120">
      <div className="row">
        <div className="col-xl-8 pe-xxl-4">
          <div className="service-desc">
            {/* Hero Image */}
            <div className="single-img round-10 mb-35">
              <Image
                src={data.heroImage}
                alt={data.title}
                width={1140}
                height={595}
                className="round-10"
              />
            </div>

            {/* Main Content */}
            <div className="single-para">
              <h1 className="font-secondary">{data.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>

            {/* Overview */}
            <div className="single-para">
              <h6>Overview & Challenge</h6>
              <p>{data.overview}</p>
            </div>

            {/* Features Grid */}
            <div className="row justify-content-center mb-2">
              {data.features.map((feature, index) => (
                <div key={index} className="col-md-3 col-6">
                  <div className="feature-card style-one mb-30">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                    />
                    <h3 className="fs-16 font-primary fw-semibold mb-0 pe-xxl-5">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Section */}
            <div className="row mb-2">
              <div className="col-xxl-8 col-xl-7 col-lg-8 col-md-7 pe-xl-4">
                <div className="testimonial-card style-two bg-gray round-10 mb-30">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <span className="quote-icon bg_secondary d-flex flex-wrap align-items-center justify-content-center rounded-circle mb-0">
                      <Image
                        src="/images/icons/quote-large.svg"
                        alt="Icon"
                        width={38}
                        height={34}
                      />
                    </span>
                    <ul className="rating list-unstyled mb-0 w-50 text-end">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <Image
                            src="/images/icons/star.svg"
                            alt="Star"
                            width={19}
                            height={18}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="fw-medium text-title">
                    <q>{data.testimonial.quote}</q>
                  </p>
                  <h6 className="fs-20 font-primary fw-semibold position-relative text-title mb-1">
                    {data.testimonial.author}
                  </h6>
                  <span className="fs-15 fw-normal d-block text-para">
                    {data.testimonial.role}
                  </span>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-5 col-lg-4 col-md-5 ps-xl-0 ps-lg-4 pe-xl-2">
                <div className="single-img round-10 mb-30">
                  <Image
                    src={data.testimonial.image}
                    alt="testimonial"
                    className="round-10"
                    width={570}
                    height={703}
                  />
                </div>
              </div>
            </div>

            <div className="single-para">
              <h6>Services Offered</h6>
              <ul className="feature-item-list style-one list-unstyled">
                {data.servicesOffered.map((service, index) => (
                  <li key={index} className="position-relative">
                    <span className="text-title fw-semibold me-1">
                      {service.title} :
                    </span>
                    {service.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ Accordion */}
            <div className="single-para">
              <h6 className="mb-4">Popular Questions</h6>
              <div className="accordion style-one">
                {data.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`accordion-item ${
                      openIndex !== index ? "collapsed" : ""
                    }`}
                  >
                    <div className="accordion-header">
                      <div
                        className="accordion-button"
                        onClick={() => toggleAccordion(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="accord-arrow">
                          <i
                            className={`ri-arrow-down-s-fill ${
                              openIndex === index ? "plus" : ""
                            }`}
                          ></i>
                          <i
                            className={`ri-arrow-up-s-fill ${
                              openIndex === index ? "minus" : "d-none"
                            }`}
                          ></i>
                        </span>
                        {faq.question}
                      </div>
                    </div>
                    <div
                      className={`accordion-collapse collapse ${
                        openIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        <p className="fs-xx-14">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 ps-xxl-4">
          <aside className="sidebar mt-lg-50">
            <div className="sidebar-widget category-widget bg-gray round-10">
              <h3 className="sidebar-widget-title fs-18 fw-semibold text-title mb-15">
                Service Lists
              </h3>
              <ul className="list-unstyled mb-0">
                {servicesList.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="position-relative flex flex-row items-center gap-2"
                    >
                      <CircleArrowRight className="size-4 text-orange-600" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <BookAVisitForm />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;