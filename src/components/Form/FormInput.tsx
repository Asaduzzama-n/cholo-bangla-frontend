"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { useEffect } from "react";

interface IInput {
  name: string;
  type?: string;
  size?: number;
  value?: string | string[] | undefined;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  placeholder,
  validation,
  label,
}: IInput) => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    // Check if the field has a value (useful for autofill)
    if (value) {
      setValue(name, value);
    }
  }, [value, name, setValue]);

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        rules={validation}
        defaultValue={value || ""}
        render={({ field }) => (
          <Input
            type={type}
            placeholder={placeholder}
            size={size}
            {...field}
            value={value ? value : field.value}
          ></Input>
        )}
      />
    </>
  );
};

export default FormInput;
