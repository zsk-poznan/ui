import { TableHTMLAttributes } from "react";
import { StyledTHead } from "./THead.styled";
import { TRowProps } from "../TRow";

export type THeadProps = TableHTMLAttributes<HTMLTableSectionElement> & {
	children: React.ReactElement<TRowProps> | React.ReactElement<TRowProps>[];
};

export const THead = (props: THeadProps) => {
	return <StyledTHead {...props}>{props.children}</StyledTHead>;
};
