import React from "react";
import Image from "next/image";
import Link from "next/link";

const CtaThree = () => {
  return (
    <>
      <div
        className="cta-area style-three bg-f position-relative overflow-hidden z-1"
        style={{
          backgroundImage: `url(/images/cta/cta-bg-3.jpg)`,
        }}
      >
        <Image
          src="/images/cta/shape-1.png"
          alt="Shape"
          width={627}
          height={347}
          className="section-shape position-absolute bottom-0 end-0 z-0"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 mb-sm-20">
              <h2 className="section-title style-two fw-normal text-white mb-0">
                Let’s Build Your{" "}
                <span className="fw-black">Dream Home Today</span> – Contact Us
                For A Consultation!
              </h2>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="circle-text-wrap position-relative bg-transparent rounded-circle overflow-hidden z-1 ms-md-auto me-md-0 ms-auto me-auto">
                <Image
                  src="/images/cta/circle-text.png"
                  alt="Circle Text"
                  width={211}
                  height={211}
                  className="rotate position-relative z-2 d-block mx-auto"
                />
                <Image
                  src="/images/icons/up-right-arrow-white-small.svg"
                  alt="Icon"
                  width={25}
                  height={25}
                  className="arrow-icon position-absolute z-n1"
                />
                <Link
                  href="/contact-us"
                  className="position-absolute top-0 start-0 w-100 h-100 z-2"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaThree;
