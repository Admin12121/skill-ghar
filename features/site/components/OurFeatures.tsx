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
      title: "Experienced Team",
      description:
        "Professional team with years of expertise in home renovation and construction work",
    },
    {
      id: 2,
      iconSrc: "/images/features/feature-2.png",
      title: "Premium Finishing",
      description:
        "Attention to detail and high-quality finishing that makes your home look beautiful",
    },
    {
      id: 3,
      iconSrc: "/images/features/feature-3.png",
      title: "Clear Pricing",
      description:
        "Transparent pricing without hidden costs so you know exactly what you're paying for",
    },
    {
      id: 4,
      iconSrc: "/images/features/feature-4.png",
      title: "On Time Delivery",
      description:
        "We respect your time and complete work as scheduled while maintaining quality standards",
    },
  ];

  return (
    <div className="container pt-120 pb-90">
        <div className="row">
          <div className="col-xl-6">
            <h6 className="section-subtitle style-two fs-13 ls-1 font-optional fw-semibold position-relative text_primary mb-20 flex flex-row gap-2">
              <Home className="size-4"/>
              WHY CHOOSE US
            </h6>
            <h2 className="section-title style-one fw-normal text-title mb-40">
              Why <span className="fw-black">People Choose Skill Griha</span>{" "}
              For Their Homes
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
