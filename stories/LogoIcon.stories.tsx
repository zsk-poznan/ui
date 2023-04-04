import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
	title: "Components/Header/Logo/Icon",
	component: UI.LogoIcon,
	argTypes: {
		variant: {
			control: { type: "inline-radio", options: ["Light", "Dark"] },
		},
	},
	parameters: {
		layout: "fullscreen",
	},
} as ComponentMeta<typeof UI.LogoIcon>;

const LogoIconTemplate = (args) => (
	<UI.UIThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.LogoIcon />
	</UI.UIThemeProvider>
);

export const Default = LogoIconTemplate.bind({});
Default.args = {
	variant: "Dark",
};
