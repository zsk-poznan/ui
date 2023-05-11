import styled from "styled-components";

export const StyledButton = styled.button<{ isPressed: boolean }>`
	background: ${(props) =>
		props.isPressed
			? `radial-gradient(circle, ${props.theme.bgColor} 0%, ${props.theme.tertiaryColor} 100%)`
			: props.theme.bgColor};
	border-radius: ${(props) => props.theme.borderRadius};
	box-shadow: ${(props) =>
		props.isPressed
			? `inset ${props.theme.boxShadow}, inset ${props.theme.tertiaryBoxShadow}`
			: `${props.theme.secondaryBoxShadow}, ${props.theme.tertiaryBoxShadow}`};
	width: 20%;
	color: ${(props) => props.theme.fontColor};
	font-family: ${(props) => props.theme.fontFamily};
	font-size: 24px;
	font-weight: 600;
	border: none;
	padding: 20px 40px;
	width: 100%;
	cursor: pointer;

	&:focus {
		outline: none;
		-webkit-tap-highlight-color: transparent;
		highlight: none;
	}
`;

export const StyledButtonRound = styled.button<{ isPressed: boolean }>`
	background: ${(props) =>
		props.isPressed
			? `radial-gradient(circle, ${props.theme.bgColor} 0%, ${props.theme.tertiaryColor} 100%)`
			: props.theme.bgColor};
	border-radius: 50%;
	box-shadow: ${(props) =>
		props.isPressed
			? `inset ${props.theme.boxShadow}, inset ${props.theme.tertiaryBoxShadow}`
			: `${props.theme.secondaryBoxShadow}, ${props.theme.tertiaryBoxShadow}`};
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
