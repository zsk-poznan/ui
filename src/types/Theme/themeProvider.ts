import type { Theme } from "./themes";

export type ThemeProviderProps = {
	children: React.ReactNode;
	theme: Theme | React.Dispatch<React.SetStateAction<Theme>>;
};
