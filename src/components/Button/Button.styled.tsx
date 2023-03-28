import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.fontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 24px;
  border: none;
  padding: 20px 40px;
  width: 100%;
  cursor: pointer;
  margin: 10px;
  width: clip-text;
  box-sizing: border-box;

  &:hover {
    /*background: #5d6e88;*/
  }

  &:focus {
    background: ${(props) => props.theme.secondaryColor};
  }
`;
