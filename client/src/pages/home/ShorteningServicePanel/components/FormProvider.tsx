// FormProvider.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schemas/schema";
import { FormContext, UrlSchemaForm } from "../hooks/formContext";

type FormProviderProps = {
  children: React.ReactNode;
  onSubmit: (data: UrlSchemaForm) => void;
};

export const FormProvider: React.FC<FormProviderProps> = ({
  children,
  onSubmit,
}) => {
  const form = useForm<UrlSchemaForm>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  return (
    <FormContext.Provider value={form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (e) => {
          console.log("error", e);
        })}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};
