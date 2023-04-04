import { ComponentPropsWithRef, TableHTMLAttributes } from "react";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
	children:
		| React.ReactElement<THeadProps | TBodyProps>
		| React.ReactElement<THeadProps | TBodyProps>[];
};

export type THeadProps = TableHTMLAttributes<HTMLTableSectionElement> & {
	children: React.ReactElement<TRowProps> | React.ReactElement<TRowProps>[];
};

export type THeadingProps = TableHTMLAttributes<HTMLTableCellElement> &
	ComponentPropsWithRef<"th"> & {
		children: React.ReactNode;
	};

export type TRowProps = TableHTMLAttributes<HTMLTableRowElement> & {
	children:
		| React.ReactElement<THeadingProps>
		| React.ReactElement<THeadingProps>[];
};

export type TDataProps = TableHTMLAttributes<HTMLTableCellElement> &
	ComponentPropsWithRef<"td"> & {
		children: React.ReactNode;
		tdWidth: string;
	};

export type TBodyProps = TableHTMLAttributes<HTMLTableSectionElement> & {
	children: React.ReactNode;
};
