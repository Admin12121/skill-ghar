import AboutUsContent from "@/components/global/AboutUsContent";
import AnimationMovingText from "@/components/global/AnimationMovingText";
import Cta from "@/components/global/Cta";
import MeetTheTeams from "@/components/global/MeetTheTeams";
import PageBanner from "@/components/global/PageBanner";

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
