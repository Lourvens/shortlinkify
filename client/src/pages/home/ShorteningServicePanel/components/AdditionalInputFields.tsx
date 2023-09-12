import { Input, Select, SelectItem, Spacer } from "@nextui-org/react";
import { HiLockClosed, HiClock } from "react-icons/hi";

export default function AdditionalInputFields() {
  const timeUnits = ["mins", "hours", "days", "weeks"];

  return (
    <>
      <Input
        type="text"
        labelPlacement="outside"
        label="access code*"
        placeholder="Add an access code"
        startContent={<HiLockClosed />}
      />
      <Spacer y={4} />
      <div className="flex items-end gap-3">
        <Input
          classNames={{
            base: "w-8/12 shrink-0",
          }}
          label="Expires in*"
          labelPlacement="outside"
          type="number"
          placeholder="expires in"
          startContent={<HiClock />}
          min={1}
          max={60}
        />
        <Select
          classNames={{
            mainWrapper: "h-10",
            innerWrapper: "pt-0 capitalize",
          }}
          color="primary"
          items={timeUnits}
          defaultSelectedKeys={[timeUnits[1]]}
        >
          {timeUnits.map((unit) => (
            <SelectItem key={unit} value={unit}>
              {unit}
            </SelectItem>
          ))}
        </Select>
      </div>
    </>
  );
}
