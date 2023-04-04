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
				<UI.TRow>
					<UI.THeading>Lekcja</UI.THeading>
					<UI.THeading>Zamiast</UI.THeading>
					<UI.THeading>Oddział</UI.THeading>
					<UI.THeading>Przedmiot</UI.THeading>
					<UI.THeading>Sala</UI.THeading>
					<UI.THeading>Uwagi</UI.THeading>
				</UI.TRow>
			</UI.THead>
			<UI.TBody>
				<UI.TRow>
					<UI.TData tdWidth="15%">2</UI.TData>
					<UI.TData tdWidth="15%">Wojciech Kowalski</UI.TData>
					<UI.TData tdWidth="15%">1B</UI.TData>
					<UI.TData tdWidth="25%">Matematyka</UI.TData>
					<UI.TData tdWidth="15%">37</UI.TData>
					<UI.TData tdWidth="15%">Brak</UI.TData>
				</UI.TRow>
			</UI.TBody>
		</UI.Table>
	</UI.UIThemeProvider>
);

export const Default = TableTemplate.bind({});
Default.args = {
	variant: "Light",
};
