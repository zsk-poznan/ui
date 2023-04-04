import styled from "styled-components";
import { StyledLogoIcon } from "../../Icons/LogoIcon/LogoIcon.styled";

export const StyledLogo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3rem;
	font-family: ${(props) => props.theme.fontFamily};
	color: ${(props) => props.theme.fontColor};

	& path {
		fill: ${(props) => props.theme.fontColor};
	}
`;

export const StyledLogoLabel = styled.span`
	font-size: 2.25em;
	font-weight: 800;
`;
