import React from "react";

const AnimationMovingText = () => {
  const textItems = [
    "FREE IN-HOME CONSULTATIONS",
    "CUSTOM DESIGN SOLUTIONS",
    "FLEXIBLE FINANCING OPTIONS",
    "POST-RENOVATION SUPPORT",
    "QUALITY MATERIALS GUARANTEED",
    "ON-TIME PROJECT DELIVERY",
    "EXPERT CRAFTSMANSHIP",
    "24/7 CUSTOMER ASSISTANCE",
  ];

  const duplicatedItems = [...textItems, ...textItems];

  return (
    <>
      <div className="move-text-wrapper overflow-hidden">
        <div className="move-text style-two position-relative z-1">
          <ul className="list-unstyled mb-0">
            {duplicatedItems.map((item, index) => (
              <li key={index} className="position-relative font-secondary">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AnimationMovingText;
