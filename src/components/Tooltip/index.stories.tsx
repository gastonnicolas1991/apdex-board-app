import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from ".";

export default {
  title: "Example/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ margin: "50px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  content: "Test text",
  show: true,
};
