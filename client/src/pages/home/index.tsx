import HeroSection from "./HeroSection";
import ShorteningServicePanel from "./ShorteningServicePanel";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-x-4 gap-y-10 pb-5">
      <HeroSection />
      <ShorteningServicePanel />
    </div>
  );
}
