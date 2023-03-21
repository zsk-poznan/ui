import React from "react";
import { ComponentMeta } from "@storybook/react";
import { UIStyles, Button } from "../src/";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./utils";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "inline-radio", options: ["Light", "Dark"] },
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate = (args) => (
  <ThemeProvider theme={getTheme(args.variant)}>
    <UIStyles />
    <Button {...args} />
  </ThemeProvider>
);

export const Default = ButtonTemplate.bind({});
Default.args = {
  label: "Example Button",
  borderRadius: "12px",
  corners: "180, 5",
  variant: "Light",
};
