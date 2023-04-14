import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
	title: "Components/Button/Round",
	component: UI.Button,
	argTypes: {
		variant: {
			control: { type: "inline-radio", options: ["Light", "Dark"] },
		},
	},
} as ComponentMeta<typeof UI.Button>;

const ButtonRoundTemplate = (args) => (
	<UI.UIThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.Button rounded {...args}>
			<UI.ArrowLeft />
		</UI.Button>
	</UI.UIThemeProvider>
);

export const Round = ButtonRoundTemplate.bind({});
Round.args = {
	variant: "Light",
};
