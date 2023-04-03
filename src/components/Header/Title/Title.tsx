import { StyledTitle } from "./Title.styled";
import type { TitleProps } from "../../../types";

export const Title = (props: TitleProps): JSX.Element => {
	return (
		<StyledTitle {...props}>
			{props.children}
			{props.headerTitle}
		</StyledTitle>
	);
};
