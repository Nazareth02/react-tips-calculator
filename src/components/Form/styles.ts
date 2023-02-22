import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  /* width: clamp(); */
  width: 100%;
  max-width: 460px;
  padding: 20px;
  grid-gap: 45px;
`;
const Title = styled.h2`
  justify-self: center;
  font-family: "Noto Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  letter-spacing: -0.3px;
  color: #000000;
`;
const Subtitle = styled.h5`
  justify-self: center;
  font-family: "Noto Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.3px;
  color: rgba(117, 108, 108, 0.57);
`;
const Total = styled.p`
  font-family: "Noto Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  color: #000000;
`;
const InputGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 32px;
`;
const FormInput = styled.input`
  background: #ffffff;
  border-radius: 30px;
  width: 100%;
  max-width: 456px;
  padding: 21px;
  font-family: "Noto Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  ::placeholder {
    text-align: center;
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }
`;
const FormButton = styled.button`
  background: #2ed2c9;
  padding: 13px;
  font-family: "Noto Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  color: #ffffff;
  cursor: pointer;
  :disabled {
    background-color: rgb(229, 229, 229) !important;
  }
`;

export { StyledForm, Title, Subtitle, Total, InputGroup, FormInput, FormButton };
