import { BsLightningChargeFill } from "react-icons/bs";
import { MdInsights } from "react-icons/md";
import { HiLightningBolt, HiLockClosed } from "react-icons/hi";
import { Checkbox, Chip } from "@nextui-org/react";

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
      <p className="text-default-500">
        <div className="flex flex-wrap gap-2">
          <Checkbox isIndeterminate color="success" icon={<HiLightningBolt />}>
            <b className="text-success-500">Easy Shortening:</b> Shorten URLs
            with ease.
          </Checkbox>
          <Checkbox
            isIndeterminate
            icon={<HiLockClosed />}
            className="items-baseline"
          >
            <b className="text-primary-500">Secure Customization:</b>
            Customize links with expiration dates and access codes for added
            safety.
          </Checkbox>
          <Checkbox
            isIndeterminate
            color="warning"
            icon={<MdInsights />}
            className="items-baseline"
          >
            <b className="text-warning-500">Detailed Insights:</b>
            Gain in-depth insights using our analytics.
          </Checkbox>
          <Checkbox isIndeterminate color="danger" className="items-baseline">
            <b className="text-danger-500">Comprehensive Tracking:</b>Track
            every click, from IP addresses to device details.
          </Checkbox>
        </div>
      </p>
    </div>
  );
}
