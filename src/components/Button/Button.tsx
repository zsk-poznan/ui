import styled from "styled-components";

export const Button = styled.button`
  background: ${(props: any) => props.theme.primaryColor};
  color: ${(props: any) => props.theme.fontColor};
  font-size: 24px;
  border: none;
  border-radius: 5px;
  padding: 20px 40px;
  width: 100%;
  cursor: pointer;
  margin: 10px;
  &:hover {
    /*background: #5d6e88;*/
  }
  &:focus {
    background: ${(props: any) => props.theme.secondaryColor};
  }
`;
