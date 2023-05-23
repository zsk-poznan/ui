import styled from "styled-components";

export const StyledTRow = styled.tr`
	display: table-row;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};

	&:has(td) {
		-webkit-box-shadow: 0px -5px 1px -3px rgba(211, 213, 226, 1);
		-moz-box-shadow: 0px -5px 1px -3px rgba(211, 213, 226, 1);
		box-shadow: 0px -5px 1px -3px rgba(211, 213, 226, 1);
	}	
`;
