import { StyledButton } from "./Button.styled";
import type { ButtonProps } from "../../types/button";

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
	return <StyledButton {...props}>{props.label}</StyledButton>;
};
