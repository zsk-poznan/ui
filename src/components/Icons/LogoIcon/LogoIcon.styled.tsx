import styled from "styled-components";

export const StyledLogoIcon = styled.svg`
	display: flex;
	filter: drop-shadow(${(props) => `${props.theme.dropShadow}`});
`;
