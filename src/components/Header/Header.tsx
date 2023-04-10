import { StyledHeader } from "./Header.styled";

type HeaderProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Header = (props: HeaderProps) => {
	return <StyledHeader {...props}>{props.children}</StyledHeader>;
};
