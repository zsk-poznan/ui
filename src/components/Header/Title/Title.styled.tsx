import styled from "styled-components";
import { StyledArrowLeft } from "../../Icons/ArrowLeft/ArrowLeft.styled";

export const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.875em;
  font-weight: 400;
  justify-content: center;
  color: ${(props) => props.theme.fontColor};

  & ${StyledArrowLeft} {
    fill: ${(props) => props.theme.fontColor};
    height: 45px;
    width: 45px;
    margin: 0 2rem;
  }
`;
