import AboutUsContent from "@/components/global/AboutUsContent";
import AnimationMovingText from "@/components/global/AnimationMovingText";
import Cta from "@/components/global/Cta";
import MeetTheTeams from "@/components/global/MeetTheTeams";
import PageBanner from "@/components/global/PageBanner";
import { createPageMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(
  "About Us",
  "Learn about Skill Griha, our expertise, team, and commitment to delivering professional construction and renovation services.",
  "/about"
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

      <Cta />
    </main>
  );
}
