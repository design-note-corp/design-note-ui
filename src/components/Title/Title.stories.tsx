import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Title } from "./Title";

export default {
  title: "Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => {
  return <Title {...args} />;
};

export const Level1 = Template.bind({});
Level1.args = {
  children: "Title",
  level: 1,
};

export const Level2 = Template.bind({});
Level2.args = {
  children: "Title",
  level: 2,
};

export const Level3 = Template.bind({});
Level3.args = {
  children: "Title",
  level: 3,
};

export const Level4 = Template.bind({});
Level4.args = {
  children: "Title",
  level: 4,
};

export const Level5 = Template.bind({});
Level5.args = {
  children: "Title",
  level: 5,
};
