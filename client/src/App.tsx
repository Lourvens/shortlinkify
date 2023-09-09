import { NextUIProvider } from "@nextui-org/react";
import AppNabar from "./ui/Navbar";
import Home from "./pages/home";

export default function App() {
  return (
    <NextUIProvider>
      <AppNabar />
      <div className="flex justify-center">
        <div className="max-w-[1024px] mt-20 px-4 lg:px-8">
          <Home />
        </div>
      </div>
    </NextUIProvider>
  );
}
