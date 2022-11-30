import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import hostList from "./mock";

import HostList from ".";

export default {
  title: "Example/HostList",
  component: HostList,
} as ComponentMeta<typeof HostList>;

const Template: ComponentStory<typeof HostList> = (args) => (
  <HostList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  hosts: [...hostList],
};
