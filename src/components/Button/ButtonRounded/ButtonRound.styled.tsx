import styled from "styled-components";

export const StyledButtonRound = styled.button`
	background: ${(props) => props.theme.bgColor};
	border-radius: 50%;
	box-shadow: ${(props) => props.theme.boxShadow};
`;
