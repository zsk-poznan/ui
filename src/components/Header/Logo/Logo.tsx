import { StyledLogo, StyledLogoLabel } from "./Logo.styled";
import { LogoIcon } from "../../Icons";
import type { LogoProps } from "../../../types";

export const Logo = (props: LogoProps): JSX.Element => (
	<StyledLogo {...props}>
		<LogoIcon />
		<StyledLogoLabel>{props.label}</StyledLogoLabel>
	</StyledLogo>
);
