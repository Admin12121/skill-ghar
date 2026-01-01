import AboutUsContent from "@/components/Common/AboutUsContent";
import AnimationMovingText from "@/components/Common/AnimationMovingText";
import Cta from "@/components/Common/Cta";
import MeetTheTeams from "@/components/Common/MeetTheTeams";
import PageBanner from "@/components/Common/PageBanner";

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
