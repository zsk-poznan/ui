import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import type { ThemeProviderProps } from "../types";

export const UIThemeProvider = (props: ThemeProviderProps) => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Poppins:300,400,500,600,700,800,900"],
			},
		});
	}, []);

	return <ThemeProvider {...props}>{props.children}</ThemeProvider>;
};
