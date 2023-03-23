import { lightTheme, darkTheme } from "../../src/";

export const getTheme = (variant: string) => {
  return /light/i.test(variant) ? lightTheme : darkTheme;
};
