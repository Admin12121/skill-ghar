import Image from "next/image";

const AboutUsContent = () => {
  // Dynamic data for counter cards
  const counterData = [
    {
      id: 1,
      title: "EXPERIENCE",
      value: "10",
      suffix: "+",
      description: "Years in Business",
      bgClass: "bg-1",
    },
    {
      id: 2,
      title: "EXPERTISE",
      value: "50",
      suffix: "+",
      description: "Skilled Professionals",
      bgClass: "bg-2",
    },
    {
      id: 3,
      title: "SUCCESS",
      value: "500",
      suffix: "+",
      description: "Happy Customers",
      bgClass: "bg-3",
    },
  ];

  return (
    <div className="about-area style-one pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-img-wrap position-relative pe-xxl-4 mb-md-30">
                <Image
                  src="/images/about/about-img-1.jpg"
                  alt="about"
                  width={890}
                  height={1036}
                  className="about-img round-30 tilt-img"
                />
                <Image
                  src="/images/about/about-thumb.jpg"
                  alt="about"
                  width={164}
                  height={170}
                  className="about-thumb move-bottom position-absolute"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 ps-xxl-4">
              <div className="about-content">
                <h6 className="section-subtitle style-one d-inline-block fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20">
                  <Image
                    src="/images/icons/star-3.svg"
                    alt="Icon"
                    width={17}
                    height={16}
                  />
                  ABOUT US
                </h6>
                <h2 className="section-title style-one text-title">
                  Skill Griha is a{" "}
                  <span className="fw-black">
                    home renovation expert
                    <span className="d-inline-block mx-2">
                      <Image
                        src="/images/about/about-thumb-2.jpg"
                        alt="about thumb"
                        width={80}
                        height={32}
                      />
                    </span>
                    that helps people improve,
                  </span>{" "}
                  repair, and redesign their homes in a simple way
                </h2>
                <div className="about-subcontent">
                  <p className="pe-xxl-5">
                    We believe a home should be comfortable, cozy, safe, and beautiful — and our job is to help you create that kind of space. We work with homeowners who want quality work, clear communication, and a team they can trust.
                  </p>
                  <div className="row justify-content-center">
                    {counterData.map((counter) => (
                      <div
                        key={counter.id}
                        className="col-xl-4 col-lg-6 col-md-6"
                      >
                        <div
                          className={`counter-card style-one ${counter.bgClass} position-relative z-1 round-10`}
                        >
                          <Image
                            src="/images/about/star-group.png"
                            alt="Icon"
                            width={141}
                            height={36}
                            className="position-absolute card-shape z-1"
                          />
                          <h6 className="fs-12 font-primary fw-semibold text-title ls-1">
                            {counter.title}
                          </h6>
                          <h4 className="font-secondary fw-black fs-36 text-title">
                            <span className="counter ls-1 transition">
                              {counter.value}
                            </span>
                            {counter.suffix}
                          </h4>
                          <p className="fw-medium d-block mb-0">
                            {counter.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUsContent;
