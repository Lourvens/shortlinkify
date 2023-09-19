import { Button, Input, Spacer } from "@nextui-org/react";
import { useFormContext } from "../hooks/formContext";
import { useFormState } from "react-hook-form";
import { BiLinkAlt } from "react-icons/bi";

export default function MainInputFields({ isLoading }: Props) {
  const { register, control } = useFormContext();
  const { errors } = useFormState({ control });

  return (
    <>
      <h4 className="text-xl font-semibold leading-none text-default-600 mb-4">
        Shorten a long link here
      </h4>

      <Input
        label="Paste your link here"
        labelPlacement="outside"
        placeholder="www.example.com/ressource?q=1"
        startContent={<BiLinkAlt />}
        classNames={{
          label: "text-primary-500",
          base: "focus:border-primay-600",
        }}
        errorMessage={errors.url?.message}
        {...register("url")}
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
