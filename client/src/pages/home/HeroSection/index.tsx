import { BsLightningChargeFill } from "react-icons/bs";
import { Chip } from "@nextui-org/react";
import ListItems from "./ListItems";

export default function HeroSection() {
  return (
    <div>
      <Chip
        color="primary"
        variant="flat"
        startContent={<BsLightningChargeFill />}
        size="lg"
      >
        Unleash the Power of Short Links!
      </Chip>
      <h1 className="my-5 uppercase font-bold text-2xl text-default-600">
        Our URL Shortener simplifies, secures, and supercharges your links, all
        in one place.
      </h1>
      <ListItems />
    </div>
  );
}
