import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const Image = Template.bind({});
Image.args = {
  children: (
    <img src="https://placehold.jp/40x40.png" width="100%" height="100%" />
  ),
};

export const Letter = Template.bind({});
Letter.args = {
  children: "H",
};
