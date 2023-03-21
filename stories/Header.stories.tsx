import React from "react";
import { ComponentMeta } from "@storybook/react";
import { getTheme } from "./utils";
import * as UI from "../src";

export default {
  title: "Components/Header",
  component: UI.Header,
  argTypes: {
    variant: {
      control: { type: "inline-radio", options: ["Light", "Dark"] },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof UI.Header>;

const HeaderTemplate = (args) => (
  <UI.UIThemeProvider theme={getTheme(args.variant)}>
    <UI.Styles />
    <UI.Header>
      <UI.Logo {...args} />
      <UI.SubstitutionDate {...args} />
    </UI.Header>
  </UI.UIThemeProvider>
);

export const Default = HeaderTemplate.bind({});
Default.args = {
  label: "Zastępstwa",
  date: "22.03.2023 r.",
  variant: "Light",
};
