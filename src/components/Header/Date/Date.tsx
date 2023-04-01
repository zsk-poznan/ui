import { StyledDate } from "./Date.styled";
import type { DateProps } from "../../../types";

export const SubstitutionDate = (props: DateProps): JSX.Element => {
	return (
		<StyledDate>
			{props.date.toLocaleString("pl-PL", { timeZone: "UTC" })}
		</StyledDate>
	);
};
