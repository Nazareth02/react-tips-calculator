import React, { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { TipsOption } from "../../types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Subtitle, Title, Total, InputGroup } from "./styles";

const options: TipsOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const [total, setTotal] = useState(0);
  const [isDisabled, setDisabled] = useState(true);
  const [selectedValue, setSelectedValue] = useState<TipsOption>(options[0]);

  useEffect(() => {
    bill.value && persons.value ? setDisabled(false) : setDisabled(true);
  }, [bill.value, persons.value]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (bill.value !== "" && persons.value !== "") {
      const totalTips =
        (Number(bill.value) * (1 + Number(selectedValue.value))) /
        100 /
        Number(persons.value);
      setTotal(totalTips);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input placeholder="Enter bill" type={"number"} {...bill} />
        <Input placeholder="Enter persons" type={"number"} {...persons} />
        <CustomSelect
          value={selectedValue}
          onChange={setSelectedValue}
          options={options}
        />
      </InputGroup>
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button type="submit" isDisabled={isDisabled} />
    </StyledForm>
  );
};
