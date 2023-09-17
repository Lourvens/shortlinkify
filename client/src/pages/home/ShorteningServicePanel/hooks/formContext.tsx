import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../schemas/schema";
import * as z from "zod";

export type UrlSchemaForm = z.infer<typeof schema>;
type FormContext = ReturnType<typeof useForm<UrlSchemaForm>>;

export const FormContext = createContext<FormContext | undefined>(undefined);

export const useFormContext = () => {
  const form = useContext(FormContext);

  if (!form) {
    throw new Error("FormContext is not available");
  }

  return form;
};
