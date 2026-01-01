import Image from "next/image";

type TitleBlock = {
  subtitle: string;
  titlePrefix: string;
  titleBold: string;
  titleSuffix: string;
};

type FeatureItem = {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

type CardSix = {
  image: {
    src: string;
    alt: string;
  };
  heading: string; // "Mission" | "Vision"
  paragraph: string;
  bulletPoints: string[];
};

// ---- Data ----
const titleBlock: TitleBlock = {
  subtitle: "OUR FEATURES",
  titlePrefix: "Geniune",
  titleBold: "Partner In Every Aspect",
  titleSuffix: "Of Development",
};

const features: FeatureItem[] = [
  {
    id: 1,
    imageSrc: "/images/features/feature-1.png",
    imageAlt: "Project Management",
    title: "Project Management",
    description:
      "We handle everything from permits to final walkthrough communication every step of the way",
  },
  {
    id: 2,
    imageSrc: "/images/features/feature-2.png",
    imageAlt: "Skilled Team",
    title: "Skilled Team",
    description:
      "Experienced professionals committed to precision and safety goal is zero incidents",
  },
  {
    id: 3,
    imageSrc: "/images/features/feature-3.png",
    imageAlt: "Premium Materials",
    title: "Premium Materials",
    description:
      "Only top-grade materials used for lasting strength and styleOur goal is zero incidents",
  },
  {
    id: 4,
    imageSrc: "/images/features/feature-4.png",
    imageAlt: "Custom Home Builds",
    title: "Custom Home Builds",
    description:
      "Tailored designs built from the ground match your vision Reliable timelines with clear",
  },
];

const cardSixBlocks: CardSix[] = [
  {
    image: {
      src: "/images/about/about-img-4.jpg",
      alt: "Image",
    },
    heading: "Mission",
    paragraph: "To build beautiful, lasting homes with unmatched craftsmanship",
    bulletPoints: [
      "Commercial Services",
      "Residential Services",
      "Construction Services",
      "Industrial Services",
      "Home Renovation",
    ],
  },
  {
    image: {
      src: "/images/about/about-img-5.jpg",
      alt: "Image",
    },
    heading: "Vission", // Kept as in original (typo preserved intentionally)
    paragraph:
      "To be the most trusted name in custom home building redefining craftsmanship",
    bulletPoints: [
      "Home Craftsmanship",
      "Experiences For Every Client",
      "Smart Building Solutions",
      "Trust And Transparency",
      "Endure For Generations",
    ],
  },
];


export default function OurFeatures() {
  return (
    <>
      <div className="feature-area style-four position-relative z-1 pt-120 pb-90 mx-xxl-4">
        <div className="container">
          {/* Header */}
          <div className="row">
            <div className="col-xl-6">
              <h6 className="section-subtitle style-two fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20">
                <Image
                  src="/images/icons/home-icon.svg"
                  alt="Icon"
                  width={12}
                  height={13}
                />
                {titleBlock.subtitle}
              </h6>
              <h2 className="section-title style-one fw-normal text-title mb-40">
                {titleBlock.titlePrefix}{" "}
                <span className="fw-black">{titleBlock.titleBold}</span>{" "}
                {titleBlock.titleSuffix}
              </h2>
            </div>
          </div>

          {/* Feature cards (4) */}
          <div className="row justify-content-center pb-90">
            {features.map((item, idx) => (
              <div
                key={item.id}
                className={`col-xl-3 col-lg-4 col-md-6 ${
                  idx > 0 ? "ps-xxl-5" : ""
                }`}
              >
                <div className="feature-card style-one mb-30">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={40}
                    height={40}
                  />
                  <h3 className="fs-24 fw-semibold">{item.title}</h3>
                  <p className="pe-xxl-4 pe-1 mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Two large image + list cards */}
          <div className="row">
            {cardSixBlocks.map((block, i) => (
              <div className="col-xl-6" key={`${block.heading}-${i}`}>
                <div className="feature-card style-six d-flex flex-wrap align-items-center bg-white round-10 mb-30">
                  <div className="feature-img round-10">
                    <Image
                      src={block.image.src}
                      alt={block.image.alt}
                      width={570}
                      height={648}
                      className="round-10"
                    />
                  </div>
                  <div className="feature-info">
                    <h6 className="fs-20 fw-bold text-title">
                      {block.heading}
                    </h6>
                    <p>{block.paragraph}</p>
                    <ul className="feature-list list-unstyled mb-0">
                      {block.bulletPoints.map((bp, j) => (
                        <li
                          key={`${bp}-${j}`}
                          className="position-relative text-title fw-medium"
                        >
                          <Image
                            src="/images/icons/check-2.svg"
                            alt="Icon"
                            width={11}
                            height={11}
                          />
                          {bp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
