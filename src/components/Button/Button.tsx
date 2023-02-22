import React, { ButtonHTMLAttributes } from "react";
import { FormButton } from "../Form/styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: ButtonProps) => {
  return <FormButton disabled={isDisabled}>Ohhhoooo 🍻</FormButton>;
};
