import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { Edit } from "../Icons";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  children: "投稿",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: "投稿",
  startIcon: <Edit />,
};
