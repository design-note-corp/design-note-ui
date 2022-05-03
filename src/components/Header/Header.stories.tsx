import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  avatar: (
    <img src="https://placehold.jp/40x40.png" width="100%" height="100%" />
  ),
};

Basic.parameters = {
  layout: "fullscreen",
  chromatic: {
    viewports: [320, 600, 905],
  },
};
