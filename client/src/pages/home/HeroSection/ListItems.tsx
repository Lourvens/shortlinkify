import { MdInsights } from "react-icons/md";
import { HiLightningBolt, HiLockClosed } from "react-icons/hi";
import FeatureItem from "./FeautureItem";

const ListItems = () => {
  type itemProps = Parameters<typeof FeatureItem>[0];
  const listItems: itemProps[] = [
    {
      title: "Easy Shortening",
      children: "Shorten URLs with ease.",
      icon: <HiLightningBolt />,
      color: "success",
    },
    {
      title: "Secure Customization",
      children:
        "Customize links with expiration dates and access codes for added safety.",
      icon: <HiLockClosed />,
      color: "primary",
    },
    {
      title: "Detailed Insights",
      children: "Gain in-depth insights using our analytics..",
      icon: <MdInsights />,
      color: "warning",
    },
    {
      title: "Comprehensive Tracking",
      children: "Track every click, from IP addresses to device details.",
      icon: <HiLockClosed />,
      color: "danger",
    },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {listItems.map(({ children, ...props }) => (
        <FeatureItem {...props} key={props.title}>
          {children}
        </FeatureItem>
      ))}
    </div>
  );
};

export default ListItems;
