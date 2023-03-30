import styled from "styled-components";

export const StyledButton = styled.button<{ isPressed: boolean }>`
	background: ${(props) =>
		props.isPressed
			? `radial-gradient(circle, ${props.theme.bgColor} 0%, ${props.theme.primaryColor} 100%)`
			: props.theme.primaryColor};
	border-radius: ${(props) => props.theme.borderRadius};
	box-shadow: ${(props) => props.theme.boxShadow};
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
	}
`;
