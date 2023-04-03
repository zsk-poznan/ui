import React from "react";
import { ComponentMeta } from "@storybook/react";
import { getTheme } from "./utils";
import * as UI from "../src";

export default {
	title: "Components/Table",
	component: UI.Table,
	argTypes: {
		variant: {
			control: { type: "inline-radio", options: ["Light", "Dark"] },
		},
	},
	parameters: {
		layout: "fullscreen",
	},
} as ComponentMeta<typeof UI.Table>;

const TableTemplate = (args) => (
	<UI.UIThemeProvider theme={getTheme(args.variant)}>
		<UI.Styles />
		<UI.Table>
			<UI.THead>
				<UI.TRow>asd</UI.TRow>
			</UI.THead>
		</UI.Table>
	</UI.UIThemeProvider>
);

export const Default = TableTemplate.bind({});
Default.args = {
	variant: "Light",
};
