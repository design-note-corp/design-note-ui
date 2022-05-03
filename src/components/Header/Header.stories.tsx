import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Gap, Space } from "../Space";
import { Header } from "./Header";
import { Edit } from "../Icons";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { HeaderSearch } from "../HeaderSearch";
import { IconButtonBell } from "../IconButtonBell";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const SmallMobile = Template.bind({});

SmallMobile.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile1",
  },
};

SmallMobile.args = {
  children: (
    <Space alignItems="center" justifyContent="space-between">
      <div>LOGO</div>
      <Space columnGap={Gap.Medium} alignItems="center">
        <div>
          <HeaderSearch />
          <IconButtonBell />
        </div>
        <Avatar width={40} height={40}>
          <img
            src="https://placehold.jp/40x40.png"
            width="100%"
            height="100%"
          />
        </Avatar>
      </Space>
    </Space>
  ),
};

export const Tablet = Template.bind({});

Tablet.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "tablet",
  },
};

Tablet.args = {
  children: (
    <Space alignItems="center" justifyContent="space-between">
      <div>LOGO</div>
      <Space columnGap={Gap.Large} alignItems="center">
        <div>
          <HeaderSearch />
          <IconButtonBell />
        </div>
        <Space alignItems="center">
          <Avatar width={40} height={40}>
            <img
              src="https://placehold.jp/40x40.png"
              width="100%"
              height="100%"
            />
          </Avatar>
        </Space>
        <Button startIcon={<Edit />}>投稿</Button>
      </Space>
    </Space>
  ),
};

export const PC = Template.bind({});

PC.parameters = {
  layout: "fullscreen",
};

PC.args = {
  children: (
    <Space alignItems="center" justifyContent="space-between">
      <div>LOGO</div>
      <Space columnGap={Gap.Large} alignItems="center">
        <HeaderSearch />
        <IconButtonBell />
        <Space alignItems="center">
          <Avatar width={40} height={40}>
            <img
              src="https://placehold.jp/40x40.png"
              width="100%"
              height="100%"
            />
          </Avatar>
        </Space>
        <Button startIcon={<Edit />}>投稿</Button>
      </Space>
    </Space>
  ),
};
