import React from "react";
import Select from "react-select";

export const CustomSelect = () => {
  const options = [
    { value: "10%", label: "10%" },
    { value: "15%", label: "15%" },
    { value: "20%", label: "20%" },
  ];
  return <Select options={options} />;
};
