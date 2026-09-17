import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { HeroSection } from "@/components/marketing/sections/HeroSection";
import { PillarsSection } from "@/components/marketing/sections/PillarsSection";
import { BuildLogSection } from "@/components/marketing/sections/BuildLogSection";
import { Showcase2 } from "@/components/blocks/showcase-2";
import { HowItWorksPreviewSection } from "@/components/marketing/sections/HowItWorksPreviewSection";
import { RoadmapSection } from "@/components/marketing/sections/RoadmapSection";
import { ContactSection } from "@/components/marketing/sections/ContactSection";
import { FinalCtaBand } from "@/components/marketing/sections/FinalCtaBand";

const Index = () => {
  return (
    <MarketingLayout>
      <HeroSection />
      <PillarsSection />
      <BuildLogSection />
      <Showcase2 />
      <HowItWorksPreviewSection />
      <RoadmapSection />
      <ContactSection />
      <FinalCtaBand />
    </MarketingLayout>
  );
};

export default Index;
