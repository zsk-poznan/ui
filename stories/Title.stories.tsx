import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
  title: "Components/Header/Title",
  component: UI.Title,
  argTypes: {
    variant: {
      control: { type: "inline-radio", options: ["Light", "Dark"] },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof UI.Title>;

const TitleTemplate = (args) => (
  <UI.UIThemeProvider theme={getTheme(args.variant)}>
    <UI.Styles />
    <UI.Header>
      <UI.Title {...args}>
        <UI.ArrowLeft />
      </UI.Title>
    </UI.Header>
  </UI.UIThemeProvider>
);

export const Default = TitleTemplate.bind({});
Default.args = {
  headerTitle: "Wszystkie zastępstwa",
  variant: "Light",
};
