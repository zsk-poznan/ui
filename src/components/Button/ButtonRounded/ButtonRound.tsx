import { StyledButtonRound } from "./ButtonRound.styled";

export const ButtonRound = ({ ...props }) => {
	return <StyledButtonRound {...props}>{props.label}</StyledButtonRound>;
};
