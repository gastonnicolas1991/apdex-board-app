import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from ".";

export default {
  title: "Example/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  host: {
    hostName: "7983b3a1-b4c4.marilie.biz",
    appList: [
      {
        score: 43,
        appName: "Refined Concrete Shirt - Hudson - Sauer, Group",
        releaseVersion: 1,
      },
      {
        score: 12,
        appName: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
        releaseVersion: 3,
      },
      {
        score: 1,
        appName: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
        releaseVersion: 1,
      },
      {
        score: 34,
        appName: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
        releaseVersion: 6,
      },
      {
        score: 68,
        appName: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
        releaseVersion: 5,
      },
      {
        score: 56,
        appName: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
        releaseVersion: 2,
      },
      {
        score: 21,
        appName: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
        releaseVersion: 2,
      },
      {
        score: 79,
        appName: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
        releaseVersion: 1,
      },
    ],
  },
};
