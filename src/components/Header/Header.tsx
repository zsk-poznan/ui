import { StyledHeader } from "./Header.styled";
import type { HeaderProps } from "../../types";

export const Header = (props: HeaderProps): JSX.Element => {
	return <StyledHeader {...props}>{props.children}</StyledHeader>;
};
