import { ComponentPropsWithRef, TableHTMLAttributes } from "react";
import { StyledTHeading } from "./THeading.styled";

export type THeadingProps = TableHTMLAttributes<HTMLTableCellElement> &
	ComponentPropsWithRef<"th"> & {
		children: React.ReactNode;
	};

export const THeading = (props: THeadingProps) => {
	return <StyledTHeading {...props}>{props.children}</StyledTHeading>;
};
