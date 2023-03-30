import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
	title: "Components/Button",
	component: UI.Button,
	argTypes: {
		variant: {
			control: { type: "inline-radio", options: ["Light", "Dark"] },
		},
	},
} as ComponentMeta<typeof UI.Button>;

const ButtonTemplate = (args) => (
	<UI.UIThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.Button {...args}>{args.label}</UI.Button>
	</UI.UIThemeProvider>
);

export const Default = ButtonTemplate.bind({});
Default.args = {
	label: "Example Button",
	borderRadius: "12px",
	corners: "180, 5",
	variant: "Light",
};
