import { TableHTMLAttributes } from "react";
import { THeadingProps } from "../THeading";
import { StyledTRow } from "./TRow.styled";

export type TRowProps = TableHTMLAttributes<HTMLTableRowElement> & {
	children:
		| React.ReactElement<THeadingProps>
		| React.ReactElement<THeadingProps>[];
};

export const TRow = (props: TRowProps) => {
	return <StyledTRow {...props}>{props.children}</StyledTRow>;
};
