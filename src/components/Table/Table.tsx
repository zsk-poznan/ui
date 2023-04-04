import { StyledTable } from "./Table.styled";
import type { TableProps } from "../../types";

export const Table = (props: TableProps): JSX.Element => {
	return <StyledTable {...props}>{props.children}</StyledTable>;
};
