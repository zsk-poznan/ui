import { StyledTitle } from "./Title.styled";
import { ArrowLeft } from "../../Icons/ArrowLeft/ArrowLeft";
import type { TitleProps } from "../../../types";

export const Title = ({ headerTitle }: TitleProps): JSX.Element => {
	return (
		<StyledTitle>
			<ArrowLeft />
			{headerTitle}
		</StyledTitle>
	);
};
