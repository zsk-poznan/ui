import { StyledTitle } from "./Title.styled";
import type { TitleProps } from "../../../types";

export const Title = ({ headerTitle }: TitleProps): JSX.Element => {
  return <StyledTitle>{headerTitle}</StyledTitle>;
};
