import { StyledDate } from "./Date.styled";

export const Date = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <StyledDate>
      {day} {month} {year}
    </StyledDate>
  );
};
