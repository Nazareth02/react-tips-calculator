import React from "react";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Subtitle, Title, Total, InputGroup } from "./styles";

export const Form = () => {
  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input />
        <Input />
        <CustomSelect />
      </InputGroup>
      <Total>Total: 0.00$</Total>
      <Button />
    </StyledForm>
  );
};
