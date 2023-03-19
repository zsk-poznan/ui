import React from "react";
import { ComponentMeta } from "@storybook/react";
import { UIStyles, Header, lightTheme, darkTheme } from "../src/";
import { ThemeProvider } from "styled-components";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    variant: {
      control: { type: "select", options: ["light", "dark"] },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const getTheme = (variant: string) => {
  return variant === "light" ? lightTheme : darkTheme;
};

const HeaderTemplate = (args) => (
  <ThemeProvider theme={getTheme(args.variant)}>
    <UIStyles />
    <Header {...args} />
  </ThemeProvider>
);

export const Default = HeaderTemplate.bind({});
Default.args = {
  label: "Zastępstwa",
  variant: "light",
};
