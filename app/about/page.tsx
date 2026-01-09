import AboutUsContent from "@/components/global/AboutUsContent";
import AnimationMovingText from "@/components/global/AnimationMovingText";
import Cta from "@/components/global/Cta";
import MeetTheTeams from "@/components/global/MeetTheTeams";
import PageBanner from "@/components/global/PageBanner";
import FaqContent from "@/components/Faq/FaqContent";
import { createPageMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(
  "About Us",
  "Discover Skill Griha - Nepal's leading construction and renovation company. Meet our expert team, learn about our 15+ years of experience, and see why we're trusted for quality home improvement projects across Nepal.",
  "/about",
  ["about skill griha", "construction company Nepal", "renovation experts", "building contractors", "home improvement specialists", "trusted builders Nepal"]
);

export default function Page() {
  return (
    <main>
      <PageBanner pageTitle="About Us" />

      <div className="pt-120">
        <AboutUsContent />
      </div>

      <AnimationMovingText />

      <MeetTheTeams />

      <FaqContent />

      <Cta />
    </main>
  );
}
