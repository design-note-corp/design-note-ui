import dayjs from "dayjs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";
import type { CardProps } from "./Card";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

const args: CardProps = {
  cover: (
    <img src="https://placehold.jp/120x120.png" width="100%" height="100%" />
  ),
  title:
    "長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル",
  chips: ["Label A", "Label B", "Label C"],
  avatar: (
    <img src="https://placehold.jp/16x16.png" width="100%" height="100%" />
  ),
  nickname: "Taro Yamada",
  createdAt: dayjs().subtract(2, "day").format(),
  likeCount: 130,
};

export const SmallMobile = Template.bind({});

SmallMobile.args = args;

SmallMobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

export const Tablet = Template.bind({});

Tablet.args = args;

Tablet.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const PC = Template.bind({});

PC.args = args;
