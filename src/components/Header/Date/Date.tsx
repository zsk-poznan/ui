import { StyledDate } from "./Date.styled";

type DateProps = {
	date: string | Date;
} & React.HTMLAttributes<HTMLSpanElement>;

export const SubstitutionDate = (props: DateProps) => {
	return (
		<StyledDate {...props}>
			{props.date.toLocaleString("pl-PL", { timeZone: "UTC" })}
		</StyledDate>
	);
};
