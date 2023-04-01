import styled from "styled-components";
import { StyledButtonRound } from "../../Button/ButtonRound/ButtonRound.styled";

export const StyledTitle = styled.h1`
	display: flex;
	align-items: center;
	font-size: 1.875em;
	font-weight: 400;
	justify-content: center;
	color: ${(props) => props.theme.fontColor};

	& ${StyledButtonRound} {
		margin: 0 2rem 0 0;
	}

	& ${StyledButtonRound} svg {
		fill: ${(props) => props.theme.fontColor};
		width: 45px;
		height: 45px;
	}
`;
