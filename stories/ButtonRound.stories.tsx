import React from "react";
import type { Meta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
	title: "Components/Button/Round",
	component: UI.Button,
	argTypes: {
		variant: {
			control: { type: "inline-radio" },
			options: ["Light", "Dark"],
		},
	},
} as Meta<typeof UI.Button>;

const ButtonRound = (args) => (
	<UI.ThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.Button rounded {...args}>
			<UI.ArrowLeft />
		</UI.Button>
	</UI.ThemeProvider>
);

export const Round = ButtonRound.bind({});

Round.args = {
	variant: "Light",
};
