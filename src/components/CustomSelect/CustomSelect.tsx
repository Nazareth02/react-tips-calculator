import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { TipsOption } from "../../types";
import { customStyles } from "./styles";

interface SelectProps {
  options: TipsOption[];
  value: TipsOption;
  onChange: (option: TipsOption) => void;
}

export const CustomSelect = ({ value, onChange, options }: SelectProps) => {
  const handleChange = (option: SingleValue<TipsOption>): void => {
    if (option) onChange(option);
  };
  return (
    <Select
      options={options}
      styles={customStyles}
      value={value}
      onChange={handleChange}
      isMulti={false}
    />
  );
};
