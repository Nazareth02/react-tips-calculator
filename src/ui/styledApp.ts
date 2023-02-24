import styled from "styled-components";
import EllipseBackground from "../assets/img/ellipse-bg.svg";

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: top left/auto no-repeat url(${EllipseBackground}), #eaf2f2 no-repeat;
`;

export { StyledApp };
