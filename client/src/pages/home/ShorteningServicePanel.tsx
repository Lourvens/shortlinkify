import {
  Button,
  Card,
  CardBody,
  Divider,
  Input,
  Select,
  SelectItem,
  Spacer,
} from "@nextui-org/react";
import { HiLockClosed, HiClock } from "react-icons/hi";

export default function ShorteningServicePanel() {
  return (
    <Card
      classNames={{
        base: "shrink-0 md:w-2/5",
      }}
    >
      <CardBody>
        <h4 className="text-xl font-semibold leading-none text-default-600 mb-4">
          Shorten a long link here
        </h4>

        <Input
          type="text"
          label="Paste your link here"
          labelPlacement="outside"
          placeholder="www.example.com/ressource?q=1"
          startContent="https://"
          classNames={{
            label: "text-primary-500",
            base: "focus:border-primay-600",
          }}
        />
        <Spacer y={2} />
        <Button color="primary" variant="shadow" className="font-bold">
          Shorten now
        </Button>
        <Divider className="my-8" />
        <Input
          type="text"
          labelPlacement="outside"
          label="access code*"
          placeholder="Add an access code"
          startContent={<HiLockClosed />}
        />
        <Spacer y={8} />
        <div className="flex items-end">
          <Input
            classNames={{
              base: "w-8/12 shrink-0",
            }}
            label="Expires in*"
            labelPlacement="outside"
            type="number"
            defaultValue={"0"}
            startContent={<HiClock />}
          />
          <Select
            classNames={{
              mainWrapper: "h-10",
              innerWrapper: "pt-0 capitalize",
            }}
            color="primary"
          >
            {["mins", "hours", "days", "weeks"].map((v) => (
              <SelectItem key={v} value={v}>
                {v}
              </SelectItem>
            ))}
          </Select>
        </div>
      </CardBody>
    </Card>
  );
}
