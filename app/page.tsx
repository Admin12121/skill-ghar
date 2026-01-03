import AnimationMovingText from "@/components/global/AnimationMovingText";
import Cta from "@/components/global/Cta";
import TestimonialsStyle2 from "@/components/global/Testimonials";
import AboutUsContent from "@/features/site/components/AboutUs";
import HeroBanner from "@/features/site/components/HeroBanner";
import OurFeatures from "@/features/site/components/OurFeatures";
import OurProjects from "@/features/site/components/OurProjects";
import WhatWeOffers from "@/features/site/components/WhatWeOffers";
import { getProjectsList } from "@/lib/projects";

export default async function Page() {
  const projects = getProjectsList();

  return (
    <main>
      <HeroBanner />
      <OurFeatures />
      <div className="pb-120">
        <AnimationMovingText />
      </div>
      <WhatWeOffers />
      <AboutUsContent />
      <OurProjects projects={projects} />
      <div className="py-20">
        <AnimationMovingText />
      </div>
      <Cta />
      <TestimonialsStyle2 />
    </main>
  );
}
