import HeroSection from "./HeroSection";
import ShorteningServicePanel from "./ShorteningServicePanel";
import { LinkModalProvider } from "../../context/LinkModalContext";
import ShortenedLinkInfoModal from "./ShortenedLinkInfoModal";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-x-4 gap-y-10 pb-5">
      <LinkModalProvider>
        <HeroSection />
        <ShorteningServicePanel />
        <ShortenedLinkInfoModal />
      </LinkModalProvider>
    </div>
  );
}
