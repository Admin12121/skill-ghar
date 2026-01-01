"use client";

import { useState } from "react";

const FaqContent = () => {
  const faqData = [
    {
      id: 1,
      question: "Can I Consult You Before Buying Land Or Property?",
      answer: [
        "Yes. We offer pre-purchase consultations to help you make an informed decision.",
        "Our review typically includes zoning/by-law checks, basic feasibility (utilities, access, setbacks), high-level budget ranges, and risk items to watch for. If you proceed with us, the consultation fee is credited to your project.",
      ],
    },
    {
      id: 2,
      question: "Are Your Services Available Outside The City?",
      answer: [
        "We primarily serve the greater metro area, but we do take projects outside the city.",
        "For out-of-city work, we schedule site visits in advance and apply a mobilization/travel fee. Remote planning and coordination are fully supported via video calls and shared project dashboards.",
      ],
    },
    {
      id: 3,
      question: "Do You Manage Properties For Landlords Or Investors?",
      answer: [
        "Yes. We provide end-to-end property management for residential and light commercial assets.",
        "Services include tenant screening, leasing, rent collection, preventive maintenance, emergency repairs, periodic inspections, and monthly/annual financial reporting. Packages are available for single units and portfolios.",
      ],
    },
    {
      id: 4,
      question: "What Types Of Properties Do You Handle?",
      answer: [
        "Residential: custom homes, additions, extensions, and full renovations.",
        "Commercial: office fit-outs, retail, clinics, and light industrial/warehouse improvements. We also handle site works, foundations, and exterior upgrades.",
      ],
    },
    {
      id: 5,
      question: "Do You Offer Custom Home Construction?",
      answer: [
        "Absolutely. We deliver design-build or build-to-plan, depending on your needs.",
        "Our scope can cover architecture coordination, structural/MEP, permitting, procurement, construction, interior finishes, and handover. Choose fixed-price or cost-plus with open-book accounting.",
      ],
    },
    {
      id: 6,
      question: "How Long Does A Construction Project Usually Take?",
      answer: [
        "Typical ranges: small renovations 4–12 weeks, single-family homes 6–12 months, commercial interiors 8–16 weeks.",
        "Timelines depend on design complexity, approvals, material lead times, and site conditions. We share a Gantt schedule at kickoff and update it weekly.",
      ],
    },
    {
      id: 7,
      question: "Is Your Pricing Flexible Or Fixed?",
      answer: [
        "Both. During pre-construction we provide detailed estimates and value-engineering options.",
        "Once drawings/specs are locked, we can sign a fixed-price contract. If you prefer flexibility for evolving scopes, we offer a cost-plus model with transparent reporting.",
      ],
    },
    {
      id: 8,
      question: "How Long Does A Typical Construction Project Take?",
      answer: [
        "Key drivers are approvals, scope size, structural complexity, and supply chain.",
        "To keep schedules tight, we finalize selections early, lock critical materials, and run weekly coordination meetings. Weather buffers and inspection windows are built into the plan.",
      ],
    },
    {
      id: 9,
      question: "Is Your Pricing Fixed Or Customized?",
      answer: [
        "Pricing is customized to your scope, finishes, and timeline.",
        "We can bundle design, permits, and construction or keep them separate. Payment milestones usually follow design sign-off, mobilization, key progress checkpoints, and practical completion.",
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
    <>
      <div className="container ptb-120">
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
    </>
  );
};

export default FaqContent;
