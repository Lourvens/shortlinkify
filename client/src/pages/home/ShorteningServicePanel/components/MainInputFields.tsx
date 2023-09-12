import { Button, Input, Spacer } from "@nextui-org/react";

export default function MainInputFields({ isLoading }: Props) {
  return (
    <>
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
      <Button
        color="primary"
        variant="shadow"
        className="font-bold"
        isLoading={isLoading}
        type="submit"
      >
        Shorten now
      </Button>
    </>
  );
}

type Props = { isLoading: boolean };
