import { Input, Spacer } from "@nextui-org/react";
import { HiLockClosed } from "react-icons/hi";
import ExpiresInputBox from "./ExpiresInputBox";
import { useFormContext } from "../FormContext";
import { useFormState } from "react-hook-form";

export default function AdditionalInputFields() {
  const { register, control } = useFormContext();
  const { errors } = useFormState({ control });

  return (
    <>
      <Input
        type="text"
        labelPlacement="outside"
        label="access code*"
        placeholder="Add an access code"
        startContent={<HiLockClosed />}
        errorMessage={errors.access_code?.message}
        {...register("access_code")}
      />
      <Spacer y={4} />
      <ExpiresInputBox />
    </>
  );
}
