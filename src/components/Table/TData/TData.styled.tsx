import styled from "styled-components";

export const StyledTData = styled.td<{ tdWidth: string }>`
	display: table-cell;
	text-align: center;
	width: ${(props) => props.tdWidth};
	padding: 1rem 2rem;
`;
