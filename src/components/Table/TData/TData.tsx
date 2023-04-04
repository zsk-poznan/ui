import { StyledTData } from "./TData.styled";
import type { TDataProps } from "../../../types/table";

export const TData = ({ ...props }: TDataProps): JSX.Element => {
	return <StyledTData {...props}>{props.children}</StyledTData>;
};
