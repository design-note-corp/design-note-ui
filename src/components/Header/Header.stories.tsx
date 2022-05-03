import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const SmallMobile = Template.bind({});

SmallMobile.args = {
  avatar: (
    <img src="https://placehold.jp/40x40.png" width="100%" height="100%" />
  ),
};

SmallMobile.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile1",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  avatar: (
    <img src="https://placehold.jp/40x40.png" width="100%" height="100%" />
  ),
};

Tablet.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "tablet",
  },
};

export const PC = Template.bind({});

PC.args = {
  avatar: (
    <img src="https://placehold.jp/40x40.png" width="100%" height="100%" />
  ),
};

PC.parameters = {
  layout: "fullscreen",
};
