import { ComponentStory, ComponentMeta } from "@storybook/react";
import { vars } from "../../styles";

import { TextButton } from "./TextButton";

export default {
  title: "TextButton",
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => {
  return <TextButton {...args} />;
};

export const ReplyTo = Template.bind({});
ReplyTo.args = {
  children: "返信",
};

export const Follow = Template.bind({});
Follow.args = {
  children: "フォローする",
  color: vars.color.primaryDark,
};
