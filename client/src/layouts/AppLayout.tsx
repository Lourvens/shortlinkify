import AppNabar from "../ui/Navbar";
import bluePurpleGradientImg from "../assets/blue-purple-1.svg";

type props = { element: JSX.Element };
const AppLayout = ({ element }: props) => {
  return (
    <div>
      <AppNabar />
      <div className="flex justify-center relative z-10">
        <div className="max-w-[1024px] mt-20 px-4 lg:px-8">{element}</div>
        <BlurryBackground />
      </div>
    </div>
  );
};

const BlurryBackground = () => (
  <div className="hidden md:block absolute h-full -z-10 -top-[50%] ">
    <img
      src={bluePurpleGradientImg}
      className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-[700px]"
      alt="custom themes background"
      data-loaded="true"
    />
  </div>
);

export default AppLayout;
