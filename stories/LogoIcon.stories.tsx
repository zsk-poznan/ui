import React from "react";
import { Meta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
	title: "Components/Header/Logo/Icon",
	component: UI.LogoIcon,
	argTypes: {
		variant: {
			control: { type: "inline-radio" },
			options: ["Light", "Dark"],
		},
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta<typeof UI.LogoIcon>;

const LogoIconTemplate = (args) => (
	<UI.ThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.LogoIcon />
	</UI.ThemeProvider>
);

export const Default = LogoIconTemplate.bind({});
Default.args = {
	variant: "Dark",
};
