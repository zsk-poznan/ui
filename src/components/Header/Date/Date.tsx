import { StyledDate } from "./Date.styled";
import type { DateProps } from "../../../types";

export const SubstitutionDate = ({ date }: DateProps): JSX.Element => {
  return (
    <StyledDate>{date.toLocaleString("pl-PL", { timeZone: "UTC" })}</StyledDate>
  );
};
