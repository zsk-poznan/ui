import { TableProps } from "../../types";
import { StyledTable } from "./Table.styled";

export const Table = (props: TableProps): JSX.Element => {
	return <StyledTable {...props}>{props.children}</StyledTable>;
};
