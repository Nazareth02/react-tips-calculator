import { StylesConfig } from "react-select";
import { TipsOption } from "../../types";

const customStyles: StylesConfig<TipsOption> = {
  control: (baseStyles) => ({
    ...baseStyles,
    border: 0,
    borderRadius: 30,
    padding: "21px",
    textAlign: "center",
    font: "Noto Sans SC",
    fontSize: "18px",
    fontFamily: "Noto Sans SC",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#FFFFFF",
    color: "#756C6C",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#756C6C",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#756C6C",
  }),
};

export { customStyles };
