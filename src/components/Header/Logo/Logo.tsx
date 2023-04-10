import { StyledLogo, StyledLogoLabel } from "./Logo.styled";
import { LogoIcon } from "src/components/Icons";

type LogoProps = {
	label: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Logo = (props: LogoProps) => (
	<StyledLogo {...props}>
		<LogoIcon />
		<StyledLogoLabel>{props.label}</StyledLogoLabel>
	</StyledLogo>
);
