import React from "react";
import type { Meta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
	title: "Components/Button",
	component: UI.Button,
	argTypes: {
		variant: {
			control: { type: "inline-radio" },
			options: ["Light", "Dark"],
		},
	},
} as Meta<typeof UI.Button>;

const ButtonTemplate = (args) => (
	<UI.ThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.Button {...args}>{args.label}</UI.Button>
	</UI.ThemeProvider>
);

export const Default = ButtonTemplate.bind({});

Default.args = {
	label: "Example button",
	variant: "Light",
};
