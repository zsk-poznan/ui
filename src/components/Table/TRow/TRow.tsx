import { TableHTMLAttributes } from "react";
import { THeadingProps } from "../THeading";

export type TRowProps = TableHTMLAttributes<HTMLTableRowElement> & {
	children:
		| React.ReactElement<THeadingProps>
		| React.ReactElement<THeadingProps>[];
};

export const TRow = ({ ...props }: TRowProps) => {
	return <tr {...props}>{props.children}</tr>;
};
