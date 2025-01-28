import { Input } from "@heroui/input";
import React from "react";
import { useFormContext } from "react-hook-form";
interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "md" | "sm" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
}

export default function FXInput({
  variant = "bordered",
  size = "sm",
  required = false,
  type = "text",
  label,
  name,
}: IProps) {
  const { register , formState: {errors} } = useFormContext();
  return (
    <Input
      {...register(name)}
      variant={variant}
      size={size}
      required={required}
      label={label}
      type={type}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
    />
  );
}
