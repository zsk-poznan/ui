import styled from "styled-components";

export const StyledButtonRound = styled.button<{ isPressed: boolean }>`
  background: ${(props) =>
    props.isPressed
      ? `radial-gradient(circle, ${props.theme.bgColor} 0%, ${props.theme.primaryColor} 100%)`
      : props.theme.bgColor};
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.isPressed ? props.theme.boxShadowInset : props.theme.boxShadow};
  width: 75px;
  height: 75px;
  border: none;
  color: ${(props) => props.theme.fontColor};
  text-align: center;

  & svg {
    width: 45px;
    height: 45px;
    fill: ${(props) => props.theme.fontColor};
    margin: 0 auto;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  }
`;
