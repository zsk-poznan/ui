import { useEffect } from "react";
import * as Styled from "styled-components";
import WebFont from "webfontloader";
import type { Theme } from "src/themes";

type ThemeProviderProps = {
	children: React.ReactNode;
	theme: Theme;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Poppins:300,400,500,600,700,800,900"],
			},
		});
	}, []);

	return <Styled.ThemeProvider {...props}>{props.children}</Styled.ThemeProvider>;
};
