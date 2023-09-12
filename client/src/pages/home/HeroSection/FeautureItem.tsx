import { Button } from "@nextui-org/react";

type FeatureBoxProps = {
  title: string;
  children: string;
  icon: JSX.Element;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
};
const FeatureItem = (props: FeatureBoxProps) => {
  const textColors: Record<FeatureBoxProps["color"], string> = {
    primary: "text-primary-500",
    danger: "text-danger-500",
    secondary: "text-secondary-500",
    success: "text-success-500",
    warning: "text-warning-500",
  };

  return (
    <div className="flex gap-3">
      <Button isIconOnly color={props.color} size="sm" aria-label="Like">
        {props.icon}
      </Button>
      <div>
        <b className={textColors[props.color]}>{props.title}</b>
        <h4 className="text-default-500">{props.children}</h4>
      </div>
    </div>
  );
};

export default FeatureItem;
