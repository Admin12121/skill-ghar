import AnimationMovingText from "@/components/Common/AnimationMovingText";
import Cta from "@/components/Common/CtaTwo";
import TestimonialsStyle2 from "@/components/Common/TestimonialsStyle2";
import AboutUsContent from "@/features/site/components/AboutUs";
import HeroBanner from "@/features/site/components/HeroBanner";
import OurFeatures from "@/features/site/components/OurFeatures";
import OurProjects from "@/features/site/components/OurProjects";
import WhatWeOffers from "@/features/site/components/WhatWeOffers";

export default function Page() {
  return (
    <main>
      <HeroBanner />
      <OurFeatures />
      <div className="pb-120">
        <AnimationMovingText />
      </div>
      <WhatWeOffers />
      <AboutUsContent />
      <OurProjects />
      <div className="py-20">
        <AnimationMovingText />
      </div>
      <Cta />
      <TestimonialsStyle2 />
    </main>
  );
}
