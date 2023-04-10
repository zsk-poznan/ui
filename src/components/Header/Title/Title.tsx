import { StyledTitle } from "./Title.styled";

type TitleProps = {
	headerTitle: string;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Title = (props: TitleProps): JSX.Element => {
	return (
		<StyledTitle {...props}>
			{props.children}
			{props.headerTitle}
		</StyledTitle>
	);
};
