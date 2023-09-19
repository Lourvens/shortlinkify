import { Input, Select, SelectItem } from "@nextui-org/react";
import { HiClock } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useFormContext } from "../hooks/formContext";
import { useFormState } from "react-hook-form";

const ExpiresInputBox = () => {
  type timeUnit = "min" | "hour" | "day" | "week";
  const timeUnits: timeUnit[] = ["min", "hour", "day", "week"];
  const [selectedTimeUnit, setTimeUnit] = useState<timeUnit>("min");
  const [timeValue, setTimeValue] = useState(0);
  const { setValue, control } = useFormContext();
  const { errors } = useFormState({ control });

  useEffect(() => {
    let value: number = 0;
    if (timeValue) {
      switch (selectedTimeUnit) {
        case "day":
          value = timeValue * 24 * 60;
          break;
        case "hour":
          value = timeValue * 60;
          break;
        default:
          value = timeValue;
          break;
      }
    }
    setValue("expiresIn", value > 0 ? value : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTimeUnit, timeValue]);

  return (
    <div className="flex items-end gap-3">
      <Input
        classNames={{
          base: "w-8/12 shrink-0",
        }}
        label={`Expires in* ${
          timeValue ? `(${timeValue} ${selectedTimeUnit})` : ""
        }`}
        labelPlacement="outside"
        type="number"
        placeholder="expires in"
        startContent={<HiClock />}
        errorMessage={errors.expiresIn?.message}
        onChange={(e) => {
          setTimeValue(parseInt(e.target.value));
        }}
      />
      <Select
        classNames={{
          mainWrapper: "h-10",
          innerWrapper: "pt-0 capitalize",
        }}
        items={timeUnits}
        defaultSelectedKeys={[selectedTimeUnit]}
        onChange={(e) => {
          setTimeUnit(e.target.value as timeUnit);
        }}
      >
        {timeUnits.map((unit) => (
          <SelectItem key={unit} value={unit}>
            {unit}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ExpiresInputBox;
