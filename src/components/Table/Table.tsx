import { TableHTMLAttributes } from "react";
import { StyledTable } from "./Table.styled";
import { TBodyProps } from "./TBody";
import { THeadProps } from "./THead";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
	children:
		| React.ReactElement<THeadProps | TBodyProps>
		| React.ReactElement<THeadProps | TBodyProps>[];
};

export const Table = (props: TableProps) => {
	return <StyledTable {...props}>{props.children}</StyledTable>;
};
