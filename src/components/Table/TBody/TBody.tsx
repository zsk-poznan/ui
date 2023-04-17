import { TableHTMLAttributes } from "react";
import { TRowProps } from "../TRow";

export type TBodyProps = TableHTMLAttributes<HTMLTableSectionElement> & {
	children: React.ReactElement<TRowProps> | React.ReactElement<TRowProps>[];
};

export const TBody = (props: TBodyProps) => {
	return <tbody {...props}>{props.children}</tbody>;
};
