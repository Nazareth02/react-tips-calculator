import React from "react";
import styled from "styled-components";
import { Form } from "./components/Form/Form";
import EllipseFirst from "./assets/img/ellipse_first.svg";
import EllipseSecond from "./assets/img/ellipse_second.svg";

export const App = () => {
  return (
    <StyledApp style={{}}>
      <Form />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: #eaf2f2;
  background: top left/auto no-repeat url(${EllipseFirst}),
    #eaf2f2 url(${EllipseSecond}) no-repeat;
`;
