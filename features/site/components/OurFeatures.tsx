import { Home } from "lucide-react";
import Image from "next/image";

interface FeatureItem {
  id: number;
  iconSrc: string;
  title: string;
  description: string;
}

const OurFeatures = () => {

  const features: FeatureItem[] = [
    {
      id: 1,
      iconSrc: "/images/features/feature-1.png",
      title: "Project Management",
      description:
        "We handle everything from permits to final walkthrough communication every step of the way",
    },
    {
      id: 2,
      iconSrc: "/images/features/feature-2.png",
      title: "Skilled Team",
      description:
        "Experienced professionals committed to precision and safety goal is zero incidents",
    },
    {
      id: 3,
      iconSrc: "/images/features/feature-3.png",
      title: "Premium Materials",
      description:
        "Only top-grade materials used for lasting strength and styleOur goal is zero incidents",
    },
    {
      id: 4,
      iconSrc: "/images/features/feature-4.png",
      title: "Custom Home Builds",
      description:
        "Tailored designs built from the ground match your vision Reliable timelines with clear",
    },
  ];

  return (
    <div className="container pt-120 pb-90">
        <div className="row">
          <div className="col-xl-6">
            <h6 className="section-subtitle style-two fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20 flex flex-row gap-2">
              <Home className="size-4"/>
              OUR FEATURES
            </h6>
            <h2 className="section-title style-one fw-normal text-title mb-40">
              Geniune <span className="fw-black">Partner In Every Aspect</span>{" "}
              Of Development
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`col-xl-3 col-lg-4 col-md-6 ${
                index > 0 ? "ps-xxl-5" : ""
              }`}
            >
              <div className="feature-card style-one mb-30">
                <Image
                  src={feature.iconSrc}
                  alt="Icon"
                  width={40}
                  height={40}
                />
                <h3 className="fs-24 fw-semibold">{feature.title}</h3>
                <p className="pe-xxl-4 pe-1 mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default OurFeatures;
