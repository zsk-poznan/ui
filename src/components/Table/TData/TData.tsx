import type { TDataProps } from "../../../types/table";

export const TData = ({ ...props }: TDataProps): JSX.Element => {
	return <td {...props}>{props.children}</td>;
};
