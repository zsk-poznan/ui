import styled from "styled-components";

export const StyledHeader = styled.header`
	background: ${(props) => props.theme.bgColor};
	color: ${(props) => props.theme.fontColor};
	font-family: ${(props) => props.theme.fontFamily};
	font-size: 24px;
	border: none;
	padding: 1.5rem 3rem;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
