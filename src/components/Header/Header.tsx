import { StyledHeader } from "./Header.styled";
import type { HeaderProps } from "../../types";

export const Header = ({ children }: HeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};
