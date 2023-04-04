import type { TBodyProps } from "../../../types/table";

export const TBody = ({ ...props }: TBodyProps): JSX.Element => {
	return <tbody {...props}>{props.children}</tbody>;
};
