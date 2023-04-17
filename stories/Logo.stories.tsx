import React from "react";
import { Meta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
	title: "Components/Header/Logo",
	component: UI.Logo,
	argTypes: {
		variant: {
			control: { type: "inline-radio" },
			options: ["Light", "Dark"],
		},
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta<typeof UI.Logo>;

const LogoTemplate = (args) => (
	<UI.ThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.Logo {...args} />
	</UI.ThemeProvider>
);

export const Default = LogoTemplate.bind({});
Default.args = {
	label: "Zastępstwa",
	variant: "Light",
};
