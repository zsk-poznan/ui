import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "src/themes";
import WebFont from "webfontloader";

type ThemeProviderProps = {
	children: React.ReactNode;
	theme: Theme | React.Dispatch<React.SetStateAction<Theme>>;
};

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
