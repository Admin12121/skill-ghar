"use client";

import { Home } from "lucide-react";
import { useState } from "react";

const FaqContent = () => {
  const faqData = [
    {
      id: 1,
      question: "Why should I choose Skill Griha for renovation?",
      answer: [
        "Because we prioritize quality, professionalism, and transparent service while delivering reliable results.",
        "Our experienced team focuses on doing the job properly and making customers happy with attention to detail and clear communication.",
      ],
    },
    {
      id: 2,
      question: "Do you provide project cost estimates?",
      answer: [
        "Yes. We provide a clear and transparent quotation after site assessment and requirement discussion.",
        "Our pricing is straightforward with no hidden costs, so you know exactly what you're paying for.",
      ],
    },
    {
      id: 3,
      question: "Will someone supervise the project?",
      answer: [
        "Absolutely. Each project is handled by a dedicated supervisor to maintain quality control and coordination.",
        "We ensure that work is done properly, safely, and neatly with continuous oversight throughout the project.",
      ],
    },
    {
      id: 4,
      question: "Do you use certified materials?",
      answer: [
        "Yes, only tested and trusted materials are used to ensure durability.",
        "We use premium quality materials and fittings from reliable brands to guarantee long-lasting results.",
      ],
    },
    {
      id: 5,
      question: "Do you handle both small and large renovation projects?",
      answer: [
        "Yes. From minor upgrades to complete remodeling \u2014 we manage all project sizes.",
        "Whether you want to renovate a room or your whole house, our team makes the process smooth and stress-free.",
      ],
    },
    {
      id: 6,
      question: "Is waterproofing guaranteed?",
      answer: [
        "We use industry-standard solutions and provide guarantee coverage depending on the selected service.",
        "Our waterproofing work is reliable and designed to protect your home from leaks and moisture damage for years.",
      ],
    },
    {
      id: 7,
      question: "Do you work with customized designs?",
      answer: [
        "Yes, every project is tailor-made to meet the client's needs and preferences.",
        "We listen to your requirements, understand your space, and create solutions that match your vision and lifestyle.",
      ],
    },
  ];

  // State to track which FAQ is open
  const [openFaqId, setOpenFaqId] = useState(1); // First FAQ open by default

  // Toggle FAQ open/close
  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? 0 : id);
  };

  return (
    <main>
      <div className="container ptb-120">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 text-center px-xxl-5 mb-60">
            <h6 className="section-subtitle style-one fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20 flex flex-row gap-2 justify-center items-center">
               <Home className="size-4" />
              FREQUENTLY ASKED QUESTIONS
            </h6>
            <h2 className="section-title style-one text-title px-xxl-5 mb-0">
              Common{" "}
              <span className="fw-black">Questions About Our Services</span>{" "}
              Answered
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="accordion style-one">
              {faqData.map((faq) => (
                <div
                  className={`accordion-item ${
                    openFaqId === faq.id ? "" : "collapsed"
                  }`}
                  key={faq.id}
                >
                  <div className="accordion-header">
                    <div
                      className="accordion-button"
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className="accord-arrow">
                        <i
                          className={`ri-arrow-down-s-fill plus ${
                            openFaqId === faq.id ? "d-none" : ""
                          }`}
                        ></i>
                        <i
                          className={`ri-arrow-up-s-fill minus ${
                            openFaqId === faq.id ? "" : "d-none"
                          }`}
                        ></i>
                      </span>
                      {faq.id.toString().padStart(2, "0")} . {faq.question}
                    </div>
                  </div>
                  <div
                    className={`accordion-collapse collapse ${
                      openFaqId === faq.id ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      {faq.answer.map((paragraph, index) => (
                        <p
                          key={index}
                          className={index === 0 ? "fs-xx-14" : ""}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FaqContent;
