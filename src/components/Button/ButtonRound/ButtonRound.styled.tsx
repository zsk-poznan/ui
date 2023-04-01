import styled from "styled-components";

export const StyledButtonRound = styled.button<{ isPressed: boolean }>`
	background: ${(props) =>
		props.isPressed
			? `radial-gradient(circle, ${props.theme.bgColor} 0%, ${props.theme.tertiaryColor} 100%)`
			: props.theme.bgColor};
	border-radius: 50%;
	box-shadow: ${(props) =>
		props.isPressed
			? `inset ${props.theme.boxShadow}, inset ${props.theme.tertiaryBoxShadow}`
			: `${props.theme.boxShadow}, ${props.theme.secondaryBoxShadow}, ${props.theme.tertiaryBoxShadow}`};
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
