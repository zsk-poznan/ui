import { Squircle } from "../Squircle";
import { StyledButton } from "./Button.styled";
import type { ButtonProps } from "../../types/button";

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Squircle as={StyledButton} {...props}>
      {props.label}
    </Squircle>
  );
};
