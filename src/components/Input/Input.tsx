import React, { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import Placeholder from "react-select/dist/declarations/src/components/Placeholder";
import { FormInput } from "../Form/styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input = ({ placeholder, type, onChange, value }: InputProps) => {
  return (
    <FormInput
      type={type}
      min="1"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
