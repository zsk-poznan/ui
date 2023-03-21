import React from "react";
import { ComponentMeta } from "@storybook/react";
import { UIStyles, Header, Logo } from "../src/";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./utils";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    variant: {
      control: { type: "inline-radio", options: ["Light", "Dark"] },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const HeaderTemplate = (args) => (
  <ThemeProvider theme={getTheme(args.variant)}>
    <UIStyles />
    <Header>
      <Logo {...args} />
    </Header>
  </ThemeProvider>
);

export const Default = HeaderTemplate.bind({});
Default.args = {
  label: "Zastępstwa",
  variant: "Light",
};
