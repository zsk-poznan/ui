import React, { TableHTMLAttributes } from "react";

export type TableProps = {
	children:
		| React.ReactElement<THeadProps | TRowProps>
		| React.ReactElement<THeadProps | TRowProps>[];
} & TableHTMLAttributes<HTMLTableElement>;

export type THeadProps = {
	children: React.ReactElement<TRowProps> | React.ReactElement<TRowProps>[];
} & TableHTMLAttributes<HTMLTableCellElement>;

export type TRowProps = {
	children: React.ReactNode;
} & TableHTMLAttributes<HTMLTableRowElement>;

export type TDataProps = {
	children: React.ReactNode;
} & Array<TableHTMLAttributes<HTMLTableCellElement>>;
