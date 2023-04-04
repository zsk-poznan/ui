import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as UI from "../src";
import { getTheme } from "./utils";

export default {
  title: "Components/Button/Round",
  component: UI.ButtonRound,
  argTypes: {
    variant: {
      control: { type: "inline-radio", options: ["Light", "Dark"] },
    },
  },
} as ComponentMeta<typeof UI.ButtonRound>;

const ButtonRoundTemplate = (args) => (
  <UI.UIThemeProvider theme={getTheme(args.variant)}>
    <UI.Styles />
    <UI.ButtonRound {...args}>
      <UI.ArrowLeft />
    </UI.ButtonRound>
  </UI.UIThemeProvider>
);

export const Round = ButtonRoundTemplate.bind({});
Round.args = {
  variant: "Light",
};
