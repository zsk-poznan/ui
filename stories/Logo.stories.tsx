import React from "react";
import { ComponentMeta } from "@storybook/react";
import { UIStyles, Logo } from "../src/";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./utils";

export default {
  title: "Components/Header/Logo",
  component: Logo,
  argTypes: {
    variant: {
      control: { type: "inline-radio", options: ["Light", "Dark"] },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Logo>;

const LogoTemplate = (args) => (
  <ThemeProvider theme={getTheme(args.variant)}>
    <UIStyles />
    <Logo {...args} />
  </ThemeProvider>
);

export const Default = LogoTemplate.bind({});
Default.args = {
  label: "Zastępstwa",
  variant: "Light",
};
