import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Gap, Space } from "../Space";
import { Header } from "./Header";
import { IconButton } from "../IconButton";
import SvgBell from "../Icons/Bell";
import { Edit, Search } from "../Icons";
import { Avatar } from "../Avatar";
import { vars } from "../../styles/theme.css";
import { Button } from "../Button";
import { TextField } from "../TextField";

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
          <IconButton>
            <Search
              width={24}
              height={24}
              display="block"
              color={vars.color.light}
            />
          </IconButton>
          <IconButton>
            <SvgBell
              width={24}
              height={24}
              display="block"
              color={vars.color.light}
            />
          </IconButton>
        </div>
        <Avatar
          unoptimized={true}
          src="https://placehold.jp/40x40.png"
          width={40}
          height={40}
        />
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
          <IconButton>
            <Search
              width={24}
              height={24}
              display="block"
              color={vars.color.light}
            />
          </IconButton>
          <IconButton>
            <SvgBell
              width={24}
              height={24}
              display="block"
              color={vars.color.light}
            />
          </IconButton>
        </div>
        <Space alignItems="center">
          <Avatar
            unoptimized={true}
            src="https://placehold.jp/40x40.png"
            width={40}
            height={40}
          />
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
        <TextField
          width={360}
          placeholder="キーワードで検索"
          suffix={
            <IconButton>
              <Search
                width={24}
                height={24}
                display="block"
                color={vars.color.light}
              />
            </IconButton>
          }
        />
        <IconButton>
          <SvgBell
            width={24}
            height={24}
            display="block"
            color={vars.color.light}
          />
        </IconButton>
        <Space alignItems="center">
          <Avatar
            unoptimized={true}
            src="https://placehold.jp/40x40.png"
            width={40}
            height={40}
          />
        </Space>
        <Button startIcon={<Edit />}>投稿</Button>
      </Space>
    </Space>
  ),
};
