import { StyledHeader } from "./Header.styled";

type HeaderProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Header = (props: HeaderProps) => {
	const { children } = props;
	return <StyledHeader {...props}>{children}</StyledHeader>;
};
