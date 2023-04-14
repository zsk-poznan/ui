import styled from "styled-components";

export const StyledTable = styled.table`
	background: ${(props) => props.theme.bgColor};
	border-radius: ${(props) => props.theme.borderRadius};
	box-shadow: ${(props) =>
		`${props.theme.secondaryBoxShadow}, ${props.theme.tertiaryBoxShadow}`};
	width: 70%;
	color: ${(props) => props.theme.fontColor};
	font-family: ${(props) => props.theme.fontFamily};
	font-weight: 400;
	font-size: 1.2em;
	border: none;
	padding: 20px 40px;
	box-sizing: border-box;
`;
