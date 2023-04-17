import React from "react";
import { Meta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
	title: "Components/Header/Title",
	component: UI.Title,
	argTypes: {
		variant: {
			control: { type: "inline-radio" },
			options: ["Light", "Dark"],
		},
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta<typeof UI.Title>;

const TitleTemplate = (args) => (
	<UI.ThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.Header>
			<UI.Title {...args}>
				<UI.Button rounded>
					<UI.ArrowLeft />
				</UI.Button>
			</UI.Title>
		</UI.Header>
	</UI.ThemeProvider>
);

export const Default = TitleTemplate.bind({});
Default.args = {
	headerTitle: "Wszystkie zastępstwa",
	variant: "Light",
};
