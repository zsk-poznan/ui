import { ComponentPropsWithRef, TableHTMLAttributes } from "react";
import { StyledTData } from "./TData.styled";

export type TDataProps = TableHTMLAttributes<HTMLTableCellElement> &
	ComponentPropsWithRef<"td"> & {
		children: React.ReactNode;
		tdWidth: string;
	};

export const TData = ({ ...props }: TDataProps) => {
	return <StyledTData {...props}>{props.children}</StyledTData>;
};
