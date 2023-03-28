import styled from "styled-components";
import { StyledArrowLeft } from "../../Icons/ArrowLeft/ArrowLeft.styled";

export const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.45em;
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};

  & ${StyledArrowLeft} {
    fill: ${(props) => props.theme.fontColor};
    height: 35px;
    width: 35px;
    margin: 0 1rem;
  }
`;
