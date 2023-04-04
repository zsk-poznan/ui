import { StyledTHeading } from "./THeading.styled";
import type { THeadingProps } from "../../../types/table";

export const THeading = (props: THeadingProps): JSX.Element => {
	return <StyledTHeading {...props}>{props.children}</StyledTHeading>;
};
