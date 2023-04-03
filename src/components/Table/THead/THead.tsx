import { StyledTHead } from "./THead.styled";
import type { THeadProps } from "../../../types";

export const THead = (props: THeadProps): JSX.Element => {
	return <StyledTHead {...props}>{props.children}</StyledTHead>;
};
