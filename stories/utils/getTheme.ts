import { lightTheme, darkTheme } from "../../src/";

export const getTheme = (variant: string) => {
  return variant === "Light" || variant === "light" ? lightTheme : darkTheme;
};
