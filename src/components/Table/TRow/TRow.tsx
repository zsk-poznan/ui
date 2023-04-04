import type { TRowProps } from "../../../types/table";

export const TRow = ({ ...props }: TRowProps): JSX.Element => {
	return <tr {...props}>{props.children}</tr>;
};
