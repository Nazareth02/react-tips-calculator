import styled from "styled-components";
import EllipseFirst from "../assets/img/ellipse_first.svg";
import EllipseSecond from "../assets/img/ellipse_second.svg";

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: top left/auto no-repeat url(${EllipseFirst}),
    #eaf2f2 url(${EllipseSecond}) no-repeat;
`;

export { StyledApp };
