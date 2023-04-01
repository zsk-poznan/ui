import { StyledHeader } from "./Header.styled";
import type { HeaderProps } from "../../types";

export const Header = (props: HeaderProps) => {
	return <StyledHeader>{props.children}</StyledHeader>;
};
