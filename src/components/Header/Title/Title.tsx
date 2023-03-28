import { StyledTitle } from "./Title.styled";
import type { TitleProps } from "../../../types";

export const Title = ({ children, headerTitle }: TitleProps): JSX.Element => {
  return (
    <StyledTitle>
      {children}
      {headerTitle}
    </StyledTitle>
  );
};
