import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  unoptimized: true,
  src: "https://placehold.jp/40x40.png",
  width: 40,
  height: 40,
};
