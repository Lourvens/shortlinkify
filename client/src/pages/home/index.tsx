import HeroSection from "./HeroSection";
import ShorteningServicePanel from "./ShorteningServicePanel";
import bluePurpleGradientImg from "../../assets/blue-purple-1.svg";

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col md:flex-row gap-x-4 gap-y-10 pb-5">
      <HeroSection />
      <ShorteningServicePanel />

      <div className="hidden md:block absolute h-full -z-10 -top-[50%] ">
        <img
          src={bluePurpleGradientImg}
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-[700px]"
          alt="custom themes background"
          data-loaded="true"
        />
      </div>
    </div>
  );
}
