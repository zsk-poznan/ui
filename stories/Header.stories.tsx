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
    notification: {
      control: { type: "inline-radio", options: ["On", "Off"] },
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
      <UI.Title {...args}>
        <UI.ArrowLeft />
      </UI.Title>
      {/On/i.test(args.notification) ? (
        <UI.AnnouncementNotification>
          <UI.SubstitutionDate {...args} />
        </UI.AnnouncementNotification>
      ) : (
        <UI.SubstitutionDate {...args} />
      )}
    </UI.Header>
  </UI.UIThemeProvider>
);

export const Default = HeaderTemplate.bind({});
Default.args = {
  label: "Zastępstwa",
  headerTitle: "Wszystkie zastępstwa",
  date: "22.03.2023",
  variant: "Light",
  notification: "On",
};
