import styled from "styled-components";

export const StyledTable = styled.table`
	background: ${(props) => props.theme.bgColor};
	border-radius: ${(props) => props.theme.borderRadius};
	box-shadow: ${(props) =>
		`${props.theme.boxShadow}, ${props.theme.secondaryBoxShadow}, ${props.theme.tertiaryBoxShadow}`};
	width: 20%;
	color: ${(props) => props.theme.fontColor};
	font-family: ${(props) => props.theme.fontFamily};
	font-weight: 600;
	border: none;
	padding: 20px 40px;
	box-sizing: border-box;
`;
